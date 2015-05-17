declare module Manifesto {
    class Canvas {
        ranges: Range[];
    }
}
declare module Manifesto {
    interface IManifesto {
        canvasIndex: number;
        getCurrentCanvas(): Canvas;
        getCurrentSequence(): Sequence;
        getCanvasById(id: string): Canvas;
        getRootRange(): Range;
        manifest: Manifest;
        load: (manifestUri: string, callback: (manifest: any) => void) => void;
        parse: (manifest: any, callback: (manifest: Manifest) => void) => void;
        sequenceIndex: number;
    }
}
declare module Manifesto {
    class Manifest {
        label: string | any[];
        rootRange: Range;
        sequences: Sequence[];
        structures: Range[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}
declare var http: any;
declare var url: any;
import M = Manifesto;
declare module Manifesto {
    class Range {
        canvases: any[];
        path: string;
        parentRange: Range;
        ranges: Range[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
declare module Manifesto {
    class Sequence {
        viewingDirection: ViewingDirection;
        canvases: Canvas[];
    }
}
declare module Manifesto {
    class Service {
    }
}
declare module Manifesto {
    class Thumb {
        index: number;
        uri: string;
        label: string;
        width: number;
        height: number;
        visible: boolean;
        constructor(index: number, uri: string, label: string, width: number, height: number, visible: boolean);
    }
}
declare module Manifesto {
    class TreeNode {
        label: string;
        data: any;
        nodes: TreeNode[];
        selected: boolean;
        expanded: boolean;
        parentNode: TreeNode;
        constructor(label?: string, data?: any);
        addNode(node: TreeNode): void;
    }
}
declare module Manifesto {
    class ViewingDirection {
        value: string;
        constructor(value: string);
        toString(): string;
        static leftToRight: ViewingDirection;
        static rightToLeft: ViewingDirection;
        static topToBottom: ViewingDirection;
        static bottomToTop: ViewingDirection;
    }
}
declare module Manifesto {
    class ViewingHint {
        value: string;
        constructor(value: string);
        toString(): string;
        static individuals: ViewingHint;
        static paged: ViewingHint;
        static continuous: ViewingHint;
        static nonPaged: ViewingHint;
        static top: ViewingHint;
    }
}
