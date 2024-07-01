export class Position {
    private readonly lineNumber : number;
    private readonly columnNumber : number;

    public constructor(lineNumber : number, columnNumber : number) {
        this.lineNumber = lineNumber || 0;
        this.columnNumber = columnNumber || 0;
    }

    public getLineNumber() : number {
        return this.lineNumber;
    }

    public getColumnNumber() : number {
        return this.columnNumber;
    }
}