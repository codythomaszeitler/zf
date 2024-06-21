import { Executor } from "./executor";
import { IntegratedDevelopmentEnvironment } from "./integratedDevelopmentEnvironment";
import { Logger } from "./logger";
import { SalesforceOrg } from "./salesforceOrg";
import { SfSalesforceCli } from "./sfSalesforceCli";

import { z } from "zod";

const targetOrgKey = "target-org";
const salesforceConfigSchema = z.object({
	[targetOrgKey]: z.string().readonly()
});

export type SalesforceSfConfig = z.infer<typeof salesforceConfigSchema>;

export class QuickDefaultOrgSfSalesforceCli extends SfSalesforceCli {
	private readonly ide: IntegratedDevelopmentEnvironment;
	private cachedDefaultOrg: SalesforceOrg | null = null;

	public constructor (ide: IntegratedDevelopmentEnvironment, executor: Executor, proxy?: {},) {
		super(executor, proxy);
		this.ide = ide;
	}

	public async getDefaultOrg(): Promise<SalesforceOrg | null> {
		try {
			const config = await this.readSfConfig();
			if (!this.cachedDefaultOrg || config[targetOrgKey] !== this.cachedDefaultOrg.getAlias()) {
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

	private async readSfConfig() {
		const uri = getDefaultSfConfigUri(this.ide);
		const contents = await this.ide.readFile({ uri });
		const config = JSON.parse(contents);
		return salesforceConfigSchema.parse(config);
	}
}

export function getDefaultSfConfigUri(ide: IntegratedDevelopmentEnvironment) {
	return ide.generateUri('.sf', 'config.json');
}