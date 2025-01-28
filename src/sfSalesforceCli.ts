import { ApexGetLogResult, intoApexGetLogResult } from "./apexGetLogResult";
import { ApexTestGetResult, ApexTestResult, ApexTestRunResult, parseStackTrace } from "./apexTestRunResult";
import { UpsertableSObject } from "./upsertableSObject";
import { DataCreateRecordResult } from "./dataCreateRecordResult";
import { DataQueryResult } from "./dataQueryResult";
import { Executor, ExecutorCommand, intoCliCommandString } from "./executor";
import { JobId } from "./jobId";
import { Logger } from "./logger";
import { OrgListUser, OrgListUsersResult } from "./orgListUsersResult";
import { SObject } from "./sObject";
import { SObjectApiName } from "./sObjectApiName";
import { intoSObjectDescribeResult, SObjectChildRelationshipDescribeResultDeprecated, SObjectDescribeResult, SObjectDescribeResultDeprecated, SObjectFieldDescribeResultDeprecated } from "./sObjectDescribeResult";
import { intoSObjectListResult, SObjectListResult, SObjectListResultDeprecated } from "./sObjectListResult";
import { ProjectRetrieveResult, SalesforceCli } from "./salesforceCli";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";
import { NO_SF_ORG_FOUND, SalesforceOrg } from "./salesforceOrg";
import { intoOrgListResult, intoOrgOpenResult, OrgListResult, OrgOpenResult } from "./sfOrgListResult";
import { SoqlQuery } from "./soqlQuery";
import { Uri } from "./uri";
import { ProjectDeployCancelResult, ProjectDeployPreviewResult, ProjectDeployResult, intoProjectDeployCancelResult, intoProjectDeployPreviewResult, intoProjectDeployResult } from "./projectDeploy/projectDeployResult";
import { ApexRunResult, intoApexRunResult } from "./runAnonApex/runAnonApex";
import { intoSalesforceOrgs } from "./openOrg";
import { ApexListLogResult, intoApexListLogResult } from "./apexLogTreeView/apexListLogResult";

export class SfSalesforceCli extends SalesforceCli {

    constructor (executor: Executor, proxy?: {}) {
        super(executor, proxy);
    }

