import { ApexTestGetResult, ApexTestResult } from "./apexTestRunResult";
import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import { Logger } from "./logger";
import { ReadApexTestLogCommand } from "./readApexLogCommand";
import { SalesforceOrg } from "./salesforceOrg";

export class RunApexTestCommand extends Command {

	public async execute({
		targetOrg,
		testName,
		onSingleTestFailure,
		onSingleTestSuccess,
		onSingleTestSkipped,
		onTestSuiteSkipped
	}: {
		// So we need the ability to DI this 
		targetOrg: SalesforceOrg, testName: string | string[],
		onSingleTestFailure?: (failure: ApexTestResult) => Promise<void>,
		onSingleTestSuccess?: (success: ApexTestResult) => Promise<void>,
		onSingleTestSkipped?: (skipped: ApexTestResult) => Promise<void>,
		onTestSuiteSkipped?: (skipped: ApexTestName) => Promise<void>
	}) {
		const notifyListeners = this.genNotifyListeners(onSingleTestFailure, onSingleTestSuccess, onSingleTestSkipped);

		const apexTestRunResult = await this.getCli().apexTestRun({
			targetOrg,
			tests: Array.isArray(testName) ? testName : [testName]
		});

		if (apexTestRunResult.wasSkipped()) {
			await this.notifySkippedListeners(testName, onTestSuiteSkipped);
		} else {
			try {
				const testRunId = apexTestRunResult.getTestRunId();

				let apexTestGetResult = await this.getCli().apexTestGet({
					targetOrg,
					testRunId
				});
				await notifyListeners(apexTestGetResult);

				while (apexTestGetResult.getPercentageCompleted() < 100) {
					apexTestGetResult = await this.getCli().apexTestGet({
						targetOrg,
						testRunId
					});
					await notifyListeners(apexTestGetResult);
				}
			} catch (e: unknown) {
				await this.notifySkippedListeners(testName, onTestSuiteSkipped);
				throw e;
			}
		}
		return apexTestRunResult;
	}

	private genNotifyListeners(onSingleTestFailure?: (failure: ApexTestResult) => Promise<void>, onSingleTestSuccess?: (success: ApexTestResult) => Promise<void>, onSingleTestSkipped?: (skipped: ApexTestResult) => Promise<void>) {
		const successes: string[] = [];
		const failures: string[] = [];
		const skipped: string[] = [];

		const genNotifyListener = (tests: string[], onTestNotify?: (failure: ApexTestResult) => Promise<void>) => {
			return async (apexTestResult: ApexTestResult) => {
				if (!tests.includes(apexTestResult.getFullName())) {
					if (onTestNotify) {
						await onTestNotify(apexTestResult);
					}
					tests.push(apexTestResult.getFullName());
				}
			};

		};

		const notifyListeners = async (apexTestGetResult: ApexTestGetResult) => {
			const onSuccess = genNotifyListener(successes, onSingleTestSuccess);
			const notifySuccessListeners = async (apexTestGetResult: ApexTestGetResult) => {
				const promises = apexTestGetResult.getPassingTests().map(success => onSuccess(success));
				await Promise.all(promises);
			};

			const onFailure = genNotifyListener(failures, onSingleTestFailure);
			const notifyFailureListeners = async (apexTestGetResult: ApexTestGetResult) => {
				const promises = apexTestGetResult.getFailingTests().map(failure => onFailure(failure));
				await Promise.all(promises);
			};

			const onSkipped = genNotifyListener(skipped, onSingleTestSkipped);
			const notifySkippedListeners = async (apexTestGetResult: ApexTestGetResult) => {
				const promises = apexTestGetResult.getSkippedTests().map(skipped => onSkipped(skipped));
				await Promise.all(promises);
			};

			await notifySuccessListeners(apexTestGetResult);
			await notifyFailureListeners(apexTestGetResult);
			await notifySkippedListeners(apexTestGetResult);
		};
		return notifyListeners;
	}

	private async notifySkippedListeners(testName: string | string[], onSingleTestSkipped?: (skipped: ApexTestName) => Promise<void>) {
		if (!onSingleTestSkipped) {
			return;
		}

		if (Array.isArray(testName)) {
			const promises = testName.map(test => onSingleTestSkipped({
				identifier: test
			}));
			await Promise.all(promises);
		} else {
			await onSingleTestSkipped({
				identifier: testName
			});
		}
	}
}

interface ApexTestName {
	identifier: string;
}

export class RunApexTestRunRequest extends Command {

	public static readonly getTestLogConfigKey = 'sf.zsi.vscode.getLogOnTestRun';

