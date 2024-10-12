/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect } from '@jest/globals';
import { RunApexTestRunRequest, TestItem, TestRun, getClassNameAndMethodName } from "../runTestUnderCursorCommand";
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { Uri } from '../integratedDevelopmentEnvironment';
import { genRandomId } from './salesforceId.test';
import { ApexTestResult, FAIL, PASS, SKIPPED } from '../apexTestRunResult';
import { ASYNC_APEX_JOB_PREFIX, SalesforceId } from '../salesforceId';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';
import { NO_APEX_LOG_FOUND_MESSAGE } from '../readApexLogCommand';

describe('run apex test run request', () => {

	let targetOrg: SalesforceOrg;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let logDir: Uri;
	let fs: MockFileSystem;

	let commandToStdOutput: any;

	beforeEach(() => {
		fs = new MockFileSystem();
		ide = new MockIDE({ filesystem: fs });
		commandToStdOutput = genCommandToStdOutput();
		cli = new SfSalesforceCli(genMockExecutor(commandToStdOutput));
		targetOrg = new SalesforceOrg({
			alias: 'cso', isActive: true
		});
		logDir = ide.generateUri('.zf', 'logs');
	});

	it('should be able to run one bottom level test and have it pass', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldPass = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(NO_APEX_LOG_FOUND_MESSAGE);
		expect(testItem.didPass).toBe(true);
	});

	it('should be able to not get test log if configured to not to', async () => {

		ide.setConfig(RunApexTestRunRequest.getTestLogConfigKey, false);

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldPass = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = 'If this were to run, an exception would be thrown and the test would not pass.';

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(`No apex log was retrieved since ${RunApexTestRunRequest.getTestLogConfigKey} was set to false.`);
		expect(testItem.didPass).toBe(true);
	});

	it('should be able to gracefully handle a connection error on test get', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldPass = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		const errorMessage = "request to www.salesforce.org failed, reason: read ECONNRESET";
		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestLogErrorConnectionResetResult({ errorMessage });

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(errorMessage);
		expect(testItem.didSkip).toBe(true);
	});

	it('should be able to run one bottom level test and have it fail', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldFail = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(NO_APEX_LOG_FOUND_MESSAGE);
		expect(testItem.didFail).toBe(true);
	});

	it('should be able to run one bottom level test and have it skip and not spin infinitely', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldSkip = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(NO_APEX_LOG_FOUND_MESSAGE);
		expect(testItem.didSkip).toBe(true);
	});

	it('should respect if test is already enqueued, and just show as skipped and end tests', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldSkip = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);

		const apexTestRunSkippedResult = {
			"code": 1,
			"context": "Test",
			"commandName": "Test",
			"message": "Test already enqueued 01p5e00000bd62J",
			"name": "ALREADY_IN_PROCESS",
			"status": 1,
			"stack": "ALREADY_IN_PROCESS: Test already enqueued 01p5e00000bd62J\n    at HttpApi.getError (C:\\Program Files\\sf\\client\\node_modules\\jsforce\\lib\\http-api.js:252:12)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async C:\\Program Files\\sf\\client\\node_modules\\jsforce\\lib\\http-api.js:122:23",
			"exitCode": 1,
			"warnings": []
		};

		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = JSON.stringify(apexTestRunSkippedResult);

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(`${testItem.identifier} was/were skipped.`);
		expect(testItem.didSkip).toBe(true);
	});

	it('should be able to put an error message into the test output on exception', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.testMethod'
		});
		testItem.shouldFail = true;

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = 'Not JSON, throw an exception.';

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe('Unexpected token N in JSON at position 0');
		expect(testItem.didFail).toBe(true);
	});

	it('should be able to properly find class uri to failure on exception thrown', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.anotherTestMethod'
		});
		testItem.stackTrace = `Class.CCLass.foo: line 8, column 1\nClass.BClass.<init>: line 5, column 1\nClass.AClass.<init>: line 4, column 1\nClass.${testItem.identifier}: line 18, column 1`;
		testItem.shouldFail = true;

		const uri = ide.generateUri('force-app', 'main', 'default', 'classes', 'CCLass.cls');
		fs.create({
			uri
		});

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(NO_APEX_LOG_FOUND_MESSAGE);
		expect(testItem.didFail).toBe(true);
		expect(testItem.uriForTestFailure).toBe(uri);
	});

	it('should be able to properly find class uri to failure on assert failure', async () => {

		const testRun = createTestRun();
		const testItem = createTestItem({
			identifier: 'ApexTestClass.anotherTestMethod'
		});
		testItem.stackTrace = `Class.${testItem.identifier}: line 10, column 1`;
		testItem.shouldFail = true;

		const uri = ide.generateUri('force-app', 'main', 'default', 'classes', 'ApexTestClass.cls');
		fs.create({
			uri
		});

		testRun.testItems.push(testItem);
		const testRunId = genRandomId(ASYNC_APEX_JOB_PREFIX);
		commandToStdOutput[genApexTestRunCommandString({
			tests: testRun.testItems, targetOrg: targetOrg
		})] = genApexTestRunResult({
			status: 0,
			testRunId
		});

		commandToStdOutput[genApexTestGetCommandString({
			testRunId,
			targetOrg
		})] = genApexTestGetResult({
			testItems: [testItem],
			testRunId
		});

		commandToStdOutput[genApexTestLogCommandString({
			apexTestRunResultId: testRunId,
			targetOrg
		})] = genApexTestLogResult({
			apexTestLogId: testRunId
		});

		const testObject = new RunApexTestRunRequest({
			ide, cli
		});

		await testObject.execute({
			testRun, targetOrg, logDir
		});

		expect(testRun.didEnd).toBe(true);
		expect(testRun.contents).toBe(NO_APEX_LOG_FOUND_MESSAGE);
		expect(testItem.didFail).toBe(true);
		expect(testItem.uriForTestFailure).toBe(uri);
	});

	function createTestRun(): TestRun & { contents: string, didEnd: boolean } {
		return {
			contents: '',
			didEnd: false,
			testItems: [],
			appendOutput(contents: string) {
				this.contents = contents;
			},
			end() {
				this.didEnd = true;
			},
		};

	}

	function createTestItem({
		identifier
	}: { identifier: string }): MockTestItem {
		return {
			shouldFail: false,
			shouldPass: false,
			shouldSkip: false,
			didFail: false,
			didPass: false,
			didStart: false,
			didSkip: false,
			identifier,
			busy: false,
			children: [],
			uriForTestFailure: undefined,
			stackTrace: null,
			start() {
				this.didStart = true;
				return this.identifier;
			},
			failed(failure?: ApexTestResult, uri?: Uri) {
				this.didFail = true;
				this.uriForTestFailure = uri;
			},
			passed() {
				this.didPass = true;
			},
			skipped() {
				this.didSkip = true;
			}
		};
	}
});

