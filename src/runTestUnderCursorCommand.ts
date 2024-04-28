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

interface ApexTestStartContext {
	className: string;
	methodName?: string;
}

export class RunApexTestCommand extends Command {


	public async execute({
		targetOrg,
		testName,
		onSingleTestFailure,
		onSingleTestSuccess
	}: {
		// So we need the ability to DI this 
		targetOrg: SalesforceOrg, testName: string | string[],
		onSingleTestFailure?: (failure: ApexTestResult) => void,
		onSingleTestSuccess?: (success: ApexTestResult) => void
		onSingleTestStart?: (context: ApexTestStartContext) => void
	}) {
		const notifyListeners = this.genNotifyListeners(onSingleTestFailure, onSingleTestSuccess);
		const apexTestRunResult = await this.getCli().apexTestRun({
			targetOrg,
			tests: Array.isArray(testName) ? testName : [testName]
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

/** 
 * 
 * 
 * 
*/
export class RunApexTestRunRequest extends Command {

	// Oh I see
	// We are basically creating a test run
	// What is this trying to say?
	// Why would this not be combined into the same command?
	// We were trying to move out the fact 
	// So the problem that I am trying to solve here is the fact
	// that the test run is bleeding through to the 

	// A test run has a collection of test items.
	// A test item has children who are themselves test items.

	// A test item can start
	// A test item can end.
	// A test item can pass.
	// A test item can fail. 
	// A test run is a collection of test items.

	public async execute({
		testRun,
		targetOrg,
		logDir
	}: {
		testRun: TestRun,
		targetOrg: SalesforceOrg,
		logDir: Uri
	}) {

		// So the test id will always be this string. 
		// ClassName.MethodName
		// There's nothing else to be done here?
		const testItems = this.getTestItemsToRun(testRun);

		const testsToRun: string[] = [];

		const testNameToRunningTestItem: Map<String, TestItem> = new Map();
		testItems.forEach(testItem => {
			const testToRun = testItem.start();

			if (testToRun) {
				testsToRun.push(testToRun);
				testNameToRunningTestItem.set(testToRun, testItem);
			}
		});

		if (testsToRun) {
			const runApexTestCommand = new RunApexTestCommand({
				cli: this.getCli(),
				ide: this.getIde()
			});

			const result = await runApexTestCommand.execute({
				targetOrg,
				testName: testsToRun.join(' '),
				onSingleTestSuccess(success: ApexTestResult) {
					const finishedTestId = success.getTestId();
					const testItem = testNameToRunningTestItem.get(finishedTestId);
					testItem?.passed();
				},
				onSingleTestFailure(failure: ApexTestResult) {
					const finishedTestId = failure.getTestId();
					const testItem = testNameToRunningTestItem.get(finishedTestId);
					testItem?.failed(failure);
				}
			});

			const readApexTestLogCommand = new ReadApexTestLogCommand({
				ide: this.getIde(),
				cli: this.getCli()
			});

			const contents = await readApexTestLogCommand.execute({
				logDir, targetOrg, apexTestRunResultId: result.getTestRunId()
			});

			testRun.appendOutput(contents);
			testRun.end();
		}
	}

	private getTestItemsToRun(testRun: TestRun) {
		const testItems: TestItem[] = [];
		testItems.push(...testRun.testItems);
		testItems.forEach(testItem => {
			testItems.push(...this.getTestItemHierarchy(testItem));
		});
		return testItems;
	}

	private getTestItemHierarchy(testItem: TestItem) {
		const testItems: TestItem[] = [];

		testItems.push(...testItem.children);
		testItem.children.forEach((child: TestItem) => {
			testItems.push(...this.getTestItemHierarchy(child));
		});

		return testItems;
	}
}

export interface TestRunRequest {
	readonly include: readonly TestItem[] | undefined;
}

export interface TestItem {

	start(): string;
	passed(): void;
	failed(failure: ApexTestResult): void;
	// What does id even have to do with this?
	// Hasn't that already been decided at a previous point.

	children: TestItem[];
}

export interface TestController {

}

export interface TestRun {
	testItems: TestItem[];

	appendOutput(contents: string): void;
	end(): void;
}