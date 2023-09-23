import { SandboxOrgListResult, SfOrgListResult, ScratchOrgListResult } from "./sfOrgListResult";
import { JobId } from "./jobId";
import { SalesforceCli } from "./salesforceCli";
import { Executor, ExecutorCommand } from "./executor";
import { SalesforceOrg } from "./salesforceOrg";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { ComponentFailure, ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";
import { ProjectDeployResumeResult } from "./projectDeployResumeResult";

export class SfSalesforceCli extends SalesforceCli {
    private cached: SalesforceOrg[];
    private previousGetOrgListPromise: Promise<SalesforceOrg[]>;

    constructor(executor: Executor) {
        super(executor);

        this.cached = [];
        this.previousGetOrgListPromise = this.noCacheGetOrgList();
        this.previousGetOrgListPromise.then((orgs) => {
            this.cached = orgs;
        });
    }

    async getOrgList(): Promise<SalesforceOrg[]> {
        await this.previousGetOrgListPromise;
        this.previousGetOrgListPromise = this.noCacheGetOrgList();
        this.previousGetOrgListPromise.then((orgs) => {
            this.cached = orgs;
        });
        return this.cached;
    }

    private async noCacheGetOrgList(): Promise<SalesforceOrg[]> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'org',
                'list',
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

    async projectDeployStart(params: { targetOrg: SalesforceOrg; }): Promise<ProjectDeployStartResult> {
        const command: ExecutorCommand = {
            command: 'sf',
            args: [
                'project',
                'deploy',
                'start',
                '--target-org',
                params.targetOrg.getAlias(),
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
}
