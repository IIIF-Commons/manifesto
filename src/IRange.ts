namespace Manifesto {
    export interface IRange extends IManifestResource {
        getCanvasIds(): string[];
        getCanvases(): ICanvas[];
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        members: IManifestResource[];
        parentRange: IRange | undefined;
        path: string;
        treeNode: ITreeNode;
    }
}