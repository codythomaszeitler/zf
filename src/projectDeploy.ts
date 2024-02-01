import { SalesforceOrg } from "./salesforceOrg";
import { SalesforceCli } from "./salesforceCli";
import { Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, TextDocument, Uri } from "./integratedDevelopmentEnvironment";
import { JobId } from "./jobId";
import { Position } from "./position";
import { Range } from "./range";
import { ProgressToken } from "./progressToken";
import { ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCommand } from "./projectDeployCommand";

export async function projectDeploy(params: {
    targetOrg?: SalesforceOrg,
    sourceDir?: Uri[],
    ide: IntegratedDevelopmentEnvironment,
    cli: SalesforceCli
}) {
    const cancel = async (jobId: JobId) => {
        const alreadyCompletedErrorMessage = "Can't cancel deploy because it's already completed.";
        try {
            await params.cli.projectDeployCancel({ jobId: jobId });
        } catch (e: any) {
            if (e) {
                const message = e.message;
                if (message !== alreadyCompletedErrorMessage) {
                    params.ide.showWarningMessage(message);
                }
            }
        }
    };

    await params.ide.withProgress(async (progressToken: ProgressToken) => {
        const getTargetOrg = async (): Promise<SalesforceOrg | null> => {
            if (params.targetOrg) {
                return params.targetOrg;
            } else {
                const defaultOrg = await params.cli.getDefaultOrg();
                return defaultOrg;
            }
        };

        const targetOrg = await getTargetOrg();
        if (targetOrg) {
            await doProjectDeploy({
                salesforceCli: params.cli,
                ide: params.ide,
                progressToken,
                targetOrg: targetOrg,
                sourceDir: params.sourceDir,
                cancel: cancel
            });
        }

    }, {
        title: 'Project Deploy Start'
    });
};


async function doProjectDeploy(params: {
    salesforceCli: SalesforceCli,
    ide: IntegratedDevelopmentEnvironment,
    progressToken: ProgressToken,
    targetOrg: SalesforceOrg,
    sourceDir?: Uri[]
    cancel: (jobId: JobId) => Promise<void>
}) {
    params.ide.clearDiagnostics();

    const projectDeployStartResult = await params.salesforceCli.projectDeployStart({ targetOrg: params.targetOrg, sourceDir: params.sourceDir });
    if (!projectDeployStartResult.hasComponentsToDeploy()) {
        return;
    }

    if (params.progressToken.isCancellationRequested) {
        await params.cancel(projectDeployStartResult.getJobId());
        return;
    }

    const projectDeployReportResult = await waitForDeploymentToComplete({
        jobId: projectDeployStartResult.getJobId(),
        salesforceCli: params.salesforceCli,
        progressToken: params.progressToken,
        cancel: params.cancel
    });
    if (params.progressToken.isCancellationRequested) {
        await params.cancel(projectDeployStartResult.getJobId());
        return;
    }

    await updateSourceTracking({
        jobId: projectDeployStartResult.getJobId(),
        salesforceCli: params.salesforceCli
    });
    await showFailuresInProblemsTab(params.ide, projectDeployReportResult);

    if (didHaveAnyFailures(projectDeployReportResult)) {
        params.ide.showErrorMessage('Deployment failed');
    } else {
        params.ide.showInformationMessage('Deployment successful');
    }

    if (params.ide.getConfig('sf.zsi.vscode.shouldFocusProblemsWhenDeployFails', true) && didHaveAnyFailures(projectDeployReportResult)) {
        await params.ide.focusProblemsTab();
    }
}

async function waitForDeploymentToComplete(params: {
    jobId: JobId,
    salesforceCli: SalesforceCli,
    progressToken: ProgressToken,
    cancel: (jobId: JobId) => {}
}) {
    let projectDeployReportResult: ProjectDeployReportResult | null = null;
    do {
        projectDeployReportResult = await params.salesforceCli.projectDeployReport({ jobId: params.jobId });
        if (params.progressToken.isCancellationRequested) {
            return;
        }

        const progress = projectDeployReportResult.getPercentageComplete();
        params.progressToken.report({
            progress,
            title: 'Project Deploy Report ' + projectDeployReportResult.getTotalDeployedAsString()
        });
    } while (!projectDeployReportResult.isDeploymentComplete());

    return projectDeployReportResult;
};

