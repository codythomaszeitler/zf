import { IntegratedDevelopmentEnvironment, Uri } from "../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../salesforceCli";
import { SalesforceOrg } from "../salesforceOrg";
import { SObjectDescribeResult } from "../sObjectDescribeResult";
import { DescribeSObject } from "./intellisense";

export const CACHE_TIMEOUT_CONFIG_KEY = 'sf.zsi.cachedDescribeSObjectTimeout';

export function genCachedDescribeSObjects({ ide, cli }: { ide: IntegratedDevelopmentEnvironment; cli: SalesforceCli; }) {

    async function runDescribeSObject(targetOrg: SalesforceOrg, sObjectName: string) {
        const sObjectDescribeResult = await cli.sobjectDescribe({
            targetOrg, sObjectApiName: sObjectName
        });
        return sObjectDescribeResult;
    }

    const cache = new Map<string, SObjectDescribeResult>();
    const cachedDescribeSObjects: DescribeSObject = async function ({ sObjectName }) {
        const targetOrg = await cli.getDefaultOrg();

        const timeout = ide.getConfig<number>(CACHE_TIMEOUT_CONFIG_KEY, 60000);
        return ide.withStatusBarMessage(async () => {
            if (timeout === 0) {
                return runDescribeSObject(targetOrg, sObjectName);
            }

            if (cache.has(sObjectName)) {
                return cache.get(sObjectName);
            }

            const sObjectDescribeResult = await runDescribeSObject(targetOrg, sObjectName);
            cache.set(sObjectName, sObjectDescribeResult);

            setTimeout(() => {
                cache.delete(sObjectName);
            }, timeout);

            return sObjectDescribeResult;
        }, {
            title: `Retrieving ${sObjectName} SObject Describe from ${targetOrg.getAlias()}...`
        });
    };
    return cachedDescribeSObjects;
}

export function genSoqlDirDescribeSObjects({ ide, cli, soqlDir }: { ide: IntegratedDevelopmentEnvironment, cli: SalesforceCli; soqlDir: Uri }) {
    const soqlDirDescribeSObjects: DescribeSObject = async function ({ sObjectName }) {

    };
    return soqlDirDescribeSObjects;
}