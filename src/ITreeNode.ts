module Manifesto {
    export interface ITreeNode {
        nodes: ITreeNode[];
        selected: boolean;
        expanded: boolean;
        id: string;
        navDate: Date;
        parentNode: ITreeNode;

        addNode(node: ITreeNode): void;
    }
}