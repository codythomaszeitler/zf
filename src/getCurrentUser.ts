import { SalesforceCli } from "./salesforceCli";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export const USER_SOBJECT_NAME = 'User';

export async function getCurrentUser({ cli, targetOrg }: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli
}): Promise<CurrentUser | null> {
	const result = await cli.orgListUsers({
		targetOrg
	});

	const found = result.getUsers().find(user => user.defaultMarker === '(A)');
	if (!found) {
		return null;
	}

	if (found.userId === NULL_SF_ID) {
		const userId = await getUserIdFor({
			username: found.username,
			cli,
			targetOrg
		});
		return {
			userId
		};
	} else {
		return {
			userId: found.userId
		};
	}
}

async function getUserIdFor({ username, cli, targetOrg }: { username: string, cli: SalesforceCli, targetOrg: SalesforceOrg }) {
	const dataQueryResult = await cli.dataQuery({
		targetOrg: targetOrg,
		useToolingApi: true,
		query: {
			from: USER_SOBJECT_NAME,
			where: `Username = '${username}'`
		}
	});

	if (typeof dataQueryResult === 'string') {
		throw new Error('Should not have received a string back.');
	}

	const users = dataQueryResult.getSObjects();
	const user = users[0];
	const id = SalesforceId.get(user.Id);
	return id;
}

export interface CurrentUser {
	userId: SalesforceId;
}