	public async execute({
		testRun,
		targetOrg,
		logDir
	}: {
		testRun: TestRun,
		targetOrg?: SalesforceOrg,
		logDir: Uri
	}) {
		Logger.get().info(`Attempting to run ${testRun.testItems.length} tests.`);

		start(testRun);

		const targetOrDefaultOrg = targetOrg || await this.getCli().getDefaultOrg();
		if (!targetOrDefaultOrg) {
			// We need a test that if there is no default org, then we need to show a message.
			return;
		}

		const testItems = this.getTestItemsToRun(testRun);

		const testsToRun: string[] = [];

		const testNameToRunningTestItem: Map<string, TestItem> = new Map();
		testItems.forEach(testItem => {
			const testToRun = testItem.start();

			if (testToRun) {
				testsToRun.push(testToRun);
				testNameToRunningTestItem.set(testToRun, testItem);
			}
		});
		Logger.get().info(`Running ${testsToRun}.`);

		const runApexTestCommand = new RunApexTestCommand({
			cli: this.getCli(),
			ide: this.getIde()
		});

		try {

			const ide = this.getIde();

			const result = await runApexTestCommand.execute({
				targetOrg: targetOrDefaultOrg,
				testName: testsToRun.join(' '),
				async onSingleTestSuccess(success: ApexTestResult) {
					const finishedTestId = success.getTestId();
					Logger.get().info(`Test with identifier: ${finishedTestId} was successful.`);
					const testItem = testNameToRunningTestItem.get(finishedTestId);
					testItem?.passed();
				},
				async onSingleTestFailure(failure: ApexTestResult) {
					const finishedTestId = failure.getTestId();
					Logger.get().info(`Test with identifier: ${finishedTestId} failed.`);
					const testItem = testNameToRunningTestItem.get(finishedTestId);

					if (testItem) {
						const offendingClassName = failure.getClassName();
						const uri = await ide.findFileByClassName(offendingClassName);
						testItem.failed(failure, uri || undefined);
					}
				},
				async onSingleTestSkipped(skipped: ApexTestResult) {
					const finishedTestId = skipped.getTestId();
					Logger.get().info(`Test with identifier: ${finishedTestId} was skipped.`);
					const testItem = testNameToRunningTestItem.get(finishedTestId);
					testItem?.skipped();
				},
				async onTestSuiteSkipped(skipped: ApexTestName) {
					const testItem = testNameToRunningTestItem.get(skipped.identifier);
					Logger.get().info(`Test with identifier: ${skipped.identifier} was skipped.`);
					testItem?.skipped();
				}
			});

			if (result.wasSkipped()) {
				testRun.appendOutput(`${testsToRun} was/were skipped.`);
				return;
			}

			if (ide.getConfig(RunApexTestRunRequest.getTestLogConfigKey, true)) {
				const readApexTestLogCommand = new ReadApexTestLogCommand({
					ide: this.getIde(),
					cli: this.getCli()
				});

				const contents = await readApexTestLogCommand.execute({
					logDir, targetOrg: targetOrDefaultOrg, apexTestRunResultId: result.getTestRunId()
				});
				testRun.appendOutput(contents);
			} else {
				testRun.appendOutput(`No apex log was retrieved since ${RunApexTestRunRequest.getTestLogConfigKey} was set to false.`);
			}
		} catch (e: unknown) {
			if (e instanceof Error) {
				testRun.appendOutput(e.message);
			}
		} finally {
			Logger.get().info('Ending test run.');
			testRun.end();
			end(testRun);
		}
	}

	private getTestItemsToRun(testRun: TestRun) {
		const testItems = getTestItemsWithinTestRun(testRun);
		return testItems.filter(testItem => isTestMethod(testItem));
	}
}

export interface TestRunRequest {
	readonly include: readonly TestItem[] | undefined;
}

export interface TestItem {

	identifier: string;
	busy: boolean;
	parent?: TestItem;

	start(): string;
	passed(): void;
	failed(failure?: ApexTestResult, uri?: Uri): void;
	skipped(): void;

	children: TestItem[];
}

export function getClassNameAndMethodName(identifier: string) {
	const [className, methodName] = identifier.split('.');
	return {
		className: className ?? "",
		methodName: methodName ?? ""
	};
}

function isTestMethod(testItem: TestItem) {
	return testItem.identifier.includes('.');
}

export interface TestController {

}

export interface TestRun {
	testItems: TestItem[];

	appendOutput(contents: string): void;
	end(): void;
}

function start(testRun: TestRun) {
	setBusyStatusInTestHierarchy(testRun, true);
}

function end(testRun: TestRun) {
	setBusyStatusInTestHierarchy(testRun, false);
}

function setBusyStatusInTestHierarchy(testRun: TestRun, busy: boolean) {
	const testItems = getTestItemsWithinTestRun(testRun);
	testItems.forEach(testItem => {
		testItem.busy = busy;
	});
}

function getTestItemsWithinTestRun(testRun: TestRun) {
	const testItems: TestItem[] = [];
	testItems.push(...testRun.testItems);
	testItems.forEach(testItem => {
		testItems.push(..._getTestItemsWithinTestRun(testItem));
	});
	return testItems;
}
function _getTestItemsWithinTestRun(testItem: TestItem) {
	const testItems: TestItem[] = [];

	testItems.push(...testItem.children);
	testItem.children.forEach((child: TestItem) => {
		testItems.push(..._getTestItemsWithinTestRun(child));
	});

	return testItems;
}