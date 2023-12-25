import { describe, expect, test } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";

describe('apex test queue item selector', () => {

	let fs: MockFileSystem;
	let cli: MockSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

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
	});

	it('should be able to convert generic sobjects from query into ApexTestQueueItems', () => {
		// There should be an ApexTestQueueItem at this point?
	});
});