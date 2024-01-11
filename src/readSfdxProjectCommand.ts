import { Command } from "./command";
import { Uri } from "./integratedDevelopmentEnvironment";

export function getSfdxProjectUri(params: {
	currentDir: Uri
}) {
	return Uri.join(params.currentDir, "sfdx-project.json");
}

export class ReadSfdxProjectCommand extends Command {
	public async execute(): Promise<SfdxProject> {
		const uri = getSfdxProjectUri({
			currentDir: this.getIde().getCurrentDir()
		});
		const asString = await this.getIde().readFile({
			uri
		});
		const sfdxProject = { ...JSON.parse(asString) } as SfdxProject;
		return sfdxProject;
	}
}

export class CacheReadSfdxProjectCommand extends ReadSfdxProjectCommand {
	public async execute(): Promise<SfdxProject> {
		const sfdxProject = await super.execute();
		this.getIde().setCachedSfdxProject(sfdxProject);
		return sfdxProject;
	}
}

export interface SfdxProject {
	readonly packageDirectories: {
		readonly path: string;
		readonly default: boolean;
	}[];
}