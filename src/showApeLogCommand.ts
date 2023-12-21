import { Command } from "./command";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { SalesforceCli } from "./salesforceCli";

export class ShowApexLogCommand extends Command {
	public constructor(params: {
		cli: SalesforceCli,
		ide: IntegratedDevelopmentEnvironment
	}) {
		super(params);
	}
}