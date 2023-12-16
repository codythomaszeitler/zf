import { expect, describe } from '@jest/globals';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { OrgListUsersResult } from '../orgListUsersResult';
import { UserId } from '../salesforceId';
import { getCurrentUser } from '../getCurrentUser';

describe('get current user', () => {

	let mockCli: MockSalesforceCli;
	let org: SalesforceOrg;
	const userId = new UserId('1234567890');

	beforeEach(() => {
		mockCli = new MockSalesforceCli();
		org = new SalesforceOrg({
			alias: 'Test Org',
			isActive: true
		});
	});

	it('should get the current user from the given org', async () => {
		const listUsersResult = new OrgListUsersResult({
			users: [
				{
					alias: org,
					defaultMarker: '(A)',
					userId
				}
			]
		});

		mockCli.addUser({
			targetOrg: org,
			result: listUsersResult
		});

		const currentUser = await getCurrentUser({
			targetOrg: org,
			cli: mockCli
		});

		expect(currentUser?.userId).toEqual(userId);
	});

	it('should return null if no user contains the defaultMarker with (A) on it', async () => {
		const listUsersResult = new OrgListUsersResult({
			users: [
				{
					alias: org,
					defaultMarker: '',
					userId
				}
			]
		});

		mockCli.addUser({
			targetOrg: org,
			result: listUsersResult
		});

		const currentUser = await getCurrentUser({
			targetOrg: org,
			cli: mockCli
		});

		expect(currentUser).toBeNull();
	});
});