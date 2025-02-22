import { ActiveTextEditor, Command, CommandExecuteResult, Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, ShowInputBoxOptions, ShowTextDocumentOptions, TextDocument, TextLine, Uri, ViewColumn } from "./integratedDevelopmentEnvironment";
import { ApexTestResult } from './apexTestRunResult';
import * as vscode from 'vscode';
import { Range } from "./range";
import { Position } from "./position";
import { OnCancellationRequestedListener, ProgressToken } from "./progressToken";
import { Logger } from "./logger";
import * as path from 'path';
import { TextDecoder, TextEncoder } from "util";
import { OnSalesforceCliRunEvent, SalesforceCli, SalesforceCliHistory, SalesforceCliInputOutput } from "./salesforceCli";
import { TestItem as ZfTestItem } from './runTestUnderCursorCommand';
import { MetadataTreeNode } from "./metadataExplorerTreeView";
import { ZoqlScriptsTreeView, ZoqlScriptTreeNode } from "./soql/zoqlTreeView";

function getCurrentDir(): Uri {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        const uriMapper = new UriMapper();
        const vscodeUri = vscode.workspace.workspaceFolders[0].uri;
        return uriMapper.intoDomainRepresentation(vscodeUri);
    }
    throw new Error('Cannot use extension without at least one workspace folder.');
}

export class VsCode extends IntegratedDevelopmentEnvironment {
    async showInputBox(options?: ShowInputBoxOptions): Promise<string> {
        const input = await vscode.window.showInputBox({
            title: options?.title ?? "Did not put in title",
            validateInput: options.validateInput
        });
        return input;
    }

    private readonly diagnosticCollection: vscode.DiagnosticCollection;
    private readonly outputChannel: vscode.LogOutputChannel;

    constructor () {
        super({ currentDir: getCurrentDir() });
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection('Salesforce Apex Cody');
        this.outputChannel = vscode.window.createOutputChannel('sf-zsi', { log: true });

        vscode.workspace.onDidSaveTextDocument((e: vscode.TextDocument) => {
            const uriMapper = new UriMapper();
            const domainUri = uriMapper.intoDomainRepresentation(e.uri);
            this.didSaveFile({
                languageId: e.languageId,
                uri: domainUri,
                contents: e.getText()
            });
        });

        vscode.workspace.onDidChangeTextDocument(({ document }) => {
            const uriMapper = new UriMapper();
            const textDocument: TextDocument = {
                contents: document.getText(),
                languageId: document.languageId,
                uri: uriMapper.intoDomainRepresentation(document.uri)
            };
            this.textDocumentChanged(textDocument);
        });
    }

    async readLineAt(params: {
        uri: Uri,
        line: number;
    }) {
        const uriMapper = new UriMapper();
        const textDocument = await vscode.workspace.openTextDocument(uriMapper.intoVsCodeRepresentation(params.uri));
        const vscodeTextDoc = textDocument.lineAt(params.line);
        return new TextLine({
            text: vscodeTextDoc.text
        });
    }

    generateLogger(): Logger {
        const that = this;
        let shown = false;

        class VsCodeLogger extends Logger {
            write(message: string): void {
                that.outputChannel.append(message);

                if (!shown) {
                    that.outputChannel.show();
                    shown = true;
                }
            }
        }

        return new VsCodeLogger();
    }

    withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string; isCancellable?: boolean; }): Promise<T> {
        return new Promise((resolve, reject) => {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: options.title,
                cancellable: options.isCancellable === undefined ? true : options.isCancellable
            }, async (progress, cancelToken) => {
                try {
                    let currentProgress = 0;

                    const listeners: OnCancellationRequestedListener[] = [];
                    const progressToken: ProgressToken = {
                        get isCancellationRequested() {
                            return cancelToken.isCancellationRequested;
                        },
                        report: function (params: { progress: number; title?: string; }): void {
                            progress.report({
                                increment: params.progress - currentProgress,
                                message: params.title || undefined
                            });
                            currentProgress = params.progress;
                        },
                        onCancellationRequested(listener: OnCancellationRequestedListener) {
                            listeners.push(listener);
                        }
                    };
                    cancelToken.onCancellationRequested(async () => {
                        const promises = listeners.map(listener => listener());
                        await Promise.all(promises);
                    });

                    const result = await toMonitor(progressToken);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    withStatusBarMessage<T>(toMonitor: () => Promise<T>, options: { title: string; }) {
        return new Promise(resolve => {
            const promise = toMonitor();
            vscode.window.setStatusBarMessage(options.title, promise);
            promise.then(value => {
                resolve(value);
            });
        });
    }

    showQuickPick(items: string[]): Thenable<string> {
        return new Promise(resolve => {
            vscode.window.showQuickPick(items).then(result => {
                resolve(result ? result : '');
            });
        });
    }

    showErrorMessage(message: string): Promise<void> {
        return new Promise(resolve => {
            vscode.window.showErrorMessage(message).then(() => {
                resolve();
            });
        });
    }

    showInformationMessage(message: string, options?: {
        label: string;
    }[]): Promise<string> {
        const choices = () => {
            if (options) {
                return options?.map(option => option.label);
            } else {
                return [];
            }
        };

        return new Promise(resolve => {
            vscode.window.showInformationMessage(message, ...choices()).then((result) => {
                resolve(result);
            });
        });
    }

    async showTextDocument(uri: Uri, options: ShowTextDocumentOptions): Promise<void> {
        const intoVsCodeNumber = (viewColumn: ViewColumn) => {
            if (viewColumn === ViewColumn.active) {
                return -1;
            }
            else if (viewColumn === ViewColumn.besides) {
                return -2;
            } else {
                throw new Error(`There was an unknown view column ${viewColumn}`);
            }
        };

        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(uri);
        const document = await vscode.workspace.openTextDocument(vscodeUri);

        if (options?.viewColumn !== undefined) {
            await vscode.window.showTextDocument(document, {
                viewColumn: intoVsCodeNumber(options.viewColumn)
            });
        } else {
            await vscode.window.showTextDocument(document);
        }
    }

    showWarningMessage(message: string): Promise<void> {
        return new Promise(resolve => {
            vscode.window.showWarningMessage(message).then(() => {
                resolve();
            });
        });
    }

    findFile(glob: string, base?: Uri): Promise<Uri | null> {
        return new Promise((resolve, reject) => {
            this.findFiles(glob, base).then(uris => {
                if (uris.length > 1) {
                    reject(`Found more than one file matching ${glob}.`);
                } else {
                    if (uris.length === 1) {
                        resolve(uris[0]);
                    } else {
                        resolve(null);
                    }
                }
            });
        });
    }

    findFiles(glob: string, base?: Uri): Promise<Uri[]> {
        const toSearchWith = () => {
            const uriMapper = new UriMapper();
            if (base) {
                const vsCodeUri = uriMapper.intoVsCodeRepresentation(base);
                return new vscode.RelativePattern(vsCodeUri, glob);
            } else {
                return glob;
            }
        };

        return new Promise((resolve, reject) => {
            vscode.workspace.findFiles(toSearchWith()).then(vscodeUris => {
                const uriMapper = new UriMapper();
                const uris = vscodeUris.map(vscodeUri => {
                    return uriMapper.intoDomainRepresentation(vscodeUri);
                });
                resolve(uris);
            });
        });
    }

    getConfig<T>(property: string, defaultValue: T): T {
        const config = vscode.workspace.getConfiguration();
        const value = config.get<T>(property);

        if (value === undefined) {
            return defaultValue;
        }
        return value;
    }

    execute(command: Command): Promise<CommandExecuteResult> {
        return new Promise(resolve => {
            vscode.commands.executeCommand(command.commandName).then(() => {
                resolve({});
            });
        });
    }

    setDiagnostics(uri: Uri, diagnostics: Diagnostic[]): void {
        const uriMapper = new UriMapper();
        const diagnosticsMapper = new DiagnosticsMapper();

        const vscodeUri = uriMapper.intoVsCodeRepresentation(uri);
        const vscodeDiagnostics = diagnosticsMapper.intoVsCodeRepresentation(diagnostics);
        this.diagnosticCollection.set(vscodeUri, vscodeDiagnostics);
    }

    clearDiagnostics(): void {
        this.diagnosticCollection.clear();
    }

    async focusProblemsTab(): Promise<void> {
        await this.execute({
            commandName: 'workbench.actions.view.problems'
        });
    }

    async showOutput(params: { logs: string[]; show: true; }): Promise<void> {
        this.outputChannel.clear();
        params.logs.forEach(log => {
            this.outputChannel.appendLine(log);
        });
        this.outputChannel.show(!params.show);
    }

    async getHighlightedText(): Promise<string> {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            if (selection && !selection.isEmpty) {
                const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
                const highlighted = editor.document.getText(selectionRange);
                return highlighted;
            }
        }
        return '';
    }

    async getText(params: { uri: Uri; range: Range; }): Promise<TextLine> {
        const uriMapper = new UriMapper();
        const textDocument = await vscode.workspace.openTextDocument(uriMapper.intoVsCodeRepresentation(params.uri));

        const rangeMapper = new RangeMapper();
        const vscodeRange = rangeMapper.intoVsCodeRepresentation(params.range);

        const text = textDocument.getText(vscodeRange);
        return new TextLine({
            text
        });
    }

    public async deleteTextDocument(uri: Uri): Promise<void> {
        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(uri);

        return vscode.workspace.fs.delete(vscodeUri, {
            recursive: true
        });
    }

    public async getActiveTextEditor(): Promise<ActiveTextEditor | null> {
        const activeTextEditor = vscode.window.activeTextEditor;
        if (activeTextEditor) {
            const uriMapper = new UriMapper();
            const vscodeUri = activeTextEditor.document.uri;
            const contents = activeTextEditor.document.getText();
            return {
                uri: uriMapper.intoDomainRepresentation(vscodeUri),
                contents
            };
        } else {
            return null;
        }
    }

    public async writeFile(params: { uri: Uri; contents: string; }): Promise<void> {
        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(params.uri);

        const textEncoding = new TextEncoder();
        await vscode.workspace.fs.writeFile(vscodeUri, textEncoding.encode(params.contents));
    }

    public async readFile(params: { uri: Uri; }): Promise<string> {
        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(params.uri);

        const file = await vscode.workspace.fs.readFile(vscodeUri);

        const textDecoding = new TextDecoder();
        return textDecoding.decode(file.buffer);
    }

    public generateTestItem(child: vscode.TestItem, testRun: vscode.TestRun) {
        const ide = this;
        const zfTestItem: ZfTestItem = {
            get identifier() {
                return child.id;
            },
            get busy() {
                return child.busy;
            },
            set busy(_busy) {
                child.busy = _busy;
            },
            start: function (): string {
                child.busy = true;
                testRun.started(child);
                return child.id;
            },
            passed: function (): void {
                child.busy = false;
                testRun.passed(child);
            },
            failed: function (failure: ApexTestResult | undefined, uri: Uri | undefined) {
                child.busy = false;
                if (failure) {
                    const testMessage = new vscode.TestMessage(failure.getFailureMessage());

                    const location = failure.getLocation();
                    if (location && uri) {
                        const vscodeUriMapper = new UriMapper();
                        const vscodeUri = vscodeUriMapper.intoVsCodeRepresentation(uri);

                        const positionMapper = new PositionMapper();
                        const vscodePosition = positionMapper.intoVsCodeRepresentation(location.position);

                        testMessage.location = new vscode.Location(vscodeUri, vscodePosition);
                    }

                    testRun.failed(child, testMessage);
                }
            },
            skipped() {
                child.busy = false;
                testRun.skipped(child);
            },
            get parent() {
                return child.parent && ide.generateTestItem(child.parent, testRun);
            },
            get children() {
                const _children: ZfTestItem[] = [];
                child.children.forEach(childTestItem => {
                    _children.push(ide.generateTestItem(childTestItem, testRun));
                });
                return _children;
            }
        };
        return zfTestItem;
    }
}

export class UriMapper {
    intoVsCodeRepresentation(uri: Uri) {
        const vscodeUri = vscode.Uri.from({
            scheme: uri.getScheme(),
            path: uri.getFileSystemPath()
        });
        return vscodeUri;
    }

    intoDomainRepresentation(uri: vscode.Uri) {
        const domainUri = Uri.from({
            scheme: uri.scheme,
            fileSystemPath: uri.fsPath
        });
        return domainUri;
    }
}

class DiagnosticsMapper {
    intoVsCodeRepresentation(diagnostics: Diagnostic[]) {
        const diagnosticMapper = new DiagnosticMapper();
        const vscodeDiagnostics = diagnostics.map(diagnostic => diagnosticMapper.intoVsCodeRepresentation(diagnostic));
        return vscodeDiagnostics;
    }

}

class DiagnosticMapper {
    intoVsCodeRepresentation(diagnostic: Diagnostic) {
        const rangeMapper = new RangeMapper();
        const diagnosticSeverityMapper = new DiagnosticSeverityMapper();

        const vscodeRange = rangeMapper.intoVsCodeRepresentation(diagnostic.getRange());
        const vscodeSeverity = diagnosticSeverityMapper.intoVsCodeRepresentation(diagnostic.getSeverity());

        const vscodeDiagnostic = new vscode.Diagnostic(vscodeRange, diagnostic.getProblem(), vscodeSeverity);
        return vscodeDiagnostic;
    }
}

export class RangeMapper {
    intoVsCodeRepresentation(range: Range) {
        const positionMapper = new PositionMapper();
        const vscodePosition = positionMapper.intoVsCodeRepresentation(range.getStart());
        const vscodeRange = new vscode.Range(vscodePosition, vscodePosition);
        return vscodeRange;
    }
}

class PositionMapper {
    intoVsCodeRepresentation(position: Position) {
        const vscodePosition = new vscode.Position(position.getLineNumber(), position.getColumnNumber());
        return vscodePosition;
    }
}

class DiagnosticSeverityMapper {
    intoVsCodeRepresentation(severity: DiagnosticSeverity) {
        switch (severity) {
            case DiagnosticSeverity.error:
                return vscode.DiagnosticSeverity.Error;
            default:
                throw new Error(`Severity ${severity} is not a known enum value.`);
        }

    }
}

class VscodeCliInputOutputTreeNode extends vscode.TreeItem {

    public readonly cliInputOutput: SalesforceCliInputOutput;

    public constructor ({ treeNode }: {
        treeNode: SalesforceCliInputOutput;
    }) {
        super(treeNode.getViewableCliInput(), vscode.TreeItemCollapsibleState.None);
        this.cliInputOutput = treeNode;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}

export class VscodeCliInputOutputTreeView implements vscode.TreeDataProvider<VscodeCliInputOutputTreeNode> {

    private readonly eventEmitter: vscode.EventEmitter<VscodeCliInputOutputTreeNode | undefined>;

    private readonly history: SalesforceCliHistory;

    public constructor ({ history }: {
        history: SalesforceCliHistory;
    }) {
        this.history = history;
        this.eventEmitter = new vscode.EventEmitter<VscodeCliInputOutputTreeNode | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;

        this.history.registerOnSalesforceCliRunListener(async (e: OnSalesforceCliRunEvent) => {
            this.eventEmitter.fire(undefined);
        });
    }

    onDidChangeTreeData?: vscode.Event<void | VscodeCliInputOutputTreeNode | VscodeCliInputOutputTreeNode[] | null | undefined> | undefined;

    getTreeItem(element: VscodeCliInputOutputTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: VscodeCliInputOutputTreeNode | undefined): vscode.ProviderResult<VscodeCliInputOutputTreeNode[]> {
        if (!element) {
            return this.history.map(cliInputOutput => {
                return new VscodeCliInputOutputTreeNode({
                    treeNode: cliInputOutput
                });
            });
        } else {
            return [];
        }
    }
    getParent?(element: VscodeCliInputOutputTreeNode): vscode.ProviderResult<VscodeCliInputOutputTreeNode> {
        return null;
    }
    resolveTreeItem?(item: vscode.TreeItem, element: VscodeCliInputOutputTreeNode, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }
}

export class VscodeMetadataTreeView implements vscode.TreeDataProvider<VscodeMetadataTreeNode> {

    private readonly rootNode: VscodeMetadataTreeNode;

    public constructor ({
        rootNode
    }: { rootNode: VscodeMetadataTreeNode; }) {
        this.rootNode = rootNode;
    }

    getTreeItem(element: VscodeMetadataTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: VscodeMetadataTreeNode): vscode.ProviderResult<VscodeMetadataTreeNode[]> {
        if (element) {
            return element.getChildren();
        } else {
            return [this.rootNode];
        }
    }
}


export class VscodeMetadataTreeNode extends vscode.TreeItem {
    private static getTreeItemCollapsibleState(metadataTreeNode: MetadataTreeNode) {
        if (metadataTreeNode.nodeType === 0 || metadataTreeNode.nodeType === 1) {
            return vscode.TreeItemCollapsibleState.Collapsed;
        } else {
            return vscode.TreeItemCollapsibleState.None;
        }
    }

    private static getWhenValueContext(metadataTreeNode: MetadataTreeNode) {
        if (metadataTreeNode.nodeType === 0) {
            return 'METADATA_ROOT_NODE';
        } else if (metadataTreeNode.nodeType === 1) {
            return 'METADATA_TYPE_NODE';
        } else {
            return 'METADATA_NAME_NODE';
        }
    }

    public readonly metadataTreeNode: MetadataTreeNode;
    public constructor ({
        metadataTreeNode
    }: { metadataTreeNode: MetadataTreeNode; }) {
        super(metadataTreeNode.name, VscodeMetadataTreeNode.getTreeItemCollapsibleState(metadataTreeNode));
        this.metadataTreeNode = metadataTreeNode;
        this.contextValue = VscodeMetadataTreeNode.getWhenValueContext(this.metadataTreeNode);
    }

    public getChildren() {
        if (this.metadataTreeNode.nodeType === 0) {
            return this.metadataTreeNode.types.map(type => {
                return new VscodeMetadataTreeNode({
                    metadataTreeNode: type
                });
            });
        } else if (this.metadataTreeNode.nodeType === 1) {
            return this.metadataTreeNode.members.map(member => {
                return new VscodeMetadataTreeNode({
                    metadataTreeNode: member
                });
            });
        } else {
            return [];
        }
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}

export class VscodeZoqlScriptTreeNode extends vscode.TreeItem {
    public readonly zoqlScript: ZoqlScriptTreeNode;

    public constructor ({ zoqlScript }: {
        zoqlScript: ZoqlScriptTreeNode;
    }) {
        super(zoqlScript.label, vscode.TreeItemCollapsibleState.None);
        this.zoqlScript = zoqlScript;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'db.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'db.svg')
    };
}

export class VscodeZoqlScriptsTreeView implements vscode.TreeDataProvider<VscodeZoqlScriptTreeNode> {

    private elements: VscodeZoqlScriptTreeNode[];
    private readonly eventEmitter: vscode.EventEmitter<VscodeZoqlScriptTreeNode | undefined>;
    private zoqlScriptsTreeView: ZoqlScriptsTreeView;

    constructor ({ zoqlScriptsDir, cli, ide }: { zoqlScriptsDir: Uri; cli: SalesforceCli; ide: IntegratedDevelopmentEnvironment; }) {
        this.eventEmitter = new vscode.EventEmitter<VscodeZoqlScriptTreeNode | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;
        this.elements = [];

        this.zoqlScriptsTreeView = new ZoqlScriptsTreeView({
            zoqlScriptsDir, ide, cli, onDidChangeTreeDataListener: async ({ treeNode }) => {
                if (!treeNode) {
                    this.eventEmitter.fire(undefined);
                } else {
                    const element = this.elements.find(element => element.zoqlScript.uri.equals(treeNode.uri));
                    if (element) {
                        element.label = treeNode.label;
                        this.eventEmitter.fire(element);
                    } else {
                        this.elements.push(new VscodeZoqlScriptTreeNode({
                            zoqlScript: treeNode
                        }));
                        this.eventEmitter.fire(element);
                    }
                }
            }
        });
    }

    async refresh() {
        await this.zoqlScriptsTreeView.refresh();
    }

    async create() {
        await this.zoqlScriptsTreeView.create();
    }

    async open(treeNode: VscodeZoqlScriptTreeNode) {
        await this.zoqlScriptsTreeView.open(treeNode.zoqlScript);
    }

    onDidChangeTreeData?: vscode.Event<void | VscodeZoqlScriptTreeNode | VscodeZoqlScriptTreeNode[]>;
    getTreeItem(element: VscodeZoqlScriptTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: VscodeZoqlScriptTreeNode): vscode.ProviderResult<VscodeZoqlScriptTreeNode[]> {
        if (element) {
            return [];
        }
        return this.elements;
    }
    getParent?(element: VscodeZoqlScriptTreeNode): vscode.ProviderResult<VscodeZoqlScriptTreeNode> {
        return null;
    }
    resolveTreeItem?(item: vscode.TreeItem, element: VscodeZoqlScriptTreeNode, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }
}