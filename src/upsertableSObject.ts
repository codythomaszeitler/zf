import { SalesforceId } from "./salesforceId";

export interface UpsertableSObject {
	getSObjectName(): string;
	intoKeyValueString(): string;
	id: SalesforceId;
}
