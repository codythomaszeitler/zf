import { SoqlParser } from "../../soql/parser";

describe('soql language server', () => {
	it('should be able to parse a simple "select id from account" query', () => {
		const queryString = "SELECT Id FROM Account";

		const testObject = new SoqlParser();
		const { sObjectName, fields } = testObject.parse(queryString);

		expect(sObjectName).toBe('Account');
		expect(fields).toEqual(['Id']);
	});
});