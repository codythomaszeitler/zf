import { ProgressToken } from "./progressToken";
import { Range } from "./range";
import * as path from 'path';
import { TreeView } from "./treeView";
import { SalesforceOrg } from "./salesforceOrg";

export const APEX_LANGUAGE_ID = 'apex';

export abstract class IntegratedDevelopmentEnvironment {
    abstract showQuickPick(items: string[]): Thenable<string>;
    abstract showErrorMessage(message: string): Promise<void>;
    abstract showTextDocument(uri: Uri): Promise<void>;
    abstract deleteTextDocument(uri: Uri): Promise<void>;
    abstract showWarningMessage(message: string): Promise<void>;
    abstract withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string, isCancellable?: boolean }): Promise<T>;
    abstract getActiveTextEditor(): Promise<ActiveTextEditor | null>;
    abstract findFile(glob: string): Promise<Uri | null>;
    abstract findFiles(glob: string): Promise<Uri[]>;
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

    abstract onDidSaveTextDocument(listener: OnSaveTextDocumentListener): void;

    public async hasFile(uri: Uri): Promise<boolean> {
        const file = await this.findFile(uri.getValue());
        return !!file;
    }

    onDidSaveTextDocuments(listener : OnSaveTextDocumentsListener) : void {
    }
}
export type OnSaveTextDocumentsListener = (e: { textDocuments: TextDocument[] }) => void;
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

export class Uri {

    private readonly value: string;
    private constructor(value: string) {
        this.value = value;
    }

    public static get(value: string): Uri {
        return new Uri(value);
    }

    public getValue(): string {
        return this.value;
    }

    public getBaseName(): string {
        return path.basename(this.value);
    }

    public isApexClass(): boolean {
        return this.value.endsWith('.cls');
    }
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

