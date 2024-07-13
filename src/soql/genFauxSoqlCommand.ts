import { Command } from "../command";
import { Uri } from "../integratedDevelopmentEnvironment";
import { Logger } from "../logger";
import { SalesforceOrg } from "../salesforceOrg";
import { SObjectDescribeResult } from "../sObjectDescribeResult";


export function genSoqlMetadataDirs(sfdxToolsDir: Uri) {
	const soqlMetadataCustomDir = Uri.join(sfdxToolsDir, 'soqlMetadata', 'customObjects');
	const soqlMetadataStandardDir = Uri.join(sfdxToolsDir, 'soqlMetadata', 'standardObjects');

	return {
		soqlMetadataCustomDir,
		soqlMetadataStandardDir
	};
}

export class GenerateFauxSoqlCommand extends Command {

	public async execute({ targetOrg, sfdxToolsDir }: { targetOrg?: SalesforceOrg, sfdxToolsDir: Uri }) {

		const { soqlMetadataCustomDir, soqlMetadataStandardDir } = genSoqlMetadataDirs(sfdxToolsDir);

		const getUriFor = (sobjectDescribeResult: SObjectDescribeResult) => {
			if (sobjectDescribeResult.result.custom) {
				return Uri.join(soqlMetadataCustomDir, `${sobjectDescribeResult.result.name}.json`);
			} else {
				return Uri.join(soqlMetadataStandardDir, `${sobjectDescribeResult.result.name}.json`);
			}
		};

		const reverse = (elements: string[]) => {
			elements.reverse();
			return elements;
		};

		await this.getIde().withProgress(async (progressToken) => {
			const targetOrDefaultOrg = await this.getTargetOrDefaultOrg(targetOrg);

			const sObjectListResult = await this.getCli().sobjectList({
				targetOrg: targetOrDefaultOrg
			});

			if (!sObjectListResult) {
				const warningMessage = `Could not parse sobject list against ${targetOrDefaultOrg.getAlias()}.`;
				Logger.get().warn(warningMessage);
				this.getIde().showWarningMessage(warningMessage);
				return;
			}

			let completed = 0;
			const total = sObjectListResult.result.length;

			const sObjectNames = reverse(sObjectListResult.result);

			const queryDescribeAndWriteFauxSoql = async () => {
				if (progressToken.isCancellationRequested) {
					return Promise.resolve();
				}

				if (sObjectNames.length === 0) {
					return Promise.resolve();
				}

				const sObjectApiName = sObjectNames.pop();
				progressToken.report({
					progress: (completed / total) * 100,
					title: sObjectApiName
				});

				if (!sObjectApiName) {
					return Promise.resolve();
				}

				try {
					const sObjectDescribeResult = await this.getCli().sobjectDescribe({
						targetOrg: targetOrDefaultOrg, sObjectApiName
					});

					if (!sObjectDescribeResult) {
						Logger.get().warn(`Could not parse soql for ${sObjectApiName}.`);
						return queryDescribeAndWriteFauxSoql();
					}

					const result = sObjectDescribeResult.result;
					const uri = getUriFor(sObjectDescribeResult);

					await this.getIde().writeFile({
						uri,
						contents: JSON.stringify(result, null, 2)
					});

					completed++;
					return queryDescribeAndWriteFauxSoql();
				} catch (e) {
					Logger.get().warn(e.message);
					this.getIde().showWarningMessage(e.message);
					return queryDescribeAndWriteFauxSoql();
				}
			};

			const promises = [];
			const numGenerators = 10;
			for (let i = 0; i < numGenerators; i++) {
				promises.push(queryDescribeAndWriteFauxSoql());
			}

			await Promise.all(promises);
		}, {
			title: 'Generating SOQL Autocomplete'
		});
	}
}


// What are we trying to accomplish here?