import { Position } from "../../position";
import { DescribeSObject, ListSObjects, SoqlIntellisense, STANDARD_SOBJECTS_SUBDIR } from "../../soql/intellisense";
import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { FauxSObjectApexClass, fauxSObjectIntoString } from "../../genFauxSObjects";
import { Uri } from "../../integratedDevelopmentEnvironment";
import { getAccountSObjectDescribeResult } from './data/accountSObjectDescribeResult';
import { getListSObjectsResult } from './data/listSObjectResult';
import { SObjectDescribeResult } from "../../sObjectDescribeResult";
import { getSObjectList } from "../data/sobjectListOutputs";

const describeSObject: DescribeSObject = async function ({ sObjectName }) {
	if (sObjectName === 'Account') {
		return getAccountSObjectDescribeResult();
	}

	throw new Error(`Could not find sobject for [${sObjectName}]`);
}

const listSObjects: ListSObjects = async function ({ }) {
	return getListSObjectsResult();
}


describe('soql intellisense', () => {
	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let inputOutput: any;

	let targetOrg: SalesforceOrg;

	let sObjectsDir: Uri;

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

		sObjectsDir = ide.generateUri('.sfdx', 'sObjects');
	});

	it('should intellisense select fields from existing sobject', async () => {
		const currentEditorContents = 'SELECT Id,  FROM Account';
		const position = new Position(1, 11);

		const testObject = new SoqlIntellisense({
			describeSObject,
			listSObjects
		});

		// Given a describeSobjectResult, give me the list of all expected fields that should have come out of it.
		// What was wrong with this thing? 

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(72);
		expect(results.some(item => item.item === 'Id')).toBeFalsy();

	});


	it('should be able to intellisense one account field, Name, when its partially completed', async () => {
		const currentEditorContents = 'SELECT Id, Na FROM Account';
		const position = new Position(1, 13);

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Name');


		const allStartWithNa = results.filter(item => item.item.startsWith('Na'));
		expect(allStartWithNa).toHaveLength(3);
	});

	it('should be able to intellisense against an sobject that does not return any fields', async () => {
		const currentEditorContents = 'SELECT  FROM Account';
		const position = new Position(1, 7);

		const describeSObject: DescribeSObject = async ({ sObjectName }) => {
			expect(sObjectName).toBe('Account');
			const result: SObjectDescribeResult = {
				result: {
					fields: [],
					childRelationships: [],
					name: sObjectName,
					custom: false,
					queryable: true
				}
			};

			return result;
		};

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(0);
	});

	it('should be able to intellisense when trying to auto-complete sobjects', async () => {
		const currentEditorContents = 'SELECT Id FROM ';
		const position = new Position(0, 15);

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const sObjectNames = getListSObjectsResult();
		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(sObjectNames.result.length);

		expect(results.every(result => sObjectNames.result.includes(result.item))).toBe(true);
	});

	it('should be able to intellisense when trying to auto-complete sobjects (partial sobject put in)', async () => {
		const currentEditorContents = 'SELECT Id FROM Acc';
		const position = new Position(0, 18);

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const sObjectNames = getListSObjectsResult().result;

		const startingWithAcc = sObjectNames.filter(sObjectName => sObjectName.startsWith('Acc'));

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(startingWithAcc.length);

		expect(results.every(result => sObjectNames.includes(result.item))).toBe(true);
	});


	it('should be able to intellisense NOTHING when trying to auto-complete a completed query while within select', async () => {
		const currentEditorContents = 'SELECT Id, Name   FROM Account';
		const position = new Position(0, 16);

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(0);
	});

	it('should be able to intellisense sobject names when there are no fields given', async () => {
		const currentEditorContents = 'SELECT FROM ';
		const position = new Position(0, 12);

		const testObject = new SoqlIntellisense({
			listSObjects, describeSObject
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		const sObjectNames = getSortedSObjectNames();

		expect(results).toHaveLength(sObjectNames.length);
		expect(results.map(item => item.item)).toEqual(sObjectNames);
	});

	function getSortedSObjectNames() {
		const sObjectNames = getListSObjectsResult().result;
		return sObjectNames.sort((a, b) => {
			return a.localeCompare(b);
		});
	}

	it('should be able to intellisense field names in a where clause', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE ';
		const position = new Position(0, 29);

		const testObject = new SoqlIntellisense({
			describeSObject, listSObjects
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(73);
	});

	// it('should be able to intellisense WHERE clause AND ORDER BY clause after Account SObject', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account ';
	// 	const position = new Position(0, 24);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(2);
	// 	expect(results[0].item).toBe('ORDER BY');
	// 	expect(results[1].item).toBe('WHERE');
	// });

	// it('should be able to intellisense a SELECT at the beginning of a query', async () => {
	// 	const currentEditorContents = ' Id FROM Account';
	// 	const position = new Position(0, 0);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('SELECT');
	// });

	// it('should be able to intellisense a SELECT at the beginning of a query when only partially completed', async () => {
	// 	const currentEditorContents = 'SEL Id FROM Account';
	// 	const position = new Position(0, 3);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('SELECT');
	// });

	// it('should be able to intellisense an Id if there is nothing but a select in the query', async () => {
	// 	const currentEditorContents = 'SELECT ';
	// 	const position = new Position(0, 7);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Id');
	// });

	// it('should be able to intellisense only a FROM if there is an Id and it is partially completed', async () => {
	// 	const currentEditorContents = 'SELECT Id F';
	// 	const position = new Position(0, 11);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('FROM');
	// });

	// it('should be able to intellisense a FROM at the end of a query', async () => {
	// 	const currentEditorContents = 'SELECT Id ';
	// 	const position = new Position(0, 10);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('FROM');
	// });

	// it('should NOT intellisense a FROM at the in the middle of ids', async () => {
	// 	const currentEditorContents = 'SELECT  , Id ';
	// 	const position = new Position(0, 8);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(0);
	// });

	// it('should be able to intellisense an identifier after a WHERE ', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE ';
	// 	const position = new Position(0, 29);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('ParentId');
	// });

	// it('should be able to intellisense an identifier after an AND ', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' AND ';
	// 	const position = new Position(0, 48);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('ParentId');
	// });

	// it('should be able to intellisense an identifier after an OR ', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' AND Id = \'a\' OR ';
	// 	const position = new Position(0, 60);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('ParentId');
	// });

	// it('should be able to intellisense a field after an ORDER BY ', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ORDER BY ';
	// 	const position = new Position(0, 49);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('ParentId');
	// });

	// it('should be able to intellisense a field after an ORDER BY and COMMA', async () => {
	// 	// Okay so this is interesting, this is not 
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ORDER BY ParentId, ';
	// 	const position = new Position(0, 61);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(2);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// });

	// it('should be able to intellisense comparison operators', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name ';
	// 	const position = new Position(0, 34);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('!=');
	// 	expect(results[1].item).toBe('<>');
	// 	expect(results[2].item).toBe('=');
	// });

	// it('should be able to intellisense an after a where id field filter is done', async () => {
	// 	// So we have to know that we are yes... at the end of a query.
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ';
	// 	const position = new Position(0, 41);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('AND');
	// 	expect(results[1].item).toBe('OR');
	// 	expect(results[2].item).toBe('ORDER BY');
	// });

	// it('should be able to intellisense a SELECT with nothing in the string', async () => {
	// 	// So we have to know that we are yes... at the end of a query.
	// 	const currentEditorContents = '';
	// 	const position = new Position(0, 0);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('SELECT');
	// });

	// it('should be able to autocomplete against an account name parent lookup field on contact', async () => {
	// 	// So we have to know that we are yes... at the end of a query.
	// 	const currentEditorContents = 'SELECT Id, Account. FROM Contact';
	// 	const position = new Position(0, 19);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'LastName',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'AccountId',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Account',
	// 				type: 'Account'
	// 			}
	// 		],
	// 		name: 'Contact'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const contactContents = fauxSObjectIntoString({ fauxApexClass: contactSObject });
	// 	const contactFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Contact.cls');
	// 	await ide.writeFile({
	// 		uri: contactFauxSObjectUri, contents: contactContents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(3);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('ParentId');
	// });

	// it('should be able to autocomplete against an account to account parent (lookup not matching sobject name)', async () => {
	// 	// So we have to know that we are yes... at the end of a query.
	// 	const currentEditorContents = 'SELECT Id, Parent. FROM Account';
	// 	const position = new Position(0, 18);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Parent',
	// 				type: 'Account'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(4);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('Name');
	// 	expect(results[2].item).toBe('Parent');
	// 	expect(results[3].item).toBe('ParentId');
	// });

	// it('should be able to autocomplete against Account.Parent.Parent.Test_Lead_Lookup__r against contact', async () => {
	// 	// So we have to know that we are yes... at the end of a query.
	// 	const currentEditorContents = 'SELECT Id, Account.Parent.Parent.Test_Lead_Lookup__r. FROM Contact';
	// 	const position = new Position(0, 53);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Name',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'ParentId',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Parent',
	// 				type: 'Account'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Test_Lead_Lookup__c',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Test_Lead_Lookup__r',
	// 				type: 'Lead'
	// 			}
	// 		],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'LastName',
	// 				type: 'String'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'AccountId',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'Account',
	// 				type: 'Account'
	// 			}
	// 		],
	// 		name: 'Contact'
	// 	};

	// 	const leadSObject: FauxSObjectApexClass = {
	// 		fields: [
	// 			{
	// 				modifier: 'public',
	// 				name: 'Id',
	// 				type: 'Id'
	// 			},
	// 			{
	// 				modifier: 'public',
	// 				name: 'LeadName',
	// 				type: 'String'
	// 			}
	// 		],
	// 		name: 'Lead'
	// 	};


	// 	const contactContents = fauxSObjectIntoString({ fauxApexClass: contactSObject });
	// 	const contactFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Contact.cls');
	// 	await ide.writeFile({
	// 		uri: contactFauxSObjectUri, contents: contactContents
	// 	});

	// 	const leadContents = fauxSObjectIntoString({ fauxApexClass: leadSObject });
	// 	const leadFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Lead.cls');
	// 	await ide.writeFile({
	// 		uri: leadFauxSObjectUri, contents: leadContents
	// 	});

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(2);
	// 	expect(results[0].item).toBe('Id');
	// 	expect(results[1].item).toBe('LeadName');
	// });

	// it('should be able to intellisense fields on child relationship queries', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT  FROM Contacts) FROM Account';
	// 	const position = new Position(0, 19);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('LastName');
	// });

	// async function writeStandardFauxSObject({ fauxSObjectApexClass }: { fauxSObjectApexClass: FauxSObjectApexClass | FauxSObjectApexClass[] }) {
	// 	const writeIntoFile = async (fauxSObjectApexClass: FauxSObjectApexClass) => {
	// 		const contents = fauxSObjectIntoString({ fauxApexClass: fauxSObjectApexClass });
	// 		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, `${fauxSObjectApexClass.name}.cls`);
	// 		await ide.writeFile({
	// 			uri, contents
	// 		});
	// 	};

	// 	if (Array.isArray(fauxSObjectApexClass)) {
	// 		for (const fauxSObject of fauxSObjectApexClass) {
	// 			await writeIntoFile(fauxSObject);
	// 		}
	// 	} else {
	// 		await writeIntoFile(fauxSObjectApexClass);
	// 	}
	// }

	// it('should be able to do child relationship queries', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT Id FROM ) FROM Account';
	// 	const position = new Position(0, 27);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Contacts');
	// });

	// it('should be able to intellisense fields on child relationship queries (with parent lookup)', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT LastName, Account. FROM Contacts) FROM Account';
	// 	const position = new Position(0, 37);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Name');
	// });

	// it('should be able to intellisense an Id in an almost empty sub-select (only SELECT and Id found)', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT Id ) FROM Account';
	// 	const position = new Position(0, 22);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('FROM');
	// });

	// it('should be able to intellisense an Id in an almost empty sub-select (only SELECT found)', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT ) FROM Account';
	// 	const position = new Position(0, 19);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Id');
	// });

	// it('should be able to intellisense a SELECT at the start of an empty sub-query', async () => {
	// 	const currentEditorContents = 'SELECT Id, () FROM Account';
	// 	const position = new Position(0, 12);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('SELECT');
	// });

	// it('should be able to intellisense fields on child relationship queries (with parent lookup and partially complete)', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT LastName, Account.Pare FROM Contacts) FROM Account';
	// 	const position = new Position(0, 41);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}, 
	// 		{
	// 			modifier: 'public',
	// 			name: 'Parent',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'ParentId',
	// 			type: 'Id'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(2);
	// 	expect(results[0].item).toBe('Parent');
	// 	expect(results[1].item).toBe('ParentId');
	// });

	// it('should be able to intellisense id lookups that match sub-select to parent object', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Id IN (SELECT  FROM Contact)';
	// 	const position = new Position(0, 43);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>' 
	// 		}, 
	// 		{
	// 			modifier: 'public',
	// 			name: 'Parent',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'ParentId',
	// 			type: 'Id'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('AccountId');
	// });

	// it('should be able to intellisense a real object name and not child relationship name in where sub-select', async () => {
	// 	const currentEditorContents = 'SELECT Id FROM Account WHERE Id IN (SELECT FROM )';
	// 	const position = new Position(0, 48);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>' // I mean this should really be the correct type.
	// 		}, 
	// 		{
	// 			modifier: 'public',
	// 			name: 'Parent',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'ParentId',
	// 			type: 'Id'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contactSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'LastName',
	// 			type: 'String'
	// 		}, {
	// 			modifier: 'public',
	// 			name: 'Account',
	// 			type: 'Account'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'AccountId',
	// 			type: 'Id'
	// 		}
	// 		],
	// 		name: 'Contact'
	// 	};


	// 	await writeStandardFauxSObject({
	// 		fauxSObjectApexClass: [contactSObject, accountSObject]
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Contact');
	// });

	// it('should be able to do child relationship queries', async () => {
	// 	const currentEditorContents = 'SELECT Id, (SELECT Id FROM ) FROM Account';
	// 	const position = new Position(0, 27);

	// 	const testObject = new SoqlIntellisense({
	// 		ide, cli, sObjectsDir
	// 	});

	// 	const accountSObject: FauxSObjectApexClass = {
	// 		fields: [{
	// 			modifier: 'public',
	// 			name: 'Name',
	// 			type: 'String'
	// 		},
	// 		{
	// 			modifier: 'public',
	// 			name: 'Contacts',
	// 			type: 'List<Contact>'
	// 		}],
	// 		name: 'Account'
	// 	};

	// 	const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
	// 	const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
	// 	await ide.writeFile({
	// 		uri, contents
	// 	});

	// 	const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
	// 	expect(results).toHaveLength(1);
	// 	expect(results[0].item).toBe('Contacts');
	// });
});