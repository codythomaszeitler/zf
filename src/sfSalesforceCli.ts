import { ApexGetLogResult } from "./apexGetLogResult";
import { ApexListLogResult } from "./apexListLogResult";
import { ApexLog } from "./apexLog";
import { ApexRunResult } from "./apexRunResult";
import { ApexTestGetResult, ApexTestResult, ApexTestRunResult, parseStackTrace } from "./apexTestRunResult";
import { UpsertableSObject } from "./upsertableSObject";
import { DataCreateRecordResult } from "./dataCreateRecordResult";
import { DataQueryResult } from "./dataQueryResult";
import { Executor, ExecutorCommand, intoCliCommandString } from "./executor";
import { JobId } from "./jobId";
import { Logger } from "./logger";
import { OrgListUser, OrgListUsersResult } from "./orgListUsersResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";
import { ComponentFailure, ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployResumeResult } from "./projectDeployResumeResult";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { SObject } from "./sObject";
import { SObjectApiName } from "./sObjectApiName";
import { SObjectDescribeResult, SObjectFieldDescribeResult } from "./sObjectDescribeResult";
import { SObjectListResult } from "./sObjectListResult";
import { SalesforceCli } from "./salesforceCli";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";
import { NO_SF_ORG_FOUND, SalesforceOrg } from "./salesforceOrg";
import { SandboxOrgListResult, ScratchOrgListResult, SfOrgListResult } from "./sfOrgListResult";
import { SoqlQuery } from "./soqlQuery";
import { Uri } from "./uri";

export class SfSalesforceCli extends SalesforceCli {

    private cached: SalesforceOrg[];
    private previousGetOrgListPromise: Promise<SalesforceOrg[]>;

    constructor(executor: Executor, proxy?: {}) {
        super(executor, proxy);

        this.cached = [];
        this.previousGetOrgListPromise = this.noCacheGetOrgList({
            skipConnectionStatus: false
        });
        this.previousGetOrgListPromise.then((orgs) => {
            this.cached = orgs;
        });
    }

    async getOrgList(): Promise<SalesforceOrg[]> {
        await this.previousGetOrgListPromise;
        this.previousGetOrgListPromise = this.noCacheGetOrgList({
            skipConnectionStatus: false
        });
        this.previousGetOrgListPromise.then((orgs) => {
            this.cached = orgs;
        });
        return this.cached;
    }

    private async noCacheGetOrgList({ skipConnectionStatus }: {
        skipConnectionStatus: boolean
    }): Promise<SalesforceOrg[]> {
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
        const orgListResult = stdout as SfOrgListResult;

        if (!orgListResult.result) {
            return [];
        }

        const sandboxes: SalesforceOrg[] = this.parseOrgsFromSandboxes(orgListResult);
        const scratches: SalesforceOrg[] = this.parseOrgsFromScratches(orgListResult);

        const orgs: SalesforceOrg[] = [...sandboxes, ...scratches];
        return orgs;
    }


    private parseOrgsFromSandboxes(orgListResult: SfOrgListResult): SalesforceOrg[] {
        const isSandboxConnected = (sandbox: SandboxOrgListResult) => {
            if (!sandbox.connectedStatus) {
                return false;
            }
            return sandbox.connectedStatus === 'Connected';
        };

        if (!orgListResult.result.nonScratchOrgs) {
            return [];
        }

        const sandboxes: SalesforceOrg[] = orgListResult.result.nonScratchOrgs.
            map((sandbox) => (new SalesforceOrg({
                isActive: isSandboxConnected(sandbox),
                isScratchOrg: false,
                isDefaultOrg: sandbox.isDefaultUsername,
                alias: sandbox.username ? sandbox.username : ''
            })));
        return sandboxes;
    }

    private parseOrgsFromScratches(orgListResult: SfOrgListResult): SalesforceOrg[] {
        const isScratchOrgConnected = (scratchOrg: ScratchOrgListResult) => {
            if (scratchOrg.isExpired === undefined) {
                return false;
            }

            return !scratchOrg.isExpired;
        };

        if (!orgListResult.result.scratchOrgs) {
            return [];
        }

        const scratches: SalesforceOrg[] = orgListResult.result.scratchOrgs.
            map((scratchOrg) => (
                new SalesforceOrg({
                    isActive: isScratchOrgConnected(scratchOrg),
                    isScratchOrg: true,
                    isDefaultOrg: scratchOrg.isDefaultUsername,
                    alias: scratchOrg.alias ? scratchOrg.alias : ''
                })
            ));
        return scratches;
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
        const orgList = await this.noCacheGetOrgList({
            skipConnectionStatus: true
        });
        const defaultOrg = orgList.find(org =>
            org.getIsDefaultOrg()
        );
        return defaultOrg ?? null;
    }

