/* eslint-disable @typescript-eslint/naming-convention */
import { describe, expect } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { GenerateOfflineSymbolTableCommand, getOfflineSymbolTableApexClassUri } from '../generateOfflineSymbolTableCommand';
import { SfSalesforceCli } from '../sfSalesforceCli';
import { get, getOrgListUsersWithoutEmptyDefaultMarker } from './data/orgListOutput';
import { genMockExecutor, getSfOrgListCommandString } from './__mocks__/mockShell';
import { SalesforceCli } from '../salesforceCli';
import { APEX_CLASS_SOBJECT_NAME, ApexClass } from '../apexClass';
import { genRandomId } from './salesforceId.test';
import { Uri } from '../integratedDevelopmentEnvironment';
import { getSfdxProjectUri } from '../readSfdxProjectCommand';

describe('generate offline symbol table command', () => {
	function getApexClassQueryString(targetOrg: SalesforceOrg) {
		return `sf data query --query "SELECT Id, Name, SymbolTable, Body FROM ApexClass" --use-tooling-api --target-org ${targetOrg.getAlias()} --json`;
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
			name: apexClassName,
			body: `public class ${apexClassName} { }`
		});
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: org,
			apexClass,
			outputDir: testDir
		});

		return [apexClass, uri];
	};

	it('should log a warning message if there is no default org set and no target org given', async () => {
		commandToStdOutput[getSfOrgListCommandString({
			skipConnectionStatus: true
		})] = getOrgListUsersWithoutEmptyDefaultMarker();

		await testObject.execute({
			outputDir: testDir
		});

		expect(ide.didShowWarningMessage('Could not generate offline symbol table without default org set.')).toBe(true);
	});

	it('should be able to generate empty apex class into test directory', async () => {
		const [apexClass, uri] = createApexClass('EmptyApexClass');

		commandToStdOutput[getApexClassQueryString(org)]
			= getEmptyApexClassWith({
				className: apexClass.getName(),
				body: apexClass.getBody()
			});

		await testObject.execute({
			targetOrg: org,
			outputDir: testDir,

		});

		const contents = await fs.readFile(uri);
		expect(apexClass.getBody()).toBe(contents);
	});

	it('should not generate apex class that is found within path of packageDirectories', async () => {
		const [apexClass, uri] = createApexClass('IExistInPackageDir');

		const apexClassUri = ide.generateUri("force-app", "main", "default", apexClass.getNameWithExtension());
		await fs.writeFile(apexClassUri, `public ${apexClass.getName()} {}`);

		commandToStdOutput[getApexClassQueryString(org)]
			= getEmptyApexClassWith({
				className: apexClass.getName(),
				body: apexClass.getBody()
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
	className: string,
	body: string
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
						},
						"Body": params.body
					}
				],
				"totalSize": 1,
				"done": true
			},
			"warnings": []
		}
	);
}
