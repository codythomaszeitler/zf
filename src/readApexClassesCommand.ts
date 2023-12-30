import { ApexClass } from "./apexClass";
import { Command } from "./command";
import { SfdxProject } from "./readSfdxProjectCommand";

export class ReadApexClassesCommand extends Command {
	public async execute(params: {
		sfdxProject: SfdxProject
	}) {
		const apexClasses: ApexClass[] = [];
		const promises = params.sfdxProject.packageDirectories.map(packageDir => {
			return this.getIde().findFiles(packageDir.path + '/**/*.cls').then(uris => {
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