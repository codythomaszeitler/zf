import { Position } from "../../position";
import { inlineSfZsiString, sfZsiString } from "../../soql/intellisenseUtils";

describe('intellisense utils', () => {
    it('should put the zf intellisense string into the given position', async () => {
        const soqlString = 'SELECT Id,  FROM Account';
        const position = new Position(0, 11);

        const inlined = inlineSfZsiString(soqlString, position);

        expect(inlined).toBe(`SELECT Id, ${sfZsiString} FROM Account`);
    });

    it('should put the zf intellisense string into the given position (has multiple lines)', async () => {
        const soqlString = 'SELECT Id, \n FROM Account';
        const position = new Position(1, 0);

        const inlined = inlineSfZsiString(soqlString, position);
        expect(inlined).toBe(`SELECT Id, \n${sfZsiString} FROM Account`);
    });

    it('should attach intellisense string at end of string is line number out of bounds', () => {
        const soqlString = 'SELECT Id FROM Account';
        const position = new Position(1, 0);

        const inlined = inlineSfZsiString(soqlString, position);
        expect(inlined).toBe(`SELECT Id FROM Account${sfZsiString}`);
    });

    it('should attach intellisense string at the end of string', () => {
        const soqlString = 'SELECT Id FROM Account';
        const position = new Position(0, 22);

        const inlined = inlineSfZsiString(soqlString, position);
        expect(inlined).toBe(`SELECT Id FROM Account${sfZsiString}`);
    });

    it('should attach intellisense string to end of string if out of bounds', () => {
        const soqlString = 'SELECT Id FROM Account';
        const position = new Position(0, 1000);

        const inlined = inlineSfZsiString(soqlString, position);
        expect(inlined).toBe(`SELECT Id FROM Account${sfZsiString}`);
    });
});