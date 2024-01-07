import { APEX_CLASS_SOBJECT_NAME, ApexClass, SymbolTable } from "./apexClass";
import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import { ReadApexClassesCommand } from "./readApexClassesCommand";
import { SfdxProject } from "./readSfdxProjectCommand";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export function getOfflineSymbolTableApexClassUri(params: {
	targetOrg: SalesforceOrg,
	outputDir: Uri,
	apexClass: ApexClass
}) {
	return Uri.join(params.outputDir, params.targetOrg.getAlias(), `${params.apexClass.getName()}.cls`);
}

export class GenerateOfflineSymbolTableCommand extends Command {
	public async execute(params: {
		targetOrg: SalesforceOrg,
		outputDir: Uri,
		sfdxProject: SfdxProject
	}) {
		const localApexClassNames = await this.getLocalApexClassName(params);

		const dataQueryResults = await this.getCli().dataQuery({
			targetOrg: params.targetOrg,
			query: {
				from: APEX_CLASS_SOBJECT_NAME,
				fields: ['Name', 'SymbolTable']
			}
		});

		const apexClasses: ApexClass[] = dataQueryResults.getSObjects().filter(sObject => {
			const name = sObject["Name"];
			return !localApexClassNames.includes(name);
		}).map(sObject => {
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
				apexClass,
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

	private async getLocalApexClassName({ sfdxProject }: { sfdxProject: SfdxProject; }) {
		const readApexClassCommand = new ReadApexClassesCommand({
			cli: this.getCli(),
			ide: this.getIde()
		});

		const alreadyExistingApexClasses = await readApexClassCommand.execute({
			sfdxProject: sfdxProject
		});
		const alreadyExistingApexClassNames = alreadyExistingApexClasses.map(apexClass => apexClass.getName());
		return alreadyExistingApexClassNames;
	}
}

function apexClassIntoString(params: {
	apexClass: ApexClass
}) {
	const separator = '\n\t';

	const constructors = apexClassConstructorsIntoString();
	const methods = apexMethodsIntoString();
	const properties = apexPropertiesIntoString();
	return `global class ${params.apexClass.getName()} {\n\t${constructors}${methods}${properties}}`;

	function apexClassConstructorsIntoString() {
		const publicConstructors = params.apexClass.getPublicConstructors();

		const asStrings = publicConstructors.map(publicConstructor => {
			return `global ${publicConstructor.name}() {}`;
		});

		return asStrings.join(separator);
	}

	function apexMethodsIntoString() {
		const publicMethods = params.apexClass.getPublicMethods();

		const asStrings = publicMethods.map(publicMethod => {
			return `global ${publicMethod.returnType} ${publicMethod.name}() {}`;
		});

		return asStrings.join(separator);
	}

	function apexPropertiesIntoString() {
		const publicProperties = params.apexClass.getPublicProperties();

		const asStrings = publicProperties.map(publicProperty => {
			return `global ${publicProperty.type} ${publicProperty.name};`;
		});

		return asStrings.join(separator);
	}
}