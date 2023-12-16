import { SalesforceId } from "./salesforceId";

export class DataCreateRecordResult {

	private recordId: SalesforceId;

	public constructor(params: { recordId: SalesforceId}) {
		this.recordId = params.recordId;
	}

	public getRecordId(): SalesforceId {
		return this.recordId;
	}
}