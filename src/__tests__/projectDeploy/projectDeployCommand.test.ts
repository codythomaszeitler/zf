import { describe } from '@jest/globals';
import { SalesforceOrg } from "../../salesforceOrg";
import { MockFileSystem } from "./../__mocks__/mockFileSystem";
import { MockIDE, generateProgressToken } from "./../__mocks__/mockIntegratedDevelopmentEnvironment";
import { SfSalesforceCli } from '../../sfSalesforceCli';
import { genCommandToStdOutput, genMockExecutor } from './../__mocks__/mockShell';
import { ProjectDeployCommand, SYNC_DEPLOYMENT_FILE_LIMIT_KEY } from '../../projectDeploy/projectDeployCommand';
import { genProjectDeployStartCommandString, genProjectDeployStartResult, genProjectDeployReportCommandString, genProjectDeployReportResult, genProjectDeployResumeCommandString, ProjectDeployFileReport } from './data/projectDeployStartOutput';
import { SalesforceId } from '../../salesforceId';
import { Uri } from '../../uri';
import { IntegratedDevelopmentEnvironment } from '../../integratedDevelopmentEnvironment';
import { ProjectDeployFile, ProjectDeployPreviewResult } from '../../projectDeploy/projectDeployResult';

const aClassRelativePath = ['classes', 'AClass.cls'];
const bClassRelativePath = ['classes', 'BClass.cls'];
const cClassRelativePath = ['classes', 'CClass.cls'];

describe('quick project deploy against - no default org set', () => {
	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;

	let sandbox: SalesforceOrg;
	let inputOutput: any;

	beforeEach(() => {
		sandbox = new SalesforceOrg({
			alias: 'cso',
			isActive: true,
			isScratchOrg: false
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput();

		const mockExecutor = genMockExecutor(inputOutput);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});
	});

	it('should NOT put an apex class failures onto diagnostics', async () => {
		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false, uris
		})] = JSON.stringify(genProjectDeployStartResult(files));

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ uris });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(0);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(0);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(0);
	});
});

