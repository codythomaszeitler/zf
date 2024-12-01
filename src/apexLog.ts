import { Command } from "./command";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class ApexLog {

	private readonly id: SalesforceId;
	private readonly application: string;
	private readonly duration: number;
	private readonly logLength: number;
	private readonly operation: string;
	private readonly status: string;
	private readonly startTime: Date;

	public constructor (params: {
		id: SalesforceId;
		application: string;
		duration: number;
		logLength: number;
		operation: string;
		status: string;
		startTime: Date;
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

	public getTreeViewString(): string {
		return `[${this.id.toString()}] - [${this.startTime.toLocaleTimeString()}] - MB: [${this.logLength}] - MiS: [${this.duration}] - Status: [${this.status}]`;
	}
}

export function filterUserDebugs(log: string) {
	return log.split('\n').filter(line => line.includes('USER_DEBUG')).join('\n');
}

export class ApexListLogCommand extends Command {
	async execute({ targetOrg }: { targetOrg?: SalesforceOrg }) {
		const targetOrDefaultOrg = await this.getTargetOrDefaultOrg(targetOrg);
		const apexListLogResult = await this.getCli().apexListLog({
			targetOrg: targetOrDefaultOrg
		});

		if (!apexListLogResult) {
			return [];
		}

		// eslint-disable-next-line 
		const apexLogs = apexListLogResult.result.map(({ Id, Application, DurationMilliseconds, LogLength, StartTime, Status, Operation }) => {
			return new ApexLog({
				id: SalesforceId.get(Id),
				application: Application,
				duration: DurationMilliseconds,
				logLength: LogLength,
				startTime: new Date(Date.parse(StartTime)),
				status: Status,
				operation: Operation
			});
		});
		return apexLogs;
	}
}