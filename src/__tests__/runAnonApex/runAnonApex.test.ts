import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { ApexRunFailedResult, ApexRunSuccessfulResult, RunHighlightedAnonApex } from '../../runAnonApex/runAnonApex';
import { filterUserDebugs } from '../../apexLog';

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

	it('should be able to show debug logs from anon apex when commanded', async () => {
		const logs = genLogWithUserDebug('Hello, World!');
		inputOutput[`sf apex run --target-org ${targetOrg.getAlias()} --json`] = JSON.stringify(genApexRunSuccessfulResult(logs));

		ide.setHighlightedText('System.debug(\'Hello, World\');');

		const testDir = ide.generateUri('zf', 'anonApex');

		const testObject = new RunHighlightedAnonApex({
			cli, ide, anonApexOutputDir: testDir
		});

		ide.showInformationMessageSelection = 'Debugs';
		await testObject.execute({
			targetOrg
		});

		const shown = ide.getShownTextDocuments();

		expect(shown).toHaveLength(1);
		const contents = await ide.readFile({
			uri: shown[0]
		});

		const debugs = filterUserDebugs(logs);
		expect(contents).toBe(debugs);
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

function genLogWithUserDebug(contents : string) {
	return `61.0 APEX_CODE,DEBUG;APEX_PROFILING,INFO
Execute Anonymous: System.debug('${contents}');
17:56:40.34 (34029611)|USER_INFO|[EXTERNAL]|0055e000002p0JR|codyzeitler12@cunning-raccoon-bz3els.com|(GMT-07:00) Pacific Daylight Time (America/Los_Angeles)|GMT-07:00
17:56:40.34 (34081077)|EXECUTION_STARTED
17:56:40.34 (34126403)|CODE_UNIT_STARTED|[EXTERNAL]|execute_anonymous_apex
17:56:40.34 (34777542)|USER_DEBUG|[1]|DEBUG|${contents}
17:56:40.34 (34934444)|CUMULATIVE_LIMIT_USAGE
17:56:40.34 (34934444)|LIMIT_USAGE_FOR_NS|(default)|
  Number of SOQL queries: 0 out of 100
  Number of query rows: 0 out of 50000
  Number of SOSL queries: 0 out of 20
  Number of DML statements: 0 out of 150
  Number of Publish Immediate DML: 0 out of 150
  Number of DML rows: 0 out of 10000
  Maximum CPU time: 0 out of 10000
  Maximum heap size: 0 out of 6000000
  Number of callouts: 0 out of 100
  Number of Email Invocations: 0 out of 10
  Number of future calls: 0 out of 50
  Number of queueable jobs added to the queue: 0 out of 50
  Number of Mobile Apex push calls: 0 out of 10

17:56:40.34 (34934444)|CUMULATIVE_LIMIT_USAGE_END

17:56:40.34 (35015953)|CODE_UNIT_FINISHED|execute_anonymous_apex
17:56:40.34 (35035057)|EXECUTION_FINISHED`;
}