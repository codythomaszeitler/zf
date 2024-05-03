/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect, test } from '@jest/globals';
import { RunApexTestRunRequest, RunTestUnderCursorCommand, TestItem, TestRun, getClassNameAndMethodName } from "../runTestUnderCursorCommand";
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { Uri } from '../integratedDevelopmentEnvironment';
import { genRandomId } from './salesforceId.test';
import { ApexTestGetResult, ApexTestResult, ApexTestRunResult } from '../apexTestRunResult';
import { ASYNC_APEX_JOB_PREFIX, SalesforceId } from '../salesforceId';
import { Position } from '../position';
import { genApexQueueItem } from './genApexQueueItemTestUtil';
import { ApexTestQueueItemSelector } from '../apexTestQueueItemSelector';
import { ApexTestQueueStatus } from '../apexTestQueueItem';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';

describe('run test under cursor command', () => {

	let fs: MockFileSystem;
	let cli: MockSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let testObject: RunTestUnderCursorCommand;

	beforeEach(() => {
		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();
		cli = new MockSalesforceCli({
			filesystem: fs
		});
		ide = new MockIDE({
			filesystem: fs
		});

		cli.setDefaultOrg(org);

		testObject = new RunTestUnderCursorCommand({
			ide,
			cli
		});
	});

	it('should show a warning message if there is no current editor found', async () => {
		ide.setActiveTextEditor(null);

		await testObject.execute({
			targetOrg: org
		});
		expect(ide.didShowWarningMessage('Could not find active text editor. Could not run test.')).toBe(true);
	});

	it('should show a warning message if current editor is not an apex class', async () => {
		ide.setActiveTextEditor({
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: 'force-app/main/default/lwc/notAnApexClass/notAnApexClass.js'
			})
		});

		await testObject.execute({
			targetOrg: org
		});
		expect(ide.didShowWarningMessage('Cannot run test against non-apex file.')).toBe(true);
	});

	it('should run apex test when first report immediately reports successfully completed', async () => {
		const testName = 'SetAccountNameTest.cls';
		ide.setActiveTextEditor({
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: `force-app/main/default/class/${testName}`
			})
		});

		const testRunId = genRandomId('TestRun');

		let apexTestGetCounter = 0;
		cli.apexTestGet = async function (params: { targetOrg: SalesforceOrg; testRunId: SalesforceId }) {
			expect(params.testRunId).toBe(testRunId);
			expect(params.targetOrg.getAlias()).toBe(org.getAlias());

			apexTestGetCounter++;

			if (apexTestGetCounter === 1) {
				return new ApexTestGetResult({
					testRunId,
					failing: 0,
					passing: 1,
					testsRan: 2,
					tests: [
						new ApexTestResult({
							stackTrace: '',
							outcome: 'Pass',
							fullName: testName + '.test1',
							message: 'Test Failure Message',
							location: {
								className: 'SetAccountName',
								methodName: '.test1',
								position: new Position(0, 0)
							}
						}),
						new ApexTestResult({
							stackTrace: '',
							outcome: 'Pending',
							fullName: testName + '.test2',
							message: 'Test Failure Message',
							location: {
								className: 'SetAccountName',
								methodName: '.test2',
								position: new Position(1, 1)
							}
						})
					]
				});
			} else {
				return new ApexTestGetResult({
					testRunId,
					failing: 0,
					passing: 2,
					testsRan: 2,
					tests: [
						new ApexTestResult({
							stackTrace: '',
							outcome: 'Pass',
							fullName: testName + '.test1',
							message: 'Test Failure Message',
							location: {
								className: 'SetAccountName',
								methodName: '.test1',
								position: new Position(0, 0)
							}
						}),
						new ApexTestResult({
							stackTrace: '',
							outcome: 'Pass',
							fullName: testName + '.test2',
							message: 'Test Failure Message',
							location: {
								className: 'SetAccountName',
								methodName: '.test2',
								position: new Position(1, 1)
							}
						})
					]
				});
			}
		}.bind(cli);

		let wasApexTestRunCalled = false;
		cli.apexTestRun = async function (params: { targetOrg: SalesforceOrg; tests: string[] }) {
			wasApexTestRunCalled = true;
			return new ApexTestRunResult({
				testRunId
			});
		};

		await testObject.execute({
			targetOrg: org
		});

		expect(wasApexTestRunCalled).toBe(true);
		expect(apexTestGetCounter).toBe(2);
	});

	it('should should show failure diagnostic when test has failure', async () => {
		const testName = 'SetAccountNameTest.cls';
		ide.setActiveTextEditor({
			uri: Uri.from({
				scheme: 'file',
				fileSystemPath: `force-app/main/default/class/${testName}`
			})
		});

		const uri = ide.generateUri('force-app', 'main', 'default', 'class', 'SetAccountName.cls');
		ide.addFile(uri);

		const testRunId = genRandomId('TestRun');

		let apexTestGetCounter = 0;
		cli.apexTestGet = async function (params: { targetOrg: SalesforceOrg; testRunId: SalesforceId }) {
			expect(params.testRunId).toBe(testRunId);
			expect(params.targetOrg.getAlias()).toBe(org.getAlias());

			apexTestGetCounter++;
			return new ApexTestGetResult({
				testRunId,
				failing: 1,
				passing: 0,
				testsRan: 1,
				tests: [
					new ApexTestResult({
						stackTrace: '',
						outcome: 'Fail',
						fullName: testName + '.test2',
						message: 'Test Failure Message',
						location: {
							className: 'SetAccountName',
							methodName: 'test2',
							position: new Position(1, 1)
						}
					})
				]
			});
		}.bind(cli);

		let wasApexTestRunCalled = false;
		cli.apexTestRun = async function (params: { targetOrg: SalesforceOrg; tests: string[] }) {
			wasApexTestRunCalled = true;
			return new ApexTestRunResult({
				testRunId
			});
		};

		await testObject.execute({
			targetOrg: org
		});

		expect(wasApexTestRunCalled).toBe(true);
		expect(apexTestGetCounter).toBe(1);

		expect(ide.didSetAnyDiagnostics()).toBe(true);
	});

	it('should be able to cancel when commanded', async () => {
		const testRunId = genRandomId('AsyncApexJob');

		await genApexQueueItem({
			cli,
			parentJobId: testRunId,
			status: 'Queued',
			targetOrg: org
		});

		await testObject.cancel({
			parentJobId: testRunId,
			targetOrg: org
		});

		const apexTestQueueItemSelector = new ApexTestQueueItemSelector({
			cli
		});

		const apexTestQueueItems = await apexTestQueueItemSelector.queryByParentJobId({
			parentJobId: testRunId,
			targetOrg: org
		});

		expect(apexTestQueueItems).toHaveLength(1);
		apexTestQueueItems.forEach(apexTestQueueItem => {
			const expectedStatus = "Aborted" as ApexTestQueueStatus;
			expect(apexTestQueueItem.status).toBe(expectedStatus);
		});
	});
});

