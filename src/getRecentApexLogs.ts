import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";

export async function getRecentApexLogs(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli,
	logDir: string,
	numLogs : number
}) {
	await params.cli.apexGetLog({
		targetOrg : params.targetOrg,
		numLogs : params.numLogs,
		logDir : params.logDir
	});
}