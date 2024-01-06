import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";

export class ApexCleanLogsCommand extends Command {

	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute(params: {
		logDir: Uri
	}) {
		await this.getIde().withProgress(async (progressTokens) => {
			await this.getIde().deleteTextDocument(params.logDir);
		}, {
			title: 'Cleaning Local Apex Logs'
		});
	}

}