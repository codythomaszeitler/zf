import { SalesforceLogLevel } from "./salesforceLogLevel";

export interface DebugLevel {
	id?: string;
	developerName: string;
	language: SalesforceLogLevel;
	apexCode: SalesforceLogLevel;
	visualforce: SalesforceLogLevel;
	system: SalesforceLogLevel;
	database: SalesforceLogLevel;
	callout: SalesforceLogLevel;
	validation: SalesforceLogLevel;
	workflow: SalesforceLogLevel;
}

export class DebugLevelBuilder {
	private id?: string;
	private developerName?: string;
	private language?: SalesforceLogLevel;
	private apexCode?: SalesforceLogLevel;
	private visualforce?: SalesforceLogLevel;
	private system?: SalesforceLogLevel;
	private database?: SalesforceLogLevel;
	private callout?: SalesforceLogLevel;
	private validation?: SalesforceLogLevel;
	private workflow?: SalesforceLogLevel;

	public constructor(params : {
		developerName : string
	}) {
		this.developerName = params.developerName;	
	}

	public withId(id: string): DebugLevelBuilder {
		this.id = id;
		return this;
	}

	public withDeveloperName(developerName: string): DebugLevelBuilder {
		this.developerName = developerName;
		return this;
	}

	public withLanguage(language: SalesforceLogLevel): DebugLevelBuilder {
		this.language = language;
		return this;
	}

	public withApexCode(apexCode: SalesforceLogLevel): DebugLevelBuilder {
		this.apexCode = apexCode;
		return this;
	}

	public withVisualforce(visualforce: SalesforceLogLevel): DebugLevelBuilder {
		this.visualforce = visualforce;
		return this;
	}

	public withSystem(system: SalesforceLogLevel): DebugLevelBuilder {
		this.system = system;
		return this;
	}

	public withDatabase(database: SalesforceLogLevel): DebugLevelBuilder {
		this.database = database;
		return this;
	}

	public withCallout(callout: SalesforceLogLevel): DebugLevelBuilder {
		this.callout = callout;
		return this;
	}

	public withValidation(validation: SalesforceLogLevel): DebugLevelBuilder {
		this.validation = validation;
		return this;
	}

	public withWorkflow(workflow: SalesforceLogLevel): DebugLevelBuilder {
		this.workflow = workflow;
		return this;
	}

	public build(): DebugLevel {
		return {
			id: this.id,
			developerName: this.developerName || "",
			language: this.language || SalesforceLogLevel.none,
			apexCode: this.apexCode || SalesforceLogLevel.none,
			visualforce: this.visualforce || SalesforceLogLevel.none,
			system: this.system || SalesforceLogLevel.none,
			database: this.database || SalesforceLogLevel.none,
			callout: this.callout || SalesforceLogLevel.none,
			validation: this.validation || SalesforceLogLevel.none,
			workflow: this.workflow || SalesforceLogLevel.none
		};
	}
}

export function intoKeyValueStrings(debugLevelSObject : DebugLevel) : string[] {

	const keyValuePairs : string[] = [];

	keyValuePairs.push(`DeveloperName=${debugLevelSObject.developerName}`);
	keyValuePairs.push(`MasterLabel=${debugLevelSObject.developerName}`);
	keyValuePairs.push(`ApexCode=${debugLevelSObject.apexCode}`);
	keyValuePairs.push(`Visualforce=${debugLevelSObject.visualforce}`);
	keyValuePairs.push(`System=${debugLevelSObject.system}`);
	keyValuePairs.push(`Database=${debugLevelSObject.database}`);
	keyValuePairs.push(`Callout=${debugLevelSObject.callout}`);
	keyValuePairs.push(`Validation=${debugLevelSObject.validation}`);
	keyValuePairs.push(`Workflow=${debugLevelSObject.workflow}`);

	return keyValuePairs;
}