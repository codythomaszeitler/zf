import { z } from 'zod';
import { Command, CommandParams } from '../command';
import { SalesforceOrg } from '../salesforceOrg';
import { Logger } from '../logger';
import { Uri } from '../integratedDevelopmentEnvironment';

const apexRunSuccessSchema = z.object({
	status: z.literal(0),
	result: z.object({
		logs: z.string().readonly()
	})
});

const apexRunFailedSchema = z.object({
	status: z.literal(1),
	data: z.object({
		compiled: z.boolean(),
		line: z.string(),
		column: z.string(),
		logs: z.string()
	}),
	message: z.string()
});

const apexRunResultSchema = z.discriminatedUnion('status', [
	apexRunSuccessSchema, apexRunFailedSchema
]);

export type ApexRunSuccessfulResult = z.infer<typeof apexRunSuccessSchema>;
export type ApexRunFailedResult = z.infer<typeof apexRunFailedSchema>;
export type ApexRunResult = z.infer<typeof apexRunResultSchema>;

export function intoApexRunResult(cliOutputJson: unknown) {
	try {
		return apexRunResultSchema.parse(cliOutputJson);
	} catch (e: unknown) {
		if (e instanceof Error) {
			Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
			Logger.get().error(e);
		}
		return undefined;
	}
}

export class RunHighlightedAnonApex extends Command {

	private readonly getHighlightedTextPromise: Promise<string>;
	private readonly anonApexOutputDir: Uri;

	public constructor (params: CommandParams & { anonApexOutputDir: Uri }) {
		super(params);
		this.getHighlightedTextPromise = this.getIde().getHighlightedText();
		this.anonApexOutputDir = params.anonApexOutputDir;
	}

	public async execute({ targetOrg }: { targetOrg?: SalesforceOrg }) {
		const result = await this.getIde().withProgress(async (progressToken) => {
			const defaultOrTargetOrg = await this.getTargetOrDefaultOrg(targetOrg);

			const apexCode = await this.getHighlightedTextPromise;
			return await this.getCli().apexRun({
				targetOrg: defaultOrTargetOrg,
				apexCode
			});
		}, {
			title: 'Running Anonymous Apex'
		});

		if (result.status === 0) {
			const selection = await this.getIde().showInformationMessage('Anonymous Apex Ran Successfully', [
				{ label: 'Show' }
			]);

			if (selection === 'Show') {
				const basename = Date.now() + '.txt';
				const uri = Uri.join(this.anonApexOutputDir, basename);

				await this.getIde().writeFile({
					uri, contents: result.result.logs
				});
				await this.getIde().showTextDocument(uri);
			}
		} else if (result.status === 1) {
			if (result.data.compiled) {
				const selection = await this.getIde().showInformationMessage('Anonymous Apex Run Failed', [
					{ label: 'Show' }
				]);

				if (selection === 'Show') {
					const basename = Date.now() + '.txt';
					const uri = Uri.join(this.anonApexOutputDir, basename);

					await this.getIde().writeFile({
						uri, contents: result.data.logs
					});
					await this.getIde().showTextDocument(uri);
				}
			} else {
				this.getIde().showErrorMessage(result.message);
			}
		}
	}
}
