import { ExecutorCommand, intoCliCommandString } from "../../executor";
import { SalesforceOrg } from "../../salesforceOrg";
import { get, getNoSandboxesAndNoScratches, getSfOrgListWithSkipConnectionNominalResponse, getSfOrgListWithSkipConnectionNominalResponseSandbox } from "../data/orgListOutput";

export function getSfOrgListCommandString(params?: {
	skipConnectionStatus: boolean
}) {
	if (params?.skipConnectionStatus) {
		return `sf org list --skip-connection-status --json`;
	} else {
		return 'sf org list --json';
	}
}

export function getSfConfigGetTargetOrgCommandString(): 'sf config get target-org --json' {
	return 'sf config get target-org --json';
}

export function getSfOrgListUsersCommandString({ targetOrg }: {
	targetOrg: SalesforceOrg
}) {
	return `sf org list users --target-org ${targetOrg.getAlias()} --json`;
}

export function genCommandToStdOutput(params?: {
	defaultOrg: SalesforceOrg
}): any {
	const commandToStdOutput: any = {};
	if (params) {
		if (params.defaultOrg.getIsScratchOrg()) {
			commandToStdOutput[getSfOrgListCommandString({
				skipConnectionStatus: true
			})] = getSfOrgListWithSkipConnectionNominalResponse({
				targetOrg: params.defaultOrg
			});
		} else {
			commandToStdOutput[getSfOrgListCommandString({
				skipConnectionStatus: true
			})] = getSfOrgListWithSkipConnectionNominalResponseSandbox({
				targetOrg: params.defaultOrg
			});
		}
	} else {
		commandToStdOutput[getSfOrgListCommandString({
			skipConnectionStatus: true
		})] = getNoSandboxesAndNoScratches();
	}
	commandToStdOutput[getSfOrgListCommandString()] = get();
	return commandToStdOutput;
}

export function genMockExecutor(commandToStdOutput: any) {
	return async function (command: ExecutorCommand) {
		const asString = intoCliCommandString(command);
		const stdout = commandToStdOutput[asString];

		if (!stdout) {
			throw new Error(`Could not find output for command string: [${asString}]`);
		}		

		return {
			stdout: JSON.parse(stdout)
		};
	};
}