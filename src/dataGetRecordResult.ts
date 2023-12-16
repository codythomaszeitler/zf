import { SObject } from "./sObject";

export class DataGetRecordResult {

	private readonly sObject: SObject;

	public constructor(params: {
		sObject: SObject
	}) {
		this.sObject = params.sObject;
	}

	public getSObject() {
		return this.sObject;
	}
}