import { SalesforceId } from "./salesforceId";

export interface CreateableSObject {
	getSObjectName() : string;
	intoKeyValueString(): string;
	id : SalesforceId;
}
