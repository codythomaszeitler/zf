import { Position } from "../../position";
import { SalesforceCli } from "../../salesforceCli";
import { GetSoqlUnderCursorCommand } from "../../soql/getSoqlUnderCursor";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";

describe('get soql under cursor', () => {
    let cli: SalesforceCli;
    let ide: MockIDE;

    beforeEach(() => {
        cli = new MockSalesforceCli();
        ide = new MockIDE();
    });

    it('should get the soql underneath the current cursor position', async () => {
        const position = new Position(3, 49);
        const apexClass =
            `
    public class FooBar {
        public void foo() {
            List<Account> accounts = [SELECT Id,  FROM Account];
        }
    }        
`;
        const testObject = new GetSoqlUnderCursorCommand({
            ide, cli
        });

        const result = await testObject.execute({
            apexClass, position
        });

        if (result.isWithinSoql) {
            const { soql, embeddedCursorPosition } = result;
            expect(soql).toBe('SELECT Id,  FROM Account');
            expect(embeddedCursorPosition.getColumnNumber()).toBe(11);
            expect(embeddedCursorPosition.getLineNumber()).toBe(0);
        }
    });

    it('should get the soql underneath the current cursor position (against contact sobject)', async () => {
        const position = new Position(3, 49);
        const apexClass =
            `
    public class FooBar {
        public void foo() {
            List<Contact> contacts = [SELECT Id,  FROM Contact];
        }
    }        
`;
        const testObject = new GetSoqlUnderCursorCommand({
            ide, cli
        });

        const result = await testObject.execute({
            apexClass, position
        });

        if (result.isWithinSoql) {
            const { soql, embeddedCursorPosition } = result;
            expect(soql).toBe('SELECT Id,  FROM Contact');
            expect(embeddedCursorPosition.getColumnNumber()).toBe(11);
            expect(embeddedCursorPosition.getLineNumber()).toBe(0);
        }
    });

    it('should get nothing if there is no soql underneath the cursor', async () => {
        const position = new Position(4, 36);
        const apexClass =
            `
    public class FooBar {
        public void foo() {
            List<Account> accounts = [SELECT Id,  FROM Account];
        }
    }        
`;
        const testObject = new GetSoqlUnderCursorCommand({
            ide, cli
        });

        const result = await testObject.execute({
            apexClass, position
        });
        expect(result.isWithinSoql).toBe(false);
    });
});