import { Command } from "../command";
import { Uri } from "../uri";
import { ZoqlScriptTreeNode } from "./zoqlTreeView";

export class ReadZoqlScriptDirectory extends Command {
    async execute({ zoqlScriptsDir }: { zoqlScriptsDir: Uri }): Promise<Uri[]> {
        const uris = await this.getIde().findFiles('*.zoql', zoqlScriptsDir);
        return uris;
    }
}

export class CreateAndShowZoqlScriptCommand extends Command {
    async execute({ zoqlScriptsDir, title, defaultEditorSoql }: { zoqlScriptsDir: Uri; title?: string; defaultEditorSoql?: string }) {
        const input = await this.waitForShowInputBox({
            title, zoqlScriptsDir
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

    private async waitForShowInputBox({ title, zoqlScriptsDir }: { title?: string; zoqlScriptsDir: Uri }) {
        const readZoqlScriptDirCommand = new ReadZoqlScriptDirectory({
            ide: this.getIde(), cli: this.getCli()
        });
        const uris = await readZoqlScriptDirCommand.execute({
            zoqlScriptsDir
        });
        const alreadyUsedNames = uris.map(uri => uri.getBaseNameWithoutExtension());

        const onValidateInput = CreateAndShowZoqlScriptCommand.genOnValidateInput(alreadyUsedNames);
        const input = await this.getIde().showInputBox({
            title: title ?? 'Please enter ZOQL Script name',
            validateInput: onValidateInput
        });
        return input?.trim();
    }

    static genOnValidateInput(existingNames: string[]) {
        return function (value: string) {
            if (existingNames.includes(value)) {
                return 'Script name already in use';
            }

            if (value?.includes('.')) {
                return 'A .zoql extension will be added to the file for you on creation.';
            }

            return '';
        };
    }
}

export class OpenZoqlScriptCommand extends Command {
    async execute({ treeNode }: { treeNode: ZoqlScriptTreeNode }) {
        const hasFile = await this.getIde().hasFile(treeNode.uri);
        if (!hasFile) {
            this.getIde().showWarningMessage(`Could not find file at ${treeNode.uri.getFileSystemPath()}`);
            return;
        }

        await this.getIde().showTextDocument(treeNode.uri);
    }
}