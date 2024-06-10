import { number, z } from "zod";
import { Logger } from "../logger";

const projectDeployFileBaseSchema = z.object({
	filePath: z.string(),
	type: z.string()
});

const projectDeployFileFailure = projectDeployFileBaseSchema.extend({
	state: z.enum(["Failed"]),
	fullName: z.string(),
	lineNumber: z.number(),
	columnNumber: z.number(),
	error: z.string()
});

const projectDeployFileSuccess = projectDeployFileBaseSchema.extend({
	state: z.enum(["Changed", "Unchanged", "Created"])
});

const projectDeployFileSchema = z.discriminatedUnion('state', [
	projectDeployFileFailure, projectDeployFileSuccess
]);

const baseProjectDeployResultSchema = z.object({
	id: z.string()
});

const queuedProjectDeployResultSchema = baseProjectDeployResultSchema.extend({
	status: z.enum(["Queued"])
});

const synchronousProjectDeployResultSchema = baseProjectDeployResultSchema.extend({
	status: z.enum(["Succeeded", "Failed", "InProgress"]),
	files: z.array(projectDeployFileSchema),
	numberComponentErrors: z.number(),
	numberComponentsDeployed: z.number(),
	numberComponentsTotal: z.number()
});

const projectDeployResultSchema =
	z.object({
		result: z.discriminatedUnion('status', [
			queuedProjectDeployResultSchema, synchronousProjectDeployResultSchema
		])
	});

export function intoProjectDeployResult(cliOutputJson: unknown) {
	try {
		return projectDeployResultSchema.parse(cliOutputJson);
	} catch (e: unknown) {
		if (e instanceof Error) {
			Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
			Logger.get().error(e);
		}
		return undefined;
	}
}

export type ProjectDeployResult = z.infer<typeof projectDeployResultSchema>;
export type ProjectDeployFile = z.infer<typeof projectDeployFileSchema>;
export type ProjectDeployFileFailure = z.infer<typeof projectDeployFileFailure>;

const projectDeployPreviewResultSchema = z.object({
	status: z.number(),
	result: z.object({
		toDeploy: z.array(z.object({
			path : z.string()
		})),
		toRetrieve: z.array(z.object({

		})),
		toDelete: z.array(z.object({

		}))
	})
});

export type ProjectDeployPreviewResult = z.infer<typeof projectDeployPreviewResultSchema>;
export function intoProjectDeployPreviewResult(cliOutputJson: unknown) {
	try {
		return projectDeployPreviewResultSchema.parse(cliOutputJson);
	} catch (e: unknown) {
		if (e instanceof Error) {
			Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
			Logger.get().error(e);
		}
		return undefined;
	}
}


export type ProjectDeployCancelResult = z.infer<typeof projectDeployPreviewResultSchema>;
export function intoProjectDeployCancelResult(cliOutputJson: unknown) {
	try {
		return projectDeployPreviewResultSchema.parse(cliOutputJson);
	} catch (e: unknown) {
		if (e instanceof Error) {
			Logger.get().warn(`Could not parse: ${JSON.stringify(cliOutputJson)}`);
			Logger.get().error(e);
		}
		return undefined;
	}
}