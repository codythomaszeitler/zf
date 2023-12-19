import { SalesforceId } from "./salesforceId";

export class ApexLog {

	private readonly id: SalesforceId;
	private readonly duration: number;
	private readonly location: string;
	private readonly operation: string;
	private readonly request: string;
	private readonly startTime: Date;
	private readonly status: string;

	public constructor(params: {
		id: SalesforceId;
		duration: number;
		location: string;
		operation: string;
		request: string;
		startTime: Date;
		status: string;
		filePath : string | undefined;
	}) {
		this.id = params.id;
		this.duration = params.duration;
		this.location = params.location;
		this.operation = params.operation;
		this.request = params.request;
		this.startTime = params.startTime;
		this.status = params.status;
	}

	public getId() : SalesforceId {
		return this.id;
	}
}


