import { Command, CommandParams } from "./command";
import { TextDocument, Uri } from "./integratedDevelopmentEnvironment";

export function getSfdxProjectUri(params: {
	currentDir: Uri
}) {
	return Uri.join(params.currentDir, "sfdx-project.json");
}

export function genCacheSfdxProjectOnSave({
	cli,
	ide
}: CommandParams) {
	function runCacheReadSfdxProjectCommand() {
		const readSfdxProjectCommand = new CacheReadSfdxProjectCommand({
			cli,
			ide
		});
		readSfdxProjectCommand.execute();
	}

	runCacheReadSfdxProjectCommand();

	return async function ({ textDocuments }: { textDocuments: TextDocument[] }) {
		const sfdxProjectUri = textDocuments.find(textDocument => textDocument.uri.getBaseName() === 'sfdx-project.json');
		if (sfdxProjectUri) {
			runCacheReadSfdxProjectCommand();
		}
	};
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