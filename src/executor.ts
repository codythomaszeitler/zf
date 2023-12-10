const { spawn } = require('node:child_process');
import { Logger } from "./logger";

export type Executor = (command: ExecutorCommand) => Promise<ExecutorResult>;

export interface ExecutorCommand {
    command: string;
    args: string[];
    standardInput?: string;
    prompt?: string;
    env?: Object;
}

export interface ExecutorResult {
    stdout: any;
}

export async function runCliCommand(command: ExecutorCommand): Promise<ExecutorResult> {
    return new Promise((resolve, reject) => {

        Logger.get().info(intoString(command));

        const cli = spawn(command.command, command.args, {
            shell: true,
            env: command.env || process.env
        });

        cli.on('spawn', () => {
            if (command.standardInput) {
                cli.stdin.write(command.standardInput);
                cli.stdin.end();
            }
        });

        let stdout = '';
        cli.stdout.on('data', (data: string) => {
            if (command.prompt) {
                const asString = data + '';
                if (asString !== command.prompt) {
                    stdout += data;
                }
            } else {
                stdout += data;
            }
        });

        cli.on('error', (error: string) => {
            reject(new Error(error));
        });

        cli.on('close', () => {
            const output = stdout ? JSON.parse(stdout) : {};
            Logger.get().info(stdout);
            resolve({
                stdout: output
            });
        });
    });
}

function intoString(command: ExecutorCommand): string {
    const toString = command.command + " " + command.args.join(" ");
    return toString;
}