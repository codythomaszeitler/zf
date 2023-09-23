export class SalesforceOrg {
    private readonly isActive?: boolean;
    private readonly alias: string;

    public constructor(params: { alias?: string; isActive?: boolean }) {
        this.alias = params.alias ? params.alias : '';
        this.isActive = params.isActive;
    }

    public getAlias(): string {
        return this.alias;
    }

    public getIsActive(): boolean | undefined {
        return this.isActive;
    }
}
