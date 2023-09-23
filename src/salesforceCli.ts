import { SalesforceOrg } from "./salesforceOrg";
import { JobId } from "./jobId";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";

export type Executor = (command: string) => Promise<{ stdout: any }>;

export abstract class SalesforceCli {
    private readonly executor: Executor;

    constructor(executor: Executor) {
        this.executor = executor;
    }

    abstract getOrgList(): Promise<SalesforceOrg[]>;
    abstract openOrg(alias: string): Promise<void>;

    abstract projectDeployStart(params: { targetOrg: SalesforceOrg; }): Promise<ProjectDeployStartResult>;
    abstract projectDeployReport(params: { jobId: JobId }): Promise<ProjectDeployReportResult>;
    abstract projectDeployCancel(params: { jobId: JobId }): Promise<ProjectDeployCancelResult>;

    protected async exec(command: string): Promise<{ stdout: any }> {
        try {
        const { stdout } = await this.executor(command);
        return {
            stdout: JSON.parse(stdout),
        };
        } catch (e : any) {
            const stdout = JSON.parse(e.stdout);
            throw new Error(stdout.message);
        }
    }
}