describe('quick project deploy against', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;

	let sandbox: SalesforceOrg;
	let inputOutput: any;

	const aClassRelativePath = ['classes', 'AClass.cls'];
	const bClassRelativePath = ['classes', 'BClass.cls'];
	const cClassRelativePath = ['classes', 'CClass.cls'];

	beforeEach(() => {
		sandbox = new SalesforceOrg({
			alias: 'cso',
			isActive: true,
			isScratchOrg: false
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: sandbox });

		const mockExecutor = genMockExecutor(inputOutput);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});
	});

	it('should not show any diagnostics if the deployment is successful', async () => {
		const successFileUri = ide.generateUri('classes', 'SuccessFile.cls');
		const files: ProjectDeployFileReport[] = [
			{
				state: 'Changed',
				filePath: successFileUri.getFileSystemPath(),
				type: 'ApexClass',
				deployed: true
			}
		];
		addToFileSystem(fs, files);

		const uris = [successFileUri];

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false, uris
		})] = JSON.stringify(genProjectDeployStartResult(files));

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ targetOrg: sandbox, uris });

		const diagnostics = ide.getDiagnosticsFor(successFileUri);
		expect(diagnostics).toHaveLength(0);

		expect(ide.didFocusProblemsTab()).toBeFalsy();
		expect(ide.didShowInformationMessage(`Successfully deployed ${successFileUri.getBaseName()}.`)).toBe(true);
	});

	it('should put an apex class failures onto diagnostics', async () => {
		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false, uris
		})] = JSON.stringify(genProjectDeployStartResult(files));

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ targetOrg: sandbox, uris });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const aDiagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(aDiagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
		expect(ide.didFocusProblemsTab()).toBeTruthy();
		expect(ide.didShowErrorMessage('Deployment failed.')).toBe(true);

		const nowSuccesses = files.map(file => {
			return {
				state: 'Changed',
				filePath: file.filePath,
				type: file.type
			} as ProjectDeployFile;
		});

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false, uris
		})] = JSON.stringify(genProjectDeployStartResult(nowSuccesses));

		const anotherTestObject = new ProjectDeployCommand({
			ide, cli
		});

		await anotherTestObject.execute({
			targetOrg: sandbox, uris
		});

		const aSuccessDiagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(aSuccessDiagnostics).toHaveLength(0);

		const bSuccessDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bSuccessDiagnostics).toHaveLength(0);

		const dSuccessDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dSuccessDiagnostics).toHaveLength(0);
	});

	it('should use the default org if none is provided', async () => {
		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false, uris
		})] = JSON.stringify(genProjectDeployStartResult(files));

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ uris });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
	});


	it('should do an asynchronous deployment if the number of files deployed if over some configurable amount', async () => {
		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);
		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		const projectDeployStartResult = genProjectDeployStartResult(files, true);
		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: true, uris
		})] = JSON.stringify(projectDeployStartResult);

		const jobId = SalesforceId.get(projectDeployStartResult.result.id);
		inputOutput[genProjectDeployReportCommandString({
			jobId, targetOrg: sandbox
		})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));

		inputOutput[genProjectDeployResumeCommandString({
			jobId
		})] = JSON.stringify(genProjectDeployReportResult(
			files, jobId
		));

		ide.setConfig(SYNC_DEPLOYMENT_FILE_LIMIT_KEY, 1);

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ targetOrg: sandbox, uris });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
	});

	it('should do an asynchronous deployment if no uris are given to a sandbox', async () => {
		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);
		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		const projectDeployStartResult = genProjectDeployStartResult(files, true);
		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: true
		})] = JSON.stringify(projectDeployStartResult);

		const jobId = SalesforceId.get(projectDeployStartResult.result.id);
		inputOutput[genProjectDeployReportCommandString({
			jobId, targetOrg: sandbox
		})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));

		inputOutput[genProjectDeployResumeCommandString({
			jobId
		})] = JSON.stringify(genProjectDeployReportResult(
			files, jobId
		));

		const testObject = new ProjectDeployCommand({
			ide,
			cli
		});

		await testObject.execute({ targetOrg: sandbox });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
	});

	it('should do an asynchronous deployment if the number of files deployed if over some configurable amount and there are multiple queries to report', async () => {
		const progressToken = generateProgressToken();

		const files: ProjectDeployFileReport[] = genFailureFiles(ide);
		addToFileSystem(fs, files);
		files[0].deployed = false;

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		// These are the incoming uris.
		const uris = [ide.generateUri(...aClassRelativePath), ide.generateUri(...bClassRelativePath), ide.generateUri(...cClassRelativePath)];

		const projectDeployStartResult = genProjectDeployStartResult(files, true);
		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: true, uris
		})] = JSON.stringify(projectDeployStartResult);

		let counter = 0;

		const savedProjectDeployReport = cli.projectDeployReport;
		cli.projectDeployReport = async function ({ jobId, targetOrg }) {
			if (counter === 0) {
				inputOutput[genProjectDeployReportCommandString({
					jobId, targetOrg: sandbox
				})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));
				counter++;
				const result = await savedProjectDeployReport.call(cli, { jobId, targetOrg });
				return result;
			} else {
				const files = genFailureFiles(ide);
				inputOutput[genProjectDeployReportCommandString({
					jobId, targetOrg: sandbox
				})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));

				inputOutput[genProjectDeployResumeCommandString({
					jobId
				})] = JSON.stringify(genProjectDeployReportResult(
					files, jobId
				));

				const result = await savedProjectDeployReport.call(cli, { jobId, targetOrg });
				return result;
			}
		};

		ide.setConfig(SYNC_DEPLOYMENT_FILE_LIMIT_KEY, 1);

		const testObject = new ProjectDeployCommand({
			ide,
			cli,
			progressToken
		});

		await testObject.execute({ targetOrg: sandbox, uris });

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);

		expect(progressToken.getProgressHistoryAt(0)?.progress).toBe(75);
		expect(progressToken.getProgressHistoryAt(1)?.progress).toBe(100);
		expect(progressToken.getProgressHistoryAt(2)).toBeFalsy();
	});
});

export function addToFileSystem(fs: MockFileSystem, files: ProjectDeployFileReport[]) {
	files.forEach(file => {
		const uri = Uri.from({
			scheme: 'file',
			fileSystemPath: file.filePath
		});
		fs.create({ uri });
	});
}

function genFailureFiles(ide: IntegratedDevelopmentEnvironment) {
	const files: ProjectDeployFileReport[] = [];
	const firstFailure: ProjectDeployFileReport = {
		state: 'Failed',
		columnNumber: 1,
		lineNumber: 1,
		error: "This was an error",
		fullName: "AClass",
		filePath: ide.generateUri(...aClassRelativePath).getFileSystemPath(),
		type: 'ApexClass'
	};

	const secondFailure: ProjectDeployFileReport = {
		state: 'Failed',
		columnNumber: 2,
		lineNumber: 2,
		error: "This was an another error",
		fullName: "AClass",
		filePath: ide.generateUri(...aClassRelativePath).getFileSystemPath(),
		type: 'ApexClass'
	};

	const failureFromBClass: ProjectDeployFileReport = {
		state: 'Failed',
		columnNumber: 2,
		lineNumber: 2,
		error: "This was an another error",
		fullName: "BClass",
		filePath: ide.generateUri(...bClassRelativePath).getFileSystemPath(),
		type: 'ApexClass'
	};

	const failureFromCClass: ProjectDeployFileReport = {
		fullName: "CCLass",
		type: "ApexClass",
		state: "Failed",
		filePath: ide.generateUri(...cClassRelativePath).getFileSystemPath(),
		lineNumber: 5,
		columnNumber: 20,
		error: "Dependent class is invalid and needs recompilation:\n Class DClass : Method does not exist or incorrect signature: void foo() from the type EClass (5:20)"
	};

	files.push(firstFailure);
	files.push(secondFailure);
	files.push(failureFromBClass);
	files.push(failureFromCClass);

	return files;
}

