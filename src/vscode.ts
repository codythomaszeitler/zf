import { Command, CommandExecuteResult, Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, TextLine, Uri } from "./integratedDevelopmentEnvironment";
import * as vscode from 'vscode';
import { Range } from "./range";
import { Position } from "./position";
import { ProgressToken } from "./progressToken";
import { Logger } from "./logger";
import { ApexLogDirectoryReadCommand, InFileApexLog } from "./apexLogDirectoryReadCommand";
import { SalesforceCli } from "./salesforceCli";
import * as path from 'path';
import { ApexLog } from "./apexLog";
import { TreeNode } from "./treeNode";
import { ServerSideApexLogTreeGenerateCommand } from "./serverSideApexLogTreeGenerateCommand";

export class VsCode extends IntegratedDevelopmentEnvironment {

    private readonly diagnosticCollection: vscode.DiagnosticCollection;
    private readonly outputChannel: vscode.LogOutputChannel;

    constructor() {
        super();
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection('Salesforce Apex Cody');
        this.outputChannel = vscode.window.createOutputChannel('sf-zsi', { log: true });
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

    withProgress<T>(toMonitor: (progressToken: ProgressToken) => Promise<T>, options: { title: string; }): Promise<T> {
        return new Promise((resolve, reject) => {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: options.title,
                cancellable: true
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

    showWarningMessage(message: string): Promise<void> {
        return new Promise(resolve => {
            vscode.window.showWarningMessage(message).then(() => {
                resolve();
            });
        });
    }

    findFile(glob: string): Promise<Uri | null> {
        return new Promise((resolve, reject) => {
            vscode.workspace.findFiles(glob).then(uris => {
                if (uris.length > 1) {
                    reject(`Found more than one file matching ${glob}.`);
                } else {
                    const uriMapper = new UriMapper();
                    if (uris.length === 1) {
                        const domainUri = uriMapper.intoDomainRepresentation(uris[0]);
                        resolve(domainUri);
                    } else {
                        resolve(null);
                    }
                }
            });
        });
    }

    findFiles(glob: string): Promise<Uri[]> {
        return new Promise((resolve, reject) => {
            vscode.workspace.findFiles(glob).then(vscodeUris => {
                const uris = vscodeUris.map(vscodeUri => {
                    const uriMapper = new UriMapper();
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
}

class UriMapper {
    intoVsCodeRepresentation(uri: Uri) {
        const vscodeUri = vscode.Uri.parse(uri.getValue());
        return vscodeUri;
    }

    intoDomainRepresentation(uri: vscode.Uri) {
        const domainUri = Uri.get(uri.toString());
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

export function createTreeView(params: {
    cli: SalesforceCli,
    ide: IntegratedDevelopmentEnvironment,
    logDir: string
}) {
    const apexLogTreeProvider = new ApexLogTreeProvider({
        cli: params.cli,
        ide: params.ide,
        logDir: params.logDir
    });

    const treeView = vscode.window.createTreeView('apex-logs', {
        treeDataProvider: apexLogTreeProvider
    });

    const fileSystemWatcher = vscode.workspace.createFileSystemWatcher(`**/*.log`);
    fileSystemWatcher.onDidCreate(() => {
        apexLogTreeProvider.refresh();
    });
    fileSystemWatcher.onDidChange(() => {
        apexLogTreeProvider.refresh();
    });
    fileSystemWatcher.onDidDelete(() => {
        apexLogTreeProvider.refresh();
    });

    treeView.onDidChangeSelection(async (e) => {
        if (e.selection.length === 0) {
            return;
        }

        const selection = e.selection[0];
        const uriMapper = new UriMapper();
        const vscodeUri = uriMapper.intoVsCodeRepresentation(selection.apexLog.uri);
        const document = await vscode.workspace.openTextDocument(vscodeUri);
        vscode.window.showTextDocument(document);
    });

    return treeView;
}


export async function createServerSideApexLogTree(params: {
    cli: SalesforceCli,
    ide: IntegratedDevelopmentEnvironment,
    logDir: string
}) {
    const defaultOrg = await params.cli.getDefaultOrg();
    if (!defaultOrg) {
        return;
    }

    const serverSideLogGenerateCommand = new ServerSideApexLogTreeGenerateCommand(params);
    const treeNode = await serverSideLogGenerateCommand.execute({
        targetOrg: defaultOrg
    });

    const apexServerSideLogTreeProvider = new ServerSideApexLogTreeProvider({
        root: treeNode
    });

    const treeView = vscode.window.createTreeView('server-side-apex-logs', {
        treeDataProvider: apexServerSideLogTreeProvider
    });

    treeView.onDidChangeSelection(async (e) => {
        await params.ide.withProgress(async (progressToken) => {
            if (e.selection.length === 0) {
                return;
            }

            const selection = e.selection[0];
            if (!selection.treeNode.value) {
                return;
            }

            const id = selection.treeNode.value.getId();

            const hasFile = async () => {
                const uri = await params.ide.findFile(`**/${id.toString()}.log`);
                return !!uri;
            };

            progressToken.report({
                progress: 25,
                title: 'Checking if file exists'
            });
            if (!(await hasFile())) {
                progressToken.report({
                    progress: 50,
                    title: `Getting log file ${id.toString()}`
                });
                await params.cli.apexGetLog({
                    targetOrg: defaultOrg,
                    logDir: params.logDir,
                    logId: id,
                    numLogs: undefined
                });
            }

            progressToken.report({
                progress: 75,
                title: `Opening log file ${id.toString()}`
            });
            const uri = await params.ide.findFile(`**/${id.toString()}.log`);
            if (!uri) {
                params.ide.showWarningMessage(`Could not find log matching ${id.toString()}.`);
                return;
            }

            const uriMapper = new UriMapper();
            const vscodeUri = uriMapper.intoVsCodeRepresentation(uri);
            const document = await vscode.workspace.openTextDocument(vscodeUri);
            vscode.window.showTextDocument(document);
        }, {
            title: 'Opening Log File'
        });


    });
}

class ServerSideApexLogTreeNode extends vscode.TreeItem {

    public readonly treeNode : TreeNode<ApexLog>;

    public constructor(params: {
        treeNode: TreeNode<ApexLog>
    }) {
        super(params.treeNode.label, params.treeNode.value ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Expanded);
        this.treeNode = params.treeNode;
    }
}


export class ServerSideApexLogTreeProvider implements vscode.TreeDataProvider<ServerSideApexLogTreeNode> {

    private root: TreeNode<ApexLog>;

    public constructor(params: {
        root: TreeNode<ApexLog>
    }) {
        this.root = params.root;
    }
    onDidChangeTreeData?: vscode.Event<void | ServerSideApexLogTreeNode | ServerSideApexLogTreeNode[] | null | undefined> | undefined;

    getTreeItem(element: ServerSideApexLogTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: ServerSideApexLogTreeNode | undefined): vscode.ProviderResult<ServerSideApexLogTreeNode[]> {
        if (element) {
            return element.treeNode.children.map(treeNode => new ServerSideApexLogTreeNode({
                treeNode 
            }));
        } else {
            return [
                new ServerSideApexLogTreeNode({
                    treeNode : this.root
                })
            ];
        }
    }
    getParent?(element: ServerSideApexLogTreeNode): vscode.ProviderResult<ServerSideApexLogTreeNode> {
        return null;
    }
    resolveTreeItem?(item: vscode.TreeItem, element: ServerSideApexLogTreeNode, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }

    public refresh(root: TreeNode<ApexLog>) {

    }
}

export class ApexLogTreeProvider implements vscode.TreeDataProvider<ApexLogTreeItem> {

    private readonly cli: SalesforceCli;
    private readonly ide: IntegratedDevelopmentEnvironment;
    private readonly logDir: string;

    private readonly eventEmitter: vscode.EventEmitter<ApexLogTreeItem | undefined>;
    onDidChangeTreeData?: vscode.Event<void | ApexLogTreeItem | ApexLogTreeItem[] | null | undefined> | undefined;

    public constructor(params: {
        cli: SalesforceCli,
        ide: IntegratedDevelopmentEnvironment,
        logDir: string
    }) {
        this.cli = params.cli;
        this.ide = params.ide;
        this.logDir = params.logDir;

        this.eventEmitter = new vscode.EventEmitter<ApexLogTreeItem | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;
    }

    public refresh() {
        this.eventEmitter.fire(undefined);
    }

    public getTreeItem(element: ApexLogTreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    // So given some apex log tree item class... return the children that are underneath it.
    // I am assuming this gets called over and over and over again. 
    public getChildren(element?: ApexLogTreeItem | undefined): vscode.ProviderResult<ApexLogTreeItem[]> {
        if (!element) {
            return new Promise((resolve, reject) => {
                const apexLogDirectoryReadCommand = new ApexLogDirectoryReadCommand({
                    cli: this.cli,
                    ide: this.ide
                });

                apexLogDirectoryReadCommand.execute({
                    logDir: this.logDir
                }).then(results => {
                    resolve(results.map((result: InFileApexLog) => {
                        const label: string = result.name;
                        return new ApexLogTreeItem(label, vscode.TreeItemCollapsibleState.None, result);
                    }));
                }).catch(e => {
                    reject(e);
                    Logger.get().warn(e.message);
                });
            });
        }
    }
    getParent?(element: ApexLogTreeItem): vscode.ProviderResult<ApexLogTreeItem> {
        return null;
    }
    resolveTreeItem?(item: vscode.TreeItem, element: ApexLogTreeItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }
}

class ApexLogTreeItem extends vscode.TreeItem {
    public readonly apexLog: InFileApexLog;

    constructor(
        public readonly label: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        apexLog: InFileApexLog
    ) {
        super(label, collapsibleState);
        this.apexLog = apexLog;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };
}

export async function cleanLocalApexLogs(ide: IntegratedDevelopmentEnvironment, zfLogDir: string) {
    await ide.withProgress(async (progressTokens) => {
        progressTokens.report({
            progress: 0,
            title: 'Finding local log files...'
        });
        const uris = await ide.findFiles(`**\\${zfLogDir}\\*`);
        const numFiles = uris.length;

        progressTokens.report({
            progress: 0,
            title: `Removing ${numFiles} log files.`
        });


        const promises = [];
        let completed = 0;
        for (let i = 0; i < uris.length; i++) {

            const uriMapper = new UriMapper();
            const vscodeUri = uriMapper.intoVsCodeRepresentation(uris[i]);

            const promise = vscode.workspace.fs.delete(vscodeUri);
            promise.then(() => {
                completed++;
                progressTokens.report({
                    progress: (completed / numFiles) * 100,
                });
            });

            promises.push(promise);
        }

        await Promise.all(promises);
    }, {
        title: 'Cleaning Local Apex Logs'
    });
}