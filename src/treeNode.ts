export interface TreeNode<T> {
	children : TreeNode<T>[];
	label : string;
	value : T | null;
}