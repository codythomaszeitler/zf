import { SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";
import { CACHE_TIMEOUT_CONFIG_KEY, genCachedListSObjects } from "../../soql/genListSObjects";
import { ListSObjects } from "../../soql/intellisense";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";
import { getListSObjectsResult } from "./data/listSObjectResult";

describe('gen list sobjects', () => {

    let ide: MockIDE;
    let cli: SalesforceCli;

    let targetOrg: SalesforceOrg;

    let testFunction: ListSObjects;

    beforeEach(() => {
        ide = new MockIDE();
        cli = new MockSalesforceCli();
        targetOrg = new SalesforceOrg({
            alias: 'testOrg'
        });

        cli.getDefaultOrg = async function () {
            return targetOrg;
        };

        cli.sobjectList = jest.fn(async function ({ targetOrg }) {
            return getListSObjectsResult();
        });

        jest.useFakeTimers();

        testFunction = genCachedListSObjects({
            cli, ide
        });
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should get the list of sobjects', async () => {
        for (let i = 0; i < 10; i++) {
            const result = await testFunction({});
            expect(result.result).toHaveLength(getNumSObjects());
        }

        expect(cli.sobjectList).toHaveBeenCalledTimes(1);
        jest.advanceTimersToNextTimer();

        for (let i = 0; i < 10; i++) {
            const result = await testFunction({});
            expect(result.result).toHaveLength(getNumSObjects());
        }

        expect(cli.sobjectList).toHaveBeenCalledTimes(2);
    });

    it('should always get the sobject list if timeout value is 0', async () => {
        ide.setConfig(CACHE_TIMEOUT_CONFIG_KEY, 0);

        for (let i = 0; i < 10; i++) {
            const result = await testFunction({});
            expect(result.result).toHaveLength(getNumSObjects());
        }
        expect(cli.sobjectList).toHaveBeenCalledTimes(10);
    });

    it('should respect the timeout value given in the config', async () => {
        ide.setConfig(CACHE_TIMEOUT_CONFIG_KEY, 1000);
        expect((await testFunction({})).result).toHaveLength(getNumSObjects());
        jest.advanceTimersByTime(500);
        expect((await testFunction({})).result).toHaveLength(getNumSObjects());
        jest.advanceTimersByTime(500);
        expect((await testFunction({})).result).toHaveLength(getNumSObjects());

        expect(cli.sobjectList).toHaveBeenCalledTimes(2);
    });

    it('should show a message in the status bar when retrieving the sobject list', async () => {
        await testFunction({});
        expect(ide.didShowStatusBarMessage(`Retrieving SObject List from ${targetOrg.getAlias()}...`)).toBe(true);
    });

    function getNumSObjects() {
        return getListSObjectsResult().result.length;
    }
});
