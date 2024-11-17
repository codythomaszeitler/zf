import { ImmediateCacheOrgListCommand, SelectAndOpenOrgCommand, SelectOrgCommand } from "../openOrg";
import { SalesforceOrg } from "../salesforceOrg";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { describe, expect } from '@jest/globals';
import { getOrgListResult } from "./soql/data/orgListDescribeResult";
import { OrgOpenResult } from "../sfOrgListResult";

describe('select org command', () => {

    let ide: MockIDE;
    let cli: MockSalesforceCli;

    beforeEach(() => {
        ide = new MockIDE();
        cli = new MockSalesforceCli();
    });

    it('should be able to select an active org', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            expect(skipConnectionStatus).toBe(false);
            return getOrgListResult();
        };
        const testObject = new SelectOrgCommand({
            ide,
            cli
        });

        const orgAlias = 'codyzeitler12@cunning-raccoon-bz3els.com';
        const selectOrgPromise = testObject.execute();

        await ide.waitForShowQuickPick();

        ide.selectQuickPickItem(orgAlias);

        const result = await selectOrgPromise;
        expect(result.getTargetOrgName()).toBe(orgAlias);
    });

    it('should show an error message if there are no orgs found', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            return {
                result: {
                    nonScratchOrgs: [],
                    scratchOrgs: []
                }
            };
        };

        const selectOrgPromise = new SelectOrgCommand({
            ide, cli
        });

        await selectOrgPromise.execute();
        expect(ide.didShowErrorMessage('Could not find any active orgs.')).toBe(true);
    });
});

describe('open org command', () => {




    let ide: MockIDE;
    let cli: MockSalesforceCli;

    beforeEach(() => {
        ide = new MockIDE();
        cli = new MockSalesforceCli();
    });

    it('should not throw an error message if user does not select an option', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            expect(skipConnectionStatus).toBe(false);
            return getOrgListResult();
        };

        cli.orgOpen = async function ({ targetOrg }) {
            throw new Error('This should not have been called!');
        };

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        const openOrgPromise = testObject.execute();
        await ide.waitForShowQuickPick();
        ide.selectQuickPickItem('');

        try {
            await openOrgPromise;
        } catch (e) {
            expect(false).toBe(true);
        }
    });

    it('should show error message that there were not active orgs if org list result is empty', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            return {};
        };

        cli.orgOpen = async function ({ targetOrg }) {
            throw new Error('This should not have been called!');
        };

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        await testObject.execute();

        expect(ide.didShowErrorMessage('Could not find any active orgs.')).toBe(true);
    });

    it('should show error message that there were not active orgs if non scratch orgs and scratch orgs does not exist', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            return {
                result: {

                }
            };
        };

        cli.orgOpen = async function ({ targetOrg }) {
            throw new Error('This should not have been called!');
        };

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        await testObject.execute();

        expect(ide.didShowErrorMessage('Could not find any active orgs.')).toBe(true);
    });

    it('should gracefully handle if org list returns an undefined value', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            return undefined;
        };

        cli.orgOpen = async function ({ targetOrg }) {
            throw new Error('This should not have been called!');
        };

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        await testObject.execute();

        expect(ide.didShowErrorMessage('Could not find any active orgs.')).toBe(true);
    });

    it('should be able to handle org name that does not exist in active org name list', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            expect(skipConnectionStatus).toBe(false);
            return getOrgListResult();
        };

        let caughtTargetOrg: SalesforceOrg | undefined = undefined;
        cli.orgOpen = jest.fn(async function ({ targetOrg }) {
            caughtTargetOrg = targetOrg;
            return getOrgOpenResult();
        });

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        const orgAlias = 'i-do-not-exist';
        const openOrgPromise = testObject.execute();

        await ide.waitForShowQuickPick();

        ide.selectQuickPickItem(orgAlias);

        await openOrgPromise;

        expect(cli.orgOpen).toBeCalledTimes(0);
    });

    it('should open an org when commanded', async () => {
        cli.orgList = async function ({ skipConnectionStatus }) {
            expect(skipConnectionStatus).toBe(false);
            return getOrgListResult();
        };

        let caughtTargetOrg: SalesforceOrg | undefined = undefined;
        cli.orgOpen = jest.fn(async function ({ targetOrg }) {
            caughtTargetOrg = targetOrg;
            return getOrgOpenResult();
        });

        const testObject = new SelectAndOpenOrgCommand({
            ide,
            cli
        });

        const orgAlias = 'codyzeitler12@cunning-raccoon-bz3els.com';
        const openOrgPromise = testObject.execute();

        await ide.waitForShowQuickPick();

        ide.selectQuickPickItem(orgAlias);

        await openOrgPromise;

        expect(cli.orgOpen).toBeCalledTimes(1);
        expect(caughtTargetOrg.getTargetOrgName()).toBe(orgAlias);
    });
});

describe('immediate cache org list command', () => {
    let ide: MockIDE;
    let cli: MockSalesforceCli;

    beforeEach(() => {
        ide = new MockIDE();
        cli = new MockSalesforceCli();
    });

    it('should run a org list command when first constructed', async () => {
        cli.orgList = jest.fn(async function ({ skipConnectionStatus }) {
            return getOrgListResult();
        });

        const testObject = new ImmediateCacheOrgListCommand({
            ide,
            cli
        });
        expect(cli.orgList).toBeCalledTimes(1);

        await testObject.execute({
            skipConnectionStatus: false
        });

        expect(cli.orgList).toBeCalledTimes(2);
    });
});

function getOrgOpenResult(): OrgOpenResult {
    return {
        status: 0,
        result: {
            orgId: "00D5e000001AcqNEAS",
            url: "test.url.com",
            username: "test@salesforce.com"
        },
        warnings: [
            "This command will expose sensitive information that allows for subsequent activity using your current authenticated session.\nSharing this information is equivalent to logging someone in under the current credential, resulting in unintended access and escalation of privilege.\nFor additional information, please review the authorization section of the https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm."
        ]
    };
}