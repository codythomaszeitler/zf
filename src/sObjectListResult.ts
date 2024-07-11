import { Logger } from "./logger";
import { SObjectApiName } from "./sObjectApiName";
import { z } from 'zod';

const sobjectListResultSchema = z.object({
    result: z.array(z.string())
});

export type SObjectListResult = z.infer<typeof sobjectListResultSchema>;

export function intoSObjectListResult(cliOutputJson: unknown) {
    try {
        return sobjectListResultSchema.parse(cliOutputJson);
    } catch (e: unknown) {
        if (e instanceof Error) {
            Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
            Logger.get().error(e);
        }
        return undefined;
    }
}

export class SObjectListResultDeprecated {
    private readonly sObjectApiNames: SObjectApiName[];

    public constructor (params: {
        sObjectApiNames: SObjectApiName[]
    }) {
        this.sObjectApiNames = params.sObjectApiNames;
    }

    public getSObjectApiNames(): SObjectApiName[] {
        return [...this.sObjectApiNames];
    }

    public getSObjectApiNamesAsString(): string[] {
        return this.sObjectApiNames.map(sObjectApiName => {
            return sObjectApiName.toString();
        }).reverse();
    }
}