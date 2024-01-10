import { ExecutorCommand, intoCliCommandString } from "../../executor";
import { SalesforceOrg } from "../../salesforceOrg";
import { get } from "../data/orgListOutput";

export function getSfOrgListCommandString(params? : {
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

export function genCommandToStdOutput(): any {
	const commandToStdOutput: any = {};
	commandToStdOutput[getSfOrgListCommandString()] = get();
	return commandToStdOutput;
}

export function genMockExecutor(commandToStdOutput: any) {
	return async function (command: ExecutorCommand) {
		const asString = intoCliCommandString(command);
		const stdout = commandToStdOutput[asString];
		return {
			stdout: JSON.parse(stdout)
		};
	};
}