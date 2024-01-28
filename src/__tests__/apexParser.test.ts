import { describe, expect } from '@jest/globals';
import { ApexParser } from '../apexParser';
describe('apex parser', () => {
	it('should be able to get all public methods on an apex class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public Integer foo() {return 3;} } ');

		expect(apexClass.getClassName()).toBe('TestClass');

		const apexMethods = apexClass.getPublicMethods();

		expect(apexMethods).toHaveLength(1);

		const publicFooMethod = apexMethods[0];
		expect(publicFooMethod.name).toBe('foo');
		expect(publicFooMethod.returnType).toBe('Integer');
	});

	it('should be able to get all public methods on an apex class with same case sensitivity', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { Public Integer foo() {return 3;} } ');

		const apexMethods = apexClass.getPublicMethods();

		expect(apexMethods).toHaveLength(1);

		const publicFooMethod = apexMethods[0];
		expect(publicFooMethod.name).toBe('foo');
		expect(publicFooMethod.returnType).toBe('Integer');
	});

	it('should be able to get all public fields on an apex class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public Integer a; } ');

		expect(apexClass.getClassName()).toBe('TestClass');

		const apexFields = apexClass.getPublicFields();

		expect(apexFields).toHaveLength(1);

		const publicAProperty = apexFields[0];
		expect(publicAProperty.name).toBe('a');
		expect(publicAProperty.type).toBe('Integer');
	});

	it('should be able to get all public fields on an apex class when there is a assignment expression', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public Integer a = 5; } ');

		expect(apexClass.getClassName()).toBe('TestClass');

		const apexFields = apexClass.getPublicFields();

		expect(apexFields).toHaveLength(1);

		const publicAProperty = apexFields[0];
		expect(publicAProperty.name).toBe('a');
		expect(publicAProperty.type).toBe('Integer');
	});

	it('should be able to get all public fields on an apex class when one field has multiple decls', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public Integer a,b,c; } ');

		expect(apexClass.getClassName()).toBe('TestClass');

		const apexFields = apexClass.getPublicFields();
		expect(apexFields).toHaveLength(3);

		const names = apexFields.map(apexField => apexField.name);
		expect(names).toEqual(['a', 'b', 'c']);
	});

	it('should be able to get all public fields on an apex class when one field has a generic list return', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public List<Integer> foo() {return new List<Integer>(); } } ');

		expect(apexClass.getClassName()).toBe('TestClass');

		const apexMethods = apexClass.getPublicMethods();

		expect(apexMethods).toHaveLength(1);

		const apexMethod = apexMethods[0];
		expect(apexMethod.returnType).toBe('List<Integer>');
	});
});