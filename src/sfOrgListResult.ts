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
