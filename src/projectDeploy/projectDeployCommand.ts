import { Command } from "../command";
import { SalesforceOrg } from "../salesforceOrg";
import { Uri } from "../uri";
import { Range } from "../range";
import { Position } from "../position";
import { Diagnostic, DiagnosticSeverity } from "../integratedDevelopmentEnvironment";
import { ProjectDeployFileFailure, ProjectDeployResult } from "./projectDeployResult";
import { SalesforceId } from "../salesforceId";
import { Logger } from "../logger";
import { JobId } from "../jobId";
import { OnCancellationRequestedListener } from "../progressToken";

export const SYNC_DEPLOYMENT_FILE_LIMIT_KEY = 'sf.zsi.deploymentLimit';

// What deployment opens... should determine 

export class ProjectDeployCommand extends Command {

	public async execute({targetOrg, uris}: { targetOrg?: SalesforceOrg; uris?: Uri[] }) {
		this.getIde().clearDiagnostics();

		const defaultOrTargetOrg = await this.getTargetOrDefaultOrg(targetOrg);
		if (!defaultOrTargetOrg) {
			return;
		}

		const deploymentStrategy = await this.getDeploymentStrategy(uris, defaultOrTargetOrg);
		if (deploymentStrategy === 'SYNC') {
			return this.executeSyncDeployment({ targetOrg: defaultOrTargetOrg, uris });
		} else if (deploymentStrategy === 'ASYNC') {
			return this.executeAsyncDeployment({ targetOrg: defaultOrTargetOrg, uris });
		} else {
			throw new Error('Could not determine deployment strategy.');
		}
	}

	private async getDeploymentStrategy(uris: Uri[] | undefined, targetOrg: SalesforceOrg): Promise<'ERROR' | 'ASYNC' | 'SYNC'> {
		const syncDeploymentFileLimit = this.getIde().getConfig(SYNC_DEPLOYMENT_FILE_LIMIT_KEY, 10);
		if (targetOrg.getIsScratchOrg()) {
			const projectDeployPreviewResult = await this.getCli().projectDeployPreview({ targetOrg });
			if (!projectDeployPreviewResult) {
				return 'ERROR';
			}

			const { toDelete, toDeploy, toRetrieve } = projectDeployPreviewResult.result;
			const numDeploys = toDelete.length + toDeploy.length + toRetrieve.length;
			if (numDeploys < syncDeploymentFileLimit) {
				return 'SYNC';
			} else {
				return 'ASYNC';
			}
		}
		else if (!uris) {
			return 'ASYNC';
		}
		else if (uris.length < syncDeploymentFileLimit) {
			return 'SYNC';
		}
		else {
			return 'ASYNC';
		}
	}

	private async executeSyncDeployment({ targetOrg, uris }: { targetOrg: SalesforceOrg; uris?: Uri[] }) {
		if (this.getProgressToken()?.isCancellationRequested) {
			return;
		}

		const projectDeployResultPromise = this.projectDeployStart({ targetOrg, async: false, uris: uris });
		this.getProgressToken()?.onCancellationRequested(async () => {
			await this.getCli().projectDeployCancel({
				targetOrg
			});
		});

		const projectDeployResult = await projectDeployResultPromise;
		if (!projectDeployResult) {
			return;
		}

		await this.processProjectDeployResult(projectDeployResult);
	}

	private async executeAsyncDeployment({ targetOrg, uris }: { targetOrg: SalesforceOrg; uris?: Uri[] }) {
		if (this.getProgressToken()?.isCancellationRequested) {
			return;
		}

		const projectDeployStartResult = await this.projectDeployStart({ targetOrg, async: true, uris });
		if (!projectDeployStartResult) {
			return;
		}

		const jobId = SalesforceId.get(projectDeployStartResult.result.id);
		while (true) {
			const projectDeployReportResult = await this.getCli().projectDeployReport({
				jobId, targetOrg
			});

			if (this.getProgressToken()?.isCancellationRequested) {
				const jobId = new JobId(projectDeployStartResult.result.id);
				await this.getCli().projectDeployCancel({
					jobId,
					targetOrg
				});
				return;
			}

			if (projectDeployReportResult) {
				this.getProgressToken()?.report({
					progress: this.getPercentageComplete(projectDeployReportResult)
				});
			}

			if (projectDeployReportResult?.result.status !== 'InProgress') {
				break;
			}
		}

		const projectDeployResult = await this.getCli().projectDeployResume({ jobId });
		if (projectDeployResult) {
			await this.processProjectDeployResult(projectDeployResult);
		}
	}

