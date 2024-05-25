import { Command } from "./command";
import { ProjectRetrieveResult } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { Uri } from "./uri";

export class ProjectRetrieveStartCommand extends Command {
	public async execute({ targetOrg, outputDir, metadata }: { targetOrg: SalesforceOrg, outputDir: Uri, metadata: string }): Promise<ProjectRetrieveStartCommandResult> {
		const result = await this.getCli().projectRetrieveStart({
			targetOrg, outputDir, metadata
		});
		return result;
	}
}

export type ProjectRetrieveStartCommandResult = ProjectRetrieveResult;