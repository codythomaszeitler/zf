import { SObject } from "./sObject";

export class DataQueryResult {

	private readonly sObjects : SObject[];

	public constructor(params : {
		sObjects : SObject[]
	}) {
		this.sObjects = params.sObjects;
	}

	public getSObjects() {
		return [...this.sObjects];
	}
}