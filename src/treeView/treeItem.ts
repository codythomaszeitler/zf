import { TreeItemCheckboxState } from "./treeItemCheckboxState";
import { TreeItemCollapsibleState } from "./treeItemCollapsibleState";

export class TreeItem {

    constructor (id: string) {
        this.id = id;
    }

    readonly id: string;

    label: string;
    collapsibleState: TreeItemCollapsibleState;
    contextValue?: string;
    iconPath?: {
        light: string,
        dark: string
    };
    checkboxState?: TreeItemCheckboxState | {
        state: TreeItemCheckboxState;
        tooltip: string;
    };
}