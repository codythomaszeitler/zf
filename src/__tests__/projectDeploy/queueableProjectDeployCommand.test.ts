import { describe, expect } from '@jest/globals';
import { QueueableProjectDeployCommand } from "../../projectDeploy/queueableProjectDeployCommand";
import { SalesforceOrg } from "../../salesforceOrg";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { Uri } from '../../uri';

import { MockFileSystem } from "../__mocks__/mockFileSystem";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from '../__mocks__/mockShell';
import { ProjectDeployFileReport, genProjectDeployStartCommandString, genProjectDeployStartResult } from './data/projectDeployStartOutput';
import { addToFileSystem } from './projectDeployCommand.test';

describe('queueable project deploy command', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let files: ProjectDeployFileReport[] = [];

	let inputOutput: any;
	let uris: Uri[];

	let aFailureFile: ProjectDeployFileReport;
	let bFailureFile: ProjectDeployFileReport;
	let cFailureFile: ProjectDeployFileReport;

	let aFailureFileUri: Uri;
	let bFailureFileUri: Uri;
	let cFailureFileUri: Uri;

	beforeEach(() => {
		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true,
			isScratchOrg: false
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: org });

		const mockExecutor = genMockExecutor(inputOutput);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});

		aFailureFileUri = ide.generateUri('force-app', 'main', 'default', 'classes', 'AFailureFile.cls');
		bFailureFileUri = ide.generateUri('force-app', 'main', 'default', 'classes', 'BFailureFile.cls');
		cFailureFileUri = ide.generateUri('force-app', 'main', 'default', 'classes', 'CFailureFile.cls');

		aFailureFile = {
			state: 'Failed',
			filePath: aFailureFileUri.getFileSystemPath(),
			type: 'ApexClass',
			columnNumber: 1,
			error: 'This is an error',
			fullName: 'AFailureFile',
			lineNumber: 1
		};
		bFailureFile = {
			state: 'Failed',
			filePath: bFailureFileUri.getFileSystemPath(),
			type: 'ApexClass',
			columnNumber: 1,
			error: 'This is an error',
			fullName: 'BFailureFile',
			lineNumber: 1
		};
		cFailureFile = {
			state: 'Failed',
			filePath: cFailureFileUri.getFileSystemPath(),
			type: 'ApexClass',
			columnNumber: 1,
			error: 'This is an error',
			fullName: 'CFailureFile',
			lineNumber: 1
		};

		files.push(aFailureFile, bFailureFile, cFailureFile);

		addToFileSystem(fs, files);
		uris = files.map(file => (Uri.from({ scheme: 'file', fileSystemPath: file.filePath })));

		ide.setCachedSfdxProject({
			packageDirectories: [
				{
					default: true,
					path: 'force-app'
				}
			]
		});
	});

	it('should simply deploy one file when commanded', async () => {

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: org, async: false, uris: [aFailureFileUri]
		})] = JSON.stringify(genProjectDeployStartResult([aFailureFile], false));

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: org, async: false, uris: [bFailureFileUri, cFailureFileUri]
		})] = JSON.stringify(genProjectDeployStartResult([bFailureFile, cFailureFile], false));

		const testObject = new QueueableProjectDeployCommand({
			ide, cli
		});

		const firstDeployment = testObject.execute({
			uris: [Uri.from({ scheme: 'file', fileSystemPath: aFailureFile.filePath })]
		});

		const waitForDeploymentToStart = new Promise<void>((resolve) => {
			const savedProjectDeployStart = cli.projectDeployStart;
			cli.projectDeployStart = async function (params) {
				const value = await savedProjectDeployStart.call(cli, params);
				resolve();
				cli.projectDeployStart = savedProjectDeployStart;
				return value;
			};
		});

		await waitForDeploymentToStart;

		const secondDeployment = testObject.execute({
			uris: [Uri.from({ scheme: 'file', fileSystemPath: bFailureFile.filePath })]
		});

		const thirdDeployment = testObject.execute({
			uris: [Uri.from({ scheme: 'file', fileSystemPath: cFailureFile.filePath })]
		});

		const firstDeploymentResult = await firstDeployment;

		const [secondDeploymentReturn, thirdDeploymentReturn] = await Promise.all([secondDeployment, thirdDeployment]);

		const bFileDiagnostics = ide.getDiagnosticsFor(bFailureFileUri);
		expect(bFileDiagnostics).toHaveLength(1);
		const cFileDiagnostics = ide.getDiagnosticsFor(cFailureFileUri);
		expect(cFileDiagnostics).toHaveLength(1);

		expect(secondDeploymentReturn.isComplete).toBe(false);
		expect(thirdDeploymentReturn.isComplete).toBe(false);

		expect(firstDeploymentResult.isComplete).toBe(true);
	});
});
