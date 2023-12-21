export interface TreeNode<T> {
	children : TreeNode<T>[];
	label : string;
}