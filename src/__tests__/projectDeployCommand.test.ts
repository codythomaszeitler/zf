import { describe, expect, test } from '@jest/globals';
import { ProjectDeployCommand } from "../projectDeployCommand";
import { SalesforceOrg } from "../salesforceOrg";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { Uri } from '../uri';

describe('project deploy command to sandbox', () => {

	let cli: MockSalesforceCli;
	let ide: MockIDE;
	let sandbox: SalesforceOrg;

	let testObject: ProjectDeployCommand;

	beforeEach(() => {
		cli = new MockSalesforceCli();
		ide = new MockIDE();
		sandbox = new SalesforceOrg({
			alias: 'testSandbox',
			isActive: true,
			isDefaultOrg: true,
			isScratchOrg: false
		});

		testObject = new ProjectDeployCommand({
			cli,
			ide
		});

		cli.setDefaultOrg(sandbox);

		ide.setCachedSfdxProject(MockIDE.genDefaultForceAppSfdxProject());
	});

	it('should deploy specific uris', async () => {
		const uri = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");
		ide.addFile(uri);

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri
		}));

		const deployPromise = testObject.execute({
			uris: [uri]
		});

		await cli.projectDeployComplete();

		await deployPromise;
		expect(ide.didSetAnyDiagnostics()).toBe(true);
	});

	it('should deploy specific uris in the same queue if not yet completed', async () => {
		const uri = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");
		ide.addFile(uri);

		const anotherUri = ide.generateUri("force-app", "main", "default", "classes", "AnotherTestFile.cls");
		ide.addFile(anotherUri);

		let numProjectDeploysStarted = 0;
		const savedProjectDeployStart = cli.projectDeployStart.bind(cli);
		cli.projectDeployStart = async function ({
			targetOrg
		}) {
			numProjectDeploysStarted++;
			return savedProjectDeployStart({
				targetOrg
			});
		};

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri
		}));

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri: anotherUri
		}));

		const deployPromise = testObject.execute({
			uris: [uri]
		});

		const anotherDeployPromise = testObject.execute({
			uris: [anotherUri]
		});

		await cli.projectDeployComplete();

		await deployPromise;
		await anotherDeployPromise;

		expect(ide.didSetDiagnosticsFor(uri)).toBe(true);
		expect(ide.didSetDiagnosticsFor(anotherUri)).toBe(true);

		expect(numProjectDeploysStarted).toEqual(1);
	});

	it('should deploy specific uris in different queue if completed', async () => {
		const uri = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");
		ide.addFile(uri);

		const anotherUri = ide.generateUri("force-app", "main", "default", "classes", "AnotherTestFile.cls");
		ide.addFile(anotherUri);

		let numProjectDeploysStarted = 0;
		const savedProjectDeployStart = cli.projectDeployStart.bind(cli);
		cli.projectDeployStart = async function ({
			targetOrg
		}) {
			numProjectDeploysStarted++;
			return savedProjectDeployStart({
				targetOrg
			});
		};

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri
		}));

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri: anotherUri
		}));

		const deployPromise = testObject.execute({
			uris: [uri]
		});

		await cli.projectDeployComplete();
		await deployPromise;

		const anotherDeployPromise = testObject.execute({
			uris: [anotherUri]
		});

		await cli.projectDeployComplete();
		await anotherDeployPromise;

		expect(ide.didSetDiagnosticsFor(uri)).toBe(true);
		expect(ide.didSetDiagnosticsFor(anotherUri)).toBe(true);

		expect(numProjectDeploysStarted).toEqual(2);
	});

	it('should immediately state completed when there are no salesforce files to deploy', async () => {
		const uri = Uri.from({
			scheme: 'file',
			fileSystemPath: '/not/in/force-app/TestFile.cls'
		});
		ide.addFile(uri);

		const result = await testObject.execute({
			uris: [uri]
		});
		expect(result.isComplete).toBe(true);

		const deployableTestFileUri = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");
		ide.addFile(deployableTestFileUri);

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri: deployableTestFileUri
		}));

		const deployPromise = testObject.execute({
			uris: [deployableTestFileUri]
		});

		await cli.projectDeployComplete();

		await deployPromise;
		expect(ide.didSetAnyDiagnostics()).toBe(true);
	});

	it('should immediately state completed when there are no files to deploy', async () => {
		const result = await testObject.execute({
			uris: []
		});

		expect(result.isComplete).toBe(true);
	});
});

describe('project deploy command when there is no default org', () => {

	let cli: MockSalesforceCli;
	let ide: MockIDE;
	let sandbox: SalesforceOrg;

	let testObject: ProjectDeployCommand;

	beforeEach(() => {
		cli = new MockSalesforceCli();
		ide = new MockIDE();

		testObject = new ProjectDeployCommand({
			cli,
			ide
		});
		ide.setCachedSfdxProject(MockIDE.genDefaultForceAppSfdxProject());

		sandbox = new SalesforceOrg({
			alias: 'testSandbox',
			isActive: true,
			isDefaultOrg: true,
			isScratchOrg: false
		});
	});

	it('should immediately state completed when there is no default org found', async () => {
		const uri = ide.generateUri("force-app", "main", "default", "classes", "TestFile.cls");
		ide.addFile(uri);

		const result = await testObject.execute({
			uris: [uri]
		});

		expect(result.isComplete).toBe(true);

		cli.setDefaultOrg(sandbox);

		cli.projectDeployFailure(MockSalesforceCli.genProjectDeployFailure({
			uri
		}));

		const deployPromise = testObject.execute({
			uris: [uri]
		});

		await cli.projectDeployComplete();

		await deployPromise;
		expect(ide.didSetAnyDiagnostics()).toBe(true);
	});
});