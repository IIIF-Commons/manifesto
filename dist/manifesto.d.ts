/// <reference path="c:/Users/edward.silverton/github/edsilv/manifesto/typings/utils.d.ts" />
declare module Manifesto {
    class Canvas {
        height: number;
        label: string;
        ranges: Range[];
        width: number;
        getRange(): Range;
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
declare var path: any;
declare var _: any;
import m = Manifesto;
declare var M: ManifestoStatic;
declare var M: ManifestoStatic;
interface ManifestoStatic {
    canvasIndex: number;
    locale: string;
    manifest: Manifesto.Manifest;
    sequenceIndex: number;
    load: (manifestUri: string, callback: (manifest: any) => void) => void;
    parse: (manifest: any) => Manifesto.Manifest;
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
    getRootRange(): Manifesto.Range;
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
