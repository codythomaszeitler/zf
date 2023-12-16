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

	it('should log an error when commanded', () => {
		const e = new Error('Test Exception');
		testObject.error(e);

		const re = /\[[\d]+\] \[ERROR\] - Test Exception - .*/;
		expect(testObject.contains(re)).toBeTruthy();
	});

	it('should log an error without stack trace when commanded', () => {
		const e = new Error('Test Exception');
		e.stack = undefined;
		testObject.error(e);

		const re = /\[[\d]+\] \[ERROR\] - Test Exception - .*/;
		expect(testObject.contains(re)).toBeFalsy();

		expect(testObject.messages).toHaveLength(1);
	});

	it('should NOT log an info message if log level is currently warn', () => {

		testObject.setLogLevel(LogLevel.warn);

		const testString = 'Test String';
		testObject.info(testString);

		const re = /\[[\d]+\] \[INFO\] - Test String/;
		expect(testObject.contains(re)).toBeFalsy();
	});

	it('should NOT log a message if given a falsy string', () => {
		testObject.info('');
		expect(testObject.messages).toHaveLength(0);
	});
});

export class TestLogger extends Logger {

	public messages: string[];

	public constructor() {
		super();
		this.messages = [];
	}

	public write(message: string): void {
		this.messages.push(message);
	}

	public contains(re: RegExp): boolean {
		return !!this.messages.find(message => re.test(message));
	}
}