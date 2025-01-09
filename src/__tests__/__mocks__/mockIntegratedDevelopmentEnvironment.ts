import { ActiveTextEditor, Command, CommandExecuteResult, Diagnostic, IntegratedDevelopmentEnvironment, ShowInputBoxOptions, TextDocument, TextLine, Uri } from "../../integratedDevelopmentEnvironment";
import { OnCancellationRequestedListener, ProgressToken } from "../../progressToken";
import { Range } from "../../range";
import { SfdxProject, getSfdxProjectUri } from "../../readSfdxProjectCommand";
import { MockFileSystem } from "./mockFileSystem";

function nonStartedQuickPick(item: string): void {
    throw new Error('Show Quick is not being shown.');
}

function nonStartedShowInputBox(item: string): void {
    throw new Error('Show Input Box is not being shown.');
}

export class MockIDE extends IntegratedDevelopmentEnvironment {

    deleteTextDocument(uri: Uri): Promise<void> {
        throw new Error("Method not implemented.");
    }

    selectQuickPickItem: (item: string) => void;
    writeAndEnterIntoShowInputBox: (item: string) => void;

    private _waitForShowQuickPickResolve: (value: unknown) => void;
    private _waitForShowInputBoxResolve: (value: unknown) => void;
    private shownErrorMessages: string[];
    private shownWarningMessages: string[];
    private shownInformationMessages: string[];
    private shownWindowLoadingMessages: string[];
    private diagnostics: Map<string, Diagnostic[]>;
    private config: Map<string, any>;
    private filesystem: MockFileSystem;
    private _didFocusProblemsTab: boolean;
    private currentProgressToken: MockProgressToken | null;

    private shownTextDocuments: Uri[];

    private activeTextEditor: ActiveTextEditor | null;

    private history: ProgressHistory[] = [];

    constructor (params?: {
        filesystem?: MockFileSystem;
    }) {
        super({
            currentDir: Uri.from({
                scheme: 'file',
                fileSystemPath: 'testProjectDir'
            })
        });
        this.selectQuickPickItem = nonStartedQuickPick;
        this.writeAndEnterIntoShowInputBox = nonStartedShowInputBox;
        this._waitForShowQuickPickResolve = () => { };
        this._waitForShowInputBoxResolve = () => { };
        this.shownErrorMessages = [];
        this.shownWarningMessages = [];
        this.shownInformationMessages = [];
        this.shownWindowLoadingMessages = [];
        this.diagnostics = new Map<string, Diagnostic[]>();
        this.config = new Map<string, any>();

        if (!params || !params.filesystem) {
            this.filesystem = new MockFileSystem();
        } else {
            this.filesystem = params.filesystem;
        }

        this._didFocusProblemsTab = false;
        this.currentProgressToken = null;
        this.shownTextDocuments = [];
        this.activeTextEditor = null;
    }

    static genDefaultForceAppSfdxProject(): SfdxProject {
        return {
            packageDirectories: [
                {
                    default: true,
                    path: 'force-app'
                }
            ]
        };
    }

    setActiveTextEditor(activeTextEditor: ActiveTextEditor | null): void {
        this.activeTextEditor = activeTextEditor;
    }

    async getActiveTextEditor(): Promise<ActiveTextEditor | null> {
        return this.activeTextEditor;
    }

