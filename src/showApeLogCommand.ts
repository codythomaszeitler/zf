import { Command } from "./command";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class ShowApexLogCommand extends Command {
	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute(params: {
		targetOrg: SalesforceOrg,
		logId: SalesforceId,
		logDir: string
	}) {
		await this.getIde().withProgress(async (progressToken) => {
			const hasFile = async () => {
				const uri = await this.getIde().findFile(`**/${params.logId.toString()}.log`);
				return !!uri;
			};

			progressToken.report({
				progress: 25,
				title: 'Checking if file exists'
			});
			if (!(await hasFile())) {
				progressToken.report({
					progress: 50,
					title: `Getting log file ${params.logId.toString()}`
				});
				await this.getCli().apexGetLog({
					targetOrg: params.targetOrg,
					logDir: params.logDir,
					logId: params.logId
				});
			}

			progressToken.report({
				progress: 75,
				title: `Opening log file ${params.logId.toString()}`
			});
			const uri = await this.getIde().findFile(`**/${params.logId.toString()}.log`);
			if (!uri) {
				this.getIde().showWarningMessage(`Could not find log matching ${params.logId.toString()}.`);
				return;
			}
			await this.getIde().showTextDocument(uri);
		}, {
			title: 'Opening Log File'
		});
	}
}