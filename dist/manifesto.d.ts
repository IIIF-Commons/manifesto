declare class Canvas {
}
interface IManifesto {
    manifest: Manifest;
    load: (manifestUri: string, callback: (manifest: Manifest) => void) => void;
    parse: (manifest: any, callback: (manifest: Manifest) => void) => void;
}
declare class Manifest {
}
declare var http: any;
declare class Sequence {
}
declare class Service {
}
declare class Structure {
}
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
