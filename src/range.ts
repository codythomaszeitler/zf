import { Position } from "./position";

export class Range {
    private readonly start: Position;
    private readonly end: Position | undefined | void;

    public constructor (start: Position, end: Position | undefined | void) {
        this.start = start;
        this.end = end;
    }

    public getStart(): Position {
        return this.start;
    }

    public getEnd(): Position {
        if (!this.end) {
            throw new Error('Range was not built with end.');
        }
        return this.end;
    }
}