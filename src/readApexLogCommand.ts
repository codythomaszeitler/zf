import { ApexTestGetResult } from "./apexTestRunResult";
import { Command } from "./command";
import { NULL_SF_ID, SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";
import { getLogFileUri } from "./showApexLogCommand";
import { Uri } from "./uri";

export class ReadApexLogCommand extends Command {
	public async execute({
		logId,
		logDir,
		targetOrg
	}: {
		logId: SalesforceId,
		logDir: Uri,
		targetOrg: SalesforceOrg
	}) {
		await this.getCli().apexGetLog({
			targetOrg,
			logDir,
			logId,
			numLogs: undefined
		});

		const logFileUri = getLogFileUri({
			targetOrg,
			logDir,
			logId
		});

		const contents = await this.getIde().readFile({
			uri: logFileUri
		});
		return contents;
	}
}

export class ReadApexTestLogCommand extends Command {
	public async execute({
		logDir,
		targetOrg,
		apexTestRunResultId
	}: {
		logDir: Uri,
		targetOrg: SalesforceOrg,
		apexTestRunResultId: SalesforceId
	}) {
		const records = await this.getCli().dataQuery({
			targetOrg,
			query: {
				from: "ApexTestResult",
				fields: ["ApexLogId"],
				where: `ApexTestRunResultId IN (SELECT Id FROM ApexTestRunResult WHERE AsyncApexJobId = '${apexTestRunResultId}')`
			}
		});

		const apexTestLogId = SalesforceId.get(records.getSObjects()[0]["ApexLogId"]);
		if (apexTestLogId === NULL_SF_ID) {
			return NO_APEX_LOG_FOUND_MESSAGE;
		}

		const readApexLogCommand = new ReadApexLogCommand({
			ide: this.getIde(),
			cli: this.getCli()
		});

		const contents = await readApexLogCommand.execute({
			logDir, logId: apexTestLogId, targetOrg
		});
		return contents.replace(/\n/g, '\r\n');
	}
}

export const NO_APEX_LOG_FOUND_MESSAGE  = 'No Apex Log Found, please set a debug trace flag to see log output.';
