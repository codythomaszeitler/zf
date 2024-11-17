import { z } from 'zod';
import { genLogExceptionIfOccurs } from './errorUtils';

const orgResultSchema = z.object({
    isDefaultUsername: z.boolean().optional(),
    alias: z.string().optional(),
    username: z.string().optional()
});

const sandboxOrgResultSchema = orgResultSchema.extend({
    connectedStatus: z.string().optional()
});

const scratchOrgResultSchema = orgResultSchema.extend({
    isExpired: z.boolean().optional()
});

const orgListResultSchema = z.object({
    result: z.object({
        nonScratchOrgs: z.array(sandboxOrgResultSchema).optional(),
        scratchOrgs: z.array(scratchOrgResultSchema).optional()
    })
});

export type OrgListResult = z.infer<typeof orgListResultSchema>;
export type OrgResult = z.infer<typeof orgResultSchema>;
export type ScratchOrgResult = z.infer<typeof scratchOrgResultSchema>;
export type SandboxOrgResult = z.infer<typeof sandboxOrgResultSchema>;

export function intoOrgListResult(cliOutputJson: unknown) {
    const func = genLogExceptionIfOccurs((cliInputOutput) => {
        return orgListResultSchema.parse(cliOutputJson);
    });
    return func(cliOutputJson);
}

const orgOpenResultSchema = z.object({
    status: z.number(),
    result: z.object({
        orgId: z.string(),
        url: z.string(),
        username: z.string()
    }),
    warnings: z.array(z.string())
});

export type OrgOpenResult = z.infer<typeof orgOpenResultSchema>;

export function intoOrgOpenResult(cliOutputJson: unknown) {
    const func = genLogExceptionIfOccurs((cliInputOutput) => {
        return orgOpenResultSchema.parse(cliOutputJson);
    });
    return func(cliOutputJson);
}

export interface SfOrgListResult {
    result: {
        nonScratchOrgs: SandboxOrgListResult[];
        scratchOrgs: ScratchOrgListResult[];
    };
}

interface SharedOrgListResult {
    isDefaultUsername: boolean;
}

export interface SandboxOrgListResult extends SharedOrgListResult {
    connectedStatus?: string;
    username?: string;
}

export interface ScratchOrgListResult extends SharedOrgListResult {
    alias?: string;
    isExpired?: boolean;
}
