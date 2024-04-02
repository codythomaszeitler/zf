import { ApexTestQueueItemSelector } from "./apexTestQueueItemSelector";
import { ApexTestGetResult, ApexTestResult } from "./apexTestRunResult";
import { Command } from "./command";
import { Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { Range } from "./range";
import { ReadApexTestLogCommand } from "./readApexLogCommand";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class RunTestUnderCursorCommand extends Command {

	public constructor (params: {
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

					const promises: Promise<void>[] = [];
					apexTestGetResult.getFailingTests().forEach(test => {
						const location = test.getLocation();
						if (location) {
							const findFilePromise = this.getIde().findFile(`**/${location.className}.cls`, this.getIde().getCurrentDir()).then((uri) => {
								const diagnostic = new Diagnostic(new Range(location.position), test.getFailureMessage(), DiagnosticSeverity.error);
								diagnostics.push(diagnostic);
								if (uri) {
									this.getIde().setDiagnostics(uri, diagnostics);
								}
							});

							promises.push(findFilePromise);
						}
					});

					await Promise.all(promises);
					this.getIde().focusProblemsTab();
				}
			}
		}, {
			title: 'Running Apex Tests'
		});
	}

	public async cancel(params: {
		parentJobId: SalesforceId,
		targetOrg: SalesforceOrg
	}) {
		await this.getIde().withProgress(async (progressToken) => {
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
		}, {
			title: `Cancelling ${params.parentJobId.toString()}`,
			isCancellable: false
		});
	}
}

export class RunApexTestCommand extends Command {

	public async execute({
		targetOrg,
		testName,
		onSingleTestFailure,
		onSingleTestSuccess
	}: { targetOrg: SalesforceOrg, testName: string, onSingleTestFailure?: (failure: ApexTestResult) => void, onSingleTestSuccess?: (success: ApexTestResult) => void }) {
		const notifyListeners = this.genNotifyListeners(onSingleTestFailure, onSingleTestSuccess);
		const apexTestRunResult = await this.getCli().apexTestRun({
			targetOrg,
			tests: [testName]
		});

		const testRunId = apexTestRunResult.getTestRunId();

		let apexTestGetResult = await this.getCli().apexTestGet({
			targetOrg,
			testRunId
		});
		notifyListeners(apexTestGetResult);

		while (apexTestGetResult.getPercentageCompleted() < 100) {
			apexTestGetResult = await this.getCli().apexTestGet({
				targetOrg,
				testRunId
			});
			notifyListeners(apexTestGetResult);
		}
		return apexTestGetResult;
	}

	private genNotifyListeners(onSingleTestFailure?: (failure: ApexTestResult) => void, onSingleTestSuccess?: (success: ApexTestResult) => void) {
		const successes: string[] = [];
		const failures: string[] = [];

		const genNotifyListener = (tests: string[], onTestNotify?: (failure: ApexTestResult) => void) => {
			return (apexTestResult: ApexTestResult) => {
				if (!tests.includes(apexTestResult.getFullName())) {
					if (onTestNotify) {
						onTestNotify(apexTestResult);
					}
					tests.push(apexTestResult.getFullName());
				}
			};

		};

		const notifyListeners = (apexTestGetResult: ApexTestGetResult) => {
			const onSuccess = genNotifyListener(successes, onSingleTestSuccess);
			const notifySuccessListeners = (apexTestGetResult: ApexTestGetResult) => {
				apexTestGetResult.getPassingTests().forEach(success => {
					onSuccess(success);
				});
			};

			const onFailure = genNotifyListener(failures, onSingleTestFailure);
			const notifyFailureListeners = (apexTestGetResult: ApexTestGetResult) => {
				apexTestGetResult.getFailingTests().forEach(failure => {
					onFailure(failure);
				});
			};
			notifySuccessListeners(apexTestGetResult);
			notifyFailureListeners(apexTestGetResult);
		};
		return notifyListeners;
	}
}

// Maybe there be a IDE interface that states
// "Hey, make this test look busy"


export class RunApexTestRunRequest extends Command {

	public async execute({
		testRun,
		targetOrg,
		logDir
	}: {
		testRun: TestRun,
		targetOrg: SalesforceOrg,
		logDir: Uri
	}) {
		testRun.include.forEach(testItem => {
			testItem.busy = true;
			if (testItem.children) {
				testItem.children.forEach(childTestItem => {
					childTestItem.busy = true;
				});
			}
		});

		const testsToRun = testRun.include.map(testItem => {
			return testItem.id;
		}).join(" ");


		if (testsToRun) {
			const runApexTestCommand = new RunApexTestCommand({
				cli: this.getCli(),
				ide: this.getIde()
			});

			const result = await runApexTestCommand.execute({
				targetOrg,
				testName: testsToRun,
				onSingleTestSuccess(success: ApexTestResult) {
					testRun.passed(success);
				},
				onSingleTestFailure(failure : ApexTestResult)  {
					testRun.failed(failure);
				}
			});

			const readApexTestLogCommand = new ReadApexTestLogCommand({
				ide: this.getIde(),
				cli: this.getCli()
			});

			const contents = await readApexTestLogCommand.execute({
				logDir, targetOrg, apexTestRunResultId: result.getTestRunId()
			});

			return contents;
		}
		return 'No Tests Found';
	}
}

export interface TestRunRequest {
	readonly include: readonly TestItem[] | undefined;
}

export interface TestItem {
	busy: boolean;
	id: string;

	children : TestItem[];
}

export interface TestController {

}

export interface TestRun {
	include: TestItem[];

	passed(apexTestResult: ApexTestResult): void;
	failed(apexTestResult: ApexTestResult): void;
	appendOutput(contents: string): void;
	end(): void;
	getTestItem(className : string, methodName : string) : TestItem | undefined;
}