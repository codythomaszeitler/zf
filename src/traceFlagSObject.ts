
import { SalesforceLogLevel } from './salesforceLogLevel';

export interface TraceFlagSObject {
	readonly id: string;
	readonly debugLevelId: string;
	readonly expirationDate: Date;
	readonly logType: string;
	readonly startDate: Date;
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
	private logType?: string;
	private startDate?: Date;
	private tracedEntityId?: string;
	private apexCode?: SalesforceLogLevel;
	private callout?: SalesforceLogLevel;
	private database?: SalesforceLogLevel;
	private system?: SalesforceLogLevel;
	private validation?: SalesforceLogLevel;
	private visualforce?: SalesforceLogLevel;
	private workflow?: SalesforceLogLevel;

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
			logType: this.logType || "DEVELOPER_LOG",
			startDate: this.startDate || new Date(Date.now()),
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