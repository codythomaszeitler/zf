import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";
import * as path from 'path';

export function getSfdxProjectUri(params: {
	currentDir: string
}) {
	const uri = Uri.get(path.join(params.currentDir, "sfdx-project.json"));
	return uri;
}

export class ReadSfdxProjectCommand extends Command {
	public async execute(params: {
		currentDir: string
	}): Promise<SfdxProject> {
		const uri = getSfdxProjectUri({
			currentDir: params.currentDir
		});
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