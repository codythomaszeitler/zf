import { Command } from "./command";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
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
			progressTokens.report({
				progress: 0,
				title: 'Finding local log files...'
			});
			const uris = await this.getIde().findFiles(`**\\${params.logDir}\\**\\*.log`);
			const numFiles = uris.length;

			progressTokens.report({
				progress: 0,
				title: `Removing ${numFiles} log files.`
			});

			const promises = [];
			let completed = 0;
			for (let i = 0; i < uris.length; i++) {
				const promise = this.getIde().deleteTextDocument(uris[i]);
				promise.then(() => {
					completed++;
					progressTokens.report({
						progress: (completed / numFiles) * 100,
					});
				});

				promises.push(promise);
			}

			await Promise.all(promises);
		}, {
			title: 'Cleaning Local Apex Logs'
		});
	}

}