/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect, it } from '@jest/globals';
import { get, getMissingResultProperty, getMissingSandboxesProperty, getMissingScratchOrgsProperty, getNoSandboxesAndNoScratches, getOrgListUsersNominalResponse, getScratchOrgMissingAliasProperty, getScratchOrgMissingIsExpiredProperty } from './data/orgListOutput';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { NO_SF_ORG_FOUND, SalesforceOrg } from "../salesforceOrg";
import { ExecutorCommand } from '../executor';
import { getWhenDefaultOrgDoesNotExist, getWhenDefaultOrgExists, getWhenResultArrayDoesNotExist, getWhenResultArrayIsEmpty } from './data/configGetOutput';
import { getWithCustomObject, getWithFailureMessage, getWithoutResultArray } from './data/sobjectListOutputs';
import { SObjectListResult } from '../sObjectListResult';
import { SObjectApiName } from '../sObjectApiName';
import { SObjectDescribeResult, SObjectFieldDescribeResult } from '../sObjectDescribeResult';
import { getTestObjectDescribe, getSObjectDescribeWithFailureMessage } from './data/sobjectDescribeOutput';
import { Logger } from '../logger';
import { TestLogger } from './logger.test';
import { getDebugLevelWithDeveloperName, getDebugLogWithDeveloperNameFilter, getNoRecordsFound, getNoRecordsVariableFound } from './data/dataQueryOutput';
import { DEBUG_LEVEL_SOBJECT_NAME } from '../debugLevelSObject';
import { getApexListLogNominalResponse } from './data/apexListLogOutput';
import { SalesforceId } from '../salesforceId';

