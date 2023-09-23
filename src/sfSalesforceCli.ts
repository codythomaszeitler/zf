import { SandboxOrgListResult, SfOrgListResult, ScratchOrgListResult } from "./sfOrgListResult";
import { JobId } from "./jobId";
import { SalesforceCli, Executor } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { ProjectDeployStartResult } from "./projectDeployStartResult";
import { ComponentFailure, ProjectDeployReportResult } from "./projectDeployReportResult";
import { ProjectDeployCancelResult } from "./projectDeployCancelResult";
import { Position } from "./position";
import { Range } from "./range";

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
        const { stdout } = await this.exec('sf org list --json');
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
        await this.exec(`sf org open -o ${alias} --json`);
    }

    async projectDeployStart(params: { targetOrg: SalesforceOrg; }): Promise<ProjectDeployStartResult> {
        const { stdout } = await this.exec(`sf project deploy start --target-org ${params.targetOrg.getAlias()} --async --ignore-conflicts --json`);
        const result = new ProjectDeployStartResult({
            jobId: new JobId(stdout.result.id)
        });
        return result;
    }

    async projectDeployReport(params: { jobId: JobId; }): Promise<ProjectDeployReportResult> {
        const { stdout } = await this.exec(`sf project deploy report --json --job-id ${params.jobId}`);

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
        const { stdout } = await this.exec(`sf project deploy cancel --job-id ${params.jobId} --json `);
        return JSON.parse(stdout);
    }
}
