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

export function genRandomId(type: string) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 15) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return SalesforceId.get(result);
}