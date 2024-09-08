import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import { Logger } from "./logger";
import { SObjectApiName } from "./sObjectApiName";
import { SObjectChildRelationshipDescribeResultDeprecated, SObjectDescribeResultDeprecated, SObjectFieldDescribeResultDeprecated } from "./sObjectDescribeResult";
import { SalesforceOrg } from "./salesforceOrg";

export function fauxSObjectIntoString({ fauxApexClass }: {
    fauxApexClass: FauxSObjectApexClass
}) {
    const fields = fauxApexClass.fields.map(field => '\t' + field.modifier + ' ' + field.type + ' ' + field.name + ';').join('\n');
    return `global class ${fauxApexClass.name} {\n` + fields + '\n}';
}

function generateFauxSObject(params: {
    describe: SObjectDescribeResultDeprecated
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

function mapFields(fields: SObjectFieldDescribeResultDeprecated[]): FauxSObjectField[] {
    const apexFields: FauxSObjectField[] = [];
    fields.forEach(field => {
        apexFields.push(...describeResultToApexField(field));
    });
    return apexFields;
}

function describeResultToApexField(field: SObjectFieldDescribeResultDeprecated): FauxSObjectField[] {
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

        if (field.getReferenceTo().length > 1) {
            fauxSObjectFields.push({
                name: field.getRelationshipName(),
                type: 'SObject',
                modifier: 'global'
            });
        } else {
            field.getReferenceTo().forEach(reference => {
                fauxSObjectFields.push({
                    name: field.getRelationshipName(),
                    type: reference,
                    modifier: 'global'
                });
            });
        }
    }

    return fauxSObjectFields.filter(fauxSObjectField => fauxSObjectField.name);
}

function mapChildRelationships(childRelationships: SObjectChildRelationshipDescribeResultDeprecated[]): FauxSObjectField[] {
    return childRelationships.filter(childRelationship => childRelationship.relationshipName).map(childRelationship => {
        return {
            modifier: 'global',
            name: childRelationship.relationshipName,
            type: `List<${childRelationship.childSObject}>`
        };
    });
}

export class PickAndGenerateFauxSObjectCommand extends Command {

    public async execute({ targetOrg, destDir }: { targetOrg: SalesforceOrg; destDir: Uri }) {
        const { result: sObjectNames } = await this.getCli().sobjectList({ targetOrg });
        if (sObjectNames) {
            const selection = await this.getIde().showQuickPick(sObjectNames);

            const generateFauxSObjectsCommand = new GenerateFauxSObjectsCommand({
                cli: this.getCli(),
                ide: this.getIde()
            });

            await generateFauxSObjectsCommand.execute({
                targetOrg, destDir, sObjectsToGenerate: [selection]
            });
        }
    }
}

export class GenerateFauxSObjectsCommand extends Command {

    public async execute({ targetOrg, destDir, sObjectsToGenerate }: { targetOrg: SalesforceOrg, destDir: Uri, sObjectsToGenerate?: string[] }) {
        await this.getIde().withProgress(async (progressToken) => {
            const getSObjectNames = async () => {
                if (sObjectsToGenerate) {
                    return sObjectsToGenerate;
                }

                const sObjectListResult = await this.getCli().sobjectListDeprecated({
                    targetOrg
                });

                const sObjectNames = sObjectListResult.getSObjectApiNamesAsString();
                return sObjectNames;
            };

            if (progressToken.isCancellationRequested) {
                return;
            }

            const sObjectNames = await getSObjectNames();

            let completed = 0;
            const total = sObjectNames.length;

            const queryDescribeAndWriteFauxSObjectApexClass: any = async () => {
                if (progressToken.isCancellationRequested) {
                    return Promise.resolve();
                }
                if (sObjectNames.length === 0) {
                    return Promise.resolve();
                }

                const sObjectName = sObjectNames.pop();
                progressToken.report({
                    progress: (completed / total) * 100,
                    title: sObjectName
                });

                if (!sObjectName) {
                    return Promise.resolve();
                }

                try {
                    const sObjectDescribeResult = await this.getCli().sobjectDescribeDeprecated({
                        targetOrg,
                        sObjectApiName: SObjectApiName.get(sObjectName)
                    });

                    const fauxApexClass = generateFauxSObject({
                        describe: sObjectDescribeResult
                    });

                    const uri = Uri.join(destDir, `${fauxApexClass.name}.cls`);
                    await this.getIde().writeFile({
                        uri,
                        contents: fauxSObjectIntoString({
                            fauxApexClass
                        })
                    });
                    completed++;

                    return queryDescribeAndWriteFauxSObjectApexClass();
                } catch (e: any) {
                    Logger.get().warn(e.message);
                    this.getIde().showWarningMessage(e.message);
                    return queryDescribeAndWriteFauxSObjectApexClass();
                }
            };

            const promises = [];

            const numGenerators = 10;
            for (let i = 0; i < numGenerators; i++) {
                promises.push(queryDescribeAndWriteFauxSObjectApexClass());
            }

            await Promise.all(promises);
        }, {
            title: 'Generate Faux SObjects'
        });
    }
}
