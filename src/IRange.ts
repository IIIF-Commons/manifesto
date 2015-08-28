module Manifesto {
    export interface IRange extends IManifestResource {
        canvases: any[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        parentRange: IRange;
        path: string;
        ranges: IRange[];
        treeNode: TreeNode;
    }
}