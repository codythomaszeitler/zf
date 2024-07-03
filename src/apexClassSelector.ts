import { APEX_CLASS_SOBJECT_NAME, ApexClass, SymbolTable } from "./apexClass";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";
import { Selector } from "./selector";

export class ApexClassSelector extends Selector {
	public async queryAllApexClasses({ targetOrg }: { targetOrg: SalesforceOrg; }) {
		const dataQueryResults = await this.getCli().dataQuery({
			targetOrg,
			useToolingApi : true,
			query: {
				from: APEX_CLASS_SOBJECT_NAME,
				fields: ['Name', 'SymbolTable', 'Body']
			}
		});

		return dataQueryResults.getSObjects().map(sObject => {
			const recordId = SalesforceId.get(sObject["Id"]);
			const name = sObject["Name"];
			const body = sObject["Body"] !== '(hidden)' ? sObject["Body"] : '';
			const symbolTable = sObject["SymbolTable"] as SymbolTable;

			return new ApexClass({
				id: recordId,
				name,
				symbolTable,
				body
			});
		});
	}
}