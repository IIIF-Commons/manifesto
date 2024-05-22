import { Duration, IManifestoOptions, ManifestResource, TreeNode } from "./internal";
import { Behavior, ViewingDirection, ViewingHint } from "@iiif/vocabulary/dist-commonjs";
export declare class Range extends ManifestResource {
    private _ranges;
    canvases: string[] | null;
    items: ManifestResource[];
    parentRange: Range | undefined;
    path: string;
    treeNode: TreeNode;
    constructor(jsonld?: any, options?: IManifestoOptions);
    getCanvasIds(): string[];
    getDuration(): Duration | undefined;
    getRanges(): Range[];
    getBehavior(): Behavior | null;
    getViewingDirection(): ViewingDirection | null;
    getViewingHint(): ViewingHint | null;
    getTree(treeRoot: TreeNode): TreeNode;
    spansTime(time: number): boolean;
    private _parseTreeNode;
}
