import { DebugLogLevelId } from "./debugLogLevelId";

export class DataCreateRecordResult {

	private debugLogLevelId: DebugLogLevelId;

	public constructor(params: { debugLogLevelId: DebugLogLevelId }) {
		this.debugLogLevelId = params.debugLogLevelId;
	}

	public getDebugLogLevelId(): DebugLogLevelId {
		return this.debugLogLevelId;
	}
}