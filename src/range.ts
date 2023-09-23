import { Position } from "./position";

export class Range {
    private readonly start: Position;

    public constructor(start: Position) {
        this.start = start;
    }

    public getStart(): Position {
        return this.start;
    }

}