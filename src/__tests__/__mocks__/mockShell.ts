import { ExecutorCommand, intoCliCommandString } from "../../executor";

export function genMockExecutor(commandToStdOutput: any) {
	return async function (command: ExecutorCommand) {
		const asString = intoCliCommandString(command);
		const stdout = commandToStdOutput[asString];
		return {
			stdout: JSON.parse(stdout)
		};
	};
}