import { IntegratedDevelopmentEnvironment, Uri } from "../../integratedDevelopmentEnvironment";
import { SalesforceCli } from "../../salesforceCli";
import { SalesforceOrg } from "../../salesforceOrg";
import * as vscode from 'vscode';
import { ApexLogTreeItem, OnDidChangeNumberOfLogsListener, OrgTreeItem } from "../apexLogTreeView";
import { TreeItem } from "../../treeView/treeItem";
import { ApexLogTreeView } from "../apexLogTreeView";
import { ShowApexLogDebugsOnlyCommand } from "../../showApexLogCommand";
import { CommandParams } from "../../command";

function copyTreeItemInto(vscodeTreeItem: vscode.TreeItem, zfTreeItem: TreeItem) {
    vscodeTreeItem.id = zfTreeItem.id;
    vscodeTreeItem.label = zfTreeItem.label;
    vscodeTreeItem.collapsibleState = zfTreeItem.collapsibleState;
    vscodeTreeItem.contextValue = zfTreeItem.contextValue;
    vscodeTreeItem.iconPath = zfTreeItem.iconPath;
    vscodeTreeItem.checkboxState = zfTreeItem.checkboxState;
}

export class VscodeOrgTreeItem extends vscode.TreeItem {
    vscodeApexLogTreeItems: VscodeApexLogTreeItem[];
    readonly orgTreeItem: OrgTreeItem;

    constructor ({ orgTreeItem }: { orgTreeItem: OrgTreeItem }) {
        super(orgTreeItem.label);
        copyTreeItemInto(this, orgTreeItem);
        this.orgTreeItem = orgTreeItem;
    }

    get targetOrg() {
        return this.orgTreeItem.targetOrg;
    }
}

export class VscodeApexLogTreeItem extends vscode.TreeItem {

    private readonly _parent: VscodeOrgTreeItem;
    readonly apexLogTreeItem: ApexLogTreeItem;

    constructor ({ apexLogTreeItem, parent }: { apexLogTreeItem: ApexLogTreeItem; parent: VscodeOrgTreeItem }) {
        super(apexLogTreeItem.label);
        copyTreeItemInto(this, apexLogTreeItem);
        this._parent = parent;
        this.apexLogTreeItem = apexLogTreeItem;
    }

    get parent() {
        return this._parent;
    }
}

export class VscodeApexLogTreeView implements vscode.TreeDataProvider<VscodeOrgTreeItem | VscodeApexLogTreeItem> {

    private readonly eventEmitter: vscode.EventEmitter<VscodeOrgTreeItem | VscodeApexLogTreeItem | undefined>;

    private readonly apexLogTreeView: ApexLogTreeView;

    private vscodeOrgTreeItems: VscodeOrgTreeItem[];

    private readonly ide: IntegratedDevelopmentEnvironment;

    onDidChangeTreeData?: vscode.Event<void | VscodeOrgTreeItem | VscodeApexLogTreeItem | (VscodeOrgTreeItem | VscodeApexLogTreeItem)[]>;

    set onDidChangeNumberOfLogs(listener: OnDidChangeNumberOfLogsListener) {
        this.apexLogTreeView.onDidChangeNumberOfLogs = listener;
    }

    constructor ({ cli, ide, logDir
    }: {
        cli: SalesforceCli,
        ide: IntegratedDevelopmentEnvironment,
        logDir: Uri
    }) {
        this.ide = ide;
        this.apexLogTreeView = new ApexLogTreeView({
            cli, ide, logDir
        });

        this.eventEmitter = new vscode.EventEmitter<VscodeOrgTreeItem | VscodeApexLogTreeItem | undefined>();
        this.onDidChangeTreeData = this.eventEmitter.event;

        this.apexLogTreeView.onDidChangeTreeDataListener = this.onDidChangeTreeDataListener.bind(this);
        this.apexLogTreeView.onRefreshListener = this.onRefreshListener.bind(this);
    }

