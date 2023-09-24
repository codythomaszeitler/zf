/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect, it } from '@jest/globals';
import { get, getMissingResultProperty, getMissingSandboxesProperty, getMissingScratchOrgsProperty, getNoSandboxesAndNoScratches, getScratchOrgMissingAliasProperty, getScratchOrgMissingIsExpiredProperty } from './data/orgListOutput';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { SalesforceOrg } from "../salesforceOrg";
import { ExecutorCommand } from '../executor';
import { getWhenDefaultOrgDoesNotExist, getWhenDefaultOrgExists, getWhenResultArrayDoesNotExist, getWhenResultArrayIsEmpty } from './data/configGetOutput';
import { getWithCustomObject, getWithFailureMessage, getWithoutResultArray } from './data/sobjectListOutputs';
import { SObjectListResult } from '../sObjectListResult';

describe('sf salesforce cli - get org list', () => {
    it('should convert nominal response to in memory representation', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": get()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(5);
    });

    it('should not get any orgs when response contains no scratches and no sandboxes', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getNoSandboxesAndNoScratches()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should show org as not-active if isExpired flag is missing on ScratchOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getScratchOrgMissingIsExpiredProperty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(1);
        expect(orgs[0].getIsActive()).toBe(false);
    });

    it('should show org with \'\' alias if alias flag is missing on ScratchOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getScratchOrgMissingAliasProperty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(1);
        expect(orgs[0].getAlias()).toBe('');
    });

    it('should parse an empty list of orgs when scratchOrgs property is missing on SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getMissingScratchOrgsProperty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should parse an empty list of orgs when nonScratchOrgs property is missing on SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getMissingSandboxesProperty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should parse an empty list of orgs when result is missing on the SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": getMissingResultProperty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs: SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });
});

describe('salesforce cli - get default org', () => {
    it('should be able to get the default org when one exists', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf config get target-org --json": getWhenDefaultOrgExists()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const org: SalesforceOrg | null = await cli.getDefaultOrg();
        if (!org) {
            expect(false).toBe(true);
        } else {
            expect(org.getAlias()).toBe('cso');
        }
    });

    it('should return null if no default org exists', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf config get target-org --json": getWhenDefaultOrgDoesNotExist()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const org: SalesforceOrg | null = await cli.getDefaultOrg();
        expect(org).toBeNull();
    });

    it('should return null if result array is empty', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf config get target-org --json": getWhenResultArrayIsEmpty()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const org: SalesforceOrg | null = await cli.getDefaultOrg();
        expect(org).toBeNull();
    });

    it('should return null if result array does not exist', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf config get target-org --json": getWhenResultArrayDoesNotExist()
        });

        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const org: SalesforceOrg | null = await cli.getDefaultOrg();
        expect(org).toBeNull();
    });
});

function genMockExecutor(commandToStdOutput: any) {
    return async function (command: ExecutorCommand) {
        const asString = command.command + ' ' + command.args.join(' ');
        const stdout = commandToStdOutput[asString];

        return {
            stdout: JSON.parse(stdout)
        };
    };
}

describe('salesforce cli - sobject list', () => {

    it('should be able to get the list of salesforce sobjects as domain objects', async () => {
        const targetOrg: SalesforceOrg = new SalesforceOrg({
            alias: 'cso',
            isActive: true
        });

        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf sobject list --target-org cso --json": getWithCustomObject()
        });
        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const result: SObjectListResult = await cli.sobjectList({
            targetOrg
        });
        expect(result.getSObjectApiNames()).not.toHaveLength(0);
        expect(result.getSObjectApiNames()).toHaveLength(1136);
    });

    it('should give you an empty list of api names if no result is found but is successful', async () => {
        const targetOrg: SalesforceOrg = new SalesforceOrg({
            alias: 'cso',
            isActive: true
        });

        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf sobject list --target-org cso --json": getWithoutResultArray()
        });
        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const result: SObjectListResult = await cli.sobjectList({
            targetOrg
        });
        expect(result.getSObjectApiNames()).toHaveLength(0);
    });

    it('should throw an exception if result comes back as non-zero with error message', async () => {
        const targetOrg: SalesforceOrg = new SalesforceOrg({
            alias: 'cso',
            isActive: true
        });

        const mockExecutor = genMockExecutor({
            "sf org list --json": get(),
            "sf sobject list --target-org cso --json": getWithFailureMessage()
        });
        const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        let caughtException = null;
        try {
            await cli.sobjectList({
                targetOrg
            });
        } catch (e : any) {
            caughtException = e;
        }

        expect(caughtException.message).toBeTruthy();
    });
});