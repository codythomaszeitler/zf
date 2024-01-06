import { describe, expect } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "./__mocks__/mockSalesforceCli";
import { ReadSfdxProjectCommand, getSfdxProjectUri } from '../readSfdxProjectCommand';
import { Uri } from '../uri';

describe('read sfdx project command', () => {

	let fs: MockFileSystem;
	let cli: MockSalesforceCli;
	let ide: MockIDE;

	let org: SalesforceOrg;

	beforeEach(() => {
		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true
		});

		fs = new MockFileSystem();
		cli = new MockSalesforceCli({
			filesystem: fs
		});
		ide = new MockIDE({
			filesystem: fs
		});

		cli.setDefaultOrg(org);
	});

	it('should read sfdx project command when commanded', async () => {
		const sfdxProjectUri = getSfdxProjectUri({
			currentDir: ide.getCurrentDir()
		});

		await fs.writeFile(sfdxProjectUri, genSfdxProjectJson());

		const testObject = new ReadSfdxProjectCommand({
			cli,
			ide
		});

		const sfdxProject = await testObject.execute();
		expect(sfdxProject.packageDirectories).toHaveLength(1);
	});
});


function genSfdxProjectJson() {
	return JSON.stringify(
		{
			"packageDirectories": [
				{
					"path": "force-app",
					"default": true
				}
			],
			"name": "test-sfdx-project",
			"namespace": "",
			"sfdcLoginUrl": "https://login.salesforce.com",
			"sourceApiVersion": "51.0"
		}
	);
}

