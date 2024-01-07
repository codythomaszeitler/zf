/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { GenerateOfflineSymbolTableCommand, getOfflineSymbolTableApexClassUri } from '../generateOfflineSymbolTableCommand';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { get } from './data/orgListOutput';
import { genMockExecutor, getSfConfigGetTargetOrgCommandString, getSfOrgListCommandString } from './__mocks__/mockShell';
import { SalesforceCli } from '../salesforceCli';
import { APEX_CLASS_SOBJECT_NAME, ApexClass } from '../apexClass';
import { genRandomId } from './salesforceId.test';
import { Uri } from '../integratedDevelopmentEnvironment';
import { getSfdxProjectUri } from '../readSfdxProjectCommand';
import { getWhenDefaultOrgDoesNotExist } from './data/configGetOutput';

describe('generate offline symbol table command', () => {
	function getApexClassQueryString(targetOrg: SalesforceOrg) {
		return `sf data query --query "SELECT Id, Name, SymbolTable FROM ApexClass" --use-tooling-api --target-org ${targetOrg.getAlias()} --json`;
	}

	let testObject: GenerateOfflineSymbolTableCommand;

	let fs: MockFileSystem;
	let cli: SalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let testDir: Uri;

	let commandToStdOutput: any = {};

	beforeEach(async () => {
		commandToStdOutput[getSfOrgListCommandString()] = get();

		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();
		cli = new SfSalesforceCli(genMockExecutor(commandToStdOutput));
		ide = new MockIDE({
			filesystem: fs
		});
		testDir = ide.generateUri('offlineSymbolTable');
		testObject = new GenerateOfflineSymbolTableCommand({
			cli,
			ide
		});

		const sfdxProjectUri = getSfdxProjectUri({
			currentDir: ide.getCurrentDir()
		});
		await fs.writeFile(sfdxProjectUri, JSON.stringify({
			packageDirectories: [
				{
					path: 'force-app',
					default: true
				}
			]
		}));
	});

	const createApexClass = function (apexClassName: string): [ApexClass, Uri] {
		const recordId = genRandomId(APEX_CLASS_SOBJECT_NAME);
		const apexClass = new ApexClass({
			id: recordId,
			name: apexClassName
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		return [apexClass, uri];
	};

	it('should log a warning message if there is no default org set and no target org given', async () => {
		commandToStdOutput[getSfConfigGetTargetOrgCommandString()] = getWhenDefaultOrgDoesNotExist();

		await testObject.execute({
			outputDir: testDir
		});

		expect(ide.didShowWarningMessage('Could not generate offline symbol table without default org set.')).toBe(true);
	});

	it('should be able to generate empty apex class into test directory', async () => {
		const [apexClass, uri] = createApexClass('EmptyApexClass');

		commandToStdOutput[getApexClassQueryString(org)]
			= genEmptyApexClassDataQuery();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir,

		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\t}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only empty constructor into test directory', async () => {
		const [apexClass, uri] = createApexClass('OnlyHasEmptyConstructor');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyEmptyConstructorApexClassDataQuery();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal ${apexClass.getName()}() {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only empty void public method into test directory', async () => {
		const [apexClass, uri] = createApexClass('OnlyHasVoidPublicMethod');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasPublicVoidMethodApexClass();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal void foo() {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with only integer public property into test directory', async () => {
		const [apexClass, uri] = createApexClass('OnlyHasPublicIntegerProperty');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasPublicIntegerPropertyApexClass();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal Integer a;}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with method that has multiple args into test directory', async () => {
		const [apexClass, uri] = createApexClass('HasMethodWithMultipleArgs');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasMethodWithMultipleArgs();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal Integer foo(Integer a, Integer b) {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with constructor that has multiple args into test directory', async () => {
		const [apexClass, uri] = createApexClass('HasConstructorWithMultipleArgs');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasConstructorWithMultipleArgs();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal ${apexClass.getName()}(Integer a, Integer b) {}}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with static Integer property into test directory', async () => {
		const [apexClass, uri] = createApexClass('HasStaticIntegerProperty');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasStaticIntegerProperty();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal static Integer a;}`;

		expect(expected).toBe(contents);
	});

	it('should be able to generate apex class with static Integer method (Integer) into test directory', async () => {
		const [apexClass, uri] = createApexClass('HasStaticMethod');

		commandToStdOutput[getApexClassQueryString(org)]
			= genOnlyHasStaticMethod();

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
		});

		const contents = await fs.readFile(uri);
		const expected = `global class ${apexClass.getName()} {\n\tglobal static Integer foo(Integer a) {}}`;

		expect(expected).toBe(contents);
	});

	it('should not generate apex class that is found within path of packageDirectories', async () => {
		const [apexClass, uri] = createApexClass('IExistInPackageDir');

		const apexClassUri = ide.generateUri("force-app", "main", "default", apexClass.getNameWithExtension());
		await fs.writeFile(apexClassUri, `public ${apexClass.getName()} {}`);

		commandToStdOutput[getApexClassQueryString(org)]
			= getEmptyApexClassWith({
				className: apexClass.getName()
			});

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir
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

function genOnlyHasMethodWithMultipleArgs() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p6s00000LPqTqAAL"
						},
						"Id": "01p6s00000LPqTqAAL",
						"Name": "HasMethodWithMultipleArgs",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "HasMethodWithMultipleArgs",
							"innerClasses": [],
							"interfaces": [],
							"key": "HasMethodWithMultipleArgs",
							"methods": [
								{
									"annotations": [],
									"location": {
										"column": 20,
										"line": 2
									},
									"modifiers": [
										"public"
									],
									"name": "foo",
									"parameters": [
										{
											"name": "a",
											"type": "Integer"
										},
										{
											"name": "b",
											"type": "Integer"
										}
									],
									"references": [],
									"returnType": "Integer",
									"type": null
								}
							],
							"name": "HasMethodWithMultipleArgs",
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
								"name": "HasMethodWithMultipleArgs",
								"references": [],
								"type": "HasMethodWithMultipleArgs"
							},
							"variables": [
								{
									"annotations": [],
									"location": {
										"column": 32,
										"line": 2
									},
									"modifiers": [],
									"name": "a",
									"references": [],
									"type": "Integer"
								},
								{
									"annotations": [],
									"location": {
										"column": 43,
										"line": 2
									},
									"modifiers": [],
									"name": "b",
									"references": [],
									"type": "Integer"
								}
							]
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

function genOnlyHasConstructorWithMultipleArgs() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p6s00000LPqU0AAL"
						},
						"Id": "01p6s00000LPqU0AAL",
						"Name": "HasConstructorWithMultipleArgs",
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
									"name": "HasConstructorWithMultipleArgs",
									"parameters": [
										{
											"name": "a",
											"type": "Integer"
										},
										{
											"name": "b",
											"type": "Integer"
										}
									],
									"references": [],
									"type": null
								}
							],
							"externalReferences": [],
							"id": "HasConstructorWithMultipleArgs",
							"innerClasses": [],
							"interfaces": [],
							"key": "HasConstructorWithMultipleArgs",
							"methods": [],
							"name": "HasConstructorWithMultipleArgs",
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
								"name": "HasConstructorWithMultipleArgs",
								"references": [],
								"type": "HasConstructorWithMultipleArgs"
							},
							"variables": [
								{
									"annotations": [],
									"location": {
										"column": 51,
										"line": 2
									},
									"modifiers": [],
									"name": "a",
									"references": [],
									"type": "Integer"
								},
								{
									"annotations": [],
									"location": {
										"column": 62,
										"line": 2
									},
									"modifiers": [],
									"name": "b",
									"references": [],
									"type": "Integer"
								}
							]
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


function genOnlyHasStaticIntegerProperty() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p6s00000LPqU5AAL"
						},
						"Id": "01p6s00000LPqU5AAL",
						"Name": "HasStaticIntegerProperty",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "HasStaticIntegerProperty",
							"innerClasses": [],
							"interfaces": [],
							"key": "HasStaticIntegerProperty",
							"methods": [],
							"name": "HasStaticIntegerProperty",
							"namespace": null,
							"parentClass": "",
							"properties": [
								{
									"annotations": [],
									"location": {
										"column": 27,
										"line": 2
									},
									"modifiers": [
										"static",
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
								"name": "HasStaticIntegerProperty",
								"references": [],
								"type": "HasStaticIntegerProperty"
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

function genOnlyHasStaticMethod() {
	return JSON.stringify(
		{
			"status": 0,
			"result": {
				"records": [
					{
						"attributes": {
							"type": "ApexClass",
							"url": "/services/data/v59.0/tooling/sobjects/ApexClass/01p6s00000LPqUAAA1"
						},
						"Id": "01p6s00000LPqUAAA1",
						"Name": "HasStaticMethod",
						"SymbolTable": {
							"constructors": [],
							"externalReferences": [],
							"id": "HasStaticMethod",
							"innerClasses": [],
							"interfaces": [],
							"key": "HasStaticMethod",
							"methods": [
								{
									"annotations": [],
									"location": {
										"column": 27,
										"line": 2
									},
									"modifiers": [
										"static",
										"public"
									],
									"name": "foo",
									"parameters": [
										{
											"name": "a",
											"type": "Integer"
										}
									],
									"references": [],
									"returnType": "Integer",
									"type": null
								}
							],
							"name": "HasStaticMethod",
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
								"name": "HasStaticMethod",
								"references": [],
								"type": "HasStaticMethod"
							},
							"variables": [
								{
									"annotations": [],
									"location": {
										"column": 39,
										"line": 2
									},
									"modifiers": [],
									"name": "a",
									"references": [],
									"type": "Integer"
								}
							]
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