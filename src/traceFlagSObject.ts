import { trace } from 'console';
import { SalesforceLogLevel } from './salesforceLogLevel';

export interface TraceFlagSObject {
	readonly id: string;
	readonly debugLevelId: string;
	readonly expirationDate: Date;
	readonly logType: LogType;
	readonly startDate?: Date;
	readonly tracedEntityId: string;
	readonly apexCode: SalesforceLogLevel;
	readonly callout: SalesforceLogLevel;
	readonly database: SalesforceLogLevel;
	readonly system: SalesforceLogLevel;
	readonly validation: SalesforceLogLevel;
	readonly visualforce: SalesforceLogLevel;
	readonly workflow: SalesforceLogLevel;
}

export class TraceFlagSObjectBuilder {
	private id?: string;
	private debugLevelId?: string;
	private expirationDate?: Date;
	private logType?: LogType;
	private startDate?: Date;
	private tracedEntityId?: string;
	private apexCode?: SalesforceLogLevel;
	private callout?: SalesforceLogLevel;
	private database?: SalesforceLogLevel;
	private system?: SalesforceLogLevel;
	private validation?: SalesforceLogLevel;
	private visualforce?: SalesforceLogLevel;
	private workflow?: SalesforceLogLevel;

	public withLogType(logType: LogType): TraceFlagSObjectBuilder {
		this.logType = logType;
		return this;
	}

	public withDebugLevelId(debugLevelId: string): TraceFlagSObjectBuilder {
		this.debugLevelId = debugLevelId;
		return this;
	}

	public withExpirationDate(expirationDate: Date): TraceFlagSObjectBuilder {
		this.expirationDate = expirationDate;
		return this;
	}

	public withStartDate(startDate: Date): TraceFlagSObjectBuilder {
		this.startDate = startDate;
		return this;
	}

	public withTracedEntityId(tracedEntityId: string): TraceFlagSObjectBuilder {
		this.tracedEntityId = tracedEntityId;
		return this;
	}

	public withCallout(callout: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.callout = callout;
		return this;
	}

	public withDatabase(database: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.database = database;
		return this;
	}

	public withSystem(system: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.system = system;
		return this;
	}

	public withValidation(validation: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.validation = validation;
		return this;
	}

	public withVisualforce(visualforce: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.visualforce = visualforce;
		return this;
	}

	public withWorkflow(workflow: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.workflow = workflow;
		return this;
	}

	public withId(id: string): TraceFlagSObjectBuilder {
		this.id = id;
		return this;
	}

	public withApexCode(apexCode: SalesforceLogLevel): TraceFlagSObjectBuilder {
		this.apexCode = apexCode;
		return this;
	}

	public build(): TraceFlagSObject {
		return {
			id: this.id || "",
			debugLevelId: this.debugLevelId || "",
			expirationDate: this.expirationDate || new Date(Date.now()),
			logType: this.logType || LogType.developerLog,
			startDate: this.startDate,
			tracedEntityId: this.tracedEntityId || "",
			apexCode: this.apexCode || SalesforceLogLevel.none,
			callout: this.callout || SalesforceLogLevel.none,
			database: this.database || SalesforceLogLevel.none,
			system: this.system || SalesforceLogLevel.none,
			validation: this.validation || SalesforceLogLevel.none,
			visualforce: this.visualforce || SalesforceLogLevel.none,
			workflow: this.workflow || SalesforceLogLevel.none
		};
	}
}

export function intoKeyValueString(traceFlagSObject : TraceFlagSObject) : string {
	return intoKeyValueStrings(traceFlagSObject).join(" ");
}

export function intoKeyValueStrings(traceFlagSObject: TraceFlagSObject): string[] {
	const keyValuePairs: string[] = [];

	if (traceFlagSObject.debugLevelId) {
		keyValuePairs.push(`DebugLevelId=${traceFlagSObject.debugLevelId}`);
	}

	keyValuePairs.push(`LogType=${traceFlagSObject.logType}`);

	if (traceFlagSObject.tracedEntityId) {
		keyValuePairs.push(`TracedEntityId=${traceFlagSObject.tracedEntityId}`);
	}

	if (traceFlagSObject.startDate) {
		keyValuePairs.push(`StartDate=${traceFlagSObject.startDate.toISOString()}`);
	}

	keyValuePairs.push(`ExpirationDate=${traceFlagSObject.expirationDate.toISOString()}`);

	return keyValuePairs;
}

export class LogType {

	public static readonly classTracing: LogType = new LogType("CLASS_TRACING");
	public static readonly developerLog: LogType = new LogType("DEVELOPER_LOG");
	public static readonly profiling: LogType = new LogType("PROFILING");
	public static readonly userDebug: LogType = new LogType("USER_DEBUG");

	private readonly raw: string;

	private constructor(raw: string) {
		this.raw = raw;
	}

	public toString() {
		return this.raw;
	}
}