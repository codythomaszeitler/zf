import { ActiveTextEditor, Command, CommandExecuteResult, Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, TextLine, Uri } from "./integratedDevelopmentEnvironment";
import * as vscode from 'vscode';
import { Range } from "./range";
import { Position } from "./position";
import { ProgressToken } from "./progressToken";
import { Logger } from "./logger";
import * as path from 'path';
import { ApexLog } from "./apexLog";
import { TreeNode } from "./treeNode";
import { RefreshListener, TreeView } from "./treeView";
import { SalesforceOrg } from "./salesforceOrg";
import { TextDecoder, TextEncoder } from "util";
import { ExecutorCommand, basename } from "./executor";

function getCurrentDir(): Uri {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        const uriMapper = new UriMapper();
        const vscodeUri = vscode.workspace.workspaceFolders[0].uri;
        return uriMapper.intoDomainRepresentation(vscodeUri);
    }
    throw new Error('Cannot use extension without at least one workspace folder.');
}

export class VsCode extends IntegratedDevelopmentEnvironment {

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
                uri: domainUri
            });
        });
    }

    async readLineAt(params: {
        uri: Uri,
        line: number
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

    withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string; isCancellable?: boolean }): Promise<T> {
        return new Promise((resolve, reject) => {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: options.title,
                cancellable: options.isCancellable === undefined ? true : options.isCancellable
            }, async (progress, cancelToken) => {
                try {
                    let currentProgress = 0;
                    const progressToken: ProgressToken = {
                        get isCancellationRequested() {
                            return cancelToken.isCancellationRequested;
                        },
                        report: function (params: { progress: number; title?: string }): void {
                            progress.report({
                                increment: params.progress - currentProgress,
                                message: params.title || undefined
                            });
                            currentProgress = params.progress;
                        }
                    };

                    const result = await toMonitor(progressToken);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
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

    showInformationMessage(message: string): Promise<void> {
        return new Promise(resolve => {
            vscode.window.showInformationMessage(message).then(() => {
                resolve();
            });
        });
    }

    async showTextDocument(uri: Uri): Promise<void> {
        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(uri);
        const document = await vscode.workspace.openTextDocument(vscodeUri);
        await vscode.window.showTextDocument(document);
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
            commandName: 'workbench.panel.markers.view.focus'
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

    public async registerTreeView<T>(params: { treeView: TreeView<T>; targetOrg?: SalesforceOrg; }): Promise<void> {
        if (params.treeView.uniqueName === 'server-side-apex-logs') {
            await this.registerServerSideApexLogProvider<T>(params);
        }
    }

    private async registerServerSideApexLogProvider<T>(params: { treeView: TreeView<T>; targetOrg?: SalesforceOrg; }) {
        const getRootNode = async () => {
            if (!params.targetOrg) {
                return undefined;
            }

            const rootNode = await params.treeView.getRootNode({
                targetOrg: params.targetOrg
            });

            const root: TreeNode<ApexLog> = rootNode as TreeNode<ApexLog>;
            return root;
        };

        const apexServerSideLogTreeProvider = new ApexLogTreeProvider({
            root: await getRootNode()
        });

        params.treeView.registerOnRefreshListener(apexServerSideLogTreeProvider as RefreshListener<TreeNode<T>>);

        const treeView = vscode.window.createTreeView(params.treeView.uniqueName, {
            treeDataProvider: apexServerSideLogTreeProvider
        });

        treeView.onDidChangeSelection(async (e) => {
            if (e.selection.length === 0) {
                return;
            }
            const selection = e.selection[0];
            if (!selection.treeNode.value) {
                return;
            }

            const apexLog = selection.treeNode.value as T;
            params.treeView.onSelect({
                value: apexLog
            });
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

            return {
                uri: uriMapper.intoDomainRepresentation(vscodeUri)
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
}

class UriMapper {
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

class RangeMapper {
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

class ApexLogTreeNode extends vscode.TreeItem {

    public readonly treeNode: TreeNode<ApexLog>;

    public constructor (params: {
        treeNode: TreeNode<ApexLog>
    }) {
        super(params.treeNode.label, params.treeNode.value ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Expanded);
        this.treeNode = params.treeNode;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}

class ApexLogTreeProvider implements vscode.TreeDataProvider<ApexLogTreeNode>, RefreshListener<TreeNode<ApexLog>> {

    private root?: TreeNode<ApexLog>;

    private readonly eventEmitter: vscode.EventEmitter<ApexLogTreeNode | undefined>;

    public constructor (params: {
        root?: TreeNode<ApexLog>
    }) {
        this.root = params.root;
        this.eventEmitter = new vscode.EventEmitter<ApexLogTreeNode | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;
    }

    onDidChangeTreeData?: vscode.Event<void | ApexLogTreeNode | ApexLogTreeNode[] | null | undefined> | undefined;

    getTreeItem(element: ApexLogTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: ApexLogTreeNode | undefined): vscode.ProviderResult<ApexLogTreeNode[]> {
        if (element) {
            return element.treeNode.children.map(treeNode => new ApexLogTreeNode({
                treeNode
            }));
        } else {
            if (!this.root) {
                return [];
            }
            return [
                new ApexLogTreeNode({
                    treeNode: this.root
                })
            ];
        }
    }

    getParent?(element: ApexLogTreeNode): vscode.ProviderResult<ApexLogTreeNode> {
        return null;
    }

    resolveTreeItem?(item: vscode.TreeItem, element: ApexLogTreeNode, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }

    async onTreeViewRefresh(e: { root: TreeNode<ApexLog>; }): Promise<void> {
        this.root = e.root;
        this.eventEmitter.fire(undefined);
    }
}

export class CliInputOutput {

    private readonly command: ExecutorCommand;
    private readonly output: {
        stdout: string
    };

    public constructor ({
        command,
        output,
    }: {
        command: ExecutorCommand,
        output: {
            stdout: string
        },
    }) {
        this.command = command;
        this.output = output;
    }

    public getLabel() {
        const date = new Date();
        const label = `${basename(this.command)} - ${date.toLocaleString()}`;
        return label;
    }

    public getJson(): string {
        return JSON.stringify(this.output.stdout, null, 2);
    }
}

class VscodeCliInputOutputTreeNode extends vscode.TreeItem {

    public readonly cliInputOutput: CliInputOutput;

    public constructor ({ treeNode }: {
        treeNode: CliInputOutput
    }) {
        super(treeNode.getLabel(), vscode.TreeItemCollapsibleState.None);
        this.cliInputOutput = treeNode;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}

export class VscodeCliInputOutputTreeView implements vscode.TreeDataProvider<VscodeCliInputOutputTreeNode>{

    private readonly eventEmitter: vscode.EventEmitter<VscodeCliInputOutputTreeNode | undefined>;

    private readonly cliInputOutputs: CliInputOutput[];

    public constructor ({ cliInputOutputs }: {
        cliInputOutputs: CliInputOutput[]
    }) {
        this.cliInputOutputs = cliInputOutputs;
        this.eventEmitter = new vscode.EventEmitter<VscodeCliInputOutputTreeNode | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;

        const savedPush = this.cliInputOutputs.push.bind(this.cliInputOutputs);

        const eventEmitter = this.eventEmitter;
        this.cliInputOutputs.push = function (...items: CliInputOutput[]) {
            eventEmitter.fire(undefined);
            return savedPush(...items);
        };
    }

    onDidChangeTreeData?: vscode.Event<void | VscodeCliInputOutputTreeNode | VscodeCliInputOutputTreeNode[] | null | undefined> | undefined;

    getTreeItem(element: VscodeCliInputOutputTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: VscodeCliInputOutputTreeNode | undefined): vscode.ProviderResult<VscodeCliInputOutputTreeNode[]> {
        if (!element) {
            return this.cliInputOutputs.map(cliInputOutput => {
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