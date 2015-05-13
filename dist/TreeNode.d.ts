declare class TreeNode {
    label: string;
    data: any;
    nodes: TreeNode[];
    selected: boolean;
    expanded: boolean;
    parentNode: TreeNode;
    constructor(label?: string, data?: any);
    addNode(node: TreeNode): void;
}
export = TreeNode;
