import { DebugLogLevelId } from "./debugLogLevelId";
import { SalesforceId } from "./salesforceId";

export class DataCreateRecordResult {

	private debugLogLevelId: SalesforceId;

	public constructor(params: { debugLogLevelId: SalesforceId}) {
		this.debugLogLevelId = params.debugLogLevelId;
	}

	public getDebugLogLevelId(): SalesforceId {
		return this.debugLogLevelId;
	}
}