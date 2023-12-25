import { describe, expect, test } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { ApexTestQueueStatus } from '../apexTestQueueItem';
import { genRandomId } from './salesforceId.test';
import { SalesforceId } from '../salesforceId';
import { ApexTestQueueItemSelector } from '../apexTestQueueItemSelector';
import { genApexQueueItem } from './genApexQueueItemTestUtil';

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

	async function generateApexQueueItem(params: {
		status: ApexTestQueueStatus,
		parentJobId: SalesforceId
	}) {
		return genApexQueueItem({
			cli: cli,
			parentJobId: params.parentJobId,
			status: params.status,
			targetOrg: org
		});
	}

	it('should be able to convert generic sobjects from query into ApexTestQueueItems', async () => {
		const parentJobId = genRandomId('AsyncApexJob');
		await generateApexQueueItem({
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