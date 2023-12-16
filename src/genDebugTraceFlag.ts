import { DebugLevel, DebugLevelBuilder } from "./debugLevelSObject";
import { getCurrentUser } from "./getCurrentUser";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceLogLevel } from "./salesforceLogLevel";
import { SalesforceOrg } from "./salesforceOrg";
import { LogType, TraceFlagSObjectBuilder } from "./traceFlagSObject";

export async function generateDebugTraceFlag(params: {
	targetOrg: SalesforceOrg,
	salesforceCli: SalesforceCli
}) {
	const addHours = function (date: Date, h: number) {
		date.setTime(date.getTime() + (h * 60 * 60 * 1000));
		return date;
	};

	const currentUser = await getCurrentUser({
		targetOrg: params.targetOrg,
		cli: params.salesforceCli
	});
	if (!currentUser) {
		throw new Error(`Could not find user for org ${params.targetOrg.getAlias()}`);
	}

	const debugLogLevelSObject = await generateDebugLogLevelOrGetExisting({
		targetOrg: params.targetOrg,
		cli: params.salesforceCli,
		debugLogLevelApiName: 'ZFDebugTraceFlag'
	});

	const traceFlagSObjectBuilder = new TraceFlagSObjectBuilder();
	traceFlagSObjectBuilder.withDebugLevelId(debugLogLevelSObject.id);
	traceFlagSObjectBuilder.withLogType(LogType.developerLog);
	traceFlagSObjectBuilder.withTracedEntityId(currentUser?.userId);

	const expirationDate = addHours(new Date(Date.now()), 23);
	traceFlagSObjectBuilder.withExpirationDate(expirationDate);

	const traceFlagCreationResult = await params.salesforceCli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: traceFlagSObjectBuilder.build()
	});
}

export async function generateDebugLogLevelOrGetExisting(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli,
	debugLogLevelApiName: string
}): Promise<DebugLevel> {
	const debugLogLevelBuilder = new DebugLevelBuilder({
		developerName: params.debugLogLevelApiName
	});
	debugLogLevelBuilder.withApexCode(SalesforceLogLevel.debug);

	const debugLogLevelSObject = debugLogLevelBuilder.build();
	await params.cli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: debugLogLevelSObject
	});

	return debugLogLevelSObject;
}