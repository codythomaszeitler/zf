import { Command } from "./command";
import { intoSalesforceOrgs } from "./openOrg";

export class SalesforceOrg {
    private readonly isActive?: boolean;
    private readonly alias: string;
    private readonly username: string;
    private readonly isScratchOrg: boolean;
    private readonly isDefaultOrg: boolean;

    public constructor (params: { alias?: string; isActive?: boolean; isScratchOrg?: boolean; isDefaultOrg?: boolean; username?: string }) {
        this.alias = params.alias ? params.alias : '';
        this.username = params.username ? params.username : '';
        this.isActive = params.isActive;
        this.isScratchOrg = params.isScratchOrg ?? true;
        this.isDefaultOrg = params.isDefaultOrg ?? false;
    }

    public getAlias(): string {
        return this.alias;
    }

    public getUsername(): string {
        return this.username;
    }

    public getTargetOrgName(): string {
        if (this.alias) {
            return this.alias;
        }

        return this.username;
    }

    public getIsActive(): boolean | undefined {
        return this.isActive;
    }

    public getIsScratchOrg() {
        return this.isScratchOrg;
    }

    public getIsDefaultOrg() {
        return this.isDefaultOrg;
    }
}

export const NO_SF_ORG_FOUND = new SalesforceOrg({
    alias: 'SF-ZSI-NOT-FOUND',
    isActive: false
});

export class GetDefaultOrg extends Command {
    async execute({ }: {}) {
        const orgListResult = await this.getCli().orgList({
            skipConnectionStatus: true
        });
        const orgs = intoSalesforceOrgs(orgListResult);
        return orgs.find(org => org.getIsDefaultOrg()) ?? null;
    }
}