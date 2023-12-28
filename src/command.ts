import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";

export abstract class Command {

	private readonly ide: IntegratedDevelopmentEnvironment;
	private readonly cli: SalesforceCli;

	public constructor(params: CommandParams) {
		this.ide = params.ide;
		this.cli = params.cli;
	}

	protected getIde() {
		return this.ide;
	}

	protected getCli() {
		return this.cli;
	}
}

export interface CommandParams {
	ide: IntegratedDevelopmentEnvironment,
	cli: SalesforceCli
}