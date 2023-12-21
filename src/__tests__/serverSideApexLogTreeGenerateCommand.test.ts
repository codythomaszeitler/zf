import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { ApexLog } from "../apexLog";
import { genRandomId } from "./salesforceId.test";
import { SalesforceOrg } from "../salesforceOrg";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { TreeNode } from "../treeNode";
import { describe, expect, beforeEach } from '@jest/globals';
import { ServerSideApexLogTreeGenerateCommand } from "../serverSideApexLogTreeGenerateCommand";

describe('parse server side apex tree - return 1 file', () => {

	let cli: MockSalesforceCli;
	let ide: MockIDE;
	let org: SalesforceOrg;

	let firstLog : ApexLog;

	beforeEach(() => {
		cli = new MockSalesforceCli();
		ide = new MockIDE();

		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		const randomId = genRandomId('ApexLog');
		const startTime = new Date(Date.parse("2023-12-20T07:04:17+0000"));
		firstLog = new ApexLog({
			id: randomId,
			application: 'Unknown',
			duration: 89,
			logLength: 2680,
			operation: 'Api',
			startTime: startTime,
			status: 'Success'
		});

		cli.addApexLog({ targetOrg: org, apexLog: firstLog });
	});

	it('should be able to parse a tree from a apex list log (only one file returned)', async () => {
		const testObject = new ServerSideApexLogTreeGenerateCommand({
			ide,
			cli
		});

		const treeItem: TreeNode<ApexLog> = await testObject.execute({ targetOrg: org });
		expect(treeItem.label).toBe(org.getAlias());
		expect(treeItem.children.length).toBe(1);

		expect(treeItem.children[0].label).toBe(firstLog.getTreeViewString());
	});
});