type MockTestItem = TestItem & {
	didFail: boolean,
	didPass: boolean,
	didSkip: boolean,
	didStart: boolean,
	shouldFail: boolean,
	shouldPass: boolean,
	shouldSkip: boolean,
	stackTrace: string | null,
	uriForTestFailure?: Uri,
};

function genApexTestRunCommandString({ tests, targetOrg }: { tests: TestItem[], targetOrg: SalesforceOrg }) {
	return `sf apex test run --tests ${tests.map(test => test.identifier).join(" ")} --target-org ${targetOrg.getAlias()} --json`;
}

function genApexTestRunResult({ testRunId, status }: { testRunId: SalesforceId; status: number }) {
	return JSON.stringify({
		"status": status,
		"result": {
			"testRunId": testRunId.toString()
		},
		"warnings": []
	});
}

function genApexTestGetCommandString({ testRunId, targetOrg }: { testRunId: SalesforceId, targetOrg: SalesforceOrg }) {
	return `sf apex test get --test-run-id ${testRunId.toString()} --target-org ${targetOrg.getAlias()} --json`;
}

function genApexTestGetResult({ testRunId, testItems }: { testRunId: SalesforceId, testItems: MockTestItem[] }) {
	const numPassed = testItems.filter(testItem => testItem.shouldPass).length;
	const numFailed = testItems.filter(testItem => testItem.shouldFail).length;
	const numSkipped = testItems.filter(testItem => testItem.shouldSkip).length;

	const tests = testItems.map(testItem => {
		const getPassFileSkipped = () => {
			if (testItem.shouldPass) {
				return PASS;
			} else if (testItem.shouldFail) {
				return FAIL;
			} else {
				return SKIPPED;
			}
		};

		const { className, methodName } = getClassNameAndMethodName(testItem.identifier);
		return {
			"Id": "07M5e00000Gg5GEEAZ",
			"QueueItemId": "7095e000000zsmCAAQ",
			"StackTrace": testItem.stackTrace,
			"Message": null,
			"AsyncApexJobId": testRunId.toString(),
			"MethodName": methodName,
			"Outcome": getPassFileSkipped(),
			"ApexClass": {
				"Id": "01p5e00000bd62JAAQ",
				"Name": className,
				"NamespacePrefix": null
			},
			"RunTime": 14,
			"FullName": `${className}.${methodName}`
		};
	});

	const getOutcome = () => {
		if (numSkipped !== 0) {
			return 'Skipped'
		} else if (numFailed !== 0) {
			return 'Failed';
		} else {
			return 'Passed';
		}
	}

	return JSON.stringify({
		"status": 0,
		"result": {
			"summary": {
				"outcome": getOutcome(),
				"testsRan": testItems.length,
				"passing": numPassed,
				"failing": numFailed,
				"skipped": numSkipped,
				"passRate": `${(numPassed / (numPassed + numFailed)) * 100}%`,
				"failRate": `${(numFailed / (numPassed + numFailed)) * 100}%`,
				"testStartTime": "Thu May 02 2024 5:09:03 PM",
				"testExecutionTime": "14 ms",
				"testTotalTime": "14 ms",
				"commandTime": "266 ms",
				"hostname": "https://cunning-raccoon-bz3els-dev-ed.my.salesforce.com",
				"orgId": "00D5e000001AcqNEAS",
				"username": "codyzeitler12@cunning-raccoon-bz3els.com",
				"testRunId": testRunId.toString(),
				"userId": "0055e000002p0JRAAY"
			},
			"tests": tests
		},
		"warnings": []
	});
}

