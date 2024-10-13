import { IntegratedDevelopmentEnvironment } from "../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../salesforceCli";
import { SalesforceOrg } from "../salesforceOrg";
import { SObjectListResult } from "../sObjectListResult";
import { ListSObjects } from "./intellisense";

export const CACHE_TIMEOUT_CONFIG_KEY = 'sf.zsi.cachedListSObjectsTimeout';

export function genCachedListSObjects({ cli, ide }: { cli: SalesforceCli; ide: IntegratedDevelopmentEnvironment }) {
    let listSObjectsCache: SObjectListResult | undefined = undefined;

    async function runSObjectList(targetOrg: SalesforceOrg) {
        const sObjectListResult = await cli.sobjectList({
            targetOrg
        });
        return sObjectListResult;
    }

    const cachedListSObjects: ListSObjects = async function ({ }) {
        const targetOrg: SalesforceOrg = await cli.getDefaultOrg();
        return ide.withStatusBarMessage(async () => {
            const timeout = ide.getConfig<number>(CACHE_TIMEOUT_CONFIG_KEY, 60000);
            if (timeout === 0) {
                return runSObjectList(targetOrg);
            }

            if (listSObjectsCache) {
                return listSObjectsCache;
            }
            listSObjectsCache = await runSObjectList(targetOrg);

            setTimeout(() => {
                listSObjectsCache = undefined;
            }, timeout);

            return listSObjectsCache;
        }, {
            title: `Retrieving SObject List from ${targetOrg.getAlias()}...`
        });
    };
    return cachedListSObjects;
}