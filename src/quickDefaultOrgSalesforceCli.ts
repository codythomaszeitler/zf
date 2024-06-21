import { Executor } from "./executor";
import { IntegratedDevelopmentEnvironment, Uri } from "./integratedDevelopmentEnvironment";
import { Logger } from "./logger";
import { SalesforceOrg } from "./salesforceOrg";
import { SfSalesforceCli } from "./sfSalesforceCli";
import { homedir } from 'os';

import { z } from "zod";

const targetOrgKey = "target-org";
const salesforceConfigSchema = z.object({
	[targetOrgKey]: z.string().readonly()
});


export type SalesforceSfConfig = z.infer<typeof salesforceConfigSchema>;

const salesforceAliasSchema = z.object({
	orgs: z.record(z.string().readonly(), z.string().readonly())
});
export type SalesforceSfAlias = z.infer<typeof salesforceAliasSchema>;

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
			if (!this.cachedDefaultOrg) {
				this.cachedDefaultOrg = await super.getDefaultOrg();
			} else {
				const alias = await this.getAliasFor(this.cachedDefaultOrg);
				if (config[targetOrgKey] !== alias) {
					this.cachedDefaultOrg = await super.getDefaultOrg();
				}
			}
			return this.cachedDefaultOrg;
		} catch (e: unknown) {
			if (e instanceof Error) {
				Logger.get().error(e);
			}
			return super.getDefaultOrg();
		}
	}

	private async getAliasFor(targetOrg: SalesforceOrg) {
		if (targetOrg.getIsScratchOrg()) {
			return targetOrg.getAlias();
		}

		const alias = await this.readAliasFile();
		if (alias.orgs) {
			let found = undefined;
			Object.entries(alias.orgs).forEach(([alias, username]) => {
				if (username === targetOrg.getAlias()) {
					found = alias;
				}
			});
			return found;
		} else {
			return undefined;
		}
	}

	private async readAliasFile(): Promise<SalesforceSfAlias> {
		try {
			const uri = getDefaultSfAliasUri();
			const contents = await this.ide.readFile({ uri });
			const alias = JSON.parse(contents);
			return salesforceAliasSchema.parse(alias);
		} catch (e) {
			if (e instanceof Error) {
				Logger.get().error(e);
			}
			return {};
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

export function getDefaultSfAliasUri() {
	const homedirUri = Uri.from({
		scheme: 'file',
		fileSystemPath: homedir()
	});
	return Uri.join(homedirUri, '.sfdx', 'alias.json');
}