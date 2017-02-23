namespace Manifesto {
    export interface IRange extends IManifestResource {
        getCanvasIds(): string[];
        getCanvases(): ICanvas[];
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        members: IManifestResource[];
        parentRange: IRange | undefined;
        path: string;
        treeNode: ITreeNode;
    }
}