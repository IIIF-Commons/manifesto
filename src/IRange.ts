module Manifesto {
    export interface IRange extends IManifestResource {
        getCanvases(): ICanvas[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        parentRange: IRange;
        path: string;
        ranges: IRange[];
        treeNode: ITreeNode;
    }
}