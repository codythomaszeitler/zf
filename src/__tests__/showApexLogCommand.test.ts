import { SalesforceOrg } from "../salesforceOrg";
import { ShowApexLogCommand, getLogFileUri } from "../showApexLogCommand";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { describe, expect, test } from '@jest/globals';
import { genRandomId } from "./salesforceId.test";

describe('show apex log command', () => {

	let cli: MockSalesforceCli;
	let ide: MockIDE;
	let fs: MockFileSystem;

	beforeEach(() => {
		fs = new MockFileSystem();
		cli = new MockSalesforceCli({
			filesystem: fs
		});
		ide = new MockIDE({
			filesystem: fs
		});
	});

	it('should be able to generate file if cannot find file in filesystem', async () => {
		const testObject = new ShowApexLogCommand({
			cli,
			ide
		});

		const targetOrg = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		const logId = genRandomId('ApexLog');

		const testLogDir = 'testLogDir';
		await testObject.execute({
			targetOrg, logDir: 'testLogDir', logId
		});

		const uri = getLogFileUri({
			targetOrg,
			logDir: testLogDir,
			logId
		});
		expect(ide.toHaveShownTextDocument(uri)).toBeTruthy();
	});

	it('should be able reuse file if file in filesystem', async () => {
		const testObject = new ShowApexLogCommand({
			cli,
			ide
		});

		const targetOrg = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		cli.toThrowOnApexGetLog = new Error('Should not have called apex get log!');

		const logId = genRandomId('ApexLog');
		const testLogDir = 'testLogDir';
		const uri = getLogFileUri({
			targetOrg,
			logDir: testLogDir,
			logId
		});

		fs.create({
			uri
		});

		await testObject.execute({
			targetOrg, logDir: 'testLogDir', logId
		});

		expect(ide.toHaveShownTextDocument(uri)).toBeTruthy();
	});
});