describe('sf salesforce cli', () => {

    let testLogger: TestLogger;

    beforeEach(() => {
        testLogger = new TestLogger();
        Logger.setGlobalLogger(testLogger);
    });

    afterEach(() => {
        Logger.setGlobalLogger(new TestLogger());
    });

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
            } catch (e: any) {
                caughtException = e;
            }

            expect(caughtException.message).toBeTruthy();
        });
    });

    describe('salesforce cli - sobject describe', () => {
        it('should be able to describe a custom object', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const testObjectApiName: SObjectApiName = SObjectApiName.get('Test_Object__c');

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf sobject describe --sobject Test_Object__c --target-org cso --json": getTestObjectDescribe()
            });
            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result: SObjectDescribeResult = await cli.sobjectDescribe({
                targetOrg,
                sObjectApiName: testObjectApiName
            });

            expect(result.getApiName()).toStrictEqual(SObjectApiName.get('Test_Object__c'));

            expect(result.getFields().length).not.toBe(0);
            const testObjectNameFieldDescribe: SObjectFieldDescribeResult | null = result.getFieldDescribeByApiName('Id');

            if (testObjectNameFieldDescribe) {
                expect(testObjectNameFieldDescribe.getApiName()).toBe('Id');
                expect(testObjectNameFieldDescribe.getType()).toBe('id');
            } else {
                expect(true).toBe(false);
            }

            const isDeletedFieldDescribe: SObjectFieldDescribeResult | null = result.getFieldDescribeByApiName('IsDeleted');

            if (isDeletedFieldDescribe) {
                expect(isDeletedFieldDescribe.getApiName()).toBe('IsDeleted');
                expect(isDeletedFieldDescribe.getType()).toBe('boolean');
            }
            else {
                expect(true).toBe(false);
            }


            const nameFieldDescribe: SObjectFieldDescribeResult | null = result.getFieldDescribeByApiName('Name');

            if (nameFieldDescribe) {
                expect(nameFieldDescribe.getApiName()).toBe('Name');
                expect(nameFieldDescribe.getType()).toBe('string');
            } else {
                expect(true).toBe(false);
            }

            const testUrlFieldDescribe: SObjectFieldDescribeResult | null = result.getFieldDescribeByApiName('Test_Url__c');

            if (testUrlFieldDescribe) {
                expect(testUrlFieldDescribe.getApiName()).toBe('Test_Url__c');
                expect(testUrlFieldDescribe.getType()).toBe('url');
            }
            else {
                expect(true).toBe(false);
            }

            const testTimeDescribeResult: SObjectFieldDescribeResult | null = result.getFieldDescribeByApiName('Test_Time__c');

            if (testTimeDescribeResult) {
                expect(testTimeDescribeResult.getApiName()).toBe('Test_Time__c');
                expect(testTimeDescribeResult.getType()).toBe('time');
            }
            else {
                expect(true).toBe(false);
            }
        });

        it('should be able to describe a custom object', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const testObjectApiName: SObjectApiName = SObjectApiName.get('Test_Object__c');

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf sobject describe --sobject Test_Object__c --target-org cso --json": getSObjectDescribeWithFailureMessage()
            });
            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            let caughtException = null;
            try {
                await cli.sobjectDescribe({
                    targetOrg,
                    sObjectApiName: testObjectApiName
                });
            } catch (e: any) {
                caughtException = e;
            }

            expect(caughtException?.message).toBeTruthy();
            expect(caughtException?.message.includes('Parsing')).toBe(true);
        });
    });

    describe('salesforce cli - org list users', () => {
        it('should be able to get the list of users for an org', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf org list users --target-org cso --json": getOrgListUsersNominalResponse({
                    orgAlias: targetOrg
                }),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const orgListUsersResult = await cli.orgListUsers({
                targetOrg
            });

            expect(orgListUsersResult.getUsers()).toHaveLength(1);
        });

        it('should not return any users if no result key found', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf org list users --target-org cso --json": getMissingResultProperty(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.orgListUsers({
                targetOrg
            });
            expect(result.getUsers()).toHaveLength(0);

            const re = /.*Could not find result array during sf org list users --target-org cso --json, returning empty list of users\..*/;
            expect(testLogger.contains(re)).toBeTruthy();
        });

        it('should be able to process user that does not have default marker', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const orgListUsersNominalResultString = getOrgListUsersNominalResponse({
                orgAlias: targetOrg
            });

            const orgListUsersNominalResult = JSON.parse(orgListUsersNominalResultString);
            delete orgListUsersNominalResult.result[0].defaultMarker;

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf org list users --target-org cso --json": JSON.stringify(orgListUsersNominalResult),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.orgListUsers({
                targetOrg
            });

            expect(result.getUsers()).toHaveLength(1);
            expect(result.getUsers()[0].defaultMarker).toBe('');
        });

        it('should be able to process user that does not have an alias', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const orgListUsersNominalResultString = getOrgListUsersNominalResponse({
                orgAlias: targetOrg
            });

            const orgListUsersNominalResult = JSON.parse(orgListUsersNominalResultString);
            delete orgListUsersNominalResult.result[0].alias;

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf org list users --target-org cso --json": JSON.stringify(orgListUsersNominalResult),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.orgListUsers({
                targetOrg
            });

            expect(result.getUsers()).toHaveLength(1);
            expect(result.getUsers()[0].alias).toEqual(NO_SF_ORG_FOUND);
        });
    });

    describe('sf salesforce cli - data query', () => {
        it('should be able to query a generic sobject', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id, DeveloperName FROM DebugLevel\" --use-tooling-api --target-org cso --json": getDebugLevelWithDeveloperName(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    fields: ['DeveloperName'],
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                }
            });

            expect(result.getSObjects()).toHaveLength(4);
        });

        it('should be able to query a generic sobject without fields, but it should add Id', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id FROM DebugLevel\" --use-tooling-api --target-org cso --json": getDebugLevelWithDeveloperName(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                }
            });

            expect(result.getSObjects()).toHaveLength(4);
        });

        it('should be able to query a generic sobject without fields with a condition', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id FROM DebugLevel WHERE DeveloperName = 'ZFDebugTraceFlag'\" --use-tooling-api --target-org cso --json": getDebugLogWithDeveloperNameFilter(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                    where: "DeveloperName = 'ZFDebugTraceFlag'"
                }
            });

            expect(result.getSObjects()).toHaveLength(1);
            const sObject = result.getSObjects()[0];
            expect(sObject["DeveloperName"]).toBe("ZFDebugTraceFlag");
            expect(sObject["Id"]).toBe("7dl8N0000004lHqQAI");
            expect(sObject.type).toBe(DEBUG_LEVEL_SOBJECT_NAME);
        });

        it('should return an empty list of sobjects if no records found', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id FROM DebugLevel WHERE DeveloperName = 'NOT-FOUND'\" --use-tooling-api --target-org cso --json": getNoRecordsFound(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                    where: "DeveloperName = 'NOT-FOUND'"
                }
            });

            expect(result.getSObjects()).toHaveLength(0);
        });

        it('should return an empty list of sobjects if records variable is not found', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id FROM DebugLevel WHERE DeveloperName = 'NOT-FOUND'\" --use-tooling-api --target-org cso --json": getNoRecordsVariableFound(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                    where: "DeveloperName = 'NOT-FOUND'"
                }
            });

            expect(result.getSObjects()).toHaveLength(0);

            const re = /.* did not have a records variable on result\. Returning empty list of sobjects\./;
            expect(testLogger.contains(re)).toBeTruthy();
        });

        it('should return an empty list of sobjects if result variable is not found', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf data query --query \"SELECT Id FROM DebugLevel WHERE DeveloperName = 'NOT-FOUND'\" --use-tooling-api --target-org cso --json": getMissingResultProperty(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const result = await cli.dataQuery({
                targetOrg,
                query: {
                    from: DEBUG_LEVEL_SOBJECT_NAME,
                    where: "DeveloperName = 'NOT-FOUND'"
                }
            });

            expect(result.getSObjects()).toHaveLength(0);

            const re = /.* did not have a result variable\. Returning empty list of sobjects\./;
            expect(testLogger.contains(re)).toBeTruthy();
        });

        it('should throw an exception if empty from query is given', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            let caughtException: any = null;
            try {
                await cli.dataQuery({
                    targetOrg,
                    query: {
                        from: '',
                    }
                });
            } catch (e: any) {
                caughtException = e;
            }

            expect(caughtException?.message).toBe('Cannot run data query with empty from table.');
        });
    });

    describe('sf salesforce cli - apex list log', () => {
        it('should be able to convert a nominal response to apex logs', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf apex list log --target-org cso --json": getApexListLogNominalResponse()
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const apexListLogResult = await cli.apexListLog({
                targetOrg
            });

            const logs = apexListLogResult.getLogs();
            expect(logs.length).not.toBe(0);
            expect(logs.length).toBe(3);

            const log = logs[0];

            expect(log.getApplication()).toBe("Unknown");
            expect(log.getDuration()).toBe(89);
            expect(log.getId()).toBe(SalesforceId.get("07L7i00000MYv6qEAD"));
            expect(log.getLogLength()).toBe(2680);
            expect(log.getOperation()).toBe("Api");

            const expectedStartTime = new Date(Date.parse("2023-12-20T07:04:17+0000"));
            expect(log.getStartTime().getTime()).toBe(expectedStartTime.getTime());
            expect(log.getStatus()).toBe("Success");
        });

        it('should return empty logs and log error message if result is missing', async () => {
            const targetOrg: SalesforceOrg = new SalesforceOrg({
                alias: 'cso',
                isActive: true
            });

            const mockExecutor = genMockExecutor({
                "sf org list --json": get(),
                "sf apex list log --target-org cso --json": getWithoutResultArray()
            });

            const cli: SfSalesforceCli = new SfSalesforceCli(mockExecutor);

            const apexListLogResult = await cli.apexListLog({
                targetOrg
            });

            const logs = apexListLogResult.getLogs();
            expect(logs.length).toBe(0);

            const re = /.*Missing result in apex list logs\. Returning empty log list\..*/;
            expect(testLogger.contains(re)).toBeTruthy();
        });
    });
});