export declare class TreeNode {
    data: any;
    nodes: TreeNode[];
    selected: boolean;
    expanded: boolean;
    id: string;
    label: string;
    navDate: Date;
    parentNode: TreeNode;
    constructor(label?: string, data?: any);
    addNode(node: TreeNode): void;
    isCollection(): boolean;
    isManifest(): boolean;
    isRange(): boolean;
}
