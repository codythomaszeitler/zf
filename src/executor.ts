const { spawn } = require('node:child_process');
import { Logger } from "./logger";

export type Executor = (command: ExecutorCommand) => Promise<ExecutorResult>;

export interface ExecutorCommand {
    command: string;
    args: string[];
    standardInput?: string;
    prompt?: string;
    env?: Object;
    shouldParseAsJson?: boolean;
}

export interface ExecutorResult {
    stdout: any;
}

export async function runCliCommand(command: ExecutorCommand): Promise<ExecutorResult> {
    return new Promise((resolve, reject) => {
        const cliCommandString = intoCliCommandString(command);
        Logger.get().info(cliCommandString);

        const cli = spawn(command.command, command.args, {
            shell: true,
            env: command.env || process.env
        });

        cli.on('spawn', () => {
            if (command.standardInput) {
                Logger.get().info(`Wrote the following standard input to shell command: ${command.standardInput}.`);
                cli.stdin.write(command.standardInput);
                cli.stdin.end();
            }
        });

        let stdout = '';
        cli.stdout.on('data', (data: string) => {
            const addToStdout = () => {
                Logger.get().fine(`Stdout piped the following contents: ${data}`);
                stdout += data;
            };

            if (command.prompt) {
                const asString = data + '';
                if (asString !== command.prompt) {
                    addToStdout();
                }
            } else {
                addToStdout();
                stdout += data;
            }
        });

        let stderr = '';
        cli.stderr.on('data', (data: string) => {
            stderr += data;
        });

        cli.on('error', (error: string) => {
            const e = new Error(error);
            Logger.get().error(e);
            reject(e);
        });

        cli.on('close', () => {
            Logger.get().info(`Closing the following stream: ${cliCommandString}.`);
            const getOutput = () => {
                if (command.shouldParseAsJson) {
                    return stdout ? JSON.parse(stdout) : {};
                } else {
                    return stdout;
                }
            };

            const output = getOutput();
            if (!output && stderr) {
                Logger.get().info(cliCommandString + ' did not return successfully. Please check Salesforce CLI Input/Output for output.');
                reject(new Error(stderr));
            }
            else {
                Logger.get().info(cliCommandString + ' returned successfully. Please check Salesforce CLI Input/Output for output.');
                resolve({
                    stdout: getOutput()
                });
            }
        });
    });
}

export function intoCliCommandString(command: ExecutorCommand): string {
    const toString = command.command + " " + command.args.filter(arg => arg).join(" ");
    return toString;
}