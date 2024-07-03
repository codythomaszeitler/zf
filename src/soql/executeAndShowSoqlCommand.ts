import { Command } from "../command";
import { Uri, ViewColumn } from "../integratedDevelopmentEnvironment";
import { SalesforceOrg } from "../salesforceOrg";
import { SoqlParser } from "./parser";

export class ExecuteAndShowSoqlCommand extends Command {
	public async execute({ targetOrg, outputDir }: { targetOrg?: SalesforceOrg; outputDir: Uri }) {
		const isValidSoql = (query: string) => {
			try {
				const parser = new SoqlParser();
				parser.parse(query);
				return true;
			} catch (e) {
				return false;
			}
		};

		const fields = (query: string) => {
			const parser = new SoqlParser();
			const { fields } = parser.parse(query);
			return fields.join(', ');
		};

		const targetOrDefaultOrg = await super.getTargetOrDefaultOrg(targetOrg);

		const active = await this.getIde().getActiveTextEditor();
		if (!active) {
			this.getIde().showErrorMessage('There was no active editor.');
			return;
		}

		const query = await this.getIde().readFile({
			uri: active.uri
		});

		if (!isValidSoql(query)) {
			this.getIde().showErrorMessage(`[${query}] was not valid SOQL.`);
			return;
		}

		try {
			const results = await this.getCli().dataQuery({
				query,
				targetOrg: targetOrDefaultOrg,
				useToolingApi: false
			});

			const intoString = () => {
				const values = results.getSObjects().map(sObject => {
					return Object.keys(sObject).map(key => {
						if (key === 'attributes' || key === 'type') {
							return undefined;
						}

						if (typeof sObject[key] === 'object') {
							return JSON.stringify(sObject[key]);
						} else {
							return sObject[key];
						}
					}
					).filter(value => value).join(', ');
				}).join('\n');
				return `${fields(query)}\n${values}`;
			};

			await this.getIde().showTempFileWith(outputDir, intoString(), {
				viewColumn: ViewColumn.besides
			});
			this.getIde().showInformationMessage(`Returned ${results.getSObjects().length} records.`);
		} catch (e) {
			if (e instanceof Error) {
				this.getIde().showErrorMessage(e.message);
			}
		}
	}
}