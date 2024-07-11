import { Command } from "../command";
import { Uri } from "../integratedDevelopmentEnvironment";
import { Logger } from "../logger";
import { SalesforceOrg } from "../salesforceOrg";

export class GenerateFauxSoqlCommand extends Command {

	public async execute({ targetOrg, destDir }: { targetOrg?: SalesforceOrg, destDir: Uri }) {

		await this.getIde().withProgress(async (progressToken) => {
			const targetOrDefaultOrg = await this.getTargetOrDefaultOrg(targetOrg);

			const sObjectListResult = await this.getCli().sobjectList({
				targetOrg: targetOrDefaultOrg
			});
			let completed = 0;
			const total = sObjectListResult.result.length;

			const sObjectNames = sObjectListResult.result;

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

					const result = sObjectDescribeResult.result;
					const uri = Uri.join(destDir, `${sObjectApiName}.json`);

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