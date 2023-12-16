import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export async function getCurrentUser(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli
}): Promise<CurrentUser | null> {
	const result = await params.cli.orgListUsers({
		targetOrg: params.targetOrg
	});

	const found = result.getUsers().find(user => user.defaultMarker === '(A)');
	if (!found) {
		return null;
	}
	return {
		userId: found?.userId
	};
}

export interface CurrentUser {
	userId: SalesforceId;
}