describe('run apex test run request', () => {

	let targetOrg: SalesforceOrg;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let logDir: Uri;

	let commandToStdOutput: any;

	beforeEach(() => {
		ide = new MockIDE();
		commandToStdOutput = genCommandToStdOutput();
		cli = new SfSalesforceCli(genMockExecutor(commandToStdOutput));
		targetOrg = new SalesforceOrg({
			alias: 'cso', isActive: true
		});
		logDir = ide.generateUri('.zf', 'logs');
	});

	it('should be able to run one bottom level test', async () => {

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
				this.didEnd = false;
			},
		};

	}

	function createTestItem({
		identifier
	}: { identifier: string }): MockTestItem {
		return {
			shouldFail: false,
			shouldPass: false,
			didFail: false,
			didPass: false,
			didStart: false,
			identifier,
			busy: false,
			children: [],
			start() {
				this.didStart = true;
				return this.identifier;
			},
			failed() {
				this.didFail = true;
			},
			passed() {
				this.didPass = true;
			},
		};
	}
});

type MockTestItem = TestItem & {
	didFail: boolean,
	didPass: boolean,
	didStart: boolean,
	shouldFail: boolean,
	shouldPass: boolean
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
	const allTestsPass = testItems.every(testItem => testItem.shouldPass);
	const numPassed = testItems.filter(testItem => testItem.shouldPass).length;
	const numFailed = testItems.filter(testItem => testItem.shouldFail).length;


	const tests = testItems.map(testItem => {
		const { className, methodName } = getClassNameAndMethodName(testItem);
		return {
			"Id": "07M5e00000Gg5GEEAZ",
			"QueueItemId": "7095e000000zsmCAAQ",
			"StackTrace": null,
			"Message": null,
			"AsyncApexJobId": testRunId.toString(),
			"MethodName": methodName,
			"Outcome": "Pass",
			"ApexClass": {
				"Id": "01p5e00000bd62JAAQ",
				"Name": className,
				"NamespacePrefix": null
			},
			"RunTime": 14,
			"FullName": `${className}.${methodName}`
		}
	});

	return JSON.stringify({
		"status": 0,
		"result": {
			"summary": {
				"outcome": allTestsPass ? "Passed" : "Failed",
				"testsRan": testItems.length,
				"passing": numPassed,
				"failing": numFailed,
				"skipped": 0,
				"passRate": `${(numPassed / (numPassed + numFailed)) * 100}%`,
				"failRate": "0%",
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
	return `sf data query --query "SELECT Id, ApexLogId FROM ApexTestResult WHERE ApexTestRunResultId IN (SELECT Id FROM ApexTestRunResult WHERE AsyncApexJobId = '${apexTestRunResultId.toString()}')" --use-tooling-api --target-org ${targetOrg.getAlias()} --json`;
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
