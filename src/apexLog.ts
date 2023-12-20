import { SalesforceId } from "./salesforceId";

export class ApexLog {

	private readonly id: SalesforceId;
	private readonly application: string;
	private readonly duration: number;
	private readonly logLength: number;
	private readonly operation: string;
	private readonly status: string;
	private readonly startTime : Date;

	public constructor(params: {
		id: SalesforceId;
		application: string;
		duration: number;
		logLength: number;
		operation: string;
		status: string;
		startTime : Date;
	}) {
		this.id = params.id;
		this.application = params.application;
		this.duration = params.duration;
		this.logLength = params.logLength;
		this.operation = params.operation;
		this.status = params.status;
		this.startTime = params.startTime;
	}

	public getApplication(): string {
		return this.application;
	}

	public getDuration(): number {
		return this.duration;
	}

	public getLogLength(): number {
		return this.logLength;
	}

	public getOperation(): string {
		return this.operation;
	}

	public getStatus(): string {
		return this.status;
	}

	public getId(): SalesforceId {
		return this.id;
	}

	public getStartTime(): Date {
		return this.startTime;
	}
}