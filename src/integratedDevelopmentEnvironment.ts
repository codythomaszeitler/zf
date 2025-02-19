import { ProgressToken } from "./progressToken";
import { Range } from "./range";
import { BulkDocumentSaveListener } from "./bulkDocumentSaveListener";
import { Uri } from './uri';
import { SfdxProject } from "./readSfdxProjectCommand";
import { Logger } from "./logger";
export { Uri } from './uri';

export const APEX_LANGUAGE_ID = 'apex';

export abstract class IntegratedDevelopmentEnvironment {

    private bulkDocumentSaveListener: BulkDocumentSaveListener;
    private readonly currentDir: Uri;
    private sfdxProject: SfdxProject | undefined;

    private uriToTextDocumentChangedListeners: Map<string, OnDidChangeTextDocumentListener[]>;

    constructor ({ currentDir }: { currentDir: Uri; }) {
        this.bulkDocumentSaveListener = new BulkDocumentSaveListener();
        this.currentDir = currentDir;
        this.uriToTextDocumentChangedListeners = new Map<string, OnDidChangeTextDocumentListener[]>();
    }

    public getCurrentDir(): Uri {
        return this.currentDir;
    }

    public generateUri(...paths: string[]): Uri {
        return Uri.join(this.getCurrentDir(), ...paths);
    }


    protected didSaveFile(textDocument: TextDocument) {
        this.bulkDocumentSaveListener.save({
            document: textDocument
        });
    }

    public onDidSaveTextDocuments(listener: OnSaveTextDocumentsListener): void {
        this.bulkDocumentSaveListener.onBulkSaveListener(listener);
    }

    public onDidChangeTextDocument(uri: Uri, listener: OnDidChangeTextDocumentListener) {
        if (!this.uriToTextDocumentChangedListeners.has(this.getKeyOf(uri))) {
            this.uriToTextDocumentChangedListeners.set(this.getKeyOf(uri), []);
        }

        const listeners = this.uriToTextDocumentChangedListeners.get(this.getKeyOf(uri));
        listeners.push(listener);
    }

    public unregisterOnDidChangeTextDocument(uri: Uri, listener: OnDidChangeTextDocumentListener) {
        const listeners = this.uriToTextDocumentChangedListeners.get(this.getKeyOf(uri));
        if (listeners) {
            const withListenerRemoved = listeners.filter(_listener => listener !== listener);
            this.uriToTextDocumentChangedListeners.set(this.getKeyOf(uri), withListenerRemoved);
        }
    }

    protected async textDocumentChanged(textDocument: TextDocument) {
        const listeners = this.uriToTextDocumentChangedListeners.get(this.getKeyOf(textDocument));

        const promises = listeners.map(listener => {
            return listener({
                textDocument
            });
        });
        await Promise.all(promises);
    }

    private getKeyOf(uriOrTextDocument: TextDocument | Uri) {
        if (uriOrTextDocument instanceof Uri) {
            return uriOrTextDocument.getFileSystemPath();
        } else {
            return uriOrTextDocument.uri.getFileSystemPath();
        }
    }

    public setCachedSfdxProject(sfdxProject: SfdxProject) {
        this.sfdxProject = sfdxProject;
    }

    public getCachedSfdxProject() {
        return this.sfdxProject;
    }

    public async getSalesforceMetadataUris(uris: Uri[]): Promise<Uri[]> {
        const directoryHasMetaXmlFile = async (directory: Uri) => {
            const uris = await this.findFiles('*-meta.xml', directory);
            return uris.length !== 0;
        };

        const isNonMetaXmlFileDeployable = async (uri: Uri) => {
            const withMetaXml = Uri.from({
                scheme: 'file', fileSystemPath: uri.getFileSystemPath() + '-meta.xml'
            });

            const hasFile = await this.hasFile(withMetaXml);
            if (hasFile) {
                return true;
            }

            const directory = Uri.dirname(uri);
            const dirHasXmlFile = await directoryHasMetaXmlFile(directory);
            return dirHasXmlFile;
        };

        if (!this.sfdxProject) {
            Logger.get().warn(`Tried to run 'isSalesforceMetadata' without sfdx-project loaded into IDE.`);
            return [];
        }

        const nonRelativePackageDirs = this.sfdxProject.packageDirectories.map(packageDir =>
            this.generateUri(packageDir.path)
        );
        const isWithinPackageDir = (uri: Uri) => nonRelativePackageDirs.some(nonRelativePackageDir => uri.getFileSystemPath().startsWith(nonRelativePackageDir.getFileSystemPath()));;
        const possibleMetadataUris: Uri[] = uris.filter(uri => isWithinPackageDir(uri));


        const sfMetadataUriPromises = possibleMetadataUris.map(uri => {
            return new Promise<Uri | undefined>(resolve => {
                if (uri.getFileSystemPath().endsWith('-meta.xml')) {
                    resolve(uri);
                } else {
                    if (uri.isDirectory()) {
                        resolve(uri);
                    } else {
                        isNonMetaXmlFileDeployable(uri).then(hasXmlFile => {
                            if (hasXmlFile) {
                                resolve(uri);
                            } else {
                                resolve(undefined);
                            }
                        });
                    }
                }
            });
        });

        const sfMetadataUris = await Promise.all(sfMetadataUriPromises);
        return sfMetadataUris.filter(uri => uri);
    }

