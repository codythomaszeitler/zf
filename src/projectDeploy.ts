import { SalesforceOrg } from "./salesforceOrg";
import { SalesforceCli } from "./salesforceCli";
import { Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { JobId } from "./jobId";
import { Position } from "./position";
import { Range } from "./range";
import { ProgressToken } from "./progressToken";
import { ComponentFailure, ProjectDeployReportResult } from "./projectDeployReportResult";

export async function projectDeploy(params: {
    targetOrg: SalesforceOrg,
    ide: IntegratedDevelopmentEnvironment,
    salesforceCli: SalesforceCli
}) {
    const cancel = async (jobId: JobId) => {
        const alreadyCompletedErrorMessage = "Can't cancel deploy because it's already completed.";
        try {
            await params.salesforceCli.projectDeployCancel({ jobId: jobId });
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
        await doProjectDeploy({
            salesforceCli: params.salesforceCli,
            ide: params.ide,
            progressToken,
            targetOrg: params.targetOrg,
            cancel: cancel
        });
    }, {
        title: 'Project Deploy Start'
    });
};


async function doProjectDeploy(params: {
    salesforceCli: SalesforceCli,
    ide: IntegratedDevelopmentEnvironment,
    progressToken: ProgressToken,
    targetOrg: SalesforceOrg,
    cancel: (jobId: JobId) => {}
}) {
    params.ide.clearDiagnostics();

    const projectDeployStartResult = await params.salesforceCli.projectDeployStart({ targetOrg: params.targetOrg });
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

    if (params.ide.getConfig('zsi.vscode.shouldFocusProblemsWhenDeployFails', true) && didHaveAnyFailures(projectDeployReportResult)) {
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
            progress
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
    return ide.findFile(`**/${fileName}`).then(uri => {
        if (uri) {
            const diagnostics = componentFailures.map(intoDiagnostic);
            ide.setDiagnostics(uri, diagnostics);
        }
    });
}

function intoDiagnostic(failure: ComponentFailure) {
    const start = new Position(failure.lineNumber, failure.columnNumber);
    const range = new Range(start);
    const diagnostic = new Diagnostic(range, failure.problem, DiagnosticSeverity.error);
    return diagnostic;
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
