import { Uri } from "../../integratedDevelopmentEnvironment";
import { OnDidChangeTreeDataListener, ZoqlScriptsTreeView, ZoqlScriptTreeNode } from "../../soql/zoqlTreeView";
import { MockFileSystem } from "../__mocks__/mockFileSystem";
import { MockIDE } from "../__mocks__/mockIntegratedDevelopmentEnvironment";
import { MockSalesforceCli } from "../__mocks__/mockSalesforceCli";


describe('zoql tree view', () => {

    let ide: MockIDE;
    let cli: MockSalesforceCli;
    let fs: MockFileSystem;

    let testObject: ZoqlScriptsTreeView;

    let onDidChangeTreeDataListener: OnDidChangeTreeDataListener;
    let zoqlScriptsDir: Uri;

    const testZoqlScriptName = 'testZoqlScript';
    const zoqlScriptTreeNodes: Map<string, ZoqlScriptTreeNode> = new Map<string, ZoqlScriptTreeNode>();
    beforeEach(() => {
        fs = new MockFileSystem();
        ide = new MockIDE({ filesystem: fs });
        cli = new MockSalesforceCli({ filesystem: fs });

        onDidChangeTreeDataListener = jest.fn(async function ({
            treeNode
        }) {
            if (treeNode) {
                zoqlScriptTreeNodes.set(treeNode.uri.getFileSystemPath(), treeNode);
            }
        });
        zoqlScriptsDir = ide.generateUri('testZoqlDir');

        testObject = new ZoqlScriptsTreeView({
            cli, ide, onDidChangeTreeDataListener, zoqlScriptsDir
        });
    });

    it('should be able to create a zoql script', async () => {
        const createPromise = testObject.create();
        await ide.waitForShowInputBox();
        ide.writeAndEnterIntoShowInputBox(testZoqlScriptName);

        await createPromise;

        const expectedZoqlScriptUri = Uri.join(zoqlScriptsDir, getWithZoqlExtension(testZoqlScriptName));
        expect(await fs.hasFile(expectedZoqlScriptUri)).toBe(true);
        expect(ide.toHaveShownTextDocument(expectedZoqlScriptUri)).toBe(true);
    });

    it('should be able to open a zoql script that exists on extension start', async () => {
        const expectedZoqlScriptUri = Uri.join(zoqlScriptsDir, getWithZoqlExtension(testZoqlScriptName));
        await fs.writeFile(expectedZoqlScriptUri, 'SELECT Id FROM Contract');

        await testObject.refresh();

        expect(ide.toHaveShownTextDocument(expectedZoqlScriptUri)).toBe(false);

        const zoqlScriptTreeNode = zoqlScriptTreeNodes.get(expectedZoqlScriptUri.getFileSystemPath());
        await testObject.open(zoqlScriptTreeNode);

        expect(ide.toHaveShownTextDocument(expectedZoqlScriptUri)).toBe(true);
    });


    it('should show a warning message if the file uri no longer exists', async () => {
        const expectedZoqlScriptUri = Uri.join(zoqlScriptsDir, getWithZoqlExtension(testZoqlScriptName));
        await fs.writeFile(expectedZoqlScriptUri, 'SELECT Id FROM Contract');

        await testObject.refresh();

        const zoqlScriptTreeNode = zoqlScriptTreeNodes.get(expectedZoqlScriptUri.getFileSystemPath());
        await fs.deleteFile(zoqlScriptTreeNode.uri);

        await testObject.open(zoqlScriptTreeNode);

        expect(ide.didShowWarningMessage(`Could not find file at ${zoqlScriptTreeNode.uri.getFileSystemPath()}`)).toBe(true);
    });

    it('should fire on did change tree data listener if the underlying file changes of the tree node zoql script', async () => {
        const expectedZoqlScriptUri = Uri.join(zoqlScriptsDir, getWithZoqlExtension(testZoqlScriptName));
        const contents = 'SELECT Id FROM Contract';
        await fs.writeFile(expectedZoqlScriptUri, contents);

        expect(onDidChangeTreeDataListener).toHaveBeenCalledTimes(0);
        await testObject.refresh();

        const zoqlScriptTreeNode = zoqlScriptTreeNodes.get(expectedZoqlScriptUri.getFileSystemPath());
        await testObject.open(zoqlScriptTreeNode);

        expect(onDidChangeTreeDataListener).toHaveBeenCalledTimes(2);
        await ide.textDocumentChanged({
            contents: contents + ' WHERE Name = \'Test Contract\'',
            languageId: 'apex',
            uri: expectedZoqlScriptUri
        });

        expect(onDidChangeTreeDataListener).toHaveBeenCalledTimes(3);

    });

    function getWithZoqlExtension(basenameWithoutExtension: string) {
        return `${basenameWithoutExtension}.zoql`;
    }
});