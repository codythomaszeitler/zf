import { Logger } from "./logger";
import { ProgressToken } from "./progressToken";
import { SObjectChildRelationshipDescribeResult, SObjectDescribeResult, SObjectFieldDescribeResult } from "./sObjectDescribeResult";
import { SObjectListResult } from "./sObjectListResult";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import * as fs from "fs/promises";

export function fauxSObjectIntoString({ fauxApexClass }: {
    fauxApexClass: FauxSObjectApexClass
}) {
    const fields = fauxApexClass.fields.map(field => '\t' + field.modifier + ' ' + field.type + ' ' + field.name + ';').join('\n');
    return `global class ${fauxApexClass.name} {\n` + fields + '\n}';
}

export async function generateFauxSObjects(params: {
    targetOrg: SalesforceOrg,
    salesforceCli: SalesforceCli,
    outputDir: string,
    progressToken: ProgressToken
}) {
    await fs.mkdir(params.outputDir, {
        recursive: true
    });

    const sobjectListResult: SObjectListResult = await params.salesforceCli.sobjectList({
        targetOrg: params.targetOrg
    });

    const names = sobjectListResult.getSObjectApiNames().reverse();
    const total = names.length;
    let completed = 0;

    const runSObjectDescribe = async (): Promise<any> => {
        if (params.progressToken.isCancellationRequested) {
            return;
        }

        const apiName = names.pop();
        if (!apiName) {
            return;
        }

        return params.salesforceCli.sobjectDescribe({
            targetOrg: params.targetOrg,
            sObjectApiName: apiName
        }).then(async (sObjectDescribeResult: SObjectDescribeResult) => {
            params.progressToken.report({
                progress: (completed / total) * 100,
                title: apiName.toString()
            });

            const apexClass: FauxSObjectApexClass = generateFauxSObject({
                describe: sObjectDescribeResult
            });

            if (apexClass.fields.length === 1) {
                completed++;
                return runSObjectDescribe();
            }

            const fileName = params.outputDir + '/' + apiName.toString() + ".cls";
            const contents = fauxSObjectIntoString({
                fauxApexClass: apexClass
            });

            await fs.writeFile(fileName, contents).then(() => {
                completed++;
            }).catch(e => {
                Logger.get().warn(e.message);
            });

            return runSObjectDescribe();
        });
    };

    const promises = [];
    const numGenerators = 10;
    for (let i = 0; i < numGenerators; i++) {
        promises.push(runSObjectDescribe());
    }

    await Promise.all(promises);
}

export function generateFauxSObject(params: {
    describe: SObjectDescribeResult
}): FauxSObjectApexClass {
    const fields = mapFields(params.describe.getFields());
    fields.push(...mapChildRelationships(params.describe.getChildRelationships()));

    const output: FauxSObjectApexClass = {
        name: params.describe.getApiName().toString(),
        fields
    };
    return output;
}

export interface FauxSObjectApexClass {
    name: string;
    fields: FauxSObjectField[];
}

export interface FauxSObjectField {
    name: string;
    modifier: string;
    type: string;
}

function mapFields(fields: SObjectFieldDescribeResult[]): FauxSObjectField[] {
    const apexFields: FauxSObjectField[] = [];
    fields.forEach(field => {
        apexFields.push(...apiTypeNameToApexTypeName(field));
    });
    return apexFields;
}

function apiTypeNameToApexTypeName(field: SObjectFieldDescribeResult): FauxSObjectField[] {
    const fauxSObjectFields: FauxSObjectField[] = [];
    if (field.getType() === 'string' || field.getType() === 'url' || field.getType() === 'phone' || field.getType() === 'picklist' || field.getType() === 'multipicklist' || field.getType() === 'textarea' || field.getType() === 'encryptedstring') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'String',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'id') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'Id',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'boolean') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'Boolean',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'time' || field.getType() === 'date') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'Date',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'datetime') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'Datetime',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'double' || field.getType() === 'percent' || field.getType() === 'currency') {
        const fauxSObjectField: FauxSObjectField = {
            name: field.getApiName(),
            type: 'Double',
            modifier: 'global'
        };

        fauxSObjectFields.push(fauxSObjectField);
    } else if (field.getType() === 'reference') {
        fauxSObjectFields.push({
            name: field.getApiName(),
            type: 'Id',
            modifier: 'global'
        });

        field.getReferenceTo().forEach(reference => {
            fauxSObjectFields.push({
                name: field.getRelationshipName(),
                type: reference,
                modifier: 'global'
            });
        });
    }

    return fauxSObjectFields;
}

function mapChildRelationships(childRelationships: SObjectChildRelationshipDescribeResult[]): FauxSObjectField[] {
    return childRelationships.filter(childRelationship => childRelationship.relationshipName).map(childRelationship => {
        return {
            modifier: 'global',
            name: childRelationship.relationshipName,
            type: `List<${childRelationship.childSObject}>`
        };
    });
}