declare module Manifesto {
    class Canvas implements ICanvas {
        ranges: IRange[];
    }
}
declare module Manifesto {
    interface ICanvas {
        ranges: IRange[];
    }
}
declare module Manifesto {
    interface IManifest {
        label: string | any[];
        rootRange: IRange;
        sequences: ISequence[];
        structures: IRange[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}
declare module Manifesto {
    interface IManifesto {
        canvasIndex: number;
        getCurrentCanvas(): ICanvas;
        getCurrentSequence(): ISequence;
        getCanvasById(id: string): ICanvas;
        getRootRange(): IRange;
        manifest: IManifest;
        load: (manifestUri: string, callback: (manifest: any) => void) => void;
        parse: (manifest: any, callback: (manifest: IManifest) => void) => void;
        sequenceIndex: number;
    }
}
declare module Manifesto {
    interface IRange {
        canvases: ICanvas[];
        parentRange: IRange;
        path: string;
        ranges: IRange[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
declare module Manifesto {
    interface ISequence {
        viewingDirection: ViewingDirection;
        canvases: ICanvas[];
    }
}
declare module Manifesto {
    interface IService {
    }
}
declare module Manifesto {
    class Manifest implements IManifest {
        label: string | any[];
        rootRange: IRange;
        sequences: ISequence[];
        structures: IRange[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}
declare var http: any;
declare var url: any;
import IManifesto = Manifesto.IManifesto;
import IManifest = Manifesto.IManifest;
import ICanvas = Manifesto.ICanvas;
import IRange = Manifesto.IRange;
import ISequence = Manifesto.ISequence;
import IService = Manifesto.IService;
import ViewingDirection = Manifesto.ViewingDirection;
import ViewingHint = Manifesto.ViewingHint;
declare module Manifesto {
    class Range implements IRange {
        canvases: ICanvas[];
        path: string;
        parentRange: IRange;
        ranges: IRange[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
declare module Manifesto {
    class Sequence implements ISequence {
        viewingDirection: ViewingDirection;
        canvases: ICanvas[];
    }
}
declare module Manifesto {
    class Service implements IService {
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
