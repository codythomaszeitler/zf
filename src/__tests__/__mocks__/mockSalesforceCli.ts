import { ExecutorCommand } from "../../executor";
import { JobId } from "../../jobId";
import { ProjectRetrieveResult, SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";
import { SObjectListResult } from "../../sObjectListResult";
import { SObjectApiName } from "../../sObjectApiName";
import { SObjectDescribeResult } from "../../sObjectDescribeResult";
import { ApexRunResult } from "../../apexRunResult";
import { UpsertableSObject } from "../../upsertableSObject";
import { DataCreateRecordResult } from "../../dataCreateRecordResult";
import { OrgListUsersResult } from "../../orgListUsersResult";
import { NULL_SF_ID, SalesforceId } from "../../salesforceId";
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
import { ApexTestRunResult, ApexTestGetResult } from "../../apexTestRunResult";
import { Uri } from "../../uri";
import { ProjectDeployCancelResult, ProjectDeployResult } from "../../projectDeploy/projectDeployResult";

export class MockSalesforceCli extends SalesforceCli {
    projectDeployPreview(params: { targetOrg: SalesforceOrg; }): Promise<{ result: { toDeploy: { path: string; }[]; toRetrieve: {}[]; toDelete: {}[]; }; status: number; } | undefined> {
        throw new Error("Method not implemented.");
    }
    projectRetrieveStart({ targetOrg, outputDir, metadata }: { targetOrg: SalesforceOrg; outputDir: Uri; metadata: string }): Promise<ProjectRetrieveResult> {
        throw new Error("Method not implemented.");
    }
    projectManifestGenerate(params: { targetOrg: SalesforceOrg; outputDir: Uri; fileName: string; }): Promise<{}> {
        throw new Error("Method not implemented.");
    }

    private readonly orgs: SalesforceOrg[];
    private readonly openedOrgs: SalesforceOrg[];

    public toThrowOnProjectDeployCancel: Error | undefined;
    public toThrowOnGetOrgList: Error | undefined;

    public toThrowOnApexGetLog: Error | undefined;

    private deploymentJobId: JobId | null;
    private deploymentStatus: string;
    private wasProjectDeployResumeCalled: boolean;
    private waitForDeploymentToStart: (value: unknown) => void;
    private noComponentsToDeploy: boolean;
    private defaultOrg: SalesforceOrg | undefined;

    private readonly sObjects: RecordIdToSObject;
    private readonly validations: DatabaseValidation[];
    private readonly orgsWithApexLogs: { org: SalesforceOrg; logs: ApexLog[] }[];
    private readonly filesystem: MockFileSystem;

    constructor (params?: {
        filesystem?: MockFileSystem
    }) {
        super(async (command: ExecutorCommand) => { return { stdout: '' }; });
        this.orgs = [];
        this.openedOrgs = [];
        this.deploymentJobId = null;
        this.deploymentStatus = "";
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

    apexTestRun(params: { targetOrg: SalesforceOrg; tests: string[]; }): Promise<ApexTestRunResult> {
        throw new Error("Method not implemented.");
    }

    apexTestGet(params: { targetOrg: SalesforceOrg; testRunId: SalesforceId; }): Promise<ApexTestGetResult> {
        throw new Error("Method not implemented.");
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

    async projectDeployStart(params: { targetOrg: SalesforceOrg; sourceDir?: Uri[] }): Promise<ProjectDeployResult | undefined> {
        return undefined; 
    }

    private stopInfiniteLoopCounter: number;
    async projectDeployReport(params: { jobId: JobId; }): Promise<ProjectDeployResult | undefined> {
        return undefined;
    }

    async projectDeployCancel(params: { jobId: JobId; targetOrg : SalesforceOrg}): Promise<ProjectDeployCancelResult | undefined> {
        return undefined;
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

    public static genProjectDeployFailure({
        uri
    }: {
        uri: Uri
    }) {
        const getFileName = () => {
            if (uri.isApexClass()) {
                return `classes/${uri.getBaseName()}`;
            } else {
                return 'NOT-IMPL';
            }
        };

        return {
            columnNumber: 1,
            lineNumber: 1,
            fileName: getFileName(),
            problem: 'This is an error!'
        };
    }

    wasDeploymentCancelled(jobId: JobId | null) {
        return jobId === this.deploymentJobId && this.deploymentStatus === 'cancelled';
    }

    async projectDeployResume(params: { jobId: JobId; }): Promise<ProjectDeployResult | undefined> {
        return undefined; 
    }

    didResumeProjectDeployment() {
        return this.wasProjectDeployResumeCalled;
    }

    async getDefaultOrg(): Promise<SalesforceOrg | null> {
        return this.defaultOrg ?? null;
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

    async dataUpsertRecord(params: { targetOrg: SalesforceOrg; sObject: UpsertableSObject; }): Promise<DataCreateRecordResult> {
        const getSalesforceId = () => {
            if (params.sObject.id === NULL_SF_ID) {
                return genRandomId(params.sObject.getSObjectName());
            } else {
                return params.sObject.id;
            }
        };

        const recordId = getSalesforceId();
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

    async apexGetLog(params: { targetOrg: SalesforceOrg; numLogs: number | undefined; logDir: Uri; logId: SalesforceId | undefined }): Promise<ApexGetLogResult> {
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


function generateSObject(createableSObject: UpsertableSObject, recordId: SalesforceId | undefined): SObject {
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

    public constructor () {
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

    public constructor (params: {
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
