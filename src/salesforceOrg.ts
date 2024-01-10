export class SalesforceOrg {
    private readonly isActive?: boolean;
    private readonly alias: string;
    private readonly isScratchOrg: boolean;
    private readonly isDefaultOrg: boolean;

    public constructor(params: { alias?: string; isActive?: boolean; isScratchOrg?: boolean; isDefaultOrg?: boolean }) {
        this.alias = params.alias ? params.alias : '';
        this.isActive = params.isActive;
        this.isScratchOrg = params.isScratchOrg ?? true;
        this.isDefaultOrg = params.isDefaultOrg ?? false;
    }

    public getAlias(): string {
        return this.alias;
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