import { log } from "console";
import { ApexLog } from "./apexLog";
import { Command } from "./command";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";

export class ApexLogDirectoryReadCommand extends Command {
	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}

	public async execute(params: {
		logDir: string
	}) {
		const targetOrg = await this.getCli().getDefaultOrg();
		if (!targetOrg) {
			this.getIde().showWarningMessage('Cannot read log files default org set.');
			return [];
		}

		const cliLogs = await this.getCli().apexListLog({
			targetOrg
		});

		const getCliLog = (salesforceId: SalesforceId) => {
			return cliLogs.getLogs().find((log) => log.getId() === salesforceId);
		};

		const uris = await this.getIde().findFiles(`**/${params.logDir}/*`, this.getIde().getCurrentDir());
		const promises = uris.map(uri => {
			const basename = uri.getBaseName();
			const id = basename.replace('.log', '');
			const salesforceId = SalesforceId.get(id);

			const cliLog = getCliLog(salesforceId);
			if (cliLog) {
				const logName = `[${cliLog.getStartTime()}]-[${cliLog.getId()}]-[${cliLog.getStatus()}] LogLength [${cliLog.getLogLength()}] Duration [${cliLog.getDuration()}] Operation [${cliLog.getOperation()}] Application [${cliLog.getApplication()}]`;
				return {
					uri,
					name: logName
				};
			} else {
				return {
					uri,
					name: uri.getFileSystemPath()
				};
			}
		});

		return Promise.all(promises);;
	}
}

export interface InFileApexLog {
	uri: Uri;
	name: string;
}