import { Position } from "../../position";
import { describeSObject } from "../soql/utils";

describe('apex intellisense', () => {
    it('should intellisense a static apex field', async () => {
        // Okay now I remmeber what I was doing ...
        const apex = "public class Foo { public void foo() {Schema.SObjectField field = Account.}}";
        const position = new Position(0, 74);

        const testObject = new ApexIntellisense({
            describeSObject
        });

        const results = await testObject.autocompleteSuggestionsAt(apex, position);
    });
});