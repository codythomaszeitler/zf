import { Command } from "../command";
import { Uri, ViewColumn } from "../integratedDevelopmentEnvironment";
import { SalesforceOrg } from "../salesforceOrg";
import { SoqlParser } from "./parser";

export class ExecuteAndShowSoqlCommand extends Command {
	public async execute({ targetOrg, outputDir }: { targetOrg?: SalesforceOrg; outputDir: Uri; }) {
		const isValidSoql = (query: string) => {
			try {
				const parser = new SoqlParser();
				parser.parse(query);
				return true;
			} catch (e) {
				return false;
			}
		};

		const targetOrDefaultOrg = await super.getTargetOrDefaultOrg(targetOrg);

		const active = await this.getIde().getActiveTextEditor();
		if (!active) {
			this.getIde().showErrorMessage('There was no active editor.');
			return;
		}

		const query = active.contents;

		if (!isValidSoql(query)) {
			this.getIde().showErrorMessage(`[${query}] was not valid SOQL.`);
			return;
		}

		try {
			const results = await this.getCli().dataQuery({
				query,
				targetOrg: targetOrDefaultOrg,
				useToolingApi: false,
				resultFormat: 'csv'
			});
			if (typeof results === 'string') {
				const getNumLines = () => {
					const matches = results.split('\n');
					return matches.length - 2;
				};

				const uri = Uri.from({
					scheme: 'zeitlerforce',
					fileSystemPath: 'zoql-results.csv'
				});

				await this.getIde().writeFile({ contents: results, uri });
				await this.getIde().showTextDocument(uri);
				await this.getIde().deleteTextDocument(uri);

				this.getIde().showInformationMessage(`Returned ${getNumLines()} records.`);
			}
		} catch (e) {
			if (e instanceof Error) {
				this.getIde().showErrorMessage(e.message);
			}
		}
	}
}