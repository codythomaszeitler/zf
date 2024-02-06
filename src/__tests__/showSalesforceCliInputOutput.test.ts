import { describe, expect } from '@jest/globals';
import { MockFileSystem } from "./__mocks__/mockFileSystem";
import { MockIDE } from "./__mocks__/mockIntegratedDevelopmentEnvironment";
import { showCliOutput } from '../showSalesforceCliInputOutput';
import { SalesforceCliInputOutput } from '../salesforceCli';

describe('show salesforce cli input output', () => {

	let fs: MockFileSystem;
	let ide: MockIDE;

	beforeEach(() => {
		ide = new MockIDE({
			filesystem: fs
		});
	});

	it('should show output when input is pressed', async () => {
		const stdout = {};

		const pressed = new SalesforceCliInputOutput({
			input: {
				args: ['sobject', 'describe', '--sobject', 'Account', '--target-org', 'cso', '--json'],
				command: 'sf',
			},
			output: {
				stdout
			}
		});

		await showCliOutput(ide, pressed);

		const uri = ide.generateUri('.zf', 'cli', `${pressed.getDate().getTime()}.json`);
		expect(ide.toHaveShownTextDocument(uri)).toBe(true);

		const contents = await ide.readFile({
			uri
		});

		expect(contents).toBe(JSON.stringify(stdout));
	});

	it('should show error message if write file fails', async () => {
		const stdout = {};
		const pressed = new SalesforceCliInputOutput({
			input: {
				args: ['sobject', 'describe', '--sobject', 'Account', '--target-org', 'cso', '--json'],
				command: 'sf',
			},
			output: {
				stdout
			}
		});

		const error = new Error('Mock Failure within write file!');
		ide.writeFile = async function ({ uri, contents }) {
			throw error;
		};

		await showCliOutput(ide, pressed);
		expect(ide.didShowErrorMessage(error.message)).toBe(true);
	});
});