    async projectDeployStart(params: { targetOrg: SalesforceOrg; sourceDir?: Uri[] }): Promise<ProjectDeployStartResult> {
        const getSourceDirArgsIfExist = () => {
            if (!params.sourceDir) {
                return [];
            }

            return ['--source-dir',
                ...params.sourceDir.map(uri => uri.getFileSystemPath())];
        };

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'start',
                '--target-org',
                params.targetOrg.getAlias(),
                ...getSourceDirArgsIfExist(),
                '--async',
                '--json',
                '--ignore-conflicts'
            ]
        };

        const { stdout } = await this.exec(command);
        const result = new ProjectDeployStartResult({
            jobId: new JobId(stdout.result.id)
        });
        return result;

    }

    async projectDeployReport(params: { jobId: JobId; }): Promise<ProjectDeployReportResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'report',
                '--job-id',
                params.jobId.toString(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);

        const componentFailures = stdout.result.details.componentFailures.map((failure: any) => {
            const componentFailure: ComponentFailure = {
                columnNumber: failure.columnNumber - 1,
                lineNumber: failure.lineNumber - 1,
                problem: failure.problem,
                fileName: failure.fileName
            };
            return componentFailure;
        });

        const result = new ProjectDeployReportResult({
            numberComponentErrors: stdout.result.numberComponentErrors,
            numberComponentsDeployed: stdout.result.numberComponentsDeployed,
            numberComponentsTotal: stdout.result.numberComponentsTotal,
            componentFailures: componentFailures
        });
        return result;
    }

    async projectDeployCancel(params: { jobId: JobId; }): Promise<ProjectDeployCancelResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'cancel',
                '--job-id',
                params.jobId.toString(),
                '--json'
            ]
        };
        const { stdout } = await this.exec(command);
        return new ProjectDeployCancelResult();
    }

    async projectDeployResume(params: { jobId: JobId; }): Promise<ProjectDeployResumeResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'resume',
                '--job-id',
                params.jobId.toString(),
                '--json'
            ]
        };

        const { stdout } = await this.exec(command);
        return new ProjectDeployResumeResult();
    }

    async sobjectList(params: {
        targetOrg: SalesforceOrg
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

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        if (!stdout.result) {
            return new SObjectListResult({
                sObjectApiNames: []
            });
        }

        const sObjectApiNames = stdout.result.map((result: string) => {
            return SObjectApiName.get(result);
        });

        return new SObjectListResult({
            sObjectApiNames,
        });
    }

    async sobjectDescribe(params: { targetOrg: SalesforceOrg; sObjectApiName: SObjectApiName; }): Promise<SObjectDescribeResult> {
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

        const fields: SObjectFieldDescribeResult[] = stdout.result.fields.map((field: any) => {
            return new SObjectFieldDescribeResult({
                apiName: field.name,
                type: field.type
            });
        });

        const result: SObjectDescribeResult = new SObjectDescribeResult({
            apiName: params.sObjectApiName,
            fields
        });
        return result;
    }

    async apexRun(params: { targetOrg: SalesforceOrg; apexCode: string; }): Promise<ApexRunResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'run',
                '--target-org',
                params.targetOrg.getAlias(),
                '--json'
            ],
            standardInput: params.apexCode,
            prompt: 'Start typing Apex code. Press the Enter key after each line, then press CTRL+D when finished.\n'
        };

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        return new ApexRunResult({
            compiled: stdout.result.compiled,
            success: stdout.result.success,
            logs: stdout.result.logs
        });
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

    async dataQuery(params: { targetOrg: SalesforceOrg; query: SoqlQuery; }): Promise<DataQueryResult> {
        if (!params.query.from) {
            throw new Error('Cannot run data query with empty from table.');
        }

        const fields = new Set();
        fields.add("Id");
        if (params.query.fields) {
            params.query.fields.forEach(field => {
                fields.add(field);
            });
        }

        const joined = () => {
            const asList = [...fields];
            return asList.join(", ");
        };

        const whereClause = () => {
            if (!params.query.where) {
                return "";
            }

            return ` WHERE ${params.query.where}`;
        };

        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'data',
                'query',
                '--query',
                `"SELECT ${joined()} FROM ${params.query.from}${whereClause()}"`,
                '--use-tooling-api',
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
                type: params.query.from
            };
            return sObject;
        });

        return new DataQueryResult({
            sObjects
        });
    }

    async apexGetLog(params: { targetOrg: SalesforceOrg; numLogs: number | undefined; logDir: Uri; logId: SalesforceId | undefined }): Promise<ApexGetLogResult> {
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

        const { stdout } = await this.exec(command);
        if (stdout.status) {
            throw new Error(stdout.message);
        }

        return new ApexGetLogResult();
    }

    async apexListLog(params: { targetOrg: SalesforceOrg; }): Promise<ApexListLogResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'apex',
                'list',
                'log',
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
            Logger.get().warn('Missing result in apex list logs. Returning empty log list.');
            return new ApexListLogResult({
                logs: []
            });
        }

        const apexLogs: ApexLog[] = stdout.result.map((apexLog: any) => {
            return new ApexLog({
                id: SalesforceId.get(apexLog.Id),
                application: apexLog.Application,
                duration: apexLog.DurationMilliseconds,
                logLength: apexLog.LogLength,
                operation: apexLog.Operation,
                status: apexLog.Status,
                startTime: new Date(Date.parse(apexLog.StartTime))
            });
        });

        return new ApexListLogResult({
            logs: apexLogs
        });
    }

    async apexTestRun(params: { targetOrg: SalesforceOrg; tests: string[] }): Promise<ApexTestRunResult> {
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
            throw new Error(stdout.message);
        }

        const apexTestRunResult = new ApexTestRunResult({
            testRunId: SalesforceId.get(stdout.result.testRunId)
        });

        return apexTestRunResult;
    }


    async apexTestGet(params: { targetOrg: SalesforceOrg; testRunId: SalesforceId }): Promise<ApexTestGetResult> {
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

        const apexTestResults: ApexTestResult[] = stdout.result.tests.map((test: any) => {
            let location = undefined;
            if (test.StackTrace) {
                location = parseStackTrace(test.StackTrace);
            }
            return new ApexTestResult({
                fullName: test.FullName,
                message: test.Message || "",
                outcome: test.Outcome,
                location: location
            });
        });

        const apexTestGetResult = new ApexTestGetResult({
            tests: apexTestResults,
            failing: stdout.result.summary.failing,
            passing: stdout.result.summary.passing,
            testsRan: stdout.result.summary.testsRan
        });

        return apexTestGetResult;
    }
}