async function updateSourceTracking(params: {
    jobId: JobId,
    salesforceCli: SalesforceCli
}) {
    await params.salesforceCli.projectDeployResume({
        jobId: params.jobId
    });
}

async function showFailuresInProblemsTab(ide: IntegratedDevelopmentEnvironment, projectDeployReportResult: ProjectDeployReportResult | undefined) {
    const promises: Promise<void>[] = [];
    if (projectDeployReportResult) {
        projectDeployReportResult.getFailureFiles().forEach((fileName: string) => {
            promises.push(showFailuresInProblemsTabForFile(ide, fileName, projectDeployReportResult));
        });
    }
    await Promise.all(promises);
}

function showFailuresInProblemsTabForFile(ide: IntegratedDevelopmentEnvironment, fileName: string, projectDeployReportResult: ProjectDeployReportResult): Promise<void> {
    const componentFailures = projectDeployReportResult.getFailuresForFileName(fileName);

    const promises = componentFailures.map(componentFailure => {
        const getFilename = () => {
            if (isDependentClassInvalid(componentFailure.problem)) {
                const { className } = parseStackTrace(componentFailure.problem);
                return className + '.cls';
            } else {
                return componentFailure.fileName;
            }
        };

        return ide.findFile(`**/${getFilename()}`, ide.getCurrentDir()).then(uri => {
            const position = new Position(componentFailure.lineNumber, componentFailure.columnNumber);
            const range = new Range(position);
            const diagnostic = new Diagnostic(range, componentFailure.problem, DiagnosticSeverity.error);
            if (uri) {
                ide.setDiagnostics(uri, [diagnostic]);
            }
        });
    });

    return Promise.all(promises).then(() => {

    });
}

const classNameRegex = /[.\n]*Dependent class is invalid and needs recompilation:\n Class (.*) : .*$/;
function parseStackTrace(stackTrace: string) {

    const matches = stackTrace.match(classNameRegex);
    if (!matches) {
        throw new Error(`Could not parse stack trace apex test location string [${stackTrace}]`);
    }
    return {
        className: matches[1],
    };
}

function isDependentClassInvalid(stackTrace: string) {
    return classNameRegex.test(stackTrace);
}

function didHaveAnyFailures(projectDeployReportResult: ProjectDeployReportResult | undefined) {
    if (!projectDeployReportResult) {
        return false;
    }

    const distinctFilesNames = projectDeployReportResult.getFailureFiles();
    return [...distinctFilesNames].some(fileName => {
        const componentFailures = projectDeployReportResult.getFailuresForFileName(fileName);
        return componentFailures.length !== 0;
    });
}

export function genOnDidSaveTextDocuments({ cli, ide }: {
    cli: SalesforceCli,
    ide: IntegratedDevelopmentEnvironment
}) {
    let projectDeployCommand: ProjectDeployCommand | undefined = undefined;

    const getTitle = (uris: Uri[]) => {
        if (projectDeployCommand) {
            return `Checking/Adding files to deployment queue ${uris.map(uri => uri.getBaseName()).join(" ")}`;
        } else {
            return 'Starting Deployment Queue';
        }

    };

    return async function onDidSaveTextDocuments({ textDocuments }: {
        textDocuments: TextDocument[]
    }): Promise<void> {

        const shouldDeployOnSave = ide.getConfig("sf.zsi.vscode.deployOnSave", true);
        if (shouldDeployOnSave) {
            const uris = textDocuments.map(textDocument => textDocument.uri);
            await ide.withProgress(async progressToken => {
                if (!projectDeployCommand) {
                    projectDeployCommand = new ProjectDeployCommand({
                        ide,
                        cli
                    });
                }
                await projectDeployCommand.execute({
                    uris
                }).then(({ isComplete }) => {
                    if (isComplete) {
                        projectDeployCommand = undefined;
                    }
                }).catch(e => {
                    ide.showErrorMessage(e.message);
                    projectDeployCommand = undefined;
                });
            }, {
                title: getTitle(uris),
                isCancellable: false
            });
        }
    };
}
