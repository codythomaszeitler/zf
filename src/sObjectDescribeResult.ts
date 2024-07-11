import { Logger } from "./logger";
import { SObjectApiName } from "./sObjectApiName";
import { z } from 'zod';

const sobjectDescribeChildRelationshipResultSchema = z.object({
    cascadeDelete: z.boolean(),
    childSObject: z.string(),
    deprecatedAndHidden: z.boolean(),
    field: z.string(),
    junctionIdListNames: z.array(z.any()),
    junctionReferenceTo: z.array(z.any()),
    relationshipName: z.string().nullable(),
    restrictedDelete: z.boolean()
});

const sobjectDescribeFieldResultSchema = z.object({
    aggregatable: z.boolean(),
    custom: z.boolean(),
    filterable: z.boolean(),
    groupable: z.boolean(),
    inlineHelpText: z.string().nullable(),
    label: z.string().nullable(),
    name: z.string(),
    nillable: z.boolean(),
    picklistValues: z.array(z.object({
        active: z.boolean(),
        label: z.string().nullable(),
        value: z.string()
    })),
    referenceTo: z.array(z.string()),
    relationshipName: z.string().nullable(),
    sortable: z.boolean(),
    type: z.string()
});

const sobjectDescribeResultSchema = z.object({
    result: z.object({
        childRelationships: z.array(sobjectDescribeChildRelationshipResultSchema),
        fields: z.array(sobjectDescribeFieldResultSchema),
        custom: z.boolean(),
        name: z.string(),
        queryable: z.boolean()
    })
});

export type SObjectDescribeResult = z.infer<typeof sobjectDescribeResultSchema>;
export type SObjectDescribeChildRelationshipResult = z.infer<typeof sobjectDescribeChildRelationshipResultSchema>;
export type SObjectDescribeFieldResult = z.infer<typeof sobjectDescribeFieldResultSchema>;

export function intoSObjectDescribeResult(cliOutputJson: unknown) {
    try {
        return sobjectDescribeResultSchema.parse(cliOutputJson);
    } catch (e: unknown) {
        if (e instanceof Error) {
            Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
            Logger.get().error(e);
        }
        return undefined;
    }
}

export class SObjectDescribeResultDeprecated {

    private readonly apiName: SObjectApiName;
    private readonly fields: SObjectFieldDescribeResultDeprecated[];
    private readonly childRelationships: SObjectChildRelationshipDescribeResultDeprecated[];

    public constructor (params: {
        apiName: SObjectApiName;
        fields: SObjectFieldDescribeResultDeprecated[],
        childRelationships: SObjectChildRelationshipDescribeResultDeprecated[]
    }) {
        this.apiName = params.apiName;
        this.fields = params.fields;
        this.childRelationships = params.childRelationships;
    }

    public getApiName(): SObjectApiName {
        return this.apiName;
    }

    public getFields(): SObjectFieldDescribeResultDeprecated[] {
        return [...this.fields];
    }

    public getFieldDescribeByApiName(name: string): SObjectFieldDescribeResultDeprecated | null {
        return this.fields.find((field) => field.getApiName() === name) || null;
    }

    public getChildRelationships(): SObjectChildRelationshipDescribeResultDeprecated[] {
        return [...this.childRelationships];
    }
}

export class SObjectFieldDescribeResultDeprecated {
    private readonly apiName: string;
    private readonly type: SObjectFieldType;
    private readonly referenceTo: string[];
    private readonly relationshipName: string;

    public constructor (params: {
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

export class SObjectChildRelationshipDescribeResultDeprecated {
    childSObject: string;
    relationshipName: string;

    public constructor ({
        childSObject,
        relationshipName
    }: { childSObject: string, relationshipName: string }) {
        this.childSObject = childSObject;
        this.relationshipName = relationshipName;
    }
}

