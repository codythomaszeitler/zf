import { SalesforceId } from "./salesforceId";

export const APEX_CLASS_SOBJECT_NAME = 'ApexClass';

export class ApexClass {

	private readonly id: SalesforceId;
	private readonly symbolTable?: SymbolTable;
	private readonly name: string;

	public constructor(params: {
		id: SalesforceId,
		name: string,
		symbolTable?: SymbolTable
	}) {
		this.id = params.id;
		this.symbolTable = params.symbolTable;
		this.name = params.name;
	}

	public getName() {
		return this.name;
	}

	public getPublicConstructors() {

	}

	public getPublicMethods() {

	}

	public getPublicProperties() {

	}
}

type ApexModifier = 'public' | 'private' | 'protected' | 'with sharing';

interface Parameter {
	name: string;
	type: string;
}

export interface SymbolTable {
	readonly constructors: {
		readonly modifiers: ApexModifier[];
		readonly name: string;
		readonly parameters: Parameter[];
	}[];

	readonly methods: {
		readonly modifiers: ApexModifier[];
		readonly name: string;
		readonly parameters: Parameter[];
	}[];

	readonly properties: ({
		readonly modifiers: ApexModifier[];
	} & Parameter)[];
}