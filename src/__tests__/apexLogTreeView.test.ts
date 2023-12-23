import { ApexLog } from "../apexLog";
import { APEX_LOG_TREE_API_NAME, ApexLogTreeView } from "../apexLogTreeView";
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { describe, expect, test } from '@jest/globals';
import { genRandomId } from "./salesforceId.test";
import { getLogFileUri } from "../showApexLogCommand";
import { TreeNode } from "../treeNode";

describe('apex log tree view', () => {

	let cli: MockSalesforceCli;
	let ide: MockIDE;
	let fs: MockFileSystem;
	let logDir: string;
	let org: SalesforceOrg;

	beforeEach(() => {
		fs = new MockFileSystem();

		cli = new MockSalesforceCli({
			filesystem: fs
		});

		ide = new MockIDE({
			filesystem: fs
		});

		logDir = 'testLogDir';

		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});
	});

	function createApexLog() {
		const randomId = genRandomId('ApexLog');
		const startTime = new Date(Date.parse("2023-12-20T07:04:17+0000"));
		const apexLog = new ApexLog({
			id: randomId,
			application: 'Unknown',
			duration: 89,
			logLength: 2680,
			operation: 'Api',
			startTime: startTime,
			status: 'Success'
		});
		return apexLog;
	}

	describe('when default org is set', () => {
		beforeEach(() => {
			cli.setDefaultOrg(org);
		});

		it('should have the correct api name when commanded to get it', () => {
			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});
			expect(testObject.uniqueName).toBe(APEX_LOG_TREE_API_NAME);
		});

		it('should create a two layer tree, first layer is org name, second layer are logs', async () => {
			const apexLog = createApexLog();

			cli.addApexLog({
				targetOrg: org,
				apexLog
			});

			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});

			const rootNode = await testObject.getRootNode({
				targetOrg: org
			});

			expect(rootNode.label).toBe(org.getAlias());
			expect(rootNode.value).toBeUndefined();
			expect(rootNode.children.length).toBe(1);

			const child = rootNode.children[0];
			expect(child.label).toBe(apexLog.getTreeViewString());
			expect(child.value).toBe(apexLog);
		});

		it('should be able to generate file if cannot find file in filesystem', async () => {
			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});

			const apexLog = createApexLog();
			cli.addApexLog({
				targetOrg: org,
				apexLog
			});

			await testObject.onSelect({
				value: apexLog
			});

			const uri = getLogFileUri({
				targetOrg: org,
				logDir: logDir,
				logId: apexLog.getId()
			});
			expect(ide.toHaveShownTextDocument(uri)).toBeTruthy();
		});

		it('should be able reuse file if file in filesystem', async () => {
			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});

			cli.toThrowOnApexGetLog = new Error('Should not have called apex get log!');
			const apexLog = createApexLog();

			const uri = getLogFileUri({
				targetOrg: org,
				logDir: logDir,
				logId: apexLog.getId()
			});
			fs.create({
				uri
			});

			await testObject.onSelect({
				value: apexLog
			});

			expect(ide.toHaveShownTextDocument(uri)).toBeTruthy();
		});

		it('should react to refresh being called', async () => {
			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});

			const apexLog = createApexLog();

			cli.addApexLog({
				targetOrg: org,
				apexLog
			});

			let caughtRoot: TreeNode<ApexLog> | undefined;
			const listener = {
				async onTreeViewRefresh(e: { root: TreeNode<ApexLog> | undefined; }) {
					caughtRoot = e.root;
				}
			};

			testObject.registerOnRefreshListener(listener);

			await testObject.refresh({
				targetOrg: org
			});

			if (!caughtRoot) {
				expect(true).toBeFalsy();
			}

			expect(caughtRoot?.label).toBe(org.getAlias());

			caughtRoot = undefined;

			testObject.unregisterOnRefreshListener(listener);
			await testObject.refresh({
				targetOrg: org
			});

			expect(caughtRoot).toBeUndefined();
		});
	});

	describe('without default org set', () => {
		it('should log warning message if not default org is set when refresh is commanded', async () => {
			const testObject = new ApexLogTreeView({
				cli,
				ide,
				logDir
			});

			const apexLog = createApexLog();
			cli.addApexLog({
				targetOrg: org,
				apexLog
			});

			await testObject.onSelect({
				value: apexLog
			});

			expect(ide.didShowWarningMessage('No default org set, cannot refresh apex logs.')).toBeTruthy();
		});
	});
});