    abstract showQuickPick(items: string[]): Thenable<string>;
    abstract showErrorMessage(message: string): Promise<void>;
    abstract showTextDocument(uri: Uri, options?: ShowTextDocumentOptions): Promise<void>;
    abstract showInputBox(options?: ShowInputBoxOptions): Promise<string>;
    abstract deleteTextDocument(uri: Uri): Promise<void>;
    abstract showWarningMessage(message: string): Promise<void>;
    abstract showInformationMessage(message: string, options?: {
        label: string;
    }[]): Promise<string>;
    abstract withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string, isCancellable?: boolean; }): Promise<T>;
    abstract withStatusBarMessage<T>(toMonitor: () => Promise<T>, options: {
        title: string;
    });
    abstract getActiveTextEditor(): Promise<ActiveTextEditor | null>;
    abstract findFile(glob: string, base?: Uri): Promise<Uri | null>;
    abstract findFiles(glob: string, base?: Uri): Promise<Uri[]>;
    public async findFileByClassName(className: string) {
        const glob = `{${className}.cls}`;
        const uri = await this.findFile(`**/${glob}`, this.getCurrentDir());
        return uri;
    }
    abstract readLineAt(params: { uri: Uri, line: number; }): Promise<TextLine>;
    abstract readFile(params: { uri: Uri; }): Promise<string>;
    abstract writeFile(params: { uri: Uri, contents: string; }): Promise<void>;
    abstract getText(params: { uri: Uri, range: Range; }): Promise<TextLine>;
    abstract getConfig<T>(property: string, defaultValue: T): T;
    abstract execute(command: Command): Promise<CommandExecuteResult>;
    abstract setDiagnostics(uri: Uri, diagnostics: Diagnostic[]): void;
    abstract clearDiagnostics(): void;
    abstract focusProblemsTab(): Promise<void>;
    abstract showOutput(params: {
        logs: string[];
        show: true;
    }): Promise<void>;
    abstract getHighlightedText(): Promise<string>;

    public async hasFile(uri: Uri): Promise<boolean> {
        const basename = uri.getBaseName();
        const file = await this.findFile(basename, Uri.dirname(uri));
        return !!file;
    }

    public async showTempFileWith(outputDir: Uri, contents: string, options?: ShowTextDocumentOptions) {
        const basename = Date.now() + '.' + (options?.extension ? options.extension : 'txt');
        const uri = Uri.join(outputDir, basename);

        await this.writeFile({
            uri, contents
        });
        await this.showTextDocument(uri, options);
    }
}

export interface OnSaveTextDocumentsEvent {
    textDocuments: TextDocument[];
}
export type OnSaveTextDocumentsListener = (e: OnSaveTextDocumentsEvent) => Promise<void>;
export type OnSaveTextDocumentListener = (e: { textDocument: TextDocument; }) => void;

export interface OnChangeTextDocumentEvent {
    textDocument: TextDocument;
}

export type OnDidChangeTextDocumentListener = (event: OnChangeTextDocumentEvent) => Promise<void>;

export interface TextDocument {
    languageId: string;
    uri: Uri;
    contents: string;
}

export interface ActiveTextEditor {
    uri: Uri;
    contents: string;
}

export interface Command {
    commandName: string;
}

export interface CommandExecuteResult {

}

export class TextLine {
    private readonly text: string;

    public constructor (params: {
        text: string;
    }) {
        this.text = params.text;
    }

    public getText(): string {
        return this.text;
    }
}

export enum DiagnosticSeverity {
    error
}

export class Diagnostic {

    private readonly range: Range;
    private readonly problem: string;
    private readonly severity: DiagnosticSeverity;

    public constructor (range: Range, problem: string, severity: DiagnosticSeverity) {
        this.range = range;
        this.problem = problem;
        this.severity = severity;
    }

    public getRange(): Range {
        return this.range;
    }

    public getProblem(): string {
        return this.problem;
    }

    public getSeverity(): DiagnosticSeverity {
        return this.severity;
    }
}

export enum ViewColumn {
    besides, active
}

export interface ShowTextDocumentOptions {
    viewColumn?: ViewColumn;
    extension?: string;
}


export interface ShowInputBoxOptions {
    title: string;
    validateInput?(value: string): string;
}