import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { ApexRunFailedResult, ApexRunSuccessfulResult, RunHighlightedAnonApex } from '../../runAnonApex/runAnonApex';

describe('run anon apex', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let inputOutput: any;

	let targetOrg: SalesforceOrg;

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
	});

	it('should be able to show successful log from anon apex when commanded', async () => {
		const logs = 'These are logs';
		inputOutput[`sf apex run --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(genApexRunSuccessfulResult(logs));

		ide.setHighlightedText('System.debug(\'Hello World\';');

		// We can just name the file 

		const testDir = ide.generateUri('zf', 'anonApex');

		const testObject = new RunHighlightedAnonApex({
			cli, ide, anonApexOutputDir: testDir
		});

		// The problem is is that this will sit here until 
		ide.showInformationMessageSelection = 'Show';
		await testObject.execute({
			targetOrg
		});

		const shown = ide.getShownTextDocuments();

		expect(shown).toHaveLength(1);
		const contents = await ide.readFile({
			uri: shown[0]
		});
		expect(contents).toBe(logs);
	});

	it('should be able to show exception log from anon apex when commanded', async () => {
		const logs = 'These are logs';
		inputOutput[`sf apex run --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(genApexRunFailedResult(logs));

		ide.setHighlightedText('throw new System.IllegalArgumentException(\'This is an exception message\');');

		const testDir = ide.generateUri('zf', 'anonApex');

		const testObject = new RunHighlightedAnonApex({
			cli, ide, anonApexOutputDir: testDir
		});

		ide.showInformationMessageSelection = 'Show';
		await testObject.execute({
			targetOrg
		});

		const shown = ide.getShownTextDocuments();

		expect(shown).toHaveLength(1);
		const contents = await ide.readFile({
			uri: shown[0]
		});
		expect(contents).toBe(logs);
	});

	it('should be able to show bad compile from anon apex when commanded', async () => {
		const message = "Compilation failed at Line 2 column 1 with the error:\n\nUnexpected token '<EOF>'.";
		inputOutput[`sf apex run --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(genApexRunFailedCompileResult({
			message
		}));

		ide.setHighlightedText('This does not compile apex.');

		const testDir = ide.generateUri('zf', 'anonApex');
		const testObject = new RunHighlightedAnonApex({
			cli, ide, anonApexOutputDir: testDir
		});

		await testObject.execute({
			targetOrg
		});

		expect(ide.didShowErrorMessage(message)).toBe(true);
	});
});

function genApexRunSuccessfulResult(logs: string) {
	const result: ApexRunSuccessfulResult = {
		status: 0,
		result: {
			logs
		}
	};
	return result;
}

function genApexRunFailedResult(logs: string) {
	return {
		status: 1,
		data: {
			column: "1",
			line: "1",
			compiled: !!logs,
			logs: logs
		},
		message: 'Failed Message'
	} as ApexRunFailedResult;
}

function genApexRunFailedCompileResult({ message }: { message: string }) {
	return {
		status: 1,
		data: {
			column: "1",
			line: "1",
			compiled: false,
			logs: '',
		},
		message 
	} as ApexRunFailedResult;
}