    private onDidChangeTreeDataListener(e: OrgTreeItem | ApexLogTreeItem | undefined) {
        if (e instanceof ApexLogTreeItem) {
            const orgTreeItem = this.getVscodeTreeItemWithId(e.parent.id);
            const apexLogTreeItem = orgTreeItem.vscodeApexLogTreeItems.find(apexLogTreeItem => apexLogTreeItem.id === e.id);
            copyTreeItemInto(apexLogTreeItem, e);
            this.eventEmitter.fire(apexLogTreeItem);
        }
    }

    private onRefreshListener(targetOrg?: SalesforceOrg) {
        if (targetOrg) {
            const vscodeOrgTreeItem = this.getVscodeTreeItemWithId(targetOrg.getTargetOrgName());
            vscodeOrgTreeItem.vscodeApexLogTreeItems = intoVscodeApexLogTreeItems(vscodeOrgTreeItem.orgTreeItem.apexLogTreeItems, vscodeOrgTreeItem);
            this.eventEmitter.fire(vscodeOrgTreeItem);
        } else {
            this.vscodeOrgTreeItems = this.apexLogTreeView.orgTreeItems.map(org => {
                const vscodeOrgTreeItem = new VscodeOrgTreeItem({
                    orgTreeItem: org
                });
                vscodeOrgTreeItem.vscodeApexLogTreeItems = intoVscodeApexLogTreeItems(vscodeOrgTreeItem.orgTreeItem.apexLogTreeItems, vscodeOrgTreeItem);
                return vscodeOrgTreeItem;
            });
            this.eventEmitter.fire(undefined);
        }

        function intoVscodeApexLogTreeItems(apexLogTreeItems: ApexLogTreeItem[], vscodeOrgTreeItem: VscodeOrgTreeItem) {
            return apexLogTreeItems.map(apexLogTreeItem => {
                return new VscodeApexLogTreeItem({
                    apexLogTreeItem,
                    parent: vscodeOrgTreeItem
                });
            });
        }

    }

    private getVscodeTreeItemWithId(id: string) {
        return this.vscodeOrgTreeItems.find(orgTreeItem => orgTreeItem.id === id);
    }

    getTreeItem(element: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.ProviderResult<(VscodeOrgTreeItem | VscodeApexLogTreeItem)[]> {
        if (element instanceof VscodeOrgTreeItem) {
            return element.vscodeApexLogTreeItems;
        } else if (element instanceof VscodeApexLogTreeItem) {
            return [];
        } else {
            return this.vscodeOrgTreeItems;
        }
    }

    getParent?(element: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.ProviderResult<VscodeOrgTreeItem | VscodeApexLogTreeItem> {
        if (element instanceof VscodeApexLogTreeItem) {
            return element.parent;
        } else {
            return undefined;
        }
    }

    resolveTreeItem?(item: vscode.TreeItem, element: VscodeOrgTreeItem | VscodeApexLogTreeItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        return item;
    }

    async refresh(targetOrg?: SalesforceOrg) {
        try {
            await this.apexLogTreeView.refresh(targetOrg);
        } catch (e) {
            if (e instanceof Error) {
                this.ide.showErrorMessage(e.message);
            }
        }
    }

    async onDidChangeSelection(e: vscode.TreeViewSelectionChangeEvent<VscodeOrgTreeItem | VscodeApexLogTreeItem>) {
        if (e.selection.length !== 1) {
            return;
        }

        const [treeItem] = e.selection;
        if (treeItem instanceof VscodeApexLogTreeItem) {
            await this.apexLogTreeView.onSelect(treeItem.apexLogTreeItem);
        }
    }

    async onShowDebugsOnly(treeItem: VscodeApexLogTreeItem) {
        await this.apexLogTreeView.onShowDebugsOnly(treeItem.apexLogTreeItem);
    }

    async onDidChangeCheckboxState(e: vscode.TreeCheckboxChangeEvent<VscodeOrgTreeItem | VscodeApexLogTreeItem>) {
        if (e.items.length !== 1) {
            return;
        }

        const [treeItem, value] = e.items[0];
        if (treeItem instanceof VscodeApexLogTreeItem) {
            await this.apexLogTreeView.onCheckboxSelect(treeItem.apexLogTreeItem, value);
        }
    }
}