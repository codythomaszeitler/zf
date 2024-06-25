import { filterUserDebugs } from "./apexLog";
import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export function getLogFileUri(params: {
	targetOrg: SalesforceOrg,
	logDir: Uri,
	logId: SalesforceId
}) {
	return Uri.join(params.logDir, params.targetOrg.getAlias(), `${params.logId.toString()}.log`);
}

export class ShowApexLogCommand extends Command {
	public constructor (params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute({ targetOrg, logId, logDir }: {
		targetOrg: SalesforceOrg,
		logId: SalesforceId,
		logDir: Uri
	}) {
		await this.getIde().withProgress(async (progressToken) => {
			const getApexLogCommand = new GetApexLogCommand({
				ide: this.getIde(), cli: this.getCli(), progressToken
			});

			await getApexLogCommand.execute({
				logDir, logId, targetOrg
			});

			const logFileUri = getLogFileUri({
				logDir, logId, targetOrg
			});
			await this.getIde().showTextDocument(logFileUri);
		}, {
			title: 'Opening Log File'
		});
	}
}

export class ShowApexLogDebugsOnlyCommand extends Command {

	public async execute({ targetOrg, logDir, logId }: {
		targetOrg: SalesforceOrg,
		logId: SalesforceId,
		logDir: Uri
	}) {
		const logFileUri = getLogFileUri({
			targetOrg: targetOrg,
			logDir: logDir,
			logId: logId
		});

		await this.getIde().withProgress(async (progressToken) => {
			const getApexLogCommand = new GetApexLogCommand({
				cli: this.getCli(), ide: this.getIde(), progressToken
			});
			await getApexLogCommand.execute({
				logDir, logId, targetOrg
			});

			const contents = await this.getIde().readFile({ uri: logFileUri });

			const tempDebugOnlyDir = Uri.join(logDir, 'tempDebugsOnlyDir');
			const debugsOnly = filterUserDebugs(contents);

			await this.getIde().showTempFileWith(tempDebugOnlyDir, debugsOnly);
		}, {
			title: 'Opening Log File (Debugs Only)'
		});
	}
}

class GetApexLogCommand extends Command {
	public async execute({ targetOrg, logDir, logId }: { targetOrg: SalesforceOrg, logId: SalesforceId, logDir: Uri }) {
		const progressToken = this.getProgressToken();

		const logFileUri = getLogFileUri({
			targetOrg: targetOrg,
			logDir: logDir,
			logId: logId
		});
		progressToken?.report({
			progress: 25,
			title: 'Checking if file exists'
		});
		const hasFile = await this.getIde().hasFile(logFileUri);
		if (!hasFile) {
			progressToken?.report({
				progress: 50,
				title: `Getting log file ${logId.toString()}`
			});
			await this.getCli().apexGetLog({
				targetOrg: targetOrg,
				logDir: logDir,
				logId: logId
			});
		}

		progressToken?.report({
			progress: 75,
			title: `Opening log file ${logId.toString()}`
		});
	}
}