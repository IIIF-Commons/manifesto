namespace Manifesto {
    export interface IRange extends IManifestResource {
        canvases: string[] | null;
        getBehavior(): Behavior | null;
        getCanvasIds(): string[];
        getDuration(): Duration | undefined;
        getRanges(): IRange[];
        getTree(treeRoot: ITreeNode): ITreeNode;
        getViewingDirection(): ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        items: IManifestResource[];
        parentRange: IRange | undefined;
        path: string;
        treeNode: ITreeNode;
    }
}