import { Command, CommandExecuteResult, Diagnostic, IntegratedDevelopmentEnvironment, TextLine, Uri } from "../../integratedDevelopmentEnvironment";
import { ProgressToken } from "../../progressToken";

function nonStartedQuickPick(item: string): void {
    throw new Error('Show Quick is not being shown.');
}

export class MockIDE extends IntegratedDevelopmentEnvironment {
    selectQuickPickItem: (item: string) => void;

    private _waitForShowQuickPickResolve: (value: unknown) => void;
    private shownErrorMessages: string[];
    private shownWarningMessages: string[];
    private shownWindowLoadingMessages: string[];
    private diagnostics: Map<Uri, Diagnostic[]>;
    private config: Map<string, any>;
    private filesystem: Map<string, Uri>;
    private _didFocusProblemsTab: boolean;
    private currentProgressToken: MockProgressToken | null;

    constructor() {
        super();
        this.selectQuickPickItem = nonStartedQuickPick;
        this._waitForShowQuickPickResolve = () => { };
        this.shownErrorMessages = [];
        this.shownWarningMessages = [];
        this.shownWindowLoadingMessages = [];
        this.diagnostics = new Map<Uri, Diagnostic[]>();
        this.config = new Map<string, any>();
        this.filesystem = new Map<string, Uri>();
        this._didFocusProblemsTab = false;
        this.currentProgressToken = null;
    }

    async withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string; }): Promise<T> {
        this.shownWindowLoadingMessages.push(options.title);

        this.currentProgressToken = {
            isCancellationRequested: false,
            report: function (params: { progress: number; title? : string }): void {
                this.progress = params.progress;
                if (params.title) {
                    this.title = params.title;
                }
            },
            progress: 0,
            title : ''
        };
        const result = await toMonitor(this.currentProgressToken);
        return result;
    }

    getCurrentProgressToken(): MockProgressToken | null {
        return this.currentProgressToken;
    }

    public didShowWindowLoadingMessageWith(title: string): boolean {
        return this.shownWindowLoadingMessages.includes(title);
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

    async findFile(glob: string): Promise<Uri | null> {
        const regexed = glob.replace('*', '\\*').replace('/', '\\/');
        const re = new RegExp(regexed);

        const filePaths = this.filesystem.keys();

        let foundFile = null;
        for (const filePath of filePaths) {
            if (re.test(filePath)) {
                if (foundFile) {
                    throw new Error(`Found more than one file matching ${glob}.`);
                }

                foundFile = this.filesystem.get(filePath) || null;
            }
        }
        return foundFile;
    }

    addFile(uri: Uri) {
        this.filesystem.set(uri.getValue(), uri);
    }

    getConfig<T>(property: string, defaultValue: T): T {
        const value = this.config.get(property);
        if (!value) {
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
        this.diagnostics.set(uri, diagnostics);
    }

    didSetDiagnosticsFor(uri: Uri): boolean {
        const diagnostics = this.diagnostics.get(uri);
        if (!diagnostics) {
            return false;
        }
        return diagnostics.length !== 0;
    }

    didSetAnyDiagnostics(): boolean {
        return this.diagnostics.size !== 0;
    }

    getDiagnosticsFor(uri : Uri) : Diagnostic[] {
        const diagnostics = this.diagnostics.get(uri);
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

    didShowAnyWarningMessage() : boolean {
        return this.shownWarningMessages.length !== 0;
    }

    showOutput(params: { logs: string[]; show: true; }): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getHighlightedText(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    readLineAt(params: { uri: Uri; line: number; }): Promise<TextLine> {
        throw new Error("Method not implemented.");
    }
}

export interface MockProgressToken extends ProgressToken {
    progress: number;
    title : string;
}