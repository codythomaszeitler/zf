import { Command } from "../command";
import { Uri } from "../uri";

export class ReadAnonApexScriptDirectory extends Command {
    async execute({ anonScriptsDir }: { anonScriptsDir: Uri }): Promise<Uri[]> {
        const uris = await this.getIde().findFiles('*.script', anonScriptsDir);
        return uris;
    }
}

export class CreateAndShowAnonApexScriptCommand extends Command {
    async execute({ title, anonScriptsDir }: { anonScriptsDir: Uri, title?: string }) {
        const input = this.waitForShowInputBox({
            title, anonScriptsDir
        });

        if (!input) {
            return {
                newAnonScriptUri: undefined
            }
        }

        const anonApexScriptUri = Uri.join(anonScriptsDir, `${(await input).trim()}.script`);

        await this.getIde().writeFile({
            uri: anonApexScriptUri,
            contents: 'System.debug(\'Hello World\');'
        })

        return { newAnonScriptUri: anonApexScriptUri }
    }

    private async waitForShowInputBox({ title, anonScriptsDir }: { title?: string; anonScriptsDir: Uri }) {
        const readAnonApexScriptDirectory = new ReadAnonApexScriptDirectory({
            ide: this.getIde(), cli: this.getCli()
        });
        const uris = await readAnonApexScriptDirectory.execute({
            anonScriptsDir
        });
        const alreadyUsedNames = uris.map(uri => uri.getBaseNameWithoutExtension());

        const onValidateInput = CreateAndShowAnonApexScriptCommand.genOnValidateInput(alreadyUsedNames);
        const input = await this.getIde().showInputBox({
            title: title ?? 'Please enter Anon Apex Script name',
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


export class OpenAnonApexScriptCommand extends Command {
    async execute({ treeNode }: { treeNode: AnonApexScriptTreeNode }) {
        const hasFile = await this.getIde().hasFile(treeNode.uri);
        if (!hasFile) {
            this.getIde().showWarningMessage(`Could not find file at ${treeNode.uri.getFileSystemPath()}`);
        }
        await this.getIde().showTextDocument(treeNode.uri);
    }
}

export interface AnonApexScriptTreeNode {
    label: string;
    uri: Uri;
}