import { SObjectApiName } from "./sObjectApiName";

export class SObjectListResult {
    private readonly sObjectApiNames: SObjectApiName[];

    public constructor(params: {
        sObjectApiNames: SObjectApiName[]
    }) {
        this.sObjectApiNames = params.sObjectApiNames;
    }

    public getSObjectApiNames(): SObjectApiName[] {
        return [...this.sObjectApiNames];
    }

    public getSObjectApiNamesAsString() : string[] {
        return this.sObjectApiNames.map(sObjectApiName => {
            return sObjectApiName.toString();
        }).reverse();
    }
}