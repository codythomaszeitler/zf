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
import * as path from 'path';
import { Uri } from '../integratedDevelopmentEnvironment';

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
			outputDir: testDir,
			sfdxProject: {
				packageDirectories: [
					{
						path: 'force-app',
						default: true
					}
				]
			}
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\t}`;

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
			outputDir: testDir,
			sfdxProject: {
				packageDirectories: [
					{
						path: 'force-app',
						default: true
					}
				]
			}
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal ${apexClass.getName()}() {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only empty void public method into test directory', async () => {

		const className = 'OnlyHasVoidPublicMethod';
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: className
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		commandToStdOutput['sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org cso --json']
			= genOnlyHasPublicVoidMethodApexClass();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir,
			sfdxProject: {
				packageDirectories: [
					{
						path: 'force-app',
						default: true
					}
				]
			}
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal void foo() {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only integer public property into test directory', async () => {

		const className = 'OnlyHasPublicIntegerProperty';
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: className
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		commandToStdOutput['sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org cso --json']
			= genOnlyHasPublicIntegerPropertyApexClass();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir,
			sfdxProject: {
				packageDirectories: [
					{
						path: 'force-app',
						default: true
					}
				]
			}
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal Integer a;}`;

		expect(expected).toBe(contents);
	});

	it('should not generate apex class that is found within path of packageDirectories', async () => {

		const className = 'IExistInPackageDir';
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: className
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		const inForceAppDirUri = Uri.get(path.join('force-app', 'main', 'default', apexClass.getNameWithExtension()));
		await fs.writeFile(inForceAppDirUri, `public ${apexClass.getName()} {}`);

		commandToStdOutput['sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org cso --json']
			= getEmptyApexClassWith({
				className: apexClass.getName()
			});

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir,
			sfdxProject: {
				packageDirectories: [
					{
						path: 'force-app',
						default: true
					}
				]
			}
		});

		const hasFile = await fs.hasFile(uri);
		expect(hasFile).toBe(false);
	});
});

function getEmptyApexClassWith(params: {
	className: string
}) {
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
						"Name": params.className,
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": params.className,
							"innerClasses": [],
							"interfaces": [],
							"key": params.className,
							"methods": [],
							"name": params.className,
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
								"name": params.className,
								"references": [],
								"type": params.className
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

function genEmptyApexClassDataQuery() {
	return getEmptyApexClassWith({
		className: "EmptyApexClass"
	});
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

function genOnlyHasPublicVoidMethodApexClass() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p8F00000KhjKXQAZ"
						},
						"Id": "01p8F00000KhjKXQAZ",
						"Name": "OnlyHasVoidPublicMethod",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "OnlyHasVoidPublicMethod",
							"innerClasses": [],
							"interfaces": [],
							"key": "OnlyHasVoidPublicMethod",
							"methods": [
								{
									"annotations": [],
									"location": {
										"column": 17,
										"line": 2
									},
									"modifiers": [
										"public"
									],
									"name": "foo",
									"parameters": [],
									"references": [],
									"returnType": "void",
									"type": null
								}
							],
							"name": "OnlyHasVoidPublicMethod",
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
								"name": "OnlyHasVoidPublicMethod",
								"references": [],
								"type": "OnlyHasVoidPublicMethod"
							},
							"variables": []
						}
					}
				],
				"totalSize": 6,
				"done": true
			},
			"warnings": []
		}
	);
}

function genOnlyHasPublicIntegerPropertyApexClass() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p8F00000Khm25QAB"
						},
						"Id": "01p8F00000Khm25QAB",
						"Name": "OnlyHasPublicIntegerProperty",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "OnlyHasPublicIntegerProperty",
							"innerClasses": [],
							"interfaces": [],
							"key": "OnlyHasPublicIntegerProperty",
							"methods": [],
							"name": "OnlyHasPublicIntegerProperty",
							"namespace": null,
							"parentClass": "",
							"properties": [
								{
									"annotations": [],
									"location": {
										"column": 20,
										"line": 2
									},
									"modifiers": [
										"public"
									],
									"name": "a",
									"references": [],
									"type": "Integer"
								}
							],
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
								"name": "OnlyHasPublicIntegerProperty",
								"references": [],
								"type": "OnlyHasPublicIntegerProperty"
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