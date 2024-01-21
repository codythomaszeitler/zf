import { SObjectApiName } from "./sObjectApiName";

export class SObjectDescribeResult {

    private readonly apiName: SObjectApiName;
    private readonly fields: SObjectFieldDescribeResult[];
    private readonly childRelationships: SObjectChildRelationshipDescribeResult[];

    public constructor(params: {
        apiName: SObjectApiName;
        fields: SObjectFieldDescribeResult[],
        childRelationships: SObjectChildRelationshipDescribeResult[]
    }) {
        this.apiName = params.apiName;
        this.fields = params.fields;
        this.childRelationships = params.childRelationships;
    }

    public getApiName(): SObjectApiName {
        return this.apiName;
    }

    public getFields(): SObjectFieldDescribeResult[] {
        return [...this.fields];
    }

    public getFieldDescribeByApiName(name: string): SObjectFieldDescribeResult | null {
        return this.fields.find((field) => field.getApiName() === name) || null;
    }

    public getChildRelationships(): SObjectChildRelationshipDescribeResult[] {
        return [...this.childRelationships];
    }
}

export class SObjectFieldDescribeResult {
    private readonly apiName: string;
    private readonly type: SObjectFieldType;
    private readonly referenceTo: string[];
    private readonly relationshipName: string;

    public constructor(params: {
        apiName: string,
        type: SObjectFieldType,
        referenceTo?: string[],
        relationshipName?: string
    }) {
        this.apiName = params.apiName;
        this.type = params.type;
        this.referenceTo = params.referenceTo ?? [];
        this.relationshipName = params.relationshipName ?? "";
    }

    public getApiName(): string {
        return this.apiName;
    }

    public getType(): SObjectFieldType {
        return this.type;
    }

    public getRelationshipName(): string {
        return this.relationshipName;
    }

    public getReferenceTo(): string[] {
        return this.referenceTo;
    }
}

export type SObjectFieldType =
    | 'id'
    | 'boolean'
    | 'string'
    | 'url'
    | 'time'
    | 'reference'
    | 'datetime'
    | 'double'
    | 'location'
    | 'percent'
    | 'phone'
    | 'picklist'
    | 'multipicklist'
    | 'textarea'
    | 'encryptedstring'
    | 'date'
    | 'currency';

export class SObjectChildRelationshipDescribeResult {
    childSObject: string;
    relationshipName: string;

    public constructor({
        childSObject,
        relationshipName
    }: { childSObject: string, relationshipName: string }) {
        this.childSObject = childSObject;
        this.relationshipName = relationshipName;
    }
}