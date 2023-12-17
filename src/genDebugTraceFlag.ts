import { addHours } from "./dateUtils";
import { DebugLevel, DebugLevelBuilder } from "./debugLevelSObject";
import { DebugLogLevelSelector } from "./debugLogLevelSelector";
import { getCurrentUser } from "./getCurrentUser";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceLogLevel } from "./salesforceLogLevel";
import { SalesforceOrg } from "./salesforceOrg";
import { LogType, TraceFlagSObjectBuilder } from "./traceFlagSObject";

export async function generateDebugTraceFlag(params: {
	targetOrg: SalesforceOrg,
	salesforceCli: SalesforceCli,
	debugLogLevelApiName: string
}) {
	const currentUser = await getCurrentUser({
		targetOrg: params.targetOrg,
		cli: params.salesforceCli
	});
	if (!currentUser) {
		throw new Error(`Could not find user for org ${params.targetOrg.getAlias()}`);
	}

	const debugLogLevel = await generateDebugLogLevelOrGetExisting({
		targetOrg: params.targetOrg,
		cli: params.salesforceCli,
		debugLogLevelApiName: params.debugLogLevelApiName
	});

	const traceFlagSObjectBuilder = new TraceFlagSObjectBuilder();
	traceFlagSObjectBuilder.withDebugLevelId(debugLogLevel.id);
	traceFlagSObjectBuilder.withLogType(LogType.developerLog);
	traceFlagSObjectBuilder.withTracedEntityId(currentUser?.userId);

	const expirationDate = addHours(new Date(Date.now()), 23);
	traceFlagSObjectBuilder.withExpirationDate(expirationDate);

	await params.salesforceCli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: traceFlagSObjectBuilder.build()
	});
}

export async function generateDebugLogLevelOrGetExisting(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli,
	debugLogLevelApiName: string
}): Promise<DebugLevel> {
	const debugLogLevelSelector = new DebugLogLevelSelector({
		cli: params.cli
	});

	const debugLevel = await debugLogLevelSelector.queryByDeveloperName({
		targetOrg: params.targetOrg,
		developerName: params.debugLogLevelApiName
	});

	if (debugLevel) {
		return debugLevel;
	}

	const debugLogLevelBuilder = new DebugLevelBuilder({
		developerName: params.debugLogLevelApiName
	});
	debugLogLevelBuilder.withApexCode(SalesforceLogLevel.debug);

	const newDebugLogLevel = debugLogLevelBuilder.build();
	await params.cli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: newDebugLogLevel
	});

	return newDebugLogLevel;
}