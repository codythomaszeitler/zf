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
		logDir: string
	}) {
		await this.getIde().withProgress(async (progressTokens) => {
			const uri = Uri.get(params.logDir);
			await this.getIde().deleteTextDocument(uri);
		}, {
			title: 'Cleaning Local Apex Logs'
		});
	}

}