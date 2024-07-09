import { describe, expect } from '@jest/globals';
import { ApexParser } from '../apexParser';
describe('apex parser', () => {
	it('should be able to get all public test methods on an apex class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('@IsTest public class TestClass { @IsTest public static void testMethod1() {} } ');

		expect(apexClass.getClassName()).toBe('TestClass');
		expect(apexClass.getIsTestClass()).toBe(true);

		const apexMethods = apexClass.getTestMethods();

		expect(apexMethods).toHaveLength(1);

		const publicTestMethod1 = apexMethods[0];
		expect(publicTestMethod1.name).toBe('testMethod1');
	});

	it('should be able to get all public test methods on an apex class (when IsTest does not match case exactly)', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('@IsTest public class TestClass { @isTest public static void testMethod1() {} } ');

		expect(apexClass.getClassName()).toBe('TestClass');
		expect(apexClass.getIsTestClass()).toBe(true);

		const apexMethods = apexClass.getTestMethods();

		expect(apexMethods).toHaveLength(1);

		const publicTestMethod1 = apexMethods[0];
		expect(publicTestMethod1.name).toBe('testMethod1');
	});

	it('should be able to get all private test methods on an apex class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('@IsTest public class TestClass { @IsTest static void testMethod1() {} } ');

		expect(apexClass.getClassName()).toBe('TestClass');
		expect(apexClass.getIsTestClass()).toBe(true);

		const apexMethods = apexClass.getTestMethods();

		expect(apexMethods).toHaveLength(1);

		const publicTestMethod1 = apexMethods[0];
		expect(publicTestMethod1.name).toBe('testMethod1');

		expect(publicTestMethod1.range.getStart().getLineNumber()).toBe(0);
		expect(publicTestMethod1.range.getStart().getColumnNumber()).toBe(48);
		expect(publicTestMethod1.range.getEnd().getLineNumber()).toBe(0);
		expect(publicTestMethod1.range.getEnd().getColumnNumber()).toBe(68);
	});

	it('should be get no test methods if there are non in class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('@IsTest public class TestClass { static void testMethod1() {} } ');

		expect(apexClass.getClassName()).toBe('TestClass');
		// This is NOT test class since there are no test methods. 
		// You can have "Test utils" that are not runnable test classes, yet they have the @IsTest modifier
		expect(apexClass.getIsTestClass()).toBe(false); 

		const apexMethods = apexClass.getTestMethods();

		expect(apexMethods).toHaveLength(0);
	});
});