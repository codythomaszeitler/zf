import { describe } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';
import { Uri } from '../integratedDevelopmentEnvironment';
import { SalesforceId } from '../salesforceId';
import { genRandomId } from './salesforceId.test';
import { ShowApexLogDebugsOnlyCommand, getLogFileUri } from '../showApexLogCommand';
import { genLogWithUserDebug } from './runAnonApex/runAnonApex.test';
import { filterUserDebugs } from '../apexLog';
import { ApexGetLogResult } from '../apexGetLogResult';

describe('show apex log debugs only command', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;
	let inputOutput: any;

	let targetOrg: SalesforceOrg;

	let logDir: Uri;
	let logId: SalesforceId;

	let logContents: string;

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


		logDir = ide.generateUri('zf', 'logDir');
		logId = genRandomId('ApexLog');

		const savedApexGetLog = cli.apexGetLog;
		cli.apexGetLog = async function (params) {
			const uri = getLogFileUri({
				logDir: params.logDir,
				targetOrg,
				logId: params.logId
			});

			fs.create({ uri });
			await fs.writeFile(uri, logContents);

			return savedApexGetLog.call(cli, params);
		};

		const getApexLogResult: ApexGetLogResult = {
			result: [],
			status: 0
		};

		const logFileDir = Uri.join(logDir, targetOrg.getAlias());

		inputOutput[genApexGetLogCommandString({
			logId, outputDir: logFileDir, targetOrg
		})] = JSON.stringify(getApexLogResult);
	});

	it('should only show the debugs of the given log file', async () => {
		logContents = genLogWithUserDebug('Hello, World');

		const testObject = new ShowApexLogDebugsOnlyCommand({
			cli,
			ide
		});

		await testObject.execute({
			targetOrg,
			logDir,
			logId
		});

		const uri = ide.getShownTextDocuments()[0];
		const contents = await fs.readFile(uri);
		const debugs = filterUserDebugs(logContents);

		expect(contents).toBe(debugs);
	});
});

function genApexGetLogCommandString({ targetOrg, logId, outputDir }: { targetOrg: SalesforceOrg; logId: SalesforceId; outputDir: Uri }) {
	return `sf apex get log --output-dir ${outputDir.getFileSystemPath()} --log-id ${logId} --target-org ${targetOrg.getAlias()} --json`;
}