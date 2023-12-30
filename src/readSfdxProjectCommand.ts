import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import * as path from 'path';

export class ReadSfdxProjectCommand extends Command {
	public async execute(params: {
		currentDir: string
	}): Promise<SfdxProject> {
		const uri = Uri.get(path.join(params.currentDir, "sfdx-project.json"));
		const asString = await this.getIde().readFile({
			uri
		});
		const sfdxProject = JSON.parse(asString) as SfdxProject;
		return sfdxProject;
	}
}

export interface SfdxProject {
	readonly packageDirectories: {
		readonly path: string;
		readonly default: boolean;
	}[];
}