describe('quick project deploy against - scratch org', () => {

	let fs: MockFileSystem;
	let cli: SfSalesforceCli;
	let ide: MockIDE;

	let sandbox: SalesforceOrg;
	let inputOutput: any;

	const aClassRelativePath = ['classes', 'AClass.cls'];
	const bClassRelativePath = ['classes', 'BClass.cls'];
	const cClassRelativePath = ['classes', 'CClass.cls'];

	// We will add on source tracking for sandboxes in a future release...

	beforeEach(() => {
		sandbox = new SalesforceOrg({
			alias: 'cso',
			isActive: true,
			isScratchOrg: true
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: sandbox });

		const mockExecutor = genMockExecutor(inputOutput);
		cli = new SfSalesforceCli(mockExecutor);
		ide = new MockIDE({
			filesystem: fs
		});
	});

	// So... what we need to do is a preview 
	// You need to resume and  you need to preview.

	it('should be able to do a deployment against a scratch org using a synchronous deployment', async () => {
		const files = genFailureFiles(ide);
		const projectDeployResumeResult: ProjectDeployPreviewResult = {
			status: 0,
			result: {
				toDeploy: files.map(file => ({ path: file.filePath })),
				toDelete: [],
				toRetrieve: []
			}
		};

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = files.map(file => (Uri.from({ scheme: 'file', fileSystemPath: file.filePath })));

		inputOutput[`sf project deploy preview --target-org ${sandbox.getAlias()} --json`] = JSON.stringify(projectDeployResumeResult);

		const projectDeployStartResult = genProjectDeployStartResult(files, false);
		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: false
		})] = JSON.stringify(projectDeployStartResult);

		const jobId = SalesforceId.get(projectDeployStartResult.result.id);
		inputOutput[genProjectDeployReportCommandString({
			jobId, targetOrg: sandbox
		})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));

		const testObject = new ProjectDeployCommand({
			cli, ide
		});

		await testObject.execute({
			targetOrg: sandbox, uris
		});


		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
	});

	it('should be able to do a deployment against a scratch org using an asynchronous deployment because file limit reached', async () => {

		// So we are doing something wrong here.
		const files = genFailureFiles(ide);
		const projectDeployResumeResult: ProjectDeployPreviewResult = {
			status: 0,
			result: {
				toDeploy: files.map(file => ({ path: file.filePath })),
				toDelete: [],
				toRetrieve: []
			}
		};

		fs.create({ uri: ide.generateUri('classes', 'DClass.cls') });

		const uris = files.map(file => (Uri.from({ scheme: 'file', fileSystemPath: file.filePath })));

		ide.setConfig(SYNC_DEPLOYMENT_FILE_LIMIT_KEY, 1);

		inputOutput[`sf project deploy preview --target-org ${sandbox.getAlias()} --json`] = JSON.stringify(projectDeployResumeResult);

		const projectDeployStartResult = genProjectDeployStartResult(files, false);
		inputOutput[genProjectDeployStartCommandString({
			targetOrg: sandbox, async: true
		})] = JSON.stringify(projectDeployStartResult);

		const jobId = SalesforceId.get(projectDeployStartResult.result.id);
		inputOutput[genProjectDeployReportCommandString({
			jobId, targetOrg: sandbox
		})] = JSON.stringify(genProjectDeployReportResult(files, projectDeployStartResult.result.id));

		inputOutput[genProjectDeployResumeCommandString({
			jobId
		})] = JSON.stringify(genProjectDeployReportResult(
			files, jobId
		));

		const testObject = new ProjectDeployCommand({
			cli, ide
		});

		await testObject.execute({
			targetOrg: sandbox, uris: uris.slice(0, 1)
		});

		const aClassUri = ide.generateUri(...aClassRelativePath);
		const diagnostics = ide.getDiagnosticsFor(aClassUri);
		expect(diagnostics).toHaveLength(2);

		const bClassUri = ide.generateUri(...bClassRelativePath);
		const bDiagnostics = ide.getDiagnosticsFor(bClassUri);
		expect(bDiagnostics).toHaveLength(1);

		const dClassUri = ide.generateUri('classes', 'DClass.cls');
		const dDiagnostics = ide.getDiagnosticsFor(dClassUri);
		expect(dDiagnostics).toHaveLength(1);
	});
});

