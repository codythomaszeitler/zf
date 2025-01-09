import { Uri } from "../../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../../salesforceCli";
import { CreateAndShowZoqlScriptCommand, ReadZoqlScriptDirectory } from "../../soql/zoqlScriptDirectory";
import { MockFileSystem } from "../__mocks__/mockFileSystem";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";

describe('zoql scripts directory', () => {

    let ide: MockIDE;
    let cli: MockSalesforceCli;
    let filesystem: MockFileSystem;

    let zoqlScriptsDir: Uri;

    beforeEach(() => {
        filesystem = new MockFileSystem();
        cli = new MockSalesforceCli({
            filesystem
        });
        ide = new MockIDE({
            filesystem
        });

        zoqlScriptsDir = ide.generateUri('zoqlScripts');
    });

    it('should be able to list all zoql scripts that were found in directory', async () => {
        const uri = Uri.join(zoqlScriptsDir, 'test.zoql');
        filesystem.create({
            uri
        });

        const testObject = new ReadZoqlScriptDirectory({
            cli, ide
        });

        const zoqlScripts = await testObject.execute({
            zoqlScriptsDir: ide.generateUri()
        });
        expect(zoqlScripts).toHaveLength(1);
    });
});

async function createZoqlScript({ ide, cli, item, zoqlScriptsDir }: { ide: MockIDE, cli: SalesforceCli, item: string, zoqlScriptsDir: Uri }) {
    const testObject = new CreateAndShowZoqlScriptCommand({
        ide, cli
    });

    const createZoqlScriptPromise = testObject.execute({
        zoqlScriptsDir
    });

    await ide.waitForShowInputBox();
    ide.writeAndEnterIntoShowInputBox(item);

    return await createZoqlScriptPromise;
}


describe('create zoql script command', () => {
    let ide: MockIDE;
    let cli: MockSalesforceCli;
    let filesystem: MockFileSystem;

    let zoqlScriptsDir: Uri;

    beforeEach(() => {
        filesystem = new MockFileSystem();
        cli = new MockSalesforceCli({
            filesystem
        });
        ide = new MockIDE({
            filesystem
        });

        zoqlScriptsDir = ide.generateUri('zoqlScripts');
    });

    it('should be able to create a zoql script', async () => {
        const { newZoqlScriptUri } = await createZoqlScript({
            ide, cli, zoqlScriptsDir, item: 'test'
        });
        const expectedUri = Uri.join(zoqlScriptsDir, `test.zoql`);
        expect(expectedUri.equals(newZoqlScriptUri)).toBe(true);
    });

    it('should be able to create a zoql script with a name that has spaces on left and right', async () => {
        const { newZoqlScriptUri } = await createZoqlScript({
            ide, cli, zoqlScriptsDir, item: '   test   '
        });
        const expectedUri = Uri.join(zoqlScriptsDir, `test.zoql`);
        expect(expectedUri.equals(newZoqlScriptUri)).toBe(true);
    });

    it('should not do anything if no input given', async () => {
        const { newZoqlScriptUri } = await createZoqlScript({
            ide, cli, zoqlScriptsDir, item: ''
        });
        expect(newZoqlScriptUri).toBeFalsy();

        const files = await filesystem.findFiles('*.zoql', zoqlScriptsDir);
        expect(files).toHaveLength(0);
    });

    it('should not do anything if blank string given (multiple spaces)', async () => {
        const { newZoqlScriptUri } = await createZoqlScript({
            ide, cli, zoqlScriptsDir, item: '    '
        });

        expect(newZoqlScriptUri).toBeFalsy();

        const files = await filesystem.findFiles('*.zoql', zoqlScriptsDir);
        expect(files).toHaveLength(0);
    });

    it('should not allow user to reuse name already in use', async () => {
        const testZoqlScriptName = 'testZoqlScriptName';
        const testFunction = CreateAndShowZoqlScriptCommand.genOnValidateInput([testZoqlScriptName]);
        expect(testFunction(testZoqlScriptName)).toBe('Script name already in use');
    });

    it('show not pass validation input if .zoql is in title', () => {
        const testFunction = CreateAndShowZoqlScriptCommand.genOnValidateInput([]);
        expect(testFunction('test.zoql')).toBe('A .zoql extension will be added to the file for you on creation.');
    });

    it('should pass validation input if undefined value is given', () => {
        const testFunction = CreateAndShowZoqlScriptCommand.genOnValidateInput([]);
        expect(testFunction(undefined)).toBe('');
    });
});