import { SoqlParser } from "../../soql/parser";

describe('soql language server', () => {
	it('should be able to parse a simple "SELECT Id, Name FROM Account" query', () => {
		const queryString = "SELECT Id, Name FROM Account";

		const testObject = new SoqlParser();
		const { sObjectName, fields } = testObject.parse(queryString);

		expect(sObjectName).toBe('Account');
		expect(fields).toEqual(['Id', 'Name']);
	});

	it('should be able to parse a simple "SELECT Id FROM Account" query (only one field)', () => {
		const queryString = "SELECT Id FROM Account";

		const testObject = new SoqlParser();
		const { sObjectName, fields } = testObject.parse(queryString);

		expect(sObjectName).toBe('Account');
		expect(fields).toEqual(['Id']);
	});
});