function genApexTestLogCommandString({ apexTestRunResultId, targetOrg }: { apexTestRunResultId: SalesforceId; targetOrg: SalesforceOrg }) {
	return `sf data query --query "SELECT Id, ApexLogId FROM ApexTestResult WHERE ApexTestRunResultId IN (SELECT Id FROM ApexTestRunResult WHERE AsyncApexJobId = '${apexTestRunResultId.toString()}')" --use-tooling-api --target-org ${targetOrg.getAlias()} --result-format json`;
}

function genApexTestLogResult({ apexTestLogId }: { apexTestLogId: SalesforceId }) {
	return JSON.stringify({
		"status": 0,
		"result": {
			"records": [
				{
					"attributes": {
						"type": "ApexTestResult",
						"url": "/services/data/v60.0/tooling/sobjects/ApexTestResult/07M5e00000Gg5GEEAZ"
					},
					"Id": apexTestLogId.toString(),
					"ApexLogId": null
				}
			],
			"totalSize": 1,
			"done": true
		},
		"warnings": []
	});
}

function genApexTestLogErrorConnectionResetResult({ errorMessage }: { errorMessage: string }): string {
	return JSON.stringify(
		{
			"code": 1,
			"context": "Test",
			"commandName": "Test",
			"message": errorMessage,
			"name": "FetchError",
			"status": 1,
			"stack": "FetchError: request to www.salesforce.org failed, reason: read ECONNRESET\n",
			"exitCode": 1,
			"warnings": []
		}
	);
}
