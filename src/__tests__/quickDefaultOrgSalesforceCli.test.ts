import { describe } from '@jest/globals';
import { SalesforceOrg } from "../salesforceOrg";
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { genCommandToStdOutput, genMockExecutor } from './__mocks__/mockShell';
import { QuickDefaultOrgSfSalesforceCli, SalesforceSfConfig, getDefaultSfConfigUri } from '../quickDefaultOrgSalesforceCli';
import { ExecutorCommand, intoCliCommandString } from '../executor';
import { getSfOrgListWithSkipConnectionNominalResponse } from './data/orgListOutput';

describe('quick default sf org salesforce cli', () => {

	let fs: MockFileSystem;
	let ide: MockIDE;

	let org: SalesforceOrg;

	let inputOutput: any;

	let testObject: QuickDefaultOrgSfSalesforceCli;
	let spy: Map<string, number>;

	beforeEach(() => {

		org = new SalesforceOrg({
			alias: 'cso',
			isActive: true,
			isScratchOrg : true
		});

		fs = new MockFileSystem();

		inputOutput = genCommandToStdOutput({ defaultOrg: org });

		spy = new Map<string, number>();
		const mockExecutor = genMockExecutor(inputOutput);
		const spyMockExecutor = async function (command: ExecutorCommand) {
			const cliCommand = intoCliCommandString(command);

			if (spy.has(cliCommand)) {
				spy.set(cliCommand, spy.get(cliCommand) + 1);
			} else {
				spy.set(cliCommand, 1);
			}

			return mockExecutor(command);
		};
		ide = new MockIDE({
			filesystem: fs
		});

		testObject = new QuickDefaultOrgSfSalesforceCli(ide, spyMockExecutor);
	});

	it('should get the default org when there is no .sf/config.json', async () => {
		const defaultOrg = await testObject.getDefaultOrg();
		expect(defaultOrg.getAlias()).toBe(org.getAlias());

		expect(spy.has('sf org list --skip-connection-status --json')).toBe(true);
		expect(spy.get('sf org list --skip-connection-status --json')).toBe(1);

		for (let i = 1; i <= 10; i++) {
			const defaultOrg = await testObject.getDefaultOrg();
			expect(defaultOrg.getAlias()).toBe(org.getAlias());
			expect(spy.get('sf org list --skip-connection-status --json')).toBe(i + 1);
		}
	});

	it('should get the default org when there is a .sf/config.json', async () => {
		const config: SalesforceSfConfig = {
			"target-org": 'cso'
		};

		const uri = getDefaultSfConfigUri(ide);
		await ide.writeFile({ uri, contents: JSON.stringify(config) });

		const defaultOrg = await testObject.getDefaultOrg();
		expect(defaultOrg.getAlias()).toBe(org.getAlias());

		for (let i = 1; i <= 10; i++) {
			const defaultOrg = await testObject.getDefaultOrg();
			expect(defaultOrg.getAlias()).toBe(org.getAlias());
			expect(spy.get('sf org list --skip-connection-status --json')).toBe(1);
		}
	});

	it('should reget the default org if the target org changes', async () => {
		let config: SalesforceSfConfig = {
			"target-org": 'cso'
		};

		const uri = getDefaultSfConfigUri(ide);
		await ide.writeFile({ uri, contents: JSON.stringify(config) });

		const defaultOrg = await testObject.getDefaultOrg();
		expect(defaultOrg.getAlias()).toBe(org.getAlias());
		expect(spy.get('sf org list --skip-connection-status --json')).toBe(1);

		for (let i = 1; i <= 10; i++) {
			const defaultOrg = await testObject.getDefaultOrg();
			expect(defaultOrg.getAlias()).toBe(org.getAlias());
			expect(spy.get('sf org list --skip-connection-status --json')).toBe(1);
		}

		const targetOrg = new SalesforceOrg({
			alias: 'another',
			isActive: true,
			isDefaultOrg: true,
			isScratchOrg: true
		});
		inputOutput['sf org list --skip-connection-status --json'] = getSfOrgListWithSkipConnectionNominalResponse({
			targetOrg
		});

		config = {
			"target-org": targetOrg.getAlias()
		};
		await ide.writeFile({ uri, contents: JSON.stringify(config) });

		for (let i = 1; i <= 10; i++) {
			const defaultOrg = await testObject.getDefaultOrg();
			expect(defaultOrg.getAlias()).toBe(targetOrg.getAlias());
			expect(spy.get('sf org list --skip-connection-status --json')).toBe(2);
		}
	});
});