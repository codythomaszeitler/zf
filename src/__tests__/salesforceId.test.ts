import { SalesforceId } from "../salesforceId";
import { describe, expect, it } from '@jest/globals';

describe('sf salesforce id', () => {

    it('should convert null to empty string', () => {
        // @ts-ignore
        const testObject = new TestSalesforceId(null);
        expect(testObject.toString()).toBe('');
    });

    it('should convert undefined to empty string', () => {
        // @ts-ignore
        const testObject = new TestSalesforceId(null);
        expect(testObject.toString()).toBe('');
    });
});

class TestSalesforceId extends SalesforceId {
    public constructor(rawId: string) {
        super(rawId);
    }
}