import { SObjectDescribeResult } from "../../sObjectDescribeResult";

export function getSortedFieldNames(sObjectDescribeResult: SObjectDescribeResult) {
	if (!sObjectDescribeResult.result) {
		throw new Error('SObject Describe Result did not have a result variable.');
	}

	const fieldNames = [];
	sObjectDescribeResult.result.fields.forEach(field => {
		fieldNames.push(field.name);
		if (field.relationshipName) {
			fieldNames.push(field.referenceTo[0]);
		}
	});
	fieldNames.sort();
	return fieldNames;
}