const { spawn } = require('node:child_process');
const os = require('os');

export type Executor = (command: ExecutorCommand) => Promise<ExecutorResult>;

export interface ExecutorCommand {
    command: string;
    args: string[];
    standardInput?: string;
    prompt?: string;
}

export interface ExecutorResult {
    stdout: any;
}

export async function runCliCommand(command: ExecutorCommand): Promise<ExecutorResult> {
    return new Promise((resolve, reject) => {
        const cli = spawn(command.command, command.args, {
            shell: true
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
            if (stdout) {
                resolve({
                    stdout: JSON.parse(stdout)
                });
            } else {
                resolve({
                    stdout: {}
                });
            }
        });
    });
}