	private async projectDeployStart({ targetOrg, async, uris }: { targetOrg: SalesforceOrg; async: boolean; uris?: Uri[] }) {
		if (!uris || targetOrg.getIsScratchOrg()) {
			return this.getCli().projectDeployStart({ targetOrg, async });
		} else {
			return this.getCli().projectDeployStart({ targetOrg, sourceDir: uris, async });
		}
	}

	private getPercentageComplete(progressDeployResult: ProjectDeployResult) {
		if (progressDeployResult.result.status === 'Queued') {
			throw new Error('Cannot get percentage completed for a queued project deployed result.');
		}

		const numerator = progressDeployResult.result.numberComponentErrors + progressDeployResult.result.numberComponentsDeployed;
		const denominator = progressDeployResult.result.numberComponentsTotal;

		return (numerator / denominator) * 100;
	}

	private async processProjectDeployResult(projectDeployResult: ProjectDeployResult) {
		if (projectDeployResult.result.status === 'Queued') {
			Logger.get().warn('Tried to process a queued project deploy result but could do nothing with it.');
			return;
		}

		const uris = projectDeployResult.result.files.map(file => (Uri.from({ scheme: 'file', fileSystemPath: file.filePath })));
		const getUriMatching = (filePath: string, _uris: Uri[]) => _uris.find(uri => uri.getFileSystemPath() === filePath);

		const dependents: ProjectDeployFileFailure[] = [];

		const filePathToDiagnostics = new Map<string, Diagnostic[]>();

		projectDeployResult.result.files.forEach(failure => {
			// You really should be able to parse the list of URIs from the list itself... right?
			if (failure.state === 'Failed') {
				if (isDependentClassInvalid(failure.error)) {
					dependents.push(failure);
				} else {
					if (!filePathToDiagnostics.has(failure.filePath)) {
						filePathToDiagnostics.set(failure.filePath, []);
					}
					filePathToDiagnostics.get(failure.filePath)?.push(this.failureIntoDiagnostic(failure));
				}
			}
		});

		if (dependents.length !== 0) {
			const glob = () => {
				return "**/{" + dependents.map(dependent => {
					const { className } = parseStackTrace(dependent.error);
					return className + '.cls';
				}).join(",") + "}";
			};

			const dependentFileUris = await this.getIde().findFiles(glob(), this.getIde().getCurrentDir());
			dependents.forEach(dependent => {
				const { className } = parseStackTrace(dependent.error);
				const basename = className + '.cls';
				const uri = dependentFileUris.find(uri => uri.getBaseName() === basename);
				if (uri) {
					uris.push(uri);
					if (!filePathToDiagnostics.has(uri.getFileSystemPath())) {
						filePathToDiagnostics.set(uri.getFileSystemPath(), []);
					}
					filePathToDiagnostics.get(uri.getFileSystemPath())?.push(this.failureIntoDiagnostic(dependent));
				}
			});
		}

		filePathToDiagnostics.forEach((diagnostics, filePath) => {
			const uri = getUriMatching(filePath, uris);
			if (uri) {
				this.getIde().setDiagnostics(uri, diagnostics);
			}
		});

		if (filePathToDiagnostics.size !== 0) {
			await this.getIde().focusProblemsTab();
			this.getIde().showErrorMessage('Deployment failed.');
		}
		else {
			const asString = uris.map(uri => uri.getBaseName()).join(', ');
			this.getIde().showInformationMessage(`Successfully deployed ${asString}.`);
		}
	}

	private failureIntoDiagnostic(failure: ProjectDeployFileFailure) {
		const position = new Position(failure.lineNumber - 1, failure.columnNumber - 1);
		const range = new Range(position);
		return new Diagnostic(range, failure.error, DiagnosticSeverity.error);
	}

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