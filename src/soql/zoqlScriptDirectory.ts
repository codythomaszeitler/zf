import { Command } from "../command";
import { TreeNode } from "../treeNode";
import { Uri } from "../uri";

export interface ZoqlScript {
    name: string;
    uri: Uri;
}

export class ReadZoqlScriptDirectory extends Command {
    async execute({ zoqlScriptsDir }: { zoqlScriptsDir: Uri }): Promise<TreeNode<ZoqlScript>[]> {
        const uris = await this.getIde().findFiles('*.zoql', zoqlScriptsDir);
        const zoqlScripts = uris.map(async uri => {
            const contents = await this.getIde().readFile({
                uri
            });
            const zoqlScript: TreeNode<ZoqlScript> =
            {
                children: [],
                label: `${uri.getBaseNameWithoutExtension()} [${contents.trim()}]`,
                value: {
                    name: uri.getBaseNameWithoutExtension(),
                    uri
                }
            };
            return zoqlScript;
        });
        return Promise.all(zoqlScripts);
    }
}

export class CreateAndShowZoqlScriptCommand extends Command {
    async execute({ zoqlScriptsDir, title, defaultEditorSoql }: { zoqlScriptsDir: Uri; title?: string; defaultEditorSoql?: string }) {
        const input = await this.waitForShowInputBox({
            title
        });

        if (!input) {
            return {
                newZoqlScriptUri: undefined
            };
        }

        const zoqlScriptUri = Uri.join(zoqlScriptsDir, `${input.trim()}.zoql`);

        await this.getIde().writeFile({
            uri: zoqlScriptUri,
            contents: defaultEditorSoql ?? 'SELECT Id FROM Account'
        });

        await this.getIde().showTextDocument(zoqlScriptUri, {});

        return {
            newZoqlScriptUri: zoqlScriptUri
        };
    }

    private async waitForShowInputBox({ title }: { title?: string }) {
        const input = await this.getIde().showInputBox({
            title: title ?? 'Please enter ZOQL Script name',
            validateInput: CreateAndShowZoqlScriptCommand.onValidateInput
        });
        return input?.trim();
    }

    static onValidateInput(value: string) {
        if (value?.includes('.')) {
            return 'A .zoql extension will be added to the file for you on creation.';
        }

        return '';
    }
}

export class OpenZoqlScriptCommand extends Command {
    async execute({ treeNode }: { treeNode: TreeNode<ZoqlScript> }) {
        const hasFile = await this.getIde().hasFile(treeNode.value.uri);
        if (!hasFile) {
            this.getIde().showWarningMessage(`Could not find file at ${treeNode.value.uri.getFileSystemPath()}`);
            return;
        }

        await this.getIde().showTextDocument(treeNode.value.uri);
    }
}