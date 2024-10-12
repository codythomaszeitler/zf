import { SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";
import { genCachedDescribeSObjects, CACHE_TIMEOUT_CONFIG_KEY } from "../../soql/genDescribeSObjects";
import { DescribeSObject } from "../../soql/intellisense";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";
import { getListSObjectsResult } from "./data/listSObjectResult";
import { describeSObject } from "./utils";

describe('gen list sobjects', () => {

    let ide: MockIDE;
    let cli: SalesforceCli;

    let targetOrg: SalesforceOrg;

    let testFunction: DescribeSObject;

    beforeEach(() => {
        ide = new MockIDE();
        cli = new MockSalesforceCli();
        targetOrg = new SalesforceOrg({
            alias: 'testOrg'
        });

        cli.getDefaultOrg = async function () {
            return targetOrg;
        };


        cli.sobjectDescribe = jest.fn(async function ({ sObjectApiName, targetOrg }) {
            return describeSObject({ sObjectName: sObjectApiName, targetOrg });
        });

        jest.useFakeTimers();

        testFunction = genCachedDescribeSObjects({
            cli, ide
        });
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should be able to get the cached value of an sobject describe', async () => {
        for (let i = 0; i < 10; i++) {

            if (i % 2 === 0) {
                const result = await testFunction({ sObjectName: 'Account' });
                expect(result.result.name).toBe('Account');
            } else {
                const result = await testFunction({ sObjectName: 'Contact' });
                expect(result.result.name).toBe('Contact');
            }
        }

        expect(cli.sobjectDescribe).toHaveBeenCalledTimes(2);
        jest.advanceTimersToNextTimer();

        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                const result = await testFunction({ sObjectName: 'Account' });
                expect(result.result.name).toBe('Account');
            } else {
                const result = await testFunction({ sObjectName: 'Contact' });
                expect(result.result.name).toBe('Contact');
            }
        }
        expect(cli.sobjectDescribe).toHaveBeenCalledTimes(4);
    });

    it('should always get the sobject list if timeout value is 0', async () => {
        ide.setConfig(CACHE_TIMEOUT_CONFIG_KEY, 0);

        for (let i = 0; i < 10; i++) {
            const result = await testFunction({ sObjectName: 'Account' });
            expect(result.result.name).toBe('Account');
        }
        expect(cli.sobjectDescribe).toHaveBeenCalledTimes(10);
    });

    it('should respect the timeout value given in the config', async () => {
        ide.setConfig(CACHE_TIMEOUT_CONFIG_KEY, 1000);
        expect(((await testFunction({ sObjectName: 'Account' })).result.name)).toBe('Account');
        jest.advanceTimersByTime(500);
        expect(((await testFunction({ sObjectName: 'Account' })).result.name)).toBe('Account');
        jest.advanceTimersByTime(500);
        expect((await testFunction({ sObjectName: 'Account' })).result.name).toBe('Account');

        expect(cli.sobjectDescribe).toHaveBeenCalledTimes(2);
    });

    it('should show a message in the status bar when retrieving the sobject list', async () => {
        await testFunction({sObjectName : 'Account'});
        expect(ide.didShowStatusBarMessage(`Retrieving Account SObject Describe from ${targetOrg.getAlias()}...`)).toBe(true);
    });
});
