import { ApexClass } from "./apexClass";
import { Command } from "./command";
import { SfdxProject } from "./readSfdxProjectCommand";

export class ReadApexClassesCommand extends Command {
	public async execute({ sfdxProject }: {
		sfdxProject: SfdxProject
	}) {
		const apexClasses: ApexClass[] = [];
		const promises = sfdxProject.packageDirectories.map(packageDir => {
			const asUri = this.getIde().generateUri(packageDir.path);
			return this.getIde().findFiles('**/*.cls', asUri).then(uris => {
				apexClasses.push(...uris.map(uri => {
					const apexClassName = uri.getBaseName().replace('.cls', '');
					const apexClass = new ApexClass({
						name: apexClassName
					});
					return apexClass;
				}));
			});
		});

		await Promise.all(promises);

		return apexClasses;
	}
}