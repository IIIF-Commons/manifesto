import { ManifestResource } from "./ManifestResource";
import { TreeNode } from "./TreeNode";
import { IManifestoOptions } from "./IManifestoOptions";
import { Duration } from "./Duration";
import { Behavior, ViewingDirection, ViewingHint } from "@iiif/vocabulary";
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
