import { ApexClass } from "./apexClass";
import { ApexClassSelector } from "./apexClassSelector";
import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { ReadApexClassesCommand } from "./readApexClassesCommand";
import { ReadSfdxProjectCommand, SfdxProject } from "./readSfdxProjectCommand";
import { SalesforceOrg } from "./salesforceOrg";

export function getOfflineSymbolTableApexClassUri(params: {
	targetOrg: SalesforceOrg,
	outputDir: Uri,
	apexClass: ApexClass
}) {
	return Uri.join(params.outputDir, params.targetOrg.getAlias(), `${params.apexClass.getName()}.cls`);
}

export class GenerateOfflineSymbolTableCommand extends Command {
	public async execute({ targetOrg, outputDir }: {
		targetOrg?: SalesforceOrg,
		outputDir: Uri
	}) {
		if (!targetOrg) {
			targetOrg = await this.getTargetOrDefaultOrg(targetOrg);
			if (!targetOrg) {
				return;
			}
		}

		const sfdxProject = await this.getSfdxProject();

		const offlineSymbolTableApexClasses: ApexClass[] = await this.getOfflineSymbolTableApexClasses({
			outputDir,
			sfdxProject,
			targetOrg
		});

		const promises = [];
		const numGenerators = 10;

		for (let i = 0; i < numGenerators; i++) {
			const apexClassWriter = new ApexClassWriter({
				apexClasses: offlineSymbolTableApexClasses,
				outputDir,
				targetOrg,
				ide: this.getIde()
			});

			promises.push(apexClassWriter.run());
		}

		return Promise.all(promises);
	}

	private async getSfdxProject() {
		const readSfdxProjectCommand = new ReadSfdxProjectCommand({
			ide: this.getIde(),
			cli: this.getCli()
		});
		const sfdxProject = await readSfdxProjectCommand.execute();
		return sfdxProject;
	}

	private async getOfflineSymbolTableApexClasses(params: { targetOrg: SalesforceOrg; outputDir: Uri; sfdxProject: SfdxProject; }) {
		const localApexClassNames = await this.getLocalApexClassNames(params);
		const serverSideApexClasses = await this.queryAllApexClass(params);

		const serverSideOnlyApexClasses: ApexClass[] = serverSideApexClasses.filter(sObject => {
			const name = sObject.getName();
			return !localApexClassNames.includes(name);
		});
		return serverSideOnlyApexClasses;
	}

	private async getLocalApexClassNames({ sfdxProject }: { sfdxProject: SfdxProject; }) {
		const readApexClassCommand = new ReadApexClassesCommand({
			cli: this.getCli(),
			ide: this.getIde()
		});

		const alreadyExistingApexClasses = await readApexClassCommand.execute({
			sfdxProject
		});
		const alreadyExistingApexClassNames = alreadyExistingApexClasses.map(apexClass => apexClass.getName());
		return alreadyExistingApexClassNames;
	}

	private async queryAllApexClass({ targetOrg }: { targetOrg: SalesforceOrg }) {
		const apexClassSelector = new ApexClassSelector({
			cli: this.getCli()
		});
		return apexClassSelector.queryAllApexClasses({
			targetOrg
		});
	}
}

class ApexClassWriter {

	private readonly apexClasses: ApexClass[];
	private readonly targetOrg: SalesforceOrg;
	private readonly outputDir: Uri;
	private readonly ide: IntegratedDevelopmentEnvironment;

	public constructor({ apexClasses, targetOrg, outputDir, ide }: { apexClasses: ApexClass[]; targetOrg: SalesforceOrg; outputDir: Uri; ide: IntegratedDevelopmentEnvironment }) {
		this.apexClasses = apexClasses;
		this.targetOrg = targetOrg;
		this.outputDir = outputDir;
		this.ide = ide;
	}

	public async run(): Promise<void> {
		const apexClass = this.apexClasses.pop();
		if (!apexClass) {
			return;
		}

		await this.writeApexClass(apexClass);

		return this.run();
	}

	private async writeApexClass(apexClass: ApexClass) {
		const uri = getOfflineSymbolTableApexClassUri({
			targetOrg: this.targetOrg,
			apexClass: apexClass,
			outputDir: this.outputDir
		});

		await this.ide.writeFile({
			uri,
			contents: apexClassIntoString({
				apexClass: apexClass
			})
		});
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