export abstract class SalesforceId extends String {
    protected constructor(rawId: string) {
        super(rawId || '');
    }
}

export class UserId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
}
