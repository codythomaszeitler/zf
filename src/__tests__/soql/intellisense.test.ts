import { Position } from "../../position";
import { CUSTOM_SOBJECTS_SUBDIR, SoqlIntellisense, STANDARD_SOBJECTS_SUBDIR } from "../../soql/intellisense";
import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { FauxSObjectApexClass, fauxSObjectIntoString } from "../../genFauxSObjects";
import { Uri } from "../../integratedDevelopmentEnvironment";

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

	it('should be able to intellisense one account field', async () => {
		const currentEditorContents = 'SELECT Id,  FROM Account';
		const position = new Position(1, 11);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [{
				modifier: 'public',
				name: 'Name',
				type: 'String'
			}],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Name');
	});

	it('should be able to intellisense one account field, Name, when its partially completed', async () => {
		const currentEditorContents = 'SELECT Id, Na FROM Account';
		const position = new Position(1, 13);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [{
				modifier: 'public',
				name: 'Name',
				type: 'String'
			}],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Name');
	});

	it('should be able to intellisense two account fields (account stored in standard dir)', async () => {
		const currentEditorContents = 'SELECT Id,  FROM Account';
		const position = new Position(1, 11);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				}, {
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'ChildAccounts',
					type: 'List<Account>'
				}],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(2);
		expect(results[0].item).toBe('Name');
		expect(results[1].item).toBe('ParentId');
	});

	it('should be able to intellisense with no account fields', async () => {
		const currentEditorContents = 'SELECT  FROM Account';
		const position = new Position(1, 7);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(0);
	});

	it('should be able to intellisense with no account fields (but has id)', async () => {
		const currentEditorContents = 'SELECT  FROM Account';
		const position = new Position(1, 7);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [{
				modifier: 'public',
				name: 'Id',
				type: 'Id'
			}],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Id');
	});

	it('should be able to intellisense when trying to auto-complete sobjects', async () => {
		const currentEditorContents = 'SELECT Id FROM ';
		const position = new Position(0, 15);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				}
			],
			name: 'Account'
		};
		const accountSObjectContents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const accountUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri: accountUri, contents: accountSObjectContents
		});

		const testObjectSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				}
			],
			name: 'Test_Object__c'
		};
		const testObjectUri = Uri.join(sObjectsDir, CUSTOM_SOBJECTS_SUBDIR, 'Test_Object__c.cls');
		const testObjectContents = fauxSObjectIntoString({ fauxApexClass: testObjectSObject });
		await ide.writeFile({
			uri: testObjectUri, contents: testObjectContents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(2);
		expect(results[0].item).toBe('Account');
		expect(results[1].item).toBe('Test_Object__c');
	});

	it('should be able to intellisense when trying to auto-complete sobjects (partial sobject put in)', async () => {
		const currentEditorContents = 'SELECT Id FROM Acc';
		const position = new Position(0, 15);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				}
			],
			name: 'Account'
		};
		const accountSObjectContents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const accountUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri: accountUri, contents: accountSObjectContents
		});

		const testObjectSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				}
			],
			name: 'Test_Object__c'
		};
		const testObjectUri = Uri.join(sObjectsDir, CUSTOM_SOBJECTS_SUBDIR, 'Test_Object__c.cls');
		const testObjectContents = fauxSObjectIntoString({ fauxApexClass: testObjectSObject });
		await ide.writeFile({
			uri: testObjectUri, contents: testObjectContents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Account');
	});


	it('should be able to intellisense NOTHING when trying to auto-complete a completed query while within select', async () => {
		const currentEditorContents = 'SELECT Id, Name   FROM Account';
		const position = new Position(0, 16);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(0);
	});

	it('should be able to intellisense sobject names when there are no fields given', async () => {
		const currentEditorContents = 'SELECT FROM ';
		const position = new Position(0, 12);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('Account');
	});

	it('should be able to intellisense field names in a where clause', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE ';
		const position = new Position(0, 29);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to intellisense WHERE clause AND ORDER BY clause after Account SObject', async () => {
		const currentEditorContents = 'SELECT Id FROM Account ';
		const position = new Position(0, 24);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(2);
		expect(results[0].item).toBe('ORDER BY');
		expect(results[1].item).toBe('WHERE');
	});

	it('should be able to intellisense a SELECT at the beginning of a query', async () => {
		const currentEditorContents = ' Id FROM Account';
		const position = new Position(0, 0);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('SELECT');
	});

	it('should be able to intellisense a FROM at the end of a query', async () => {
		const currentEditorContents = 'SELECT Id ';
		const position = new Position(0, 10);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('FROM');
	});

	it('should NOT intellisense a FROM at the in the middle of ids', async () => {
		const currentEditorContents = 'SELECT  , Id ';
		const position = new Position(0, 8);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(0);
	});

	it('should be able to intellisense an identifier after a WHERE ', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE ';
		const position = new Position(0, 29);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to intellisense an identifier after an AND ', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' AND ';
		const position = new Position(0, 48);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to intellisense an identifier after an OR ', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' AND Id = \'a\' OR ';
		const position = new Position(0, 60);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to intellisense a field after an ORDER BY ', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ORDER BY ';
		const position = new Position(0, 49);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to intellisense a field after an ORDER BY and COMMA', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ORDER BY ParentId, ';
		const position = new Position(0, 61);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(2);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
	});

	it('should be able to intellisense comparison operators', async () => {
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name ';
		const position = new Position(0, 34);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('!=');
		expect(results[1].item).toBe('<>');
		expect(results[2].item).toBe('=');
	});

	it('should be able to intellisense an after a where id field filter is done', async () => {
		// So we have to know that we are yes... at the end of a query.
		const currentEditorContents = 'SELECT Id FROM Account WHERE Name = \'a\' ';
		const position = new Position(0, 41);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('AND');
		expect(results[1].item).toBe('OR');
		expect(results[2].item).toBe('ORDER BY');
	});

	it('should be able to intellisense a SELECT with nothing in the string', async () => {
		// So we have to know that we are yes... at the end of a query.
		const currentEditorContents = '';
		const position = new Position(0, 0);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(1);
		expect(results[0].item).toBe('SELECT');
	});

	it('should be able to autocomplete against an account name parent lookup field on contact', async () => {
		// So we have to know that we are yes... at the end of a query.
		const currentEditorContents = 'SELECT Id, Account. FROM Contact';
		const position = new Position(0, 19);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				}
			],
			name: 'Account'
		};

		const contactSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'LastName',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'AccountId',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Account',
					type: 'Account'
				}
			],
			name: 'Contact'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const contactContents = fauxSObjectIntoString({ fauxApexClass: contactSObject });
		const contactFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Contact.cls');
		await ide.writeFile({
			uri: contactFauxSObjectUri, contents: contactContents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(3);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('ParentId');
	});

	it('should be able to autocomplete against an account to account parent (lookup not matching sobject name)', async () => {
		// So we have to know that we are yes... at the end of a query.
		const currentEditorContents = 'SELECT Id, Parent. FROM Account';
		const position = new Position(0, 18);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Parent',
					type: 'Account'
				}
			],
			name: 'Account'
		};

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(4);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('Name');
		expect(results[2].item).toBe('Parent');
		expect(results[3].item).toBe('ParentId');
	});

	it('should be able to autocomplete against Account.Parent.Parent.Test_Lead_Lookup__r against contact', async () => {
		// So we have to know that we are yes... at the end of a query.
		const currentEditorContents = 'SELECT Id, Account.Parent.Parent.Test_Lead_Lookup__r. FROM Contact';
		const position = new Position(0, 53);

		const testObject = new SoqlIntellisense({
			ide, cli, sObjectsDir
		});

		const accountSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Name',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'ParentId',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Parent',
					type: 'Account'
				},
				{
					modifier: 'public',
					name: 'Test_Lead_Lookup__c',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Test_Lead_Lookup__r',
					type: 'Lead'
				}
			],
			name: 'Account'
		};

		const contactSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'LastName',
					type: 'String'
				},
				{
					modifier: 'public',
					name: 'AccountId',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'Account',
					type: 'Account'
				}
			],
			name: 'Contact'
		};

		const leadSObject: FauxSObjectApexClass = {
			fields: [
				{
					modifier: 'public',
					name: 'Id',
					type: 'Id'
				},
				{
					modifier: 'public',
					name: 'LeadName',
					type: 'String'
				}
			],
			name: 'Lead'
		};


		const contactContents = fauxSObjectIntoString({ fauxApexClass: contactSObject });
		const contactFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Contact.cls');
		await ide.writeFile({
			uri: contactFauxSObjectUri, contents: contactContents
		});

		const leadContents = fauxSObjectIntoString({ fauxApexClass: leadSObject });
		const leadFauxSObjectUri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Lead.cls');
		await ide.writeFile({
			uri: leadFauxSObjectUri, contents: leadContents
		});

		const contents = fauxSObjectIntoString({ fauxApexClass: accountSObject });
		const uri = Uri.join(sObjectsDir, STANDARD_SOBJECTS_SUBDIR, 'Account.cls');
		await ide.writeFile({
			uri, contents
		});

		const results = await testObject.autocompleteSuggestionsAt(currentEditorContents, position);
		expect(results).toHaveLength(2);
		expect(results[0].item).toBe('Id');
		expect(results[1].item).toBe('LeadName');
	});
});