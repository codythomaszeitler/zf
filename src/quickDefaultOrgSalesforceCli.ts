import { Executor } from "./executor";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { Logger } from "./logger";
import { SalesforceOrg } from "./salesforceOrg";
import { SfSalesforceCli } from "./sfSalesforceCli";

export class QuickDefaultOrgSfSalesforceCli extends SfSalesforceCli {
	private readonly ide: IntegratedDevelopmentEnvironment;
	private cachedDefaultOrg: SalesforceOrg | null = null;

	public constructor (ide: IntegratedDevelopmentEnvironment, executor: Executor, proxy?: {},) {
		super(executor, proxy);
		this.ide = ide;
	}

	public async getDefaultOrg(): Promise<SalesforceOrg | null> {
		try {
			const uri = this.ide.generateUri('.sf', 'config.json');
			const contents = await this.ide.readFile({ uri });

			const config = JSON.parse(contents);

			if (!this.cachedDefaultOrg || config['target-org'] !== this.cachedDefaultOrg.getAlias()) {
				this.cachedDefaultOrg = await super.getDefaultOrg();
			}
			return this.cachedDefaultOrg;
		} catch (e: unknown) {
			if (e instanceof Error) {
				Logger.get().error(e);
			}
			return super.getDefaultOrg();
		}
	}
}