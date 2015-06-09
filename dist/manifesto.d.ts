declare module Manifesto {
    class Canvas {
        id: string;
        type: CanvasType;
        height: number;
        label: string;
        ranges: Range[];
        width: number;
        getRange(): void;
    }
}
declare module Manifesto {
    class CanvasType {
        value: string;
        static audio: CanvasType;
        static canvas: CanvasType;
        static pdf: CanvasType;
        static video: CanvasType;
        constructor(value: string);
        toString(): string;
    }
}
interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;
}
declare module Manifesto {
    class Manifest {
        jsonld: any;
        private _rootRange;
        sequences: Sequence[];
        rootRange: Range;
        locale: string;
        constructor(jsonld: any);
        getLabel(): string;
        getLocalisedValue(prop: any, locale?: string): string;
    }
}
declare var http: any;
declare var url: any;
declare var path: any;
declare var _: any;
import m = Manifesto;
declare module Manifesto {
    class Range {
        id: string;
        canvases: any[];
        label: string;
        path: string;
        parentRange: Range;
        ranges: Range[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
declare module Manifesto {
    class Rendering {
        id: string;
    }
}
declare module Manifesto {
    class RenderingFormat {
        value: string;
        static pdf: RenderingFormat;
        constructor(value: string);
        toString(): string;
    }
}
declare module Manifesto {
    class Sequence {
        id: string;
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
        canvases: Canvas[];
    }
}
declare var jmespath: any;
declare module Manifesto {
    class Deserialiser {
        static manifest: Manifest;
        static parse(manifest: string): Manifest;
        static parseSequences(): void;
        static parseCanvases(sequence: any): Canvas[];
        static parseRanges(r: any, path: string, parentRange?: Range): void;
        static getCanvasById(id: string): Canvas;
    }
    class Serialiser {
        static serialise(manifest: Manifest): string;
    }
}
declare module Manifesto {
    class Service {
        id: string;
    }
}
declare module Manifesto {
    class ServiceProfile {
        value: string;
        static autoComplete: ServiceProfile;
        static otherManifestations: ServiceProfile;
        static searchWithin: ServiceProfile;
        constructor(value: string);
        toString(): string;
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
        static leftToRight: ViewingDirection;
        static rightToLeft: ViewingDirection;
        static topToBottom: ViewingDirection;
        static bottomToTop: ViewingDirection;
        constructor(value: string);
        toString(): string;
    }
}
declare module Manifesto {
    class ViewingHint {
        value: string;
        static individuals: ViewingHint;
        static paged: ViewingHint;
        static continuous: ViewingHint;
        static nonPaged: ViewingHint;
        static top: ViewingHint;
        constructor(value: string);
        toString(): string;
    }
}
