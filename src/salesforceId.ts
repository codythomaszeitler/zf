export abstract class SalesforceId extends String {
    protected constructor(rawId: string) {
        super(rawId || '');
    }
}
