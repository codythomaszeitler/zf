import { Uri } from "../../integratedDevelopmentEnvironment";
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
        const testObject = new CreateAndShowZoqlScriptCommand({
            ide, cli
        });

        const createZoqlScriptPromise = testObject.execute({
            zoqlScriptsDir
        });

        await ide.waitForShowInputBox();
        ide.writeAndEnterIntoShowInputBox('test');

        const { newZoqlScriptUri } = await createZoqlScriptPromise;
        const expectedUri = Uri.join(zoqlScriptsDir, `test.zoql`);
        expect(expectedUri.equals(newZoqlScriptUri)).toBe(true);
    });

    it('should be able to create a zoql script with a name that has spaces on left and right', async () => {
        const testObject = new CreateAndShowZoqlScriptCommand({
            ide, cli
        });

        const createZoqlScriptPromise = testObject.execute({
            zoqlScriptsDir
        });

        await ide.waitForShowInputBox();
        ide.writeAndEnterIntoShowInputBox('   test   ');

        const { newZoqlScriptUri } = await createZoqlScriptPromise;
        const expectedUri = Uri.join(zoqlScriptsDir, `test.zoql`);
        expect(expectedUri.equals(newZoqlScriptUri)).toBe(true);
    });

    it('should not do anything if no input given', async () => {
        const testObject = new CreateAndShowZoqlScriptCommand({
            ide, cli
        });

        const createZoqlScriptPromise = testObject.execute({
            zoqlScriptsDir
        });

        await ide.waitForShowInputBox();
        ide.writeAndEnterIntoShowInputBox('');

        const { newZoqlScriptUri } = await createZoqlScriptPromise;
        expect(newZoqlScriptUri).toBeFalsy();

        const files = await filesystem.findFiles('*.zoql', zoqlScriptsDir);
        expect(files).toHaveLength(0);
    });

    it('should not do anything if blank string given (multiple spaces)', async () => {
        const testObject = new CreateAndShowZoqlScriptCommand({
            ide, cli
        });

        const createZoqlScriptPromise = testObject.execute({
            zoqlScriptsDir
        });

        await ide.waitForShowInputBox();
        ide.writeAndEnterIntoShowInputBox('    ');

        const { newZoqlScriptUri } = await createZoqlScriptPromise;
        expect(newZoqlScriptUri).toBeFalsy();

        const files = await filesystem.findFiles('*.zoql', zoqlScriptsDir);
        expect(files).toHaveLength(0);
    });

    it('show not pass validation input if .zoql is in title', () => {
        const result = CreateAndShowZoqlScriptCommand.onValidateInput('test.zoql');
        expect(result).toBe('A .zoql extension will be added to the file for you on creation.');
    });

    it('should pass validation input if undefined value is given', () => {
        const result = CreateAndShowZoqlScriptCommand.onValidateInput(undefined);
        expect(result).toBe('');
    });
});