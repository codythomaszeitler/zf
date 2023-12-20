import { ApexLog } from "./apexLog";

export class ApexListLogResult {
	private readonly logs: ApexLog[];

	public constructor(params: {
		logs: ApexLog[]
	}) {
		this.logs = params.logs;
	}

	public getLogs() : ApexLog[] {
		return [...this.logs];
	}
}