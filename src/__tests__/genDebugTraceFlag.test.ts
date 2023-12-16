import { describe, expect, test } from '@jest/globals';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { OrgListUsersResult } from '../orgListUsersResult';
import { SalesforceId } from '../salesforceId';
import { generateDebugTraceFlag } from '../genDebugTraceFlag';

describe('generate debug trace flag', () => {

	let cli: MockSalesforceCli;
	let org: SalesforceOrg;
	let currentRunningUserId: SalesforceId;

	beforeEach(() => {
		cli = new MockSalesforceCli();
		org = new SalesforceOrg({
			alias: 'TestOrg',
			isActive: true
		});

		currentRunningUserId = SalesforceId.get('1234567890');

		cli.addUser({
			targetOrg: org,
			result: new OrgListUsersResult({
				users: [
					{
						alias: org,
						defaultMarker: '(A)',
						userId: currentRunningUserId
					}
				]
			})
		});
	});

	it('should create a debug log level and trace flag for current running user', async () => {
		await generateDebugTraceFlag({
			targetOrg: org,
			salesforceCli: cli
		});

		const debugLogLevels = await cli.dataQuery({
			targetOrg: org,
			query: {
				from: 'DebugLevel'
			}
		});

		expect(debugLogLevels.getSObjects()).toHaveLength(1);
	});
});
