const { spawn } = require('node:child_process');

export type Executor = (command: ExecutorCommand) => Promise<ExecutorResult>;

export interface ExecutorCommand {
    command: string;
    args: string[];
}

export interface ExecutorResult {
    stdout: any;
}

export async function runCliCommand(command: ExecutorCommand): Promise<ExecutorResult> {
    return new Promise((resolve, reject) => {
        const cli = spawn(command.command, command.args, {
            shell : true
        });

        let stdout = '';
        cli.stdout.on('data', (data: string) => {
            stdout += data;
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
