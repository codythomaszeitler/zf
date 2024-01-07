import { ProgressToken } from "./progressToken";
import { Range } from "./range";
import { TreeView } from "./treeView";
import { SalesforceOrg } from "./salesforceOrg";
import { BulkDocumentSaveListener } from "./bulkDocumentSaveListener";
export { Uri } from './uri';
import { Uri } from './uri';

export const APEX_LANGUAGE_ID = 'apex';

export abstract class IntegratedDevelopmentEnvironment {

    private bulkDocumentSaveListener: BulkDocumentSaveListener;
    private readonly currentDir: Uri;

    constructor({ currentDir }: { currentDir: Uri }) {
        this.bulkDocumentSaveListener = new BulkDocumentSaveListener();
        this.currentDir = currentDir;
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

    abstract showQuickPick(items: string[]): Thenable<string>;
    abstract showErrorMessage(message: string): Promise<void>;
    abstract showTextDocument(uri: Uri): Promise<void>;
    abstract deleteTextDocument(uri: Uri): Promise<void>;
    abstract showWarningMessage(message: string): Promise<void>;
    abstract withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string, isCancellable?: boolean }): Promise<T>;
    abstract getActiveTextEditor(): Promise<ActiveTextEditor | null>;
    abstract findFile(glob: string, base?: Uri): Promise<Uri | null>;
    abstract findFiles(glob: string, base?: Uri): Promise<Uri[]>;
    abstract readLineAt(params: { uri: Uri, line: number }): Promise<TextLine>;
    abstract readFile(params: { uri: Uri }): Promise<string>;
    abstract writeFile(params: { uri: Uri, contents: string }): Promise<void>;
    abstract getText(params: { uri: Uri, range: Range }): Promise<TextLine>;
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
    abstract registerTreeView<T>(params: { treeView: TreeView<T>; targetOrg: SalesforceOrg }): Promise<void>;

    public async hasFile(uri: Uri): Promise<boolean> {
        const basename = uri.getBaseName();
        const file = await this.findFile(basename, Uri.dirname(uri));
        return !!file;
    }
}

export interface OnSaveTextDocumentsEvent {
    textDocuments: TextDocument[]
}
export type OnSaveTextDocumentsListener = (e: OnSaveTextDocumentsEvent) => void;
export type OnSaveTextDocumentListener = (e: { textDocument: TextDocument }) => void;

export interface TextDocument {
    languageId: string;
    uri: Uri;
}

export interface ActiveTextEditor {
    uri: Uri;
}

export interface Command {
    commandName: string;
}

export interface CommandExecuteResult {

}

export class TextLine {
    private readonly text: string;

    public constructor(params: {
        text: string
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

    public constructor(range: Range, problem: string, severity: DiagnosticSeverity) {
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

