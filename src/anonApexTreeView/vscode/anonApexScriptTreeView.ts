import { VscodeApexLogTreeItem, VscodeOrgTreeItem } from "../../apexLogTreeView/vscode/apexLogTreeView";
import * as vscode from 'vscode';
import { SalesforceCli } from "../../salesforceCli";
import { IntegratedDevelopmentEnvironment } from "../../integratedDevelopmentEnvironment";

export class AnonApexScriptTreeView implements vscode.TreeDataProvider<VscodeOrgTreeItem | VscodeApexLogTreeItem>{

    private readonly ide: IntegratedDevelopmentEnvironment;

    constructor ({cli, ide} : {
        cli: SalesforceCli,
        ide: IntegratedDevelopmentEnvironment,
    }) {
        this.ide = ide;
    }

    onDidChangeTreeData?: vscode.Event<void | VscodeOrgTreeItem | VscodeApexLogTreeItem | (VscodeOrgTreeItem | VscodeApexLogTreeItem)[]>;

    getTreeItem(element: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        throw new Error("Method not implemented.");
    }

    getChildren(element?: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.ProviderResult<(VscodeOrgTreeItem | VscodeApexLogTreeItem)[]> {
        throw new Error("Method not implemented.");
    }

    getParent?(element: VscodeOrgTreeItem | VscodeApexLogTreeItem): vscode.ProviderResult<VscodeOrgTreeItem | VscodeApexLogTreeItem> {
        throw new Error("Method not implemented.");
    }

    resolveTreeItem?(item: vscode.TreeItem, element: VscodeOrgTreeItem | VscodeApexLogTreeItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TreeItem> {
        throw new Error("Method not implemented.");
    }
}

// There should exist a plain old typescript object that holds this.
export class VscodeAnonApexScriptTreeItem extends vscode.TreeItem {



}