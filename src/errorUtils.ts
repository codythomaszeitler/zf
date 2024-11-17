import { Logger } from "./logger";

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }

    return String(error);
}

export function genLogExceptionIfOccurs<T>(fn: (cliOutputJson: unknown) => T) {
    return function (cliOutputJson: unknown): T {
        try {
            return fn(cliOutputJson);
        } catch (e: unknown) {
            if (e instanceof Error) {
                Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
                Logger.get().error(e);
            }
            return undefined;
        }
    };
}