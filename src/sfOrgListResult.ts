export interface SfOrgListResult {
    result: {
        nonScratchOrgs: SandboxOrgListResult[];
        scratchOrgs: ScratchOrgListResult[];
    };
}

export interface SandboxOrgListResult {
    connectedStatus?: string;
    username?: string;
}

export interface ScratchOrgListResult {
    alias?: string;
    isExpired?: boolean;
}
