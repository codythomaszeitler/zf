import { describe, expect, test } from '@jest/globals';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { OrgListUsersResult } from '../orgListUsersResult';
import { SalesforceId } from '../salesforceId';
import { generateDebugTraceFlag } from '../genDebugTraceFlag';
import { getCurrentUser } from '../getCurrentUser';
import { trace } from 'console';

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
		const user = await getCurrentUser({
			targetOrg: org,
			cli
		});

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
		const debugLogLevel = debugLogLevels.getSObjects()[0];
		expect(debugLogLevel["ApexCode"]).toBe("DEBUG");
		expect(debugLogLevel["Visualforce"]).toBe("NONE");

		const traceFlags = await cli.dataQuery({
			targetOrg: org,
			query: {
				from: 'TraceFlag'
			}
		});

		expect(traceFlags.getSObjects()).toHaveLength(1);
		const traceFlag = traceFlags.getSObjects()[0];
		expect(traceFlag["DebugLevelId"]).toBe(debugLogLevel["Id"]);
		expect(SalesforceId.get(traceFlag["TracedEntityId"])).toBe(user?.userId);
	});
});
