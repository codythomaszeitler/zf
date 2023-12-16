import { DebugLevelBuilder } from "./debugLevelSObject";
import { getCurrentUser } from "./getCurrentUser";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceLogLevel } from "./salesforceLogLevel";
import { SalesforceOrg } from "./salesforceOrg";
import { LogType, TraceFlagSObjectBuilder } from "./traceFlagSObject";

export async function generateDebugTraceFlag(params: {
	targetOrg: SalesforceOrg,
	salesforceCli: SalesforceCli
}) {
	const addHours = function (date : Date, h : number) {
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

	const debugLogLevelBuilder = new DebugLevelBuilder({
		developerName: 'ZFDebugTraceFlag'
	});
	debugLogLevelBuilder.withApexCode(SalesforceLogLevel.debug);

	const debugLogLevelSObject = debugLogLevelBuilder.build();

	const debugLogLevelCreationResult = await params.salesforceCli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: debugLogLevelSObject
	});

	const debugLogLevelId = debugLogLevelCreationResult.getRecordId();

	const traceFlagSObjectBuilder = new TraceFlagSObjectBuilder();
	traceFlagSObjectBuilder.withDebugLevelId(debugLogLevelId);
	traceFlagSObjectBuilder.withLogType(LogType.developerLog);
	traceFlagSObjectBuilder.withTracedEntityId(currentUser?.userId);

	const expirationDate = addHours(new Date(Date.now()), 23);
	traceFlagSObjectBuilder.withExpirationDate(expirationDate);

	const traceFlagCreationResult = await params.salesforceCli.dataCreateRecord({
		targetOrg: params.targetOrg,
		sObject: traceFlagSObjectBuilder.build()
	});
}
