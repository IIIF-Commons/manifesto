namespace Manifesto {
    export interface ITreeNode {
        data: any;
        nodes: ITreeNode[];
        selected: boolean;
        expanded: boolean;
        id: string;
        label: string;
        navDate: Date;
        parentNode: ITreeNode;

        addNode(node: ITreeNode): void;
        isCollection(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
    }
}