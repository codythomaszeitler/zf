/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { GenerateOfflineSymbolTableCommand, getOfflineSymbolTableApexClassUri } from '../generateOfflineSymbolTableCommand';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { get } from './data/orgListOutput';
import { genMockExecutor } from './__mocks__/mockShell';
import { SalesforceCli } from '../salesforceCli';
import { APEX_CLASS_SOBJECT_NAME, ApexClass } from '../apexClass';
import { genRandomId } from './salesforceId.test';

describe('generate offline symbol table command', () => {

	let testObject: GenerateOfflineSymbolTableCommand;

	let fs: MockFileSystem;
	let cli: SalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let testDir: string;

	let commandToStdOutput: any;

	beforeEach(() => {
		commandToStdOutput = {
			'sf org list --json': get()
		};

		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();
		cli = new SfSalesforceCli(genMockExecutor(commandToStdOutput));
		ide = new MockIDE({
			filesystem: fs
		});
		testDir = 'testDir';

		testObject = new GenerateOfflineSymbolTableCommand({
			cli,
			ide
		});
	});

	it('should be able to generate empty apex class into test directory', async () => {
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: 'EmptyApexClass'
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		commandToStdOutput['sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org cso --json']
			= genEmptyApexClassDataQuery();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class EmptyApexClass {}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only empty constructor into test directory', async () => {
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: 'OnlyHasEmptyConstructor'
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		commandToStdOutput['sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org cso --json']
			= genOnlyEmptyConstructorApexClassDataQuery();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class OnlyHasEmptyConstructor {\n\tglobal OnlyHasEmptyConstructor() {}}`;

		expect(expected).toBe(contents);
	});
});


function genEmptyApexClassDataQuery() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p8F00000Kh8kjQAB"
						},
						"Id": "01p8F00000Kh8kjQAB",
						"Name": "EmptyApexClass",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "EmptyApexClass",
							"innerClasses": [],
							"interfaces": [],
							"key": "EmptyApexClass",
							"methods": [],
							"name": "EmptyApexClass",
							"namespace": null,
							"parentClass": "",
							"properties": [],
							"tableDeclaration": {
								"annotations": [],
								"location": {
									"column": 27,
									"line": 1
								},
								"modifiers": [
									"public",
									"with sharing"
								],
								"name": "EmptyApexClass",
								"references": [],
								"type": "EmptyApexClass"
							},
							"variables": []
						}
					}
				],
				"totalSize": 1,
				"done": true
			},
			"warnings": []
		}
	);
}

function genOnlyEmptyConstructorApexClassDataQuery() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p8F00000KhjKSQAZ"
						},
						"Id": "01p8F00000KhjKSQAZ",
						"Name": "OnlyHasEmptyConstructor",
						"SymbolTable": {
							"constructors": [
								{
									"annotations": [],
									"location": {
										"column": 12,
										"line": 2
									},
									"modifiers": [
										"public"
									],
									"name": "OnlyHasEmptyConstructor",
									"parameters": [],
									"references": [],
									"type": null
								}
							],
							"externalReferences": [],
							"id": "OnlyHasEmptyConstructor",
							"innerClasses": [],
							"interfaces": [],
							"key": "OnlyHasEmptyConstructor",
							"methods": [],
							"name": "OnlyHasEmptyConstructor",
							"namespace": null,
							"parentClass": "",
							"properties": [],
							"tableDeclaration": {
								"annotations": [],
								"location": {
									"column": 27,
									"line": 1
								},
								"modifiers": [
									"public",
									"with sharing"
								],
								"name": "OnlyHasEmptyConstructor",
								"references": [],
								"type": "OnlyHasEmptyConstructor"
							},
							"variables": []
						}
					}
				],
				"totalSize": 5,
				"done": true
			},
			"warnings": []
		}

	);
}

function 