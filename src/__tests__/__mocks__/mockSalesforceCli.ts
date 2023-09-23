import { ExecutorCommand } from "../../executor";
import { JobId } from "../../jobId";
import { ProjectDeployCancelResult } from "../../projectDeployCancelResult";
import { ComponentFailure, ProjectDeployReportResult } from "../../projectDeployReportResult";
import { ProjectDeployResumeResult } from "../../projectDeployResumeResult";
import { ProjectDeployStartResult } from "../../projectDeployStartResult";
import { SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";

export class MockSalesforceCli extends SalesforceCli {
    
    private readonly orgs: SalesforceOrg[];
    private readonly openedOrgs: SalesforceOrg[];

    public toThrowOnProjectDeployCancel : Error | undefined;
    public toThrowOnGetOrgList: Error | undefined;

    private deploymentJobId: JobId | null;
    private deploymentStatus: string;
    private failures: ComponentFailure[];
    private wasProjectDeployResumeCalled: boolean;

    constructor() {
        super(async (command: ExecutorCommand) => { return { stdout: ''};});
        this.orgs = [];
        this.openedOrgs = [];
        this.deploymentJobId = null;
        this.deploymentStatus = "";
        this.failures = [];
        this.wasProjectDeployResumeCalled = false;
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
        this.deploymentJobId = new JobId('OAQ1234567890');
        this.deploymentStatus = 'started';
        return new ProjectDeployStartResult({ jobId: this.deploymentJobId });
    }

    async projectDeployReport(params: { jobId: JobId; }): Promise<ProjectDeployReportResult> {
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
}