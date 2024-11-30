import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { Uri } from '../../integratedDevelopmentEnvironment';
import { genRandomId } from '../salesforceId.test';
import { ExecuteAndShowSoqlCommand } from '../../soql/executeAndShowSoqlCommand';

describe('execute and show soql command', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let inputOutput: any;
	let inputStdError: any;

	let targetOrg: SalesforceOrg;

	let anonSoqlScriptUri: Uri;

	beforeEach(() => {
		targetOrg = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: targetOrg });
		inputStdError = {};

		const mockExecutor = genMockExecutor(inputOutput, inputStdError);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});

		anonSoqlScriptUri = ide.generateUri('zf', 'soqlScripts');
	});

	it('should show soql contents as csv when Zf: Execute SOQL is ran', async () => {
		const anonSoql = 'SELECT Id, Name FROM Account';
		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		ide.setActiveTextEditor({
			uri: activeEditorUri,
			contents: anonSoql
		});

		const numRecords = 50;

		const result = genDataQueryResult(numRecords);
		inputOutput["sf data query --query \"SELECT Id, Name FROM Account\" --target-org cso --result-format csv"] = result;

		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const resultsUri = ide.getShownTextDocuments()[0];
		expect(resultsUri).toBeTruthy();

		const contents = await ide.readFile({
			uri: resultsUri
		});

		expect(contents).toBe(result);
		expect(ide.didShowInformationMessage('Returned 50 records.')).toBeTruthy();
	});

	it('should show soql contents as csv when Zf: Execute SOQL is ran (should remove newlines from query string)', async () => {
		const anonSoql = 'SELECT Id, Name\n FROM\n Account';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		ide.setActiveTextEditor({
			uri: activeEditorUri,
			contents: anonSoql
		});

		const numRecords = 50;

		const result = genDataQueryResult(numRecords);
		inputOutput["sf data query --query \"SELECT Id, Name  FROM  Account\" --target-org cso --result-format csv"] = result;

		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const resultsUri = ide.getShownTextDocuments()[0];
		expect(resultsUri).toBeTruthy();

		const contents = await ide.readFile({
			uri: resultsUri
		});

		expect(contents).toBe(result);
		expect(ide.didShowInformationMessage('Returned 50 records.')).toBeTruthy();
	});

	it('should show soql contents as csv when Zf: Execute SOQL is ran (no records returned)', async () => {
		const anonSoql = 'SELECT Id, Name FROM Account';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		ide.setActiveTextEditor({
			uri: activeEditorUri,
			contents: anonSoql
		});

		const numRecords = 0;

		const result = genDataQueryResult(numRecords);
		inputOutput["sf data query --query \"SELECT Id, Name FROM Account\" --target-org cso --result-format csv"] = result;

		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const resultsUri = ide.getShownTextDocuments()[0];
		expect(resultsUri).toBeTruthy();

		const contents = await ide.readFile({
			uri: resultsUri
		});

		expect(contents).toBe(result);
	});

	it('should show warning message if something bad happens on the command line', async () => {
		const anonSoql = 'SELECT Id FROM Accoun';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		ide.setActiveTextEditor({
			uri: activeEditorUri,
			contents : anonSoql
		});

		const errorMessage = 'This is a failure.';
		inputStdError[`sf data query --query \"${anonSoql}\" --target-org cso --result-format csv`] = errorMessage;

		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const shownDocuments = ide.getShownTextDocuments();
		expect(shownDocuments).toHaveLength(0);

		expect(ide.didShowErrorMessage(errorMessage)).toBeTruthy();
	});

	it('should not show a file and show show a warning message if no soql in file', async () => {
		const anonSoql = '';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		ide.setActiveTextEditor({
			uri: activeEditorUri,
			contents: anonSoql
		});

		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const shownDocuments = ide.getShownTextDocuments();
		expect(shownDocuments).toHaveLength(0);

		expect(ide.didShowWarningMessage('[] was not valid SOQL.'));
	});

	it('should throw an error message if there is no active editor', async () => {
		const testObject = new ExecuteAndShowSoqlCommand({
			cli,
			ide
		});

		await testObject.execute({
			outputDir: anonSoqlScriptUri,
			targetOrg
		});

		const shownDocuments = ide.getShownTextDocuments();
		expect(shownDocuments).toHaveLength(0);

		expect(ide.didShowWarningMessage('There was no active editor.'));
	});
});


function genDataQueryResult(numRecords: number) {
	const genRecords = () => {
		const records = [];
		for (let i = 0; i < numRecords; i++) {
			const randomId = genRandomId('Account');
			const record = [randomId, `Name ${i}`].join(', ');
			records.push(record);
		}
		return records;
	};

	const records = genRecords();
	const header = 'Id, Name';
	const result = [header, ...records].join('\n') + '\n';
	return result;
}