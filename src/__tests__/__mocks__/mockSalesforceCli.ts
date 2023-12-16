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

export class MockSalesforceCli extends SalesforceCli {

    private readonly orgs: SalesforceOrg[];
    private readonly openedOrgs: SalesforceOrg[];

    public toThrowOnProjectDeployCancel: Error | undefined;
    public toThrowOnGetOrgList: Error | undefined;

    private deploymentJobId: JobId | null;
    private deploymentStatus: string;
    private failures: ComponentFailure[];
    private wasProjectDeployResumeCalled: boolean;
    private waitForDeploymentToStart: (value: unknown) => void;
    private noComponentsToDeploy: boolean;

    constructor() {
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
    }

    getDeploymentJobId(): JobId | null {
        return this.deploymentJobId;
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

    getDefaultOrg(): Promise<SalesforceOrg | null> {
        throw new Error("Method not implemented.");
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

    // Maybe it should just always go through when you given something to this command?
    async dataCreateRecord(params: { targetOrg: SalesforceOrg; sObject: CreateableSObject; }): Promise<DataCreateRecordResult> {
        throw new Error('not currently implemented');
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
}

interface OrgWithListsUsersResult {
    targetOrg: SalesforceOrg;
    result: OrgListUsersResult;
}

