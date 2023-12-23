import { Command, CommandExecuteResult, Diagnostic, DiagnosticSeverity, IntegratedDevelopmentEnvironment, TextLine, Uri } from "./integratedDevelopmentEnvironment";
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

    public async registerTreeView<T>(params: { treeView: TreeView<T>; targetOrg: SalesforceOrg; }): Promise<void> {
        if (params.treeView.uniqueName === 'server-side-apex-logs') {
            await this.registerServerSideApexLogProvider<T>(params);
        }
    }

    private async registerServerSideApexLogProvider<T>(params: { treeView: TreeView<T>; targetOrg: SalesforceOrg; }) {
        const rootNode = await params.treeView.getRootNode({
            targetOrg: params.targetOrg
        });

        const root: TreeNode<ApexLog> = rootNode as TreeNode<ApexLog>;
        const apexServerSideLogTreeProvider = new ApexLogTreeProvider({
            root
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

        return vscode.workspace.fs.delete(vscodeUri);
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

class ApexLogTreeNode extends vscode.TreeItem {

    public readonly treeNode: TreeNode<ApexLog>;

    public constructor(params: {
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

    private root: TreeNode<ApexLog>;

    private readonly eventEmitter: vscode.EventEmitter<ApexLogTreeNode | undefined>;

    public constructor(params: {
        root: TreeNode<ApexLog>
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