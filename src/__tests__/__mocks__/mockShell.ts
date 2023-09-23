export function genMockExecutor(commandToStdOutput: any) {
    return async function(command : string) {
        const stdout = commandToStdOutput[command];
        return {
            stdout : JSON.parse(stdout),
            stderr : ''
        };
    };
}