
export enum TreeItemCheckboxState {
    Unchecked = 0,
    Checked = 1
}

export function inverse(state: TreeItemCheckboxState) {
    if (state === TreeItemCheckboxState.Checked) {
        return TreeItemCheckboxState.Unchecked;
    } else if (state === TreeItemCheckboxState.Unchecked) {
        return TreeItemCheckboxState.Checked;
    } else {
        throw new Error(`TreeItemCheckboxState was neither checked or unchecked, found ${state}.`);
    }
}