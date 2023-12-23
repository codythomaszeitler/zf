import { ExecutorCommand } from "../../executor";
import { JobId } from "../../jobId";
import { ProjectDeployCancelResult } from "../../projectDeployCancelResult";
import { ComponentFailure, ProjectDeployReportResult } from "../../projectDeployReportResult";
import { ProjectDeployResumeResult } from "../../projectDeployResumeResult";
import { ProjectDeployStartResult } from "../../projectDeployStartResult";
import { SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";
import { SObjectListResult } from "../../sObjectListResult";
import { SObjectApiName } from "../../sObjectApiName";
import { SObjectDescribeResult } from "../../sObjectDescribeResult";
import { ApexRunResult } from "../../apexRunResult";
import { CreateableSObject } from "../../createableSObject";
import { DataCreateRecordResult } from "../../dataCreateRecordResult";
import { OrgListUsersResult } from "../../orgListUsersResult";
import { SalesforceId } from "../../salesforceId";
import { SObject } from "../../sObject";
import { DataGetRecordResult } from "../../dataGetRecordResult";
import { SoqlQuery } from "../../soqlQuery";
import { DataQueryResult } from "../../dataQueryResult";
import { genRandomId } from "../salesforceId.test";
import { DEBUG_LEVEL_SOBJECT_NAME } from "../../debugLevelSObject";
import { ApexGetLogResult } from "../../apexGetLogResult";
import { ApexListLogResult } from "../../apexListLogResult";
import { ApexLog } from "../../apexLog";
import { MockFileSystem } from "./mockFileSystem";
import { getLogFileUri } from "../../showApexLogCommand";

export class MockSalesforceCli extends SalesforceCli {

    private readonly orgs: SalesforceOrg[];
    private readonly openedOrgs: SalesforceOrg[];

    public toThrowOnProjectDeployCancel: Error | undefined;
    public toThrowOnGetOrgList: Error | undefined;

    public toThrowOnApexGetLog: Error | undefined;

    private deploymentJobId: JobId | null;
    private deploymentStatus: string;
    private failures: ComponentFailure[];
    private wasProjectDeployResumeCalled: boolean;
    private waitForDeploymentToStart: (value: unknown) => void;
    private noComponentsToDeploy: boolean;
    private defaultOrg: SalesforceOrg | undefined;

    private readonly sObjects: RecordIdToSObject;
    private readonly validations: DatabaseValidation[];
    private readonly orgsWithApexLogs: { org: SalesforceOrg; logs: ApexLog[] }[];
    private readonly filesystem: MockFileSystem;

    constructor(params?: {
        filesystem?: MockFileSystem
    }) {
        super(async (command: ExecutorCommand) => { return { stdout: '' }; });
        this.orgs = [];
        this.openedOrgs = [];
        this.deploymentJobId = null;
        this.deploymentStatus = "";
        this.failures = [];
        this.wasProjectDeployResumeCalled = false;
        this.stopInfiniteLoopCounter = 0;
        this.waitForDeploymentToStart = () => { };
        this.noComponentsToDeploy = false;
        this.sObjects = new RecordIdToSObject();
        this.validations = [new DebugLevelDatabaseValidation({ sObjectApiName: DEBUG_LEVEL_SOBJECT_NAME })];
        this.orgsWithApexLogs = [];
        this.defaultOrg = undefined;

        if (!params || !params.filesystem) {
            this.filesystem = new MockFileSystem();
        } else {
            this.filesystem = params.filesystem;
        }
    }

    getDeploymentJobId(): JobId | null {
        return this.deploymentJobId;
    }

    public setDefaultOrg(org: SalesforceOrg) {
        this.defaultOrg = org;
        this.add(org);
    }

    add(org: SalesforceOrg) {
        this.orgs.push(org);
    }

    async getOrgList(): Promise<SalesforceOrg[]> {
        if (this.toThrowOnGetOrgList) {
            throw this.toThrowOnGetOrgList;
        }
        return [...this.orgs];
    }

    async openOrg(alias: string): Promise<void> {
        const found = this.orgs.find((org) => org.getAlias() === alias);
        if (found) {
            this.openedOrgs.push(found);
        } else {
            throw new Error(`Parsing --target-org \n\tNo authorization information found for ${alias}.\nSee more help with --help`);
        }
    }

    didOpenOrg(alias: string): boolean {
        return !!this.openedOrgs.find((org) => org.getAlias() === alias);
    }

    async projectDeployStart(params: { targetOrg: SalesforceOrg; }): Promise<ProjectDeployStartResult> {
        if (this.noComponentsToDeploy) {
            return new ProjectDeployStartResult({
                jobId: new JobId('')
            });
        }

        this.deploymentJobId = new JobId('OAQ1234567890');
        this.deploymentStatus = 'started';

        this.waitForDeploymentToStart(undefined);

        return new ProjectDeployStartResult({ jobId: this.deploymentJobId });
    }

    private stopInfiniteLoopCounter: number;
    async projectDeployReport(params: { jobId: JobId; }): Promise<ProjectDeployReportResult> {
        this.stopInfiniteLoopCounter++;
        if (this.stopInfiniteLoopCounter === 1000) {
            throw new Error('Infinite loop...?');
        }

        if (this.deploymentJobId) {
            if (this.deploymentStatus === 'started') {
                const result = new ProjectDeployReportResult({
                    numberComponentErrors: this.failures.length,
                    numberComponentsDeployed: 50 - this.failures.length,
                    numberComponentsTotal: 100,
                    componentFailures: [...this.failures]
                });
                return result;
            } else if (this.deploymentStatus === 'completed') {
                const result = new ProjectDeployReportResult({
                    numberComponentErrors: this.failures.length,
                    numberComponentsDeployed: 100 - this.failures.length,
                    numberComponentsTotal: 100,
                    componentFailures: [...this.failures]
                });
                return result;
            } else if (this.deploymentStatus === 'cancelled') {
                throw new Error("Can't cancel deploy because it's already completed.");
            } else {
                throw new Error(`A job ${params.jobId} has unknown status ${this.deploymentStatus}.`);
            }
        } else {
            throw new Error(`No job found for ID: ${params.jobId}.`);
        }
    }

    async projectDeployCancel(params: { jobId: JobId; }): Promise<ProjectDeployCancelResult> {
        if (this.toThrowOnProjectDeployCancel) {
            throw this.toThrowOnProjectDeployCancel;
        }

        if (this.deploymentStatus === 'completed') {
            throw new Error("Can't cancel deploy because it's already completed.");
        }

        if (this.deploymentJobId === params.jobId) {
            this.deploymentStatus = "cancelled";
            return new ProjectDeployCancelResult();
        } else {
            throw new Error(`No job found for ID: ${params.jobId}.`);
        }
    }

    async projectDeployComplete(params?: { jobId: JobId }): Promise<void> {
        if (this.deploymentStatus === "started") {
            this.deploymentStatus = "completed";
        } else {
            await new Promise(resolve => {
                this.waitForDeploymentToStart = resolve;
            });
            this.deploymentStatus = 'completed';
        }
    };

    projectDeployFailure(failure: ComponentFailure) {
        this.failures.push(failure);
    }

    wasDeploymentCancelled(jobId: JobId | null) {
        return jobId === this.deploymentJobId && this.deploymentStatus === 'cancelled';
    }

    async projectDeployResume(params: { jobId: JobId; }): Promise<ProjectDeployResumeResult> {
        this.wasProjectDeployResumeCalled = true;
        return new ProjectDeployResumeResult();
    }

    didResumeProjectDeployment() {
        return this.wasProjectDeployResumeCalled;
    }

    async getDefaultOrg(): Promise<SalesforceOrg | null> {
        return this.defaultOrg || null;
    }

    setNoComponentsToDeploy(noComponentsToDeploy: boolean) {
        this.noComponentsToDeploy = noComponentsToDeploy;
    }

    sobjectList(params: {
        targetOrg: SalesforceOrg
    }): Promise<SObjectListResult> {
        throw new Error("Method not implemented.");
    }

    sobjectDescribe(params: { targetOrg: SalesforceOrg; sObjectApiName: SObjectApiName; }): Promise<SObjectDescribeResult> {
        throw new Error("Method not implemented.");
    }

    apexRun(params: { targetOrg: SalesforceOrg; apexCode: string; }): Promise<ApexRunResult> {
        throw new Error("Method not implemented.");
    }

    async dataCreateRecord(params: { targetOrg: SalesforceOrg; sObject: CreateableSObject; }): Promise<DataCreateRecordResult> {
        const recordId = genRandomId(params.sObject.getSObjectName());
        const newSObject = generateSObject(params.sObject, recordId);

        await this.runDatabaseValidationsFor({ sObject: newSObject });

        this.sObjects.put(recordId, newSObject);
        params.sObject.id = recordId;

        return new DataCreateRecordResult({
            recordId
        });
    }

    private async runDatabaseValidationsFor(params: { sObject: SObject }) {
        const validationsToRun = this.validations.filter(validation => validation.getSObjectApiName() === params.sObject.type);

        const integrityCheckPromises = validationsToRun.map(validation => {
            return validation.integrityCheck({
                newSObject: params.sObject,
                alreadyExistingSObjects: this.sObjects.getSObjectsWithType(params.sObject.type)
            });
        });

        const integrityCheckResults = await Promise.all(integrityCheckPromises);
        for (const element of integrityCheckResults) {
            const integrityCheckResult = element;
            if (!integrityCheckResult.passed) {
                throw new Error(`Mock Database Failed : ${integrityCheckResult.message}`);
            }
        }
    }

    async dataGetRecord(params: { targetOrg: SalesforceOrg; recordId: SalesforceId; }): Promise<DataGetRecordResult> {
        const sObject = this.sObjects.get(params.recordId);

        if (!sObject) {
            throw new Error(`The requested resource does not exist.`);
        }

        return new DataGetRecordResult({
            sObject
        });
    }

    async dataQuery(params: { targetOrg: SalesforceOrg; query: SoqlQuery }): Promise<DataQueryResult> {
        const from = params.query.from;
        return new DataQueryResult({
            sObjects: this.sObjects.getSObjectsWithType(from)
        });
    }

    private readonly orgsWithUsers: OrgWithListsUsersResult[] = [];

    async orgListUsers(params: { targetOrg: SalesforceOrg; }): Promise<OrgListUsersResult> {
        const found = this.orgsWithUsers.find(orgWithUser => orgWithUser.targetOrg.getAlias() === params.targetOrg.getAlias());
        if (!found) {
            throw new Error(`Cannot find org with alias ${params.targetOrg.getAlias()}.`);
        }
        return found.result;
    }

    addUser(params: { targetOrg: SalesforceOrg; result: OrgListUsersResult }) {
        this.orgsWithUsers.push({
            targetOrg: params.targetOrg,
            result: params.result
        });
    }

    addApexLog(params: { targetOrg: SalesforceOrg; apexLog: ApexLog }) {
        const hasOrg = () => {
            return !!this.orgsWithApexLogs.find(orgWithApexLogs => orgWithApexLogs.org.getAlias() === params.targetOrg.getAlias());
        };

        if (!hasOrg()) {
            this.orgsWithApexLogs.push({
                org: params.targetOrg,
                logs: []
            });
        }
        const orgWithApexLogs = this.orgsWithApexLogs.find(orgWithApexLogs => orgWithApexLogs.org.getAlias() === params.targetOrg.getAlias());
        if (orgWithApexLogs) {
            orgWithApexLogs.logs.push(params.apexLog);
        }
    }

    async apexGetLog(params: { targetOrg: SalesforceOrg; numLogs: number | undefined; logDir: string; logId: SalesforceId | undefined }): Promise<ApexGetLogResult> {
        if (this.toThrowOnApexGetLog) {
            throw this.toThrowOnApexGetLog;
        }

        if (params.logId) {
            const uri = getLogFileUri({
                targetOrg: params.targetOrg,
                logDir: params.logDir,
                logId: params.logId
            });

            this.filesystem.create({
                uri: uri
            });
        }

        return new ApexGetLogResult();
    }

    async apexListLog(params: { targetOrg: SalesforceOrg; }): Promise<ApexListLogResult> {
        const orgWithApexLogs = this.orgsWithApexLogs.find(orgWithApexLogs => orgWithApexLogs.org.getAlias() === params.targetOrg.getAlias());
        if (!orgWithApexLogs) {
            return new ApexListLogResult({
                logs: []
            });
        }

        return new ApexListLogResult({
            logs: orgWithApexLogs.logs
        });
    }
}

interface OrgWithListsUsersResult {
    targetOrg: SalesforceOrg;
    result: OrgListUsersResult;
}


function generateSObject(createableSObject: CreateableSObject, recordId: SalesforceId | undefined): SObject {
    const keyValuePairsString = createableSObject.intoKeyValueString();
    const keyValuePairs = keyValuePairsString.split(" ");

    const sObject: SObject = {
        type: createableSObject.getSObjectName()
    };
    sObject["Id"] = recordId?.toString();
    keyValuePairs.forEach((keyValuePair: string) => {
        const keyValue = keyValuePair.split('=');
        const key = keyValue[0];
        const value = keyValue[1];

        sObject[key] = value;
    });

    return sObject;
}

class RecordIdToSObject {
    private readonly records: Map<SalesforceId, SObject>;

    public constructor() {
        this.records = new Map();
    }

    public get(recordId: SalesforceId) {
        return this.records.get(recordId);
    }

    public put(recordId: SalesforceId, sObject: SObject) {
        this.records.set(recordId, sObject);
    }

    public getSObjectsWithType(type: string) {
        const sObjects: SObject[] = [];
        this.records.forEach((value: SObject) => {
            if (value.type === type) {
                sObjects.push(value);
            }
        });
        return sObjects;
    }
}

abstract class DatabaseValidation {

    private readonly sObjectApiName: string;

    public constructor(params: {
        sObjectApiName: string
    }) {
        this.sObjectApiName = params.sObjectApiName;
    }

    abstract integrityCheck(params: {
        newSObject: SObject,
        alreadyExistingSObjects: SObject[]
    }): Promise<IntegrityCheckResult>;

    public getSObjectApiName(): string {
        return this.sObjectApiName;
    }
}

interface IntegrityCheckResult {
    passed: boolean;
    message: string;
}

class DebugLevelDatabaseValidation extends DatabaseValidation {
    async integrityCheck(params: { newSObject: SObject; alreadyExistingSObjects: SObject[]; }): Promise<IntegrityCheckResult> {
        const duplicate = params.alreadyExistingSObjects.find((existingSObject: SObject) => existingSObject.type === params.newSObject.type);
        if (duplicate) {
            return {
                passed: false,
                message: "Found duplicate debug level."
            };
        } else {
            return {
                passed: true,
                message: ""
            };
        }
    }
}
