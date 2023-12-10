import { describe, expect } from '@jest/globals';
import { Logger, LogLevel } from '../logger';

describe('logger', () => {

	let testObject: TestLogger;

	beforeEach(() => {
		testObject = new TestLogger();
		testObject.setLogLevel(LogLevel.fine);
	});

	it('should log a warning message when commanded', () => {
		const testString = 'Test String';
		testObject.warn(testString);

		const re = /\[[\d]+\] \[WARN\] - Test String/;
		expect(testObject.contains(re)).toBeTruthy();
	});

	it('should log an info message when commanded', () => {
		const testString = 'Test String';
		testObject.info(testString);

		const re = /\[[\d]+\] \[INFO\] - Test String/;
		expect(testObject.contains(re)).toBeTruthy();
	});

	it('should NOT log an info message if log level is currently warn', () => {

		testObject.setLogLevel(LogLevel.warn);

		const testString = 'Test String';
		testObject.info(testString);

		const re = /\[[\d]+\] \[INFO\] - Test String/;
		expect(testObject.contains(re)).toBeFalsy();
	});
});

class TestLogger extends Logger {

	public messages: string[];

	constructor() {
		super();
		this.messages = [];
	}

	write(message: string): void {
		this.messages.push(message);
	}

	contains(re: RegExp): boolean {
		return !!this.messages.find(message => re.test(message));
	}
}