import { ExecutorCommand, intoCliCommandString } from "../../executor";

export function getSfOrgListCommandString() {
	return 'sf org list --json';
}

export function getSfConfigGetTargetOrgCommandString() {
	return 'sf config get target-org --json';
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