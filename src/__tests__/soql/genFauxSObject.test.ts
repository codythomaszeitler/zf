import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { SObjectListResult } from '../../sObjectListResult';
import { SObjectDescribeResult } from '../../sObjectDescribeResult';
import { GenerateFauxSoqlCommand, genSoqlMetadataDirs } from '../../soql/genFauxSoqlCommand';
import { Uri } from '../../integratedDevelopmentEnvironment';
import { TestLogger } from '../logger.test';
import { Logger } from '../../logger';

describe('generate faux sobjects', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let inputOutput: any;

	let targetOrg: SalesforceOrg;

	let sfdxToolsDir: Uri;

	beforeEach(() => {
		targetOrg = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: targetOrg });

		const mockExecutor = genMockExecutor(inputOutput);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});

		sfdxToolsDir = ide.generateUri('.sfdx', 'tools');

		const testLogger = new TestLogger();
		Logger.setGlobalLogger(testLogger);
	});

	it('should be able to convert when an object has fields and child relationships', async () => {
		const listSObjectsResult: SObjectListResult = {
			result: [
				'Account'
			]
		};

		const describeSObjectResult: SObjectDescribeResult = {
			result: {
				childRelationships: [
					{
						cascadeDelete: false,
						childSObject: "Account",
						deprecatedAndHidden: false,
						field: "ParentId",
						junctionIdListNames: [],
						junctionReferenceTo: [],
						relationshipName: "ChildAccounts",
						restrictedDelete: false
					}
				],
				fields: [{
					aggregatable: true,
					custom: false,
					filterable: true,
					groupable: true,
					inlineHelpText: null,
					label: "Account Name",
					name: "Name",
					nillable: false,
					picklistValues: [],
					referenceTo: [],
					relationshipName: null,
					sortable: true,
					type: "string"
				}],
				custom: false,
				name: 'Account',
				queryable: true
			}
		};

		inputOutput[`sf sobject list --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(listSObjectsResult);
		inputOutput[`sf sobject describe --sobject Account --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(describeSObjectResult);

		const testObject = new GenerateFauxSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			targetOrg,
			sfdxToolsDir
		});


		const { soqlMetadataStandardDir } = genSoqlMetadataDirs(sfdxToolsDir);
		const accountJsonUri = Uri.join(soqlMetadataStandardDir, 'Account.json');

		const contents = await ide.readFile({
			uri: accountJsonUri
		});

		expect(contents).toEqual(JSON.stringify(describeSObjectResult.result, null, 2));
	});

	it('should be able to convert when an object has fields and child relationships (custom object)', async () => {
		const listSObjectsResult: SObjectListResult = {
			result: [
				'Test_Object__c'
			]
		};

		const describeSObjectResult: SObjectDescribeResult = {
			result: {
				childRelationships: [
					{
						cascadeDelete: false,
						childSObject: "Account",
						deprecatedAndHidden: false,
						field: "Account__c",
						junctionIdListNames: [],
						junctionReferenceTo: [],
						relationshipName: "Accounts__r",
						restrictedDelete: false
					}
				],
				fields: [{
					aggregatable: true,
					custom: false,
					filterable: true,
					groupable: true,
					inlineHelpText: null,
					label: "Name",
					name: "Name",
					nillable: false,
					picklistValues: [],
					referenceTo: [],
					relationshipName: null,
					sortable: true,
					type: "string"
				}],
				custom: true,
				name: 'Test_Object__c',
				queryable: true
			}
		};

		inputOutput[`sf sobject list --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(listSObjectsResult);
		inputOutput[`sf sobject describe --sobject Test_Object__c --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(describeSObjectResult);

		const testObject = new GenerateFauxSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			targetOrg,
			sfdxToolsDir
		});


		const { soqlMetadataCustomDir} = genSoqlMetadataDirs(sfdxToolsDir);
		const accountJsonUri = Uri.join(soqlMetadataCustomDir, 'Test_Object__c.json');

		const contents = await ide.readFile({
			uri: accountJsonUri
		});

		expect(contents).toEqual(JSON.stringify(describeSObjectResult.result, null, 2));
	});

	it('should be able to handle if sobject describe fails', async () => {
		const listSObjectsResult: SObjectListResult = {
			result: [
				'Account'
			]
		};

		inputOutput[`sf sobject list --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(listSObjectsResult);
		inputOutput[`sf sobject describe --sobject Account --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify({});

		const testObject = new GenerateFauxSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			targetOrg,
			sfdxToolsDir
		});

		const { soqlMetadataStandardDir } = genSoqlMetadataDirs(sfdxToolsDir);
		const accountJsonUri = Uri.join(soqlMetadataStandardDir, 'Account.json');

		const hasFile = await ide.hasFile(accountJsonUri);
		expect(hasFile).toBe(false);
	});

	it('should be able to handle if sobject list fails', async () => {
		inputOutput[`sf sobject list --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify({});

		const testObject = new GenerateFauxSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			targetOrg,
			sfdxToolsDir
		});


		const { soqlMetadataStandardDir } = genSoqlMetadataDirs(sfdxToolsDir);
		const accountJsonUri = Uri.join(soqlMetadataStandardDir, 'Account.json');

		const hasFile = await ide.hasFile(accountJsonUri);
		expect(hasFile).toBe(false);

		expect(ide.didShowWarningMessage(`Could not parse sobject list against ${targetOrg.getAlias()}.`)).toBe(true);
	});
});