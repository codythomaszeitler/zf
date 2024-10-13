import { Position } from "../position";

export const sfZsiString = '__zf_szi_location__';

export function inlineSfZsiString(contents: string, position: Position) {
    const index = getIndexOfNewLine(contents, position.getLineNumber());

    if (index === -1) {
        return contents + sfZsiString;
    }

    const pos = position.getColumnNumber() + index;
    const injected = contents.slice(0, pos) + sfZsiString + contents.slice(pos);
    return injected;
}

function getIndexOfNewLine(contents: string, lineNumber: number) {
    if (lineNumber === 0) {
        return 0;
    }

    let counter = 0;
    let index = -1;
    for (let i = 0; i < contents.length; i++) {
        if (contents[i] === '\n') {
            counter++;
        }

        if (counter === lineNumber) {
            index = i + 1;
            break;
        }
    }
    return index;
}