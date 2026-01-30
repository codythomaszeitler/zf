import { urlToHttpOptions } from "url";
import { IntegratedDevelopmentEnvironment, Uri } from "../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../salesforceCli";
import { CreateAndShowAnonApexScriptCommand, OpenAnonApexScriptCommand, ReadAnonApexScriptDirectory } from "./anonApexDirectory";

export interface OnChangeTreeDataEvent {
    treeNode?: AnonApexScriptTreeNode;
}
export type OnDidChangeTreeDataListener = (e: OnChangeTreeDataEvent) => Promise<void>;

export interface AnonApexScriptTreeNode {
    label: string;
    uri: Uri;
}

export class AnonApexScriptTreeView {

    private readonly ide: IntegratedDevelopmentEnvironment;
    private readonly cli: SalesforceCli;

    private treeNodes: AnonApexScriptTreeNode[];
    private readonly anonApexScriptsDir: Uri;

    onDidChangeTreeDataListener: OnDidChangeTreeDataListener;

    constructor ({ anonApexScriptsDir, ide, cli, onDidChangeTreeDataListener }: { anonApexScriptsDir: Uri; ide: IntegratedDevelopmentEnvironment; cli: SalesforceCli; onDidChangeTreeDataListener : OnDidChangeTreeDataListener }) {
        this.ide = ide;
        this.cli = cli;
        this.anonApexScriptsDir = anonApexScriptsDir;

        this.treeNodes = [];
    }

    async create() {
        const command = new CreateAndShowAnonApexScriptCommand({
            ide: this.ide, cli: this.cli
        });

        const { newAnonScriptUri } = await command.execute({
            anonScriptsDir: this.anonApexScriptsDir,
        });

        const treeItem = await this.createAnonApexScriptTreeItem(newAnonScriptUri);
        this.treeNodes.push(treeItem);
    }

    async open(treeNode : AnonApexScriptTreeNode) {
        const command = new OpenAnonApexScriptCommand({
            cli : this.cli, ide : this.ide
        });

        await command.execute({
            treeNode
        });
    }

    async refresh() {
        const readAnonApexScriptDirectory = new ReadAnonApexScriptDirectory({
            ide : this.ide,
            cli : this.cli
        });

        const uris = await readAnonApexScriptDirectory.execute({
            anonScriptsDir : this.anonApexScriptsDir
        });
        this.treeNodes = await Promise.all(uris.map(async uri => {
            return this.createAnonApexScriptTreeItem(uri);
        }));

        this.fireOnDidChangeTreeDataListener();
    }

    private fireOnDidChangeTreeDataListener(anonApexScriptTreeNode: AnonApexScriptTreeNode| void) {
        if (!anonApexScriptTreeNode) {
            this.onDidChangeTreeDataListener({});
        } else {
            this.onDidChangeTreeDataListener({
                treeNode: anonApexScriptTreeNode
            });
        }
    }

    private async createAnonApexScriptTreeItem(uri: Uri) {
        function parseZoqlScriptLabel(uri: Uri, contents: string) {
            return `${uri.getBaseNameWithoutExtension()} [${contents}]`;
        }

        const contents = await this.ide.readFile({
            uri
        });

        const treeNode: AnonApexScriptTreeNode = {
            label: parseZoqlScriptLabel(uri, contents),
            uri
        };

        // TODO this is where the on did change text document used to be - if we want the 
        // list view to contain the contents we are going to have to put that back.

        return treeNode;
    }
}
