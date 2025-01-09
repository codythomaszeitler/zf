import { IntegratedDevelopmentEnvironment, OnDidChangeTextDocumentListener, Uri } from "../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../salesforceCli";
import { CreateAndShowZoqlScriptCommand, OpenZoqlScriptCommand, ReadZoqlScriptDirectory } from "./zoqlScriptDirectory";

export interface OnChangeTreeDataEvent {
    treeNode?: ZoqlScriptTreeNode;
}
export type OnDidChangeTreeDataListener = (e: OnChangeTreeDataEvent) => Promise<void>;

export interface ZoqlScriptTreeNode {
    label: string;
    uri: Uri;
    onDidChangeTextDocument: OnDidChangeTextDocumentListener;
}


export class ZoqlScriptsTreeView {

    private readonly ide: IntegratedDevelopmentEnvironment;
    private readonly cli: SalesforceCli;

    private treeNodes: ZoqlScriptTreeNode[];
    private readonly zoqlScriptsDir: Uri;

    onDidChangeTreeDataListener: OnDidChangeTreeDataListener;

    constructor ({ zoqlScriptsDir, ide, cli, onDidChangeTreeDataListener }: { zoqlScriptsDir: Uri; ide: IntegratedDevelopmentEnvironment; cli: SalesforceCli; onDidChangeTreeDataListener: OnDidChangeTreeDataListener; }) {
        this.ide = ide;
        this.cli = cli;
        this.zoqlScriptsDir = zoqlScriptsDir;
        this.onDidChangeTreeDataListener = onDidChangeTreeDataListener;

        this.treeNodes = [];
    }

    async create() {
        const command = new CreateAndShowZoqlScriptCommand({
            ide: this.ide, cli: this.cli
        });

        const { newZoqlScriptUri } = await command.execute({
            zoqlScriptsDir: this.zoqlScriptsDir
        });
        const treeItem = await this.createZoqlScriptTreeItem(newZoqlScriptUri);
        this.treeNodes.push(treeItem);
        this.fireOnDidChangeTreeDataListener(treeItem);
    }

    async open(treeNode: ZoqlScriptTreeNode) {
        const command = new OpenZoqlScriptCommand({
            cli: this.cli,
            ide: this.ide
        });

        await command.execute({
            treeNode
        });
    }

    async refresh() {
        const readZoqlScriptDirectory = new ReadZoqlScriptDirectory({
            ide: this.ide,
            cli: this.cli
        });

        this.treeNodes.forEach(script => {
            this.ide.unregisterOnDidChangeTextDocument(script.uri, script.onDidChangeTextDocument);
        });
        const uris = await readZoqlScriptDirectory.execute({
            zoqlScriptsDir: this.zoqlScriptsDir
        });
        this.treeNodes = await Promise.all(uris.map(async uri => {
            return this.createZoqlScriptTreeItem(uri);
        }));
        this.fireOnDidChangeTreeDataListener();
    }

    private fireOnDidChangeTreeDataListener(zoqlScript: ZoqlScriptTreeNode | void) {
        if (!zoqlScript) {
            this.onDidChangeTreeDataListener({});
        } else {
            this.onDidChangeTreeDataListener({
                treeNode: zoqlScript
            });
        }
    }

    private async createZoqlScriptTreeItem(uri: Uri) {
        function parseZoqlScriptLabel(uri: Uri, contents: string) {
            return `${uri.getBaseNameWithoutExtension()} [${contents}]`;
        }

        const contents = await this.ide.readFile({
            uri
        });

        const fireOnDidChangeTreeDataListener = this.fireOnDidChangeTreeDataListener.bind(this);
        const treeNode: ZoqlScriptTreeNode = {
            label: parseZoqlScriptLabel(uri, contents),
            uri,
            async onDidChangeTextDocument({ textDocument }) {
                treeNode.label = parseZoqlScriptLabel(textDocument.uri, textDocument.contents);
                fireOnDidChangeTreeDataListener(treeNode);
            }
        };

        this.ide.onDidChangeTextDocument(treeNode.uri, treeNode.onDidChangeTextDocument);
        this.fireOnDidChangeTreeDataListener(treeNode);

        return treeNode;
    }
}