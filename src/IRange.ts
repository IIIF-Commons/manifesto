module Manifesto {
    export interface IRange extends IManifestResource {
        getCanvasIds(): string[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        parentRange: IRange;
        path: string;
        ranges: IRange[];
        treeNode: ITreeNode;
    }
}