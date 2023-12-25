import { ApexTestQueueItemSelector } from "./apexTestQueueItemSelector";
import { Command } from "./command";
import { Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { Range } from "./range";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class RunTestUnderCursorCommand extends Command {

	public constructor(params: {
		ide: IntegratedDevelopmentEnvironment,
		cli: SalesforceCli
	}) {
		super(params);
	}

	public async execute(params: {
		targetOrg: SalesforceOrg
	}) {
		const activeTextEditor = await this.getIde().getActiveTextEditor();
		if (!activeTextEditor) {
			this.getIde().showWarningMessage('Could not find active text editor. Could not run test.');
			return;
		}
		const uri = activeTextEditor.uri;
		if (!uri.isApexClass()) {
			this.getIde().showWarningMessage('Cannot run test against non-apex file.');
			return;
		}

		await this.getIde().withProgress(async (progressToken) => {
			if (activeTextEditor) {
				const testName = uri.getBaseName().replace('.cls', '');

				const apexTestRunResult = await this.getCli().apexTestRun({
					targetOrg: params.targetOrg,
					tests: [testName]
				});

				if (progressToken.isCancellationRequested) {
					await this.cancel({
						parentJobId: apexTestRunResult.getTestRunId(),
						targetOrg: params.targetOrg
					});
					return;
				}

				const testRunId = apexTestRunResult.getTestRunId();

				let apexTestGetResult = await this.getCli().apexTestGet({
					targetOrg: params.targetOrg,
					testRunId
				});
				if (progressToken.isCancellationRequested) {
					await this.cancel({
						parentJobId: apexTestRunResult.getTestRunId(),
						targetOrg: params.targetOrg
					});
					return;
				}
				progressToken.report({
					progress: apexTestGetResult.getPercentageCompleted()
				});

				while (apexTestGetResult.getPercentageCompleted() < 100) {
					progressToken.report({
						progress: apexTestGetResult.getPercentageCompleted()
					});
					apexTestGetResult = await this.getCli().apexTestGet({
						targetOrg: params.targetOrg,
						testRunId
					});
					if (progressToken.isCancellationRequested) {
						await this.cancel({
							parentJobId: apexTestRunResult.getTestRunId(),
							targetOrg: params.targetOrg
						});
						return;
					}
				}

				if (apexTestGetResult.hasFailingTests()) {
					const diagnostics: Diagnostic[] = [];
					apexTestGetResult.getFailingTests().forEach(test => {
						const location = test.getLocation();
						if (location) {
							const diagnostic = new Diagnostic(new Range(location.position), test.getFailureMessage(), DiagnosticSeverity.error);
							diagnostics.push(diagnostic);
						}
					});
					this.getIde().setDiagnostics(uri, diagnostics);
					this.getIde().focusProblemsTab();
				}
			}
		}, {
			title: 'Running Apex Tests'
		});
	}

	private async cancel(params: {
		parentJobId: SalesforceId,
		targetOrg: SalesforceOrg
	}) {
		const selector = new ApexTestQueueItemSelector({
			cli: this.getCli()
		});

		const apexTestQueueItems = await selector.queryByParentJobId({
			parentJobId: params.parentJobId,
			targetOrg: params.targetOrg
		});

		apexTestQueueItems.forEach(apexTestQueueItem => {
			apexTestQueueItem.status = 'Aborted';
		});

		const promises = apexTestQueueItems.map(apexTestQueueItem => {
			return this.getCli().dataUpsertRecord({
				sObject: apexTestQueueItem,
				targetOrg: params.targetOrg
			});
		});

		return Promise.all(promises);
	}
}