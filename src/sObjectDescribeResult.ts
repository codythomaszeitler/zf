import { SObjectApiName } from "./sObjectApiName";

export class SObjectDescribeResult {

    private readonly apiName: SObjectApiName;
    private readonly fields: SObjectFieldDescribeResult[];

    public constructor(params: {
        apiName: SObjectApiName;
        fields: SObjectFieldDescribeResult[]
    }) {
        this.apiName = params.apiName;
        this.fields = params.fields;
    }

    public getApiName() : SObjectApiName {
        return this.apiName;
    }

    public getFields(): SObjectFieldDescribeResult[] {
        return [...this.fields];
    }

    public getFieldDescribeByApiName(name: string): SObjectFieldDescribeResult | null {
        return this.fields.find((field) => field.getApiName() === name) || null;
    }
}

export class SObjectFieldDescribeResult {
    private readonly apiName: string;
    private readonly type: SObjectFieldType;

    public constructor(params: {
        apiName: string,
        type: SObjectFieldType
    }) {
        this.apiName = params.apiName;
        this.type = params.type;
    }

    public getApiName(): string {
        return this.apiName;
    }

    public getType(): SObjectFieldType {
        return this.type;
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