    async withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string; isCancellable?: boolean; }): Promise<T> {
        this.shownWindowLoadingMessages.push(options.title);

        this.currentProgressToken = generateProgressToken();
        const result = await toMonitor(this.currentProgressToken);
        return result;
    }

    getProgressHistoryAt(index: number) {
        return this.currentProgressToken?.getProgressHistoryAt(index);
    }

    getCurrentProgressToken(): MockProgressToken | null {
        return this.currentProgressToken;
    }

    didShowWindowLoadingMessageWith(title: string): boolean {
        return this.shownWindowLoadingMessages.includes(title);
    }

    private statusBarMessage: string = '';

    didShowStatusBarMessage(title: string): boolean {
        return this.statusBarMessage === title;
    }

    withStatusBarMessage<T>(toMonitor: () => Promise<T>, options: { title: string; }) {
        this.statusBarMessage = options.title;
        return toMonitor();
    }

    waitForShowQuickPick() {
        return new Promise(resolve => {
            this._waitForShowQuickPickResolve = resolve;
        });
    }

    showQuickPick(items: string[]): Thenable<string> {
        return new Promise(resolve => {
            this._waitForShowQuickPickResolve(null);
            this.selectQuickPickItem = (item: string): void => {
                resolve(item);
                this.selectQuickPickItem = nonStartedQuickPick;
            };
        });
    }

    private isShowingInputBox: boolean = false;

    waitForShowInputBox() {
        if (this.isShowingInputBox) {
            return;
        }

        return new Promise(resolve => {
            this._waitForShowInputBoxResolve = resolve;
        });
    }

    showInputBox(options?: ShowInputBoxOptions): Promise<string> {
        const runInputCheckIfExists = (item: string) => {
            if (options?.validateInput) {
                return !options.validateInput(item);
            }
            return true;
        };

        return new Promise(resolve => {
            this.isShowingInputBox = true;
            this._waitForShowInputBoxResolve(null);
            this.writeAndEnterIntoShowInputBox = (item: string): void => {
                if (!runInputCheckIfExists(item)) {
                    throw new Error(`${item} did not pass validate input check.`);
                }

                resolve(item);
                this.writeAndEnterIntoShowInputBox = nonStartedShowInputBox;
                this.isShowingInputBox = false;
            };
        });
    }

    async showErrorMessage(message: string): Promise<void> {
        this.shownErrorMessages.push(message);
    }

    didShowErrorMessage(message: string): boolean {
        return this.shownErrorMessages.includes(message);
    }

    async showWarningMessage(message: string): Promise<void> {
        this.shownWarningMessages.push(message);
    }

    didShowWarningMessage(message: string): boolean {
        return this.shownWarningMessages.includes(message);
    }

    showInformationMessageSelection: string | undefined;
    async showInformationMessage(message: string, options?: {
        label: string;
    }[]): Promise<string> {
        if (options && this.showInformationMessageSelection) {
            const labels = options.map(opt => opt.label);
            const matching = labels.find(label => label === this.showInformationMessageSelection);
            if (!matching) {
                throw new Error(`Tried to make a selection that was not present on the information message [${this.showInformationMessageSelection}] - [${labels}].`);
            }
        }

        this.shownInformationMessages.push(message);
        return this.showInformationMessageSelection ?? "";
    }

    didShowInformationMessage(message: string): boolean {
        return this.shownInformationMessages.includes(message);
    }

    async findFile(glob: string, base?: Uri): Promise<Uri | null> {
        return this.filesystem.findFile(glob, base);
    }

    findFiles(glob: string, base?: Uri): Promise<Uri[]> {
        return this.filesystem.findFiles(glob, base);
    }

    addFile(uri: Uri) {
        this.filesystem.create({
            uri: uri
        });
    }

    getConfig<T>(property: string, defaultValue: T): T {
        const value = this.config.get(property);
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    }

    setConfig<T>(property: string, value: any) {
        this.config.set(property, value);
    }

    execute(command: Command): Promise<CommandExecuteResult> {
        throw new Error("Method not implemented.");
    }

    clearDiagnostics(): void {
        this.diagnostics.clear();
    }

    setDiagnostics(uri: Uri, diagnostics: Diagnostic[]): void {
        this.diagnostics.set(uri.getFileSystemPath(), diagnostics);
    }

    didSetDiagnosticsFor(uri: Uri): boolean {
        const diagnostics = this.diagnostics.get(uri.getFileSystemPath());
        if (!diagnostics) {
            return false;
        }
        return diagnostics.length !== 0;
    }

    didSetAnyDiagnostics(): boolean {
        return this.diagnostics.size !== 0;
    }

    getDiagnosticsFor(uri: Uri): Diagnostic[] {
        const diagnostics = this.diagnostics.get(uri.getFileSystemPath());
        if (!diagnostics) {
            return [];
        }
        return diagnostics;
    }

    async focusProblemsTab(): Promise<void> {
        this._didFocusProblemsTab = true;
    }

    didFocusProblemsTab(): boolean {
        return this._didFocusProblemsTab;
    }

    didShowAnyWarningMessage(): boolean {
        return this.shownWarningMessages.length !== 0;
    }

    showOutput(params: { logs: string[]; show: true; }): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private highlightedText: string = '';
    setHighlightedText(highlightedText: string) {
        this.highlightedText = highlightedText;
    }

    async getHighlightedText(): Promise<string> {
        return this.highlightedText;
    }

    readLineAt(params: { uri: Uri; line: number; }): Promise<TextLine> {
        throw new Error("Method not implemented.");
    }

    getText(params: { uri: Uri; range: Range; }): Promise<TextLine> {
        throw new Error("Method not implemented.");
    }

    async textDocumentChanged(textDocument: TextDocument) {
        return super.textDocumentChanged(textDocument);
    }

    async showTextDocument(uri: Uri): Promise<void> {
        const hasFile = await this.hasFile(uri);
        if (!hasFile) {
            throw new Error(`Could not find file at ${uri.getFileSystemPath()}`);
        }
        this.shownTextDocuments.push(uri);
    }

    toHaveShownTextDocument(uri: Uri): boolean {
        return !!this.shownTextDocuments.find((_uri) => _uri.getFileSystemPath() === uri.getFileSystemPath());
    }

    getShownTextDocuments() {
        return [...this.shownTextDocuments];
    }

    async writeFile(params: { uri: Uri; contents: string; }): Promise<void> {
        await this.filesystem.writeFile(params.uri, params.contents);
    }

    async readFile(params: { uri: Uri; }): Promise<string> {
        return this.filesystem.readFile(params.uri);
    }

    genSfdxProjectUri() {
        const sfdxProjectUri = getSfdxProjectUri({
            currentDir: this.getCurrentDir()
        });
        return sfdxProjectUri;
    }
}

export function generateProgressToken() {
    const history: ProgressHistory[] = [];

    const listeners: OnCancellationRequestedListener[] = [];

    const currentProgressToken: MockProgressToken = {
        isCancellationRequested: false,
        report: function (params: { progress: number; title?: string; }): void {
            history.push({
                progress: params.progress,
                title: params.title
            });
            this.progress = params.progress;
            if (params.title) {
                this.title = params.title;
            }
        },
        onCancellationRequested(listener) {
            listeners.push(listener);
        },
        progress: 0,
        title: '',
        getProgressHistoryAt(index) {
            return history[index];
        },
        async cancel() {
            this.isCancellationRequested = true;
            const promises = listeners.map(listener => listener());
            await Promise.all(promises);
        }
    };
    return currentProgressToken;
}

export interface ProgressHistory {
    progress: number;
    title?: string;
}

export interface MockProgressToken extends ProgressToken {
    progress: number;
    title: string;
    getProgressHistoryAt(index: number): ProgressHistory | undefined;
    cancel: () => Promise<void>;
}