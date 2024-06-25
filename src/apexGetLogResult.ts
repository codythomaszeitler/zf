import { z } from 'zod';
import { Logger } from './logger';

const apexGetLogResultSuccessSchema = z.object({
	status: z.number(),
	result: z.array(z.string())
});

export type ApexGetLogResult = z.infer<typeof apexGetLogResultSuccessSchema>;

export function intoApexGetLogResult(cliOutputJson: unknown) {
	try {
		return apexGetLogResultSuccessSchema.parse(cliOutputJson);
	} catch (e: unknown) {
		if (e instanceof Error) {
			Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
			Logger.get().error(e);
		}
		return undefined;
	}
}