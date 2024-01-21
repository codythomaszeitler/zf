import { describe, expect, test } from '@jest/globals';
import { SObjectApiName } from "../sObjectApiName";
import { SObjectDescribeResult, SObjectFieldDescribeResult } from "../sObjectDescribeResult";
import { FauxSObjectApexClass, fauxSObjectIntoString, generateFauxSObject } from '../genFauxSObjects';

describe('gen faux sobjects', () => {
    it('foo', () => {
        const describe: SObjectDescribeResult = new SObjectDescribeResult({
            apiName: SObjectApiName.get('Account'),
            fields: [
                new SObjectFieldDescribeResult({
                    apiName: 'Name',
                    type: 'string'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Id',
                    type: 'id'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'IsDeleted',
                    type: 'boolean'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Url__c',
                    type: 'url'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Time__c',
                    type: 'time'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Datetime__c',
                    type: 'datetime'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Double__c',
                    type: 'double'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Percent__c',
                    type: 'percent'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Phone__c',
                    type: 'phone'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Picklist__c',
                    type: 'picklist'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_MultiPicklist__c',
                    type: 'multipicklist'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_TextArea__c',
                    type: 'textarea'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_EncryptedString__c',
                    type: 'encryptedstring'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Date__c',
                    type: 'date'
                }),
                new SObjectFieldDescribeResult({
                    apiName: 'Test_Currency__c',
                    type: 'currency'
                })
            ],
            childRelationships: []
        });
        const output: FauxSObjectApexClass = generateFauxSObject({
            describe
        });

        expect(output.name).toBe('Account');
        expect(output.fields).toHaveLength(15);
        expect(output.fields[0].type).toBe('String');
        expect(output.fields[1].type).toBe('Id');
        expect(output.fields[2].type).toBe('Boolean');
        expect(output.fields[3].type).toBe('String');
        expect(output.fields[4].type).toBe('Date');
        expect(output.fields[5].type).toBe('Datetime');
        expect(output.fields[6].type).toBe('Double');
        expect(output.fields[7].type).toBe('Double');
        expect(output.fields[8].type).toBe('String');
        expect(output.fields[9].type).toBe('String');
        expect(output.fields[10].type).toBe('String');
        expect(output.fields[11].type).toBe('String');
        expect(output.fields[12].type).toBe('String');
        expect(output.fields[13].type).toBe('Date');
        expect(output.fields[14].type).toBe('Double');

        const asString = fauxSObjectIntoString({
            fauxApexClass: output
        });

        expect(asString).toBe(
            `global class Account {
	global String Name;
	global Id Id;
	global Boolean IsDeleted;
	global String Test_Url__c;
	global Date Test_Time__c;
	global Datetime Test_Datetime__c;
	global Double Test_Double__c;
	global Double Test_Percent__c;
	global String Test_Phone__c;
	global String Test_Picklist__c;
	global String Test_MultiPicklist__c;
	global String Test_TextArea__c;
	global String Test_EncryptedString__c;
	global Date Test_Date__c;
	global Double Test_Currency__c;
}`);
    });
});