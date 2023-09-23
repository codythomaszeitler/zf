/* eslint-disable @typescript-eslint/naming-convention */
import {describe, expect, it} from '@jest/globals';
import { get, getMissingResultProperty, getMissingSandboxesProperty, getMissingScratchOrgsProperty, getNoSandboxesAndNoScratches, getScratchOrgMissingAliasProperty, getScratchOrgMissingIsExpiredProperty } from './data/orgListOutput';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { SalesforceOrg } from "../salesforceOrg";
import { ExecutorCommand } from '../executor';

describe('sf salesforce cli - get org list', () => {
    it('should convert nominal response to in memory representation', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : get()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(5);
    });

    it('should not get any orgs when response contains no scratches and no sandboxes', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getNoSandboxesAndNoScratches()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should show org as not-active if isExpired flag is missing on ScratchOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getScratchOrgMissingIsExpiredProperty()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(1);
        expect(orgs[0].getIsActive()).toBe(false);
    });

    it('should show org with \'\' alias if alias flag is missing on ScratchOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getScratchOrgMissingAliasProperty()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(1);
        expect(orgs[0].getAlias()).toBe('');
    });

    it('should parse an empty list of orgs when scratchOrgs property is missing on SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getMissingScratchOrgsProperty()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should parse an empty list of orgs when nonScratchOrgs property is missing on SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getMissingSandboxesProperty()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });

    it('should parse an empty list of orgs when result is missing on the SfOrgListResult', async () => {
        const mockExecutor = genMockExecutor({
            "sf org list --json" : getMissingResultProperty()
        });

        const cli : SfSalesforceCli = new SfSalesforceCli(mockExecutor);

        const orgs : SalesforceOrg[] = await cli.getOrgList();
        expect(orgs).toHaveLength(0);
    });
});

function genMockExecutor(commandToStdOutput: any) {
    return async function(command : ExecutorCommand) {
        const asString = command.command + ' ' + command.args.join(' ');
        const stdout = commandToStdOutput[asString];
        return {
            stdout : JSON.parse(stdout)
        };
    };
}
