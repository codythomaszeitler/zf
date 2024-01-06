import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";
import { Uri } from "./uri";

export async function getRecentApexLogs(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli,
	logDir: Uri,
	numLogs: number
}) {
	await params.cli.apexGetLog({
		targetOrg: params.targetOrg,
		numLogs: params.numLogs,
		logDir: params.logDir
	});
}