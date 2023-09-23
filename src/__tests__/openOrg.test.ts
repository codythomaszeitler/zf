import { IntegratedDevelopmentEnvironment } from "../integratedDevelopmentEnvironment";
import { openOrg } from "../openOrg";
import { SalesforceOrg } from "../salesforceOrg";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { describe, expect } from '@jest/globals';

describe('open org', () => {
    let ide: MockIDE;
    let salesforceCli: MockSalesforceCli;

    const testAliasOrg = "test-alias";
    beforeEach(() => {
        ide = new MockIDE();
        salesforceCli = new MockSalesforceCli();

        salesforceCli.add(new SalesforceOrg({
            alias: testAliasOrg,
            isActive: true
        }));
    });

    it('should be able to open org with selected alias when the org exists', async () => {
        openOrg(ide, salesforceCli);

        await ide.waitForShowQuickPick();
        await ide.selectQuickPickItem(testAliasOrg);

        expect(salesforceCli.didOpenOrg(testAliasOrg)).toBe(true);
        expect(ide.didShowWindowLoadingMessageWith(`Opening Org ${testAliasOrg}...`)).toBe(true);
    });

    it("should alert user with error when selected org does not exist in list of orgs", async () => {
        const openOrgPromise = openOrg(ide, salesforceCli);

        await ide.waitForShowQuickPick();

        const dneOrgAlias = 'Does-Not-Exist';
        await ide.selectQuickPickItem(dneOrgAlias);

        await openOrgPromise;
        expect(ide.didShowErrorMessage(`Parsing --target-org \n\tNo authorization information found for ${dneOrgAlias}.\nSee more help with --help`)).toBe(true);
        expect(ide.didShowWindowLoadingMessageWith(`Opening Org ${dneOrgAlias}...`)).toBe(true);
    });
});

describe('open org when there are no orgs available', () => {
    let ide: MockIDE;
    let salesforceCli: MockSalesforceCli;

    beforeEach(() => {
        ide = new MockIDE();
        salesforceCli = new MockSalesforceCli();
    });

    it("should alert the user with an error that there are no orgs found", async () => {
        await openOrg(ide, salesforceCli);
        expect(ide.didShowErrorMessage('Could not find any orgs.')).toBe(true);
    });
});

describe('open org when get org list throws an exception', () => {
    let ide: MockIDE;
    let salesforceCli: MockSalesforceCli;

    const errorMessage = 'Open Org Failed';
    beforeEach(() => {
        ide = new MockIDE();
        salesforceCli = new MockSalesforceCli();
        salesforceCli.toThrowOnGetOrgList = new Error(errorMessage);
    });

    it("should alert user with the exception message", async () => {
        await openOrg(ide, salesforceCli);
        expect(ide.didShowErrorMessage(errorMessage)).toBe(true);
    });
});