declare module Manifesto {
    class Canvas implements JsonLD.resource {
        id: string;
        height: number;
        label: string;
        ranges: Range[];
        width: number;
        getRange(): Range;
    }
}
declare module Manifesto {
    class Manifest implements JsonLD.resource {
        id: string;
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
declare var path: any;
declare var _: any;
import m = Manifesto;
declare var M: ManifestoStatic;
declare var M: ManifestoStatic;
interface ManifestoStatic {
    canvasIndex: number;
    locale: string;
    manifest: Manifesto.Manifest;
    originalManifest: any;
    sequenceIndex: number;
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;
    getAttribution(): string;
    getCanvasById(id: string): Manifesto.Canvas;
    getCanvasByIndex(canvasIndex: number): Manifesto.Canvas;
    getCanvasIndexById(id: string): number;
    getCanvasIndexByLabel(label: string): number;
    getCanvasRange(canvas: Manifesto.Canvas): Manifesto.Range;
    getCurrentCanvas(): Manifesto.Canvas;
    getCurrentSequence(): Manifesto.Sequence;
    getLastCanvasLabel(): string;
    getLastPageIndex(): number;
    getLocalisedValue(prop: any, locale?: string): string;
    getLogo(): string;
    getLicense(): string;
    getNextPageIndex(canvasIndex?: number): number;
    getPagedIndices(canvasIndex?: number): number[];
    getPrevPageIndex(canvasIndex?: number): number;
    getRangeByCanvasIndex(canvasIndex: number): Manifesto.Range;
    getRangeById(id: string): Manifesto.Range;
    getRangeByPath(path: string): Manifesto.Range;
    getSeeAlso(): any;
    getService(resource: any, profile: string): Manifesto.Service;
    getStartCanvasIndex(): number;
    getTitle(): string;
    getTotalCanvases(): number;
    getTotalSequences(): number;
    getThumbs(width: number, height: number): Manifesto.Thumb[];
    getThumbUri(canvas: any, width: number, height: number): string;
    getViewingDirection(): string;
    isCanvasIndexOutOfRange(canvasIndex: number): boolean;
    isFirstCanvas(canvasIndex?: number): boolean;
    isLastCanvas(canvasIndex?: number): boolean;
    isMultiCanvas(): boolean;
    isMultiSequence(): boolean;
    isTotalCanvasesEven(): boolean;
}
declare module Manifesto {
    class Range implements JsonLD.resource {
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
    class Sequence implements JsonLD.resource {
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
        static originalManifest: any;
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
    class Service implements JsonLD.resource {
        id: string;
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
