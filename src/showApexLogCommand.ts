import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";
import * as path from 'path';

export function getLogFileUri(params: {
	targetOrg: SalesforceOrg,
	logDir: string,
	logId: SalesforceId
}) {
	const joinedPath = path.join(params.logDir, params.targetOrg.getAlias(), `${params.logId.toString()}.log`);
	const uri = Uri.get(joinedPath);
	return uri;
}

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
		const logFileUri = getLogFileUri({
			targetOrg: params.targetOrg,
			logDir: params.logDir,
			logId: params.logId
		});

		await this.getIde().withProgress(async (progressToken) => {
			progressToken.report({
				progress: 25,
				title: 'Checking if file exists'
			});
			const hasFile = await this.getIde().hasFile(logFileUri);
			if (!hasFile) {
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
			await this.getIde().showTextDocument(logFileUri);
		}, {
			title: 'Opening Log File'
		});
	}
}