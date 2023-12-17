import { DEBUG_LEVEL_SOBJECT_NAME, DebugLevel, DebugLevelBuilder } from "./debugLevelSObject";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceId } from "./salesforceId";
import { SalesforceOrg } from "./salesforceOrg";

export class DebugLogLevelSelector {

	private readonly cli: SalesforceCli;

	public constructor(params: {
		cli: SalesforceCli
	}) {
		this.cli = params.cli;
	}

	public async queryByDeveloperName(params: {
		targetOrg: SalesforceOrg,
		developerName: string
	}): Promise<DebugLevel | undefined> {
		const dataQueryResult = await this.cli.dataQuery({
			targetOrg: params.targetOrg, query: {
				fields: ["DeveloperName"],
				from: DEBUG_LEVEL_SOBJECT_NAME,
				where: `DeveloperName = '${params.developerName}'`
			}
		});

		const sObjects = dataQueryResult.getSObjects();
		if (sObjects.length > 1) {
			throw new Error(`Found multiple debug levels matching developer name ${params.developerName}.`);
		}

		if (sObjects.length === 0) {
			return undefined;
		}

		const sObject = sObjects[0];
		const builder = new DebugLevelBuilder({
			developerName: sObject["DeveloperName"]
		});

		const debugLevel = builder.build();
		debugLevel.id = SalesforceId.get(sObject["Id"]);
		return debugLevel;
	}
}