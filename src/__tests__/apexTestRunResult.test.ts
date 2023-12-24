import { describe, expect, test } from '@jest/globals';
import { parseStackTrace } from '../apexTestRunResult';

describe('stack trace parser', () => {

	it('should be able to parse nominal string', () => {
		const rawString = 'Class.SetAccountNameTest.itShouldSetTheAccountNameWhenCommanded: line 11, column 1"';
		const result = parseStackTrace(rawString);

		expect(result.className).toBe('SetAccountNameTest');
		expect(result.methodName).toBe('itShouldSetTheAccountNameWhenCommanded');
		expect(result.position.getLineNumber()).toBe(10);
		expect(result.position.getColumnNumber()).toBe(0);
	});

	it('should throw an exception if a blank string is given', () => {

		let caughtException = null;
		try {
			parseStackTrace("");
		} catch (e: any) {
			caughtException = e;
		}

		expect(caughtException.message).toBe(`Could not parse stack trace apex test location string [${""}]`);
	});

	it('should throw an exception if column number', () => {

		const testString = 'Class.SetAccountNameTest.itShouldSetTheAccountNameWhenCommanded: line 11, column "';
		let caughtException = null;
		try {
			parseStackTrace(testString);
		} catch (e: any) {
			caughtException = e;
		}

		expect(caughtException.message).toBe(`Could not parse stack trace apex test location string [${testString}]`);
	});
});