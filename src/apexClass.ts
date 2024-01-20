import { SalesforceId } from "./salesforceId";

export const APEX_CLASS_SOBJECT_NAME = 'ApexClass';

export class ApexClass {

	private readonly id?: SalesforceId;
	private readonly symbolTable?: SymbolTable;
	private readonly name: string;
	private readonly body: string;

	public constructor(params: {
		id?: SalesforceId,
		name: string,
		symbolTable?: SymbolTable,
		body?: string
	}) {
		this.id = params.id;
		this.symbolTable = params.symbolTable;
		this.name = params.name;
		this.body = params.body ?? "";
	}

	public getName() {
		return this.name;
	}

	public getBody() {
		return this.body;
	}

	public getNameWithExtension() {
		return this.name + '.cls';
	}

	public getPublicConstructors() {
		if (!this.symbolTable) {
			return [];
		}

		return this.symbolTable.constructors.filter(constructor =>
			this.hasPublicModifier(constructor.modifiers)
		);
	}

	public getPublicMethods() {
		if (!this.symbolTable) {
			return [];
		}

		return this.symbolTable.methods.filter(method =>
			this.hasPublicModifier(method.modifiers)
		);
	}

	public getPublicProperties() {
		if (!this.symbolTable) {
			return [];
		}

		return this.symbolTable.properties.filter(property =>
			this.hasPublicModifier(property.modifiers)
		);
	}

	private hasPublicModifier(modifiers: ApexModifier[]) {
		return modifiers.includes('public');
	}
}

export type ApexModifier = 'public' | 'private' | 'protected' | 'with sharing' | 'static';

export interface Parameter {
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
		readonly returnType: string;
	}[];

	readonly properties: ({
		readonly modifiers: ApexModifier[];
	} & Parameter)[];
}