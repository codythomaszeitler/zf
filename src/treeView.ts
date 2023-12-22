import { SalesforceOrg } from "./salesforceOrg";
import { TreeNode } from "./treeNode";

export interface RefreshListener<T> {
	onTreeViewRefresh(e: { root: T; }): Promise<void>;
}

export interface TreeView<T> {
	uniqueName: string;
	getRootNode(params: { targetOrg: SalesforceOrg }): Promise<TreeNode<T>>;
	refresh(params: { targetOrg: SalesforceOrg }): Promise<void>;
	onSelect(e: { value: T }): Promise<void>;
	registerOnRefreshListener(listener: RefreshListener<TreeNode<T>>): Promise<void>;
	unregisterOnRefreshListener(listener: RefreshListener<TreeNode<T>>): Promise<void>;
}