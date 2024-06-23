import { parseStackTrace } from "../stackTrace";

describe('stack trace', () => {
	it('should be able to parse if stack trace starts from anonymous block', () => {
		const exceptionStackTrace = "(System Code)\nClass.AClass.<init>: line 5, column 1\nClass.AClass.run: line 15, column 1\nAnonymousBlock: line 1, column 1\nAnonymousBlock: line 1, column 1";
		const { className, methodName } = parseStackTrace(exceptionStackTrace);

		expect(className).toBe('AClass');
		expect(methodName).toBe('<init>');
	});

	it('should be able to parse if stack trace is only anonymous block', () => {
		const exceptionStackTrace = "AnonymousBlock: line 1, column 1";
		const { className, methodName, position } = parseStackTrace(exceptionStackTrace);

		expect(className).toBe('AnonymousBlock');
		expect(methodName).toBe('');

		expect(position.getColumnNumber()).toBe(0);
		expect(position.getLineNumber()).toBe(0);
	});
});