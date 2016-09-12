module Manifesto {
    export interface IRange extends IManifestResource {
        getCanvasIds(): string[];
        getCanvases(): ICanvas[];
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        members: IManifestResource[];
        parentRange: IRange;
        path: string;
        treeNode: ITreeNode;
    }
}