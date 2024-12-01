import { SalesforceOrg } from "./salesforceOrg";
import { Command, CommandParams } from "./command";
import { OrgListResult, OrgResult, SandboxOrgResult, ScratchOrgResult } from "./sfOrgListResult";

export class SelectAndOpenOrgCommand extends Command {
    private readonly orgListCommand: OrgListCommand;

    constructor (params: CommandParams & { orgListCommand?: OrgListCommand }) {
        super(params);
        this.orgListCommand = params.orgListCommand ?? new OrgListCommand(params);
    }

    async execute() {
        const selectOrgCommand = new SelectOrgCommand({
            cli: this.getCli(),
            ide: this.getIde(),
            orgListCommand: this.orgListCommand
        });

        const selected = await selectOrgCommand.execute();
        if (!selected) {
            return undefined;
        }
        return this.getIde().withProgress(async () => {
            await this.getCli().orgOpen({
                targetOrg: selected
            });
        }, { title: `Opening org ${selected.getTargetOrgName()}...`, isCancellable: false });
    }
}

export class SelectOrgCommand extends Command {
    private readonly orgListCommand: OrgListCommand;
    constructor (params: CommandParams & { orgListCommand?: OrgListCommand }) {
        super(params);
        this.orgListCommand = params.orgListCommand ?? new OrgListCommand(params);
    }

    async execute() {
        const activeOrgs = await this.getOrgs();
        if (activeOrgs.length === 0) {
            const errorMessage = 'Could not find any active orgs.';
            await this.getIde().showErrorMessage(errorMessage);
            return undefined;
        }

        const aliases = activeOrgs.map(activeOrg => activeOrg.getTargetOrgName());
        const selectedOrgAlias = await this.getIde().showQuickPick(aliases);
        if (!selectedOrgAlias) {
            return undefined;
        }

        return activeOrgs.find(activeOrg => activeOrg.getTargetOrgName() === selectedOrgAlias);
    }

    private async getOrgs() {
        const orgs = await this.orgListCommand.execute({
            skipConnectionStatus: false
        });
        return orgs;
    }
}

export class OrgListCommand extends Command {
    async execute({ skipConnectionStatus }: { skipConnectionStatus: boolean }) {
        const orgListResult = await this.runOrgList({
            skipConnectionStatus
        });

        return intoSalesforceOrgs(orgListResult);
    }

    protected async runOrgList({ skipConnectionStatus }: { skipConnectionStatus: boolean }): Promise<OrgListResult> {
        return await this.getCli().orgList({
            skipConnectionStatus
        });
    }
}

export class GetActiveOrgListCommand extends OrgListCommand {
    async execute({ skipConnectionStatus }: { skipConnectionStatus: boolean }) {
        const orgs = await super.execute({ skipConnectionStatus });
        return orgs.filter(org => org.getIsActive());
    }
}

export function intoSalesforceOrgs(orgListResult: OrgListResult) {
    if (!orgListResult) {
        return [];
    }
    const nonScratchOrgs = parseNonScratchOrgs(orgListResult);
    const scratchOrgs = parseScratchOrgs(orgListResult);

    const orgs: SalesforceOrg[] = [...nonScratchOrgs, ...scratchOrgs];
    return orgs;

    function parseNonScratchOrgs(orgListResult: OrgListResult) {
        if (!orgListResult.result?.nonScratchOrgs) {
            return [];
        }

        return orgListResult.result.nonScratchOrgs.map(nonScratchOrg => {
            const isActive = isActiveSandboxOrg(nonScratchOrg);
            return intoSalesforceOrg(nonScratchOrg, false, isActive);
        });
    }

    function parseScratchOrgs(orgListResult: OrgListResult) {
        if (!orgListResult.result?.scratchOrgs) {
            return [];
        }

        return orgListResult.result.scratchOrgs.map(scratchOrg => {
            const isActive = isActiveScratchOrg(scratchOrg);
            return intoSalesforceOrg(scratchOrg, true, isActive);
        });
    }

    function isActiveScratchOrg(scratchOrgResult: ScratchOrgResult) {
        return !scratchOrgResult.isExpired;
    }

    function isActiveSandboxOrg(sandboxOrgResult: SandboxOrgResult) {
        return sandboxOrgResult.connectedStatus === 'Connected';
    }

    function intoSalesforceOrg(orgResult: OrgResult, isScratchOrg: boolean, isActive: boolean) {
        const org: SalesforceOrg = new SalesforceOrg({
            alias: orgResult.alias,
            username: orgResult.username,
            isActive,
            isDefaultOrg: orgResult.isDefaultUsername,
            isScratchOrg
        });
        return org;
    }
}

export class ImmediateCacheOrgListCommand extends GetActiveOrgListCommand {

    private orgListPromise: Promise<OrgListResult>;

    constructor (params: CommandParams) {
        super(params);
        this.orgListPromise = super.runOrgList({
            skipConnectionStatus: false
        });
    }

    protected async runOrgList({ skipConnectionStatus }: { skipConnectionStatus: boolean; }): Promise<OrgListResult> {
        const result = await this.orgListPromise;
        this.orgListPromise = super.runOrgList({
            skipConnectionStatus
        });
        return result;
    }
}