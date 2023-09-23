import { SalesforceOrg } from "./salesforceOrg";
import { JobId } from "./jobId";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";
import { Executor, ExecutorCommand } from "./executor";

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

    protected async exec(command: ExecutorCommand): Promise<{ stdout: any }> {
        const { stdout } = await this.executor(command);
        return {
            stdout
        };
    }
}

