import { Command, CommandParams } from "./command";
import { addHours } from "./dateUtils";
import { DebugLevel, DebugLevelBuilder } from "./debugLevelSObject";
import { DebugLogLevelSelector } from "./debugLogLevelSelector";
import { getCurrentUser } from "./getCurrentUser";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceLogLevel } from "./salesforceLogLevel";
import { SalesforceOrg } from "./salesforceOrg";
import { LogType, TraceFlagSObjectBuilder } from "./traceFlagSObject";

export async function generateDebugTraceFlag(params: {
	targetOrg: SalesforceOrg,
	salesforceCli: SalesforceCli,
	debugLogLevelApiName: string,
	ide: IntegratedDevelopmentEnvironment
}) {
	const debugTraceFlagGenerateCommand = new DebugTraceFlagGenerateCommand({
		ide: params.ide,
		cli: params.salesforceCli,
		getOrCreateCommand: new DebugLogLevelGetOrCreateCommand({
			ide: params.ide,
			cli: params.salesforceCli
		})
	});

	return debugTraceFlagGenerateCommand.execute({
		targetOrg: params.targetOrg,
		developerName: params.debugLogLevelApiName
	});
}

export async function generateDebugLogLevelOrGetExisting(params: {
	targetOrg: SalesforceOrg,
	cli: SalesforceCli,
	debugLogLevelApiName: string,
	ide: IntegratedDevelopmentEnvironment
}): Promise<DebugLevel> {
	const getOrCreate = new DebugLogLevelGetOrCreateCommand({
		cli: params.cli,
		ide: params.ide
	});

	return getOrCreate.execute({
		targetOrg: params.targetOrg,
		developerName: params.debugLogLevelApiName
	});
}

export class DebugTraceFlagGenerateCommand extends Command {

	private readonly getOrCreateCommand: DebugLogLevelGetOrCreateCommand;

	public constructor(params: {
		ide: IntegratedDevelopmentEnvironment,
		cli: SalesforceCli,
		getOrCreateCommand: DebugLogLevelGetOrCreateCommand
	}) {
		super(params);
		this.getOrCreateCommand = params.getOrCreateCommand;
	}

	public async execute(params: {
		targetOrg: SalesforceOrg,
		developerName: string
	}) {
		const currentUser = await getCurrentUser({
			targetOrg: params.targetOrg,
			cli: this.getCli()
		});
		if (!currentUser) {
			throw new Error(`Could not find user for org ${params.targetOrg.getAlias()}`);
		}

		const debugLogLevel = await this.getOrCreateCommand.execute({
			targetOrg: params.targetOrg,
			developerName: params.developerName
		});

		const traceFlagSObjectBuilder = new TraceFlagSObjectBuilder();
		traceFlagSObjectBuilder.withDebugLevelId(debugLogLevel.id);
		traceFlagSObjectBuilder.withLogType(LogType.developerLog);
		traceFlagSObjectBuilder.withTracedEntityId(currentUser?.userId);

		const expirationDate = addHours(new Date(Date.now()), 23);
		traceFlagSObjectBuilder.withExpirationDate(expirationDate);

		await this.getCli().dataCreateRecord({
			targetOrg: params.targetOrg,
			sObject: traceFlagSObjectBuilder.build()
		});
	}
}

export class DebugLogLevelGetOrCreateCommand extends Command {

	public constructor(params: CommandParams) {
		super(params);
	}

	public async execute(params: {
		targetOrg: SalesforceOrg,
		developerName: string
	}): Promise<DebugLevel> {
		const debugLevel = await this.queryByDeveloperName({
			targetOrg: params.targetOrg,
			developerName: params.developerName
		});

		if (debugLevel) {
			return debugLevel;
		}

		const debugLogLevelBuilder = new DebugLevelBuilder({
			developerName: params.developerName
		});
		debugLogLevelBuilder.withApexCode(SalesforceLogLevel.debug);

		const newDebugLogLevel = debugLogLevelBuilder.build();
		await this.getCli().dataCreateRecord({
			targetOrg: params.targetOrg,
			sObject: newDebugLogLevel
		});

		return newDebugLogLevel;
	}

	protected async queryByDeveloperName(params: {
		targetOrg: SalesforceOrg,
		developerName: string
	}) {
		const debugLogLevelSelector = new DebugLogLevelSelector({
			cli: this.getCli()
		});

		const debugLevel = await debugLogLevelSelector.queryByDeveloperName({
			targetOrg: params.targetOrg,
			developerName: params.developerName
		});

		if (debugLevel) {
			return debugLevel;
		}
	}
}