import { Logger } from "./logger";
import { ProgressToken } from "./progressToken";
import { SObjectDescribeResult, SObjectFieldDescribeResult, SObjectFieldType } from "./sObjectDescribeResult";
import { SObjectListResult } from "./sObjectListResult";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import * as fs from "fs/promises";

export function fauxSObjectIntoString(params: {
    fauxApexClass: FauxSObjectApexClass
}) {
    const fauxApexClass = params.fauxApexClass;
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
        recursive : true
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
        }).then(async (sObjectDescribeResult: any) => {
            params.progressToken.report({
                progress: (completed / total),
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
    const output: FauxSObjectApexClass = {
        name: params.describe.getApiName().toString(),
        fields: mapFields(params.describe.getFields())
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

function mapFields(fields: SObjectFieldDescribeResult[]) {
    const apexFields: FauxSObjectField[] = [];

    fields.forEach(field => {
        const type = apiTypeNameToApexTypeName(field.getType());
        if (type) {
            apexFields.push({
                name: field.getApiName(),
                modifier: 'global',
                type
            });
        }
    });
    return apexFields;
}

function apiTypeNameToApexTypeName(type: SObjectFieldType) {
    if (type === 'string' || type === 'url' || type === 'phone' || type === 'picklist' || type === 'multipicklist' || type === 'textarea' || type === 'encryptedstring') {
        return 'String';
    } else if (type === 'id') {
        return 'Id';
    } else if (type === 'boolean') {
        return 'Boolean';
    } else if (type === 'time' || type === 'date') {
        return 'Date';
    } else if (type === 'datetime') {
        return 'Datetime';
    } else if (type === 'double' || type === 'percent' || type === 'currency') {
        return 'Double';
    }
}

// global class Account {
//     global String Name;
//}