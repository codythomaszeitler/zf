/* eslint-disable @typescript-eslint/naming-convention */
import { expect, describe } from '@jest/globals';
import { MockSalesforceCli } from './__mocks__/mockSalesforceCli';
import { SalesforceOrg } from '../salesforceOrg';
import { OrgListUsersResult } from '../orgListUsersResult';
import { SalesforceId } from '../salesforceId';
import { getCurrentUser } from '../getCurrentUser';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor, getSfOrgListUsersCommandString } from './__mocks__/mockShell';

describe('get current user', () => {

	let mockCli: MockSalesforceCli;
	let org: SalesforceOrg;
	const userId = SalesforceId.get('1234567890');

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
					userId,
					username: 'test.username'
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
					userId,
					username: 'test.username'
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

describe('get current user with real cli results', () => {

	let org: SalesforceOrg;
	let cli: SfSalesforceCli;

	let commandToStdOutput: any;

	let testUsername: string;

	beforeEach(() => {
		testUsername = "test-a3cn1nmylp3a@example.com";

		commandToStdOutput = genCommandToStdOutput();

		cli = new SfSalesforceCli(genMockExecutor(commandToStdOutput));
		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});
	});

	it('should use data query to get user id if one is blank on org list users', async () => {
		commandToStdOutput[getSfOrgListUsersCommandString({
			targetOrg: org
		})] = genOrgListUsersWithoutUserId({
			org
		});
		commandToStdOutput[`sf data query --query "SELECT Id FROM User WHERE Username = '${testUsername}'" --use-tooling-api --target-org ${org.getAlias()} --json`] = genUserDataQuery();
		const user = await getCurrentUser({
			targetOrg: org,
			cli
		});

		if (user) {
			expect(user.userId).toBe(SalesforceId.get("0050100000502vOAAQ"));
		}

	});

	it('should use data query to get user id if one does not exist on org list users', async () => {
		commandToStdOutput[getSfOrgListUsersCommandString({
			targetOrg: org
		})] = genOrgListUsersWithoutUserIdKey({
			org
		});
		commandToStdOutput[`sf data query --query "SELECT Id FROM User WHERE Username = '${testUsername}'" --use-tooling-api --target-org ${org.getAlias()} --json`] = genUserDataQuery();
		const user = await getCurrentUser({
			targetOrg: org,
			cli
		});

		if (user) {
			expect(user.userId).toBe(SalesforceId.get("0050100000502vOAAQ"));
		}

	});
});

function genUserDataQuery() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "User",
							"url": "/services/data/v59.0/tooling/sobjects/User/0050100000502vOAAQ"
						},
						"Id": "0050100000502vOAAQ"
					}
				],
				"totalSize": 1,
				"done": true
			},
			"warnings": []
		}

	);
}

function genOrgListUsersWithoutUserId({ org }: { org: SalesforceOrg }) {
	return JSON.stringify(
		{
			"status": 0,
			"result": [
				{
					"defaultMarker": "(A)",
					"alias": `${org.getAlias()}`,
					"username": "test-a3cn1nmylp3a@example.com",
					"profileName": "System Administrator",
					"orgId": "00D01000000x7VPEAY",
					"accessToken": "382d0649335783828fde3e08ace21fc8c0e189025708238c6d058054ec810cc470f0a2cd3ba5e3e1c1cd10d9e7be379def69679b62917bbd770d177a2bab2859088336bc99e6896e145126b58358f309754efc0e3a022ad0a6c6753bf43e5a73db22036f311b5392615653a860f474765c85aaf1f95d:be632496481fc40b2f3c89880f34da74",
					"instanceUrl": "https://customer-ruby-862-dev-ed.scratch.my.salesforce.com",
					"loginUrl": "https://CS194.salesforce.com",
					"userId": ""
				}
			],
			"warnings": []
		}
	);
}

function genOrgListUsersWithoutUserIdKey({ org }: { org: SalesforceOrg }) {
	return JSON.stringify(
		{
			"status": 0,
			"result": [
				{
					"defaultMarker": "(A)",
					"alias": `${org.getAlias()}`,
					"username": "test-a3cn1nmylp3a@example.com",
					"profileName": "System Administrator",
					"orgId": "00D01000000x7VPEAY",
					"accessToken": "382d0649335783828fde3e08ace21fc8c0e189025708238c6d058054ec810cc470f0a2cd3ba5e3e1c1cd10d9e7be379def69679b62917bbd770d177a2bab2859088336bc99e6896e145126b58358f309754efc0e3a022ad0a6c6753bf43e5a73db22036f311b5392615653a860f474765c85aaf1f95d:be632496481fc40b2f3c89880f34da74",
					"instanceUrl": "https://customer-ruby-862-dev-ed.scratch.my.salesforce.com",
					"loginUrl": "https://CS194.salesforce.com"
				}
			],
			"warnings": []
		}
	);
}