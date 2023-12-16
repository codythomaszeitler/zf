import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class OrgListUsersResult {
	private readonly users: OrgListUser[];

	public constructor(params: {
		users: OrgListUser[]
	}) {
		this.users = [...params.users];
	}

	public getUsers() {
		return [...this.users];
	}
}

export interface OrgListUser {
	alias: SalesforceOrg;
	userId: SalesforceId;
	defaultMarker: string;
}