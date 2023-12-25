import { describe, expect, test } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { APEX_TEST_QUEUE_ITEM_SOBJECT_NAME, ApexTestQueueItemBuilder, ApexTestQueueStatus } from '../apexTestQueueItem';
import { genRandomId } from './salesforceId.test';
import { SalesforceId } from '../salesforceId';
import { ApexTestQueueItemSelector } from '../apexTestQueueItemSelector';

describe('apex test queue item selector', () => {

	let fs: MockFileSystem;
	let cli: MockSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let testObject: ApexTestQueueItemSelector;

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

		testObject = new ApexTestQueueItemSelector({
			cli
		});
	});

	async function genApexQueueItem(params: {
		status: ApexTestQueueStatus,
		parentJobId: SalesforceId
	}) {
		const randomId = genRandomId(APEX_TEST_QUEUE_ITEM_SOBJECT_NAME);
		const builder = new ApexTestQueueItemBuilder({
			id: randomId
		});
		const apexTestQueueItem = builder.withStatus(params.status).withParentJobId(params.parentJobId).build();

		await cli.dataUpsertRecord({
			targetOrg: org,
			sObject: apexTestQueueItem
		});
	}

	it('should be able to convert generic sobjects from query into ApexTestQueueItems', async () => {
		const parentJobId = genRandomId('AsyncApexJob');
		await genApexQueueItem({
			status: "Queued",
			parentJobId
		});

		const apexTestQueueItems = await testObject.queryByParentJobId({
			parentJobId,
			targetOrg: org
		});
		expect(apexTestQueueItems).toHaveLength(1);
		const apexTestQueueItem = apexTestQueueItems[0];

		expect(apexTestQueueItem.status).toBe("Queued");
	});

	it('should be able to convert when no sobjects are found', async () => {
		const parentJobId = genRandomId('AsyncApexJob');
		const apexTestQueueItems = await testObject.queryByParentJobId({
			parentJobId,
			targetOrg: org
		});
		expect(apexTestQueueItems).toHaveLength(0);
	});
});