import { write } from "fs";
import { APEX_CLASS_SOBJECT_NAME, ApexClass, SymbolTable } from "./apexClass";
import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";
import * as path from 'path';

export function getOfflineSymbolTableApexClassUri(params: {
	targetOrg: SalesforceOrg,
	outputDir: string,
	apexClass: ApexClass
}) {
	const joinedPath = path.join(params.outputDir, params.targetOrg.getAlias(), `${params.apexClass.getName()}`);
	const uri = Uri.get(joinedPath);
	return uri;
}

export class GenerateOfflineSymbolTableCommand extends Command {
	public async execute(params: {
		targetOrg: SalesforceOrg,
		outputDir: string
	}) {

		const dataQueryResults = await this.getCli().dataQuery({
			targetOrg: params.targetOrg,
			query: {
				from: APEX_CLASS_SOBJECT_NAME,
				fields: ['Name', 'SymbolTable']
			}
		});

		const apexClasses: ApexClass[] = dataQueryResults.getSObjects().map(sObject => {
			const recordId = SalesforceId.get(sObject["Id"]);
			const name = sObject["Name"];
			const symbolTable = sObject["SymbolTable"] as SymbolTable;

			return new ApexClass({
				id: recordId,
				name,
				symbolTable
			});
		});

		const writeApexClassToFile = async (): Promise<void> => {
			const apexClass = apexClasses.pop();
			if (!apexClass) {
				return;
			}

			const uri = getOfflineSymbolTableApexClassUri({
				targetOrg: params.targetOrg,
				apexClass: apexClass,
				outputDir: params.outputDir
			});

			await this.getIde().writeFile({
				uri,
				contents: apexClassIntoString({
					apexClass: apexClass
				})
			});

			return writeApexClassToFile();
		};

		const promises = [];
		const numGenerators = 10;

		for (let i = 0; i < numGenerators; i++) {
			promises.push(writeApexClassToFile());
		}

		return Promise.all(promises);
	}
}

function apexClassIntoString(params: {
	apexClass: ApexClass
}) {
	return `global class ${params.apexClass.getName()} {}`;
}