import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { ProgressToken } from "./progressToken";
import { SalesforceCli } from "./salesforceCli";
import { SalesforceOrg } from "./salesforceOrg";

export abstract class Command {

	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly cli: SalesforceCli;

	private readonly progressToken? : ProgressToken;

	public constructor(params: CommandParams) {
		this.ide = params.ide;
		this.cli = params.cli;
		this.progressToken = params.progressToken;
	}

	protected getIde() {
		return this.ide;
	}

	protected getCli() {
		return this.cli;
	}

	protected getProgressToken() {
		return this.progressToken;
	}

	protected async getTargetOrDefaultOrg(targetOrg?: SalesforceOrg): Promise<SalesforceOrg | undefined> {
		if (targetOrg) {
			return targetOrg;
		} else {
			return await this.cli.getDefaultOrg() ?? undefined;
		}
	}
}

export interface CommandParams {
	ide: IntegratedDevelopmentEnvironment,
	cli: SalesforceCli
	progressToken? : ProgressToken;
}