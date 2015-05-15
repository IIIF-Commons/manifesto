interface ICanvas {
}
interface IManifest {
    label: string | any[];
    sequences: ISequence[];
    structures: IRange[];
    viewingDirection: ViewingDirection;
    viewingHint: ViewingHint;
}
interface IManifesto {
    manifest: IManifest;
    load: (manifestUri: string, callback: (manifest: IManifest) => void) => void;
    parse: (manifest: any, callback: (manifest: IManifest) => void) => void;
}
interface IRange {
    viewingHint: ViewingHint;
    viewingDirection: ViewingDirection;
    ranges: IRange[];
    canvases: ICanvas[];
}
interface ISequence {
    viewingDirection: ViewingDirection;
}
interface IService {
}
declare var http: any;
declare var url: any;
declare class Thumb {
    index: number;
    uri: string;
    label: string;
    width: number;
    height: number;
    visible: boolean;
    constructor(index: number, uri: string, label: string, width: number, height: number, visible: boolean);
}
declare class TreeNode {
    label: string;
    data: any;
    nodes: TreeNode[];
    selected: boolean;
    expanded: boolean;
    parentNode: TreeNode;
    constructor(label?: string, data?: any);
    addNode(node: TreeNode): void;
}
declare enum ViewingDirection {
    leftToRight = 0,
    rightToLeft = 1,
    topToBottom = 2,
    bottomToTop = 3,
}
declare enum ViewingHint {
    individuals = 0,
    paged = 1,
    continuous = 2,
    nonPaged = 3,
    top = 4,
}
