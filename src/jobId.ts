import { SalesforceId } from './salesforceId';

export class JobId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
} 