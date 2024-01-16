import { describe, expect, test } from '@jest/globals';
import { ApexParser } from '../apexParser';
describe('apex parser', () => {
	it('should be able to get all public methods on an apex class', () => {
		const testObject = new ApexParser();
		const apexClass = testObject.parse('public class TestClass { public void foo() {} } ');

		const apexMethods = apexClass.getPublicMethods();

		expect(apexMethods).toHaveLength(1);
	});
});