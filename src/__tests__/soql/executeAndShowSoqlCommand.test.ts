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

	let targetOrg: SalesforceOrg;

	let anonSoqlScriptUri: Uri;

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

		anonSoqlScriptUri = ide.generateUri('zf', 'soqlScripts');
	});

	it('should show soql contents as csv when Zf: Execute SOQL is ran', async () => {
		const anonSoql = 'SELECT Id, Name FROM Account';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		await ide.writeFile({
			uri: activeEditorUri,
			contents: anonSoql
		});

		ide.setActiveTextEditor({
			uri: activeEditorUri
		});

		const numRecords = 50;

		const result = genDataQueryResult(numRecords);
		inputOutput["sf data query --query \"SELECT Id, Name FROM Account\" --target-org cso --json"] = JSON.stringify(result);

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

		const expected = "Id, Name\n" + (result.result.records.map((value, index) => {
			return `${value['Id']}, ${value['Name']}`;
		}).join('\n'));
		expect(contents).toBe(expected);

		expect(ide.didShowInformationMessage('Returned 50 records.')).toBeTruthy();
	});

	it('should show soql contents as csv when Zf: Execute SOQL is ran (no records returned)', async () => {
		const anonSoql = 'SELECT Id, Name FROM Account';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		await ide.writeFile({
			uri: activeEditorUri,
			contents: anonSoql
		});

		ide.setActiveTextEditor({
			uri: activeEditorUri
		});

		const numRecords = 0;

		const result = genDataQueryResult(numRecords);
		inputOutput["sf data query --query \"SELECT Id, Name FROM Account\" --target-org cso --json"] = JSON.stringify(result);

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

		const expected = "Id, Name\n" + (result.result.records.map((value, index) => {
			return `${value['Id']}, ${value['Name']}`;
		}).join('\n'));
		expect(contents).toBe(expected);
	});

	it('should show warning message if something bad happens on the command line', async () => {
		const anonSoql = 'SELECT Id, Name, BillingPostalCode FROM Account WHERE Id = \'53\'';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		await ide.writeFile({
			uri: activeEditorUri,
			contents: anonSoql
		});

		ide.setActiveTextEditor({
			uri: activeEditorUri
		});

		const failure = getFailureDataQueryResult();
		inputOutput["sf data query --query \"SELECT Id, Name, BillingPostalCode FROM Account WHERE Id = '53'\" --target-org cso --json"] = JSON.stringify(failure);

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

		expect(ide.didShowErrorMessage(failure.message)).toBeTruthy();
	});

	it('should not show a file and show show a warning message if no soql in file', async () => {
		const anonSoql = '';

		const activeEditorUri = Uri.join(anonSoqlScriptUri, 'test.soql');
		await ide.writeFile({
			uri: activeEditorUri,
			contents: anonSoql
		});

		ide.setActiveTextEditor({
			uri: activeEditorUri
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
			const record = {
				"attributes": {
					"type": "Account",
					"url": `/services/data/v61.0/sobjects/Account/${randomId}`
				},
				"Id": randomId,
				"Name": `Name ${i}`
			};
			records.push(record);
		}
		return records;
	};

	const records = genRecords();

	return {
		status: 0,
		result: {
			records,
			totalSize: records.length,
			done: true
		},
		warnings: []
	};
}

function getFailureDataQueryResult() {
	return {
		"code": 1,
		"context": "DataSoqlQueryCommand",
		"commandName": "DataSoqlQueryCommand",
		"message": "\nBillingPostalCode FROM Account WHERE Id = '53'\n                                     ^\nERROR at Row:1:Column:70\ninvalid ID field: 53",
		"name": "INVALID_QUERY_FILTER_OPERATOR",
		"status": 1,
		"stack": "INVALID_QUERY_FILTER_OPERATOR: \nBillingPostalCode FROM Account WHERE Id = '53'\n                                     ^\nERROR at Row:1:Column:70\ninvalid ID field: 53\n    at HttpApi.getError (C:\\Users\\Cody\\AppData\\Local\\sf\\client\\2.43.7-085948d\\node_modules\\@jsforce\\jsforce-node\\lib\\http-api.js:278:16)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async C:\\Users\\Cody\\AppData\\Local\\sf\\client\\2.43.7-085948d\\node_modules\\@jsforce\\jsforce-node\\lib\\http-api.js:127:33\n    at async Query._execute (C:\\Users\\Cody\\AppData\\Local\\sf\\client\\2.43.7-085948d\\node_modules\\@jsforce\\jsforce-node\\lib\\query.js:373:22)\n    at async C:\\Users\\Cody\\AppData\\Local\\sf\\client\\2.43.7-085948d\\node_modules\\@jsforce\\jsforce-node\\lib\\query.js:305:17",
		"exitCode": 1,
		"warnings": []
	};
}
