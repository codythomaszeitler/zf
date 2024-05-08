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

	it('should be able to parse exception thrown from body of non-test-method', () => {
		const testString = 'Class.SetAccountName.foo: line 14, column 1\nClass.SetAccountNameTest.anotherTestMethod: line 21, column 1';
		const result = parseStackTrace(testString);

		expect(result.className).toBe('SetAccountName');
		expect(result.methodName).toBe('foo');
		expect(result.position.getLineNumber()).toBe(13);
		expect(result.position.getColumnNumber()).toBe(0);
	});

	it('should be able to parse a system code exception message', () => {
		const testString = '(System Code)\nClass.TestClass.parse: line 9, column 1\nClass.Test.methodName: line 8, column 1';
		const result = parseStackTrace(testString);

		expect(result.className).toBe('TestClass');
		expect(result.methodName).toBe('parse');
		expect(result.position.getLineNumber()).toBe(8);
		expect(result.position.getColumnNumber()).toBe(0);
	});
});