    async orgList({ skipConnectionStatus }: { skipConnectionStatus: boolean; }): Promise<OrgListResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'org',
                'list',
                skipConnectionStatus ? '--skip-connection-status' : '',
                '--json'
            ]
        };
        const { stdout } = await this.exec(command);
        return intoOrgListResult(stdout);
    }

    async orgOpen({ targetOrg }: { targetOrg: SalesforceOrg; }): Promise<OrgOpenResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'org',
                'open',
                '--target-org',
                targetOrg.getTargetOrgName(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        return intoOrgOpenResult(stdout);
    }

    async openOrg(alias: string): Promise<void> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'org',
                'open',
                '--target-org',
                alias,
                '--json'
            ]
        };
        await this.exec(command);
    }

    async getDefaultOrg(): Promise<SalesforceOrg | null> {
        const orgListResult = await this.orgList({
            skipConnectionStatus: true
        });
        const orgs = intoSalesforceOrgs(orgListResult);
        return orgs.find(org => org.getIsDefaultOrg()) ?? null;
    }

    async projectDeployStart(params: { targetOrg: SalesforceOrg; sourceDir?: Uri[], async: boolean; }): Promise<ProjectDeployResult | undefined> {
        const getSourceDirArgsIfExist = () => {
            if (!params.sourceDir) {
                return [];
            }

            return ['--source-dir',
                ...params.sourceDir.map(uri => '"' + uri.getFileSystemPath() + '"')];
        };

        const getAsyncArgs = () => params.async ? ['--async'] : [];

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'start',
                '--target-org',
                params.targetOrg.getAlias(),
                ...getSourceDirArgsIfExist(),
                '--ignore-conflicts',
                ...getAsyncArgs(),
                '--json'
            ]
        };

        const stdout: unknown = (await this.exec(command)).stdout;
        return intoProjectDeployResult(stdout);
    }

    async projectDeployReport({ jobId }: { jobId: JobId; }): Promise<ProjectDeployResult | undefined> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'report',
                '--job-id',
                jobId.toString(),
                '--json'
            ]
        };

        const stdout: unknown = (await this.exec(command)).stdout;
        return intoProjectDeployResult(stdout);
    }

    async projectDeployResume({ jobId }: { jobId: JobId; }): Promise<ProjectDeployResult | undefined> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'resume',
                '--job-id',
                jobId.toString(),
                '--json'
            ]
        };

        const stdout: unknown = (await this.exec(command)).stdout;
        return intoProjectDeployResult(stdout);
    }

    async projectDeployCancel(params: { jobId?: JobId; targetOrg: SalesforceOrg; }): Promise<ProjectDeployCancelResult | undefined> {
        if (params.jobId) {
            const command: ExecutorCommand = {
                command: 'sf',
                args: [
                    'project',
                    'deploy',
                    'cancel',
                    '--job-id',
                    params.jobId.toString(),
                    '--target-org',
                    params.targetOrg.getAlias(),
                    '--json'
                ]
            };
            const stdout = (await this.exec(command)).stdout;
            return intoProjectDeployCancelResult(stdout);
        } else {
            const command: ExecutorCommand = {
                command: 'sf',
                args: [
                    'project',
                    'deploy',
                    'cancel',
                    '--use-most-recent',
                    '--target-org',
                    params.targetOrg.getAlias(),
                    '--json'
                ]
            };
            const stdout = (await this.exec(command)).stdout;
            return intoProjectDeployCancelResult(stdout);
        }
    }

    async projectDeployPreview({ targetOrg }: { targetOrg: SalesforceOrg; }): Promise<ProjectDeployPreviewResult | undefined> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'preview',
                '--target-org',
                targetOrg.getAlias(),
                '--json'
            ]
        };

        const stdout = (await this.exec(command)).stdout;
        return intoProjectDeployPreviewResult(stdout);
    }

    async projectManifestGenerate(params: { targetOrg: SalesforceOrg; outputDir: Uri; fileName: string; }): Promise<{}> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'manifest',
                'generate',
                '--from-org',
                params.targetOrg.getAlias(),
                '--output-dir',
                params.outputDir.getFileSystemPath(),
                '--json'
            ]
        };
        const { stdout } = await this.exec(command);
        return {};
    }

    async projectRetrieveStart({ targetOrg, outputDir, metadata }: { targetOrg: SalesforceOrg; outputDir?: Uri; metadata: string; }): Promise<ProjectRetrieveResult> {
        const outputDirArgs: string[] = [];
        if (outputDir) {
            outputDirArgs.push('--output-dir', outputDir.getFileSystemPath());
        }

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'retrieve',
                'start',
                '--metadata',
                '"' + metadata + '"',
                '--target-org',
                targetOrg.getAlias(),
                ...outputDirArgs,
                '--json'
            ]
        };
        const { stdout } = await this.exec(command);
        return stdout as ProjectRetrieveResult;
    }

    async sobjectList(params: {
        targetOrg: SalesforceOrg;
    }): Promise<SObjectListResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'sobject',
                'list',
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };
        const stdout = (await this.exec(command)).stdout as unknown;
        return intoSObjectListResult(stdout);
    }

    async sobjectDescribe(params: {
        targetOrg: SalesforceOrg,
        sObjectApiName: string;
    }): Promise<SObjectDescribeResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'sobject',
                'describe',
                '--sobject',
                params.sObjectApiName,
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const stdout = (await this.exec(command)).stdout;
        return intoSObjectDescribeResult(stdout);
    }

    async sobjectListDeprecated(params: {
        targetOrg: SalesforceOrg;
    }): Promise<SObjectListResultDeprecated> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'sobject',
                'list',
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        if (!stdout.result) {
            return new SObjectListResultDeprecated({
                sObjectApiNames: []
            });
        }

        const sObjectApiNames = stdout.result.map((result: string) => {
            return SObjectApiName.get(result);
        });

        return new SObjectListResultDeprecated({
            sObjectApiNames,
        });
    }

    async sobjectDescribeDeprecated(params: { targetOrg: SalesforceOrg; sObjectApiName: SObjectApiName; }): Promise<SObjectDescribeResultDeprecated> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'sobject',
                'describe',
                '--sobject',
                params.sObjectApiName.toString(),
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        const fields: SObjectFieldDescribeResultDeprecated[] = stdout.result.fields.map((field: any) => {
            return new SObjectFieldDescribeResultDeprecated({
                apiName: field.name,
                type: field.type,
                referenceTo: field.referenceTo,
                relationshipName: field.relationshipName
            });
        });

        const childRelationships: SObjectChildRelationshipDescribeResultDeprecated[] = stdout.result.childRelationships.map((childRelationship: any) => {
            return new SObjectChildRelationshipDescribeResultDeprecated({
                childSObject: childRelationship.childSObject,
                relationshipName: childRelationship.relationshipName
            });
        });

        const result: SObjectDescribeResultDeprecated = new SObjectDescribeResultDeprecated({
            apiName: params.sObjectApiName,
            fields,
            childRelationships
        });
        return result;
    }

    async apexRun({ targetOrg, apexCode }: { targetOrg: SalesforceOrg; apexCode: string; }): Promise<ApexRunResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'run',
                '--target-org',
                targetOrg.getAlias(),
                '--json'
            ],
            standardInput: apexCode,
            prompt: 'Start typing Apex code. Press the Enter key after each line, then press CTRL+D when finished.\n'
        };

        const stdout: unknown = (await this.exec(command)).stdout;
        return intoApexRunResult(stdout);
    }

    async dataUpsertRecord(params: { targetOrg: SalesforceOrg; sObject: UpsertableSObject; }): Promise<DataCreateRecordResult> {
        const isInsert = params.sObject.id === NULL_SF_ID;
        const recordIdArgs = [];
        if (!isInsert) {
            recordIdArgs.push('--record-id');
            recordIdArgs.push(params.sObject.id.toString());
        }

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'data',
                isInsert ? 'create' : 'update',
                'record',
                ...recordIdArgs,
                '--use-tooling-api',
                '--sobject',
                params.sObject.getSObjectName(),
                '--values',
                '"' + params.sObject.intoKeyValueString() + '"',
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        const recordId = SalesforceId.get(stdout.result.id);
        params.sObject.id = recordId;

        return new DataCreateRecordResult({
            recordId
        });
    }

    async orgListUsers(params: { targetOrg: SalesforceOrg; }): Promise<OrgListUsersResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'org',
                'list',
                'users',
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        if (!stdout.result) {
            Logger.get().warn(`Could not find result array during ${intoCliCommandString(command)}, returning empty list of users.`);
            return new OrgListUsersResult({
                users: []
            });
        }

        const users: OrgListUser[] = stdout.result.map((user: any) => {
            const getSfOrg = () => {
                if (user.alias) {
                    return new SalesforceOrg({
                        alias: user.alias
                    });
                } else {
                    return NO_SF_ORG_FOUND;
                }
            };

            const result: OrgListUser = {
                alias: getSfOrg(),
                defaultMarker: user.defaultMarker || "",
                userId: SalesforceId.get(user.userId),
                username: user.username
            };
            return result;

        }).filter((user: any) => user);

        return new OrgListUsersResult({
            users
        });
    }

    async dataQuery(params: { targetOrg: SalesforceOrg; query: SoqlQuery; useToolingApi: boolean; resultFormat?: 'csv' | 'json'; }): Promise<DataQueryResult | string> {

        const removeAllNewLines = (contents: string) => {
            return contents.replace(new RegExp('\n', 'g'), ' ');
        };

        const queryAsString = (query: SoqlQuery) => {
            if (typeof query === 'string') {
                return removeAllNewLines(`"${query}"`);
            } else {
                if (!query.from) {
                    throw new Error('Cannot run data query with empty from table.');
                }
                const fields = new Set();
                fields.add("Id");
                if (query.fields) {
                    query.fields.forEach(field => {
                        fields.add(field);
                    });
                }

                const joined = () => {
                    const asList = [...fields];
                    return asList.join(", ");
                };

                const whereClause = () => {
                    if (!query.where) {
                        return "";
                    }

                    return ` WHERE ${query.where}`;
                };
                return `"SELECT ${joined()} FROM ${query.from}${whereClause()}"`;
            }
        };

        const getType = (query: SoqlQuery) => {
            if (typeof query === 'string') {
                return '';
            } else {
                return query.from;
            }
        };

        const toolingApiParams = () => {
            if (params.useToolingApi) {
                return ['--use-tooling-api'];
            }
            return [];
        };

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'data',
                'query',
                '--query',
                queryAsString(params.query),
                ...toolingApiParams(),
                '--target-org',
                params.targetOrg.getAlias(),
                '--result-format',
                params.resultFormat ? params.resultFormat : 'json',
            ],
            shouldParseAsJson: params.resultFormat !== 'csv'
        };

        const { stdout } = await this.exec(command);
        if (params?.resultFormat === 'csv') {
            return stdout as string;
        }

        if (stdout.status) {
            throw new Error(stdout.message);
        }

        if (!stdout.result) {
            Logger.get().warn(`${intoCliCommandString(command)} did not have a result variable. Returning empty list of sobjects.`);
            return new DataQueryResult({
                sObjects: []
            });
        }

        if (!stdout.result.records) {
            Logger.get().warn(`${intoCliCommandString(command)} did not have a records variable on result. Returning empty list of sobjects.`);
            return new DataQueryResult({
                sObjects: []
            });
        }

        const sObjects = stdout.result.records.map((record: any) => {
            const sObject: SObject = {
                ...record,
                type: getType(params.query)
            };
            return sObject;
        });

        return new DataQueryResult({
            sObjects
        });
    }

    async apexGetLog(params: { targetOrg: SalesforceOrg; numLogs: number | undefined; logDir: Uri; logId: SalesforceId | undefined; }): Promise<ApexGetLogResult> {
        const logDir = Uri.join(params.logDir, params.targetOrg.getAlias());
        let command: ExecutorCommand;
        if (params.numLogs) {
            command = {
                command: 'sf',
                args: [
                    'apex',
                    'get',
                    'log',
                    '--output-dir',
                    logDir.getFileSystemPath(),
                    '--number',
                    `${params.numLogs}`,
                    '--target-org',
                    params.targetOrg.getAlias(),
                    '--json'
                ]
            };
        } else if (params.logId) {
            command = {
                command: 'sf',
                args: [
                    'apex',
                    'get',
                    'log',
                    '--output-dir',
                    logDir.getFileSystemPath(),
                    '--log-id',
                    `${params.logId}`,
                    '--target-org',
                    params.targetOrg.getAlias(),
                    '--json'
                ]
            };
        } else {
            throw new Error('Must provide either logId or numLogs.');
        }

        const stdout: unknown = (await this.exec(command)).stdout;
        return intoApexGetLogResult(stdout);
    }

    async apexListLog({ targetOrg }: { targetOrg: SalesforceOrg; }): Promise<ApexListLogResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'list',
                'log',
                '--target-org',
                targetOrg.getTargetOrgName(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        return intoApexListLogResult(stdout);
    }

    async apexTestRun(params: { targetOrg: SalesforceOrg; tests: string[]; }): Promise<ApexTestRunResult> {
        const asTests = () => {
            const tests: string[] = [];

            params.tests.forEach(test => {
                tests.push('--tests');
                tests.push(test);
            });

            return tests;
        };

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'test',
                'run',
                ...asTests(),
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            if (stdout.name === "ALREADY_IN_PROCESS") {
                const apexTestRunResult = new ApexTestRunResult({
                    testRunId: NULL_SF_ID
                });
                return apexTestRunResult;
            }

            throw new Error(stdout.message);
        }

        const apexTestRunResult = new ApexTestRunResult({
            testRunId: SalesforceId.get(stdout.result.testRunId)
        });

        return apexTestRunResult;
    }


    async apexTestGet(params: { targetOrg: SalesforceOrg; testRunId: SalesforceId; }): Promise<ApexTestGetResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'test',
                'get',
                '--test-run-id',
                `${params.testRunId.toString()}`,
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        if (stdout.status === 1) {
            throw new Error(stdout.message);
        }

        const apexTestResults: ApexTestResult[] = stdout.result.tests.map((test: any) => {
            let location = undefined;
            if (test.StackTrace) {
                location = parseStackTrace(test.StackTrace);
            }
            return new ApexTestResult({
                fullName: test.FullName,
                message: test.Message || "",
                outcome: test.Outcome,
                location: location,
                stackTrace: test.StackTrace
            });
        });

        const apexTestGetResult = new ApexTestGetResult({
            testRunId: params.testRunId,
            tests: apexTestResults,
            failing: stdout.result.summary.failing,
            passing: stdout.result.summary.passing,
            skipped: stdout.result.summary.skipped,
            testsRan: stdout.result.summary.testsRan
        });

        return apexTestGetResult;
    }
}

// Ugh this is going to screw up so many tests...