import { Position } from "./position";

const anonymousBlockOnlyRegex = /^AnonymousBlock: line (\d+), column (\d+)\n?.*/;
export function parseStackTrace(stackTrace: string): { className: string; methodName: string, position: Position } {
	if (anonymousBlockOnlyRegex.test(stackTrace)) {
		return parseAnonStackTrace(stackTrace);
	}

	const classNameRegex = /^(\(System Code\)\n|External entry point\n)?Class\.(.*)\.(.*): line (\d+), column (\d+)\n?.*/;

	const matches = stackTrace.match(classNameRegex);
	if (!matches) {
		throw new Error(`Could not parse stack trace apex test location string [${stackTrace}]`);
	}
	const line = Number.parseInt(matches[4]);
	const column = Number.parseInt(matches[5]);

	return {
		className: matches[2],
		methodName: matches[3],
		position: new Position(line - 1, column - 1)
	};
}

function parseAnonStackTrace(stackTrace: string) {
	const matches = stackTrace.match(anonymousBlockOnlyRegex);
	if (!matches) {
		throw new Error(`Could not parse anon stack trace apex test location string [${stackTrace}]`);
	}

	const line = Number.parseInt(matches[1]);
	const column = Number.parseInt(matches[2]);

	return {
		className: 'AnonymousBlock',
		methodName: '',
		position: new Position(line - 1, column - 1)
	};
}