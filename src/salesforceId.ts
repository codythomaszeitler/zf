
const USER_ID_PREFIX = '005';
const DEBUG_LEVEL_ID_PREFIX = '005';

export abstract class SalesforceId extends String {
    protected constructor(rawId: string) {
        super(rawId || '');
    }

    private static readonly cache: Map<string, SalesforceId> = new Map();

    public static get(rawId: string): SalesforceId {
        const getSalesforceIdType = () => {
            if (rawId.startsWith(USER_ID_PREFIX)) {
                return UserId;
            }
            if (rawId.startsWith(DEBUG_LEVEL_ID_PREFIX)) {
                return DebugLogLevelId;
            }

            return GenericSalesforceId;
        };

        const cached = this.cache.get(rawId);
        if (cached) {
            return cached;
        }

        const salesforceIdType = getSalesforceIdType();
        const salesforceId = new salesforceIdType(rawId);
        this.cache.set(rawId, salesforceId);
        return salesforceId;
    }
}

class GenericSalesforceId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
}

class UserId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
}

class DebugLogLevelId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
}


