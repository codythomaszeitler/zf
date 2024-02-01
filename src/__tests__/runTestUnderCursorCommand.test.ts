import { describe, expect, test } from '@jest/globals';
import { RunTestUnderCursorCommand } from "../runTestUnderCursorCommand";
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { Uri } from '../integratedDevelopmentEnvironment';
import { genRandomId } from './salesforceId.test';
import { ApexTestGetResult, ApexTestResult, ApexTestRunResult } from '../apexTestRunResult';
import { SalesforceId } from '../salesforceId';
import { Position } from '../position';
import { genApexQueueItem } from './genApexQueueItemTestUtil';
import { ApexTestQueueItemSelector } from '../apexTestQueueItemSelector';
import { ApexTestQueueStatus } from '../apexTestQueueItem';

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
					failing: 0,
					passing: 1,
					testsRan: 2,
					tests: [
						new ApexTestResult({
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
					failing: 0,
					passing: 2,
					testsRan: 2,
					tests: [
						new ApexTestResult({
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

		const uri =ide.generateUri('force-app', 'main', 'default', 'class', 'SetAccountName.cls');
		ide.addFile(uri);

		const testRunId = genRandomId('TestRun');

		let apexTestGetCounter = 0;
		cli.apexTestGet = async function (params: { targetOrg: SalesforceOrg; testRunId: SalesforceId }) {
			expect(params.testRunId).toBe(testRunId);
			expect(params.targetOrg.getAlias()).toBe(org.getAlias());

			apexTestGetCounter++;
			return new ApexTestGetResult({
				failing: 1,
				passing: 0,
				testsRan: 1,
				tests: [
					new ApexTestResult({
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