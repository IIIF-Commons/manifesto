interface ICanvas {
    ranges: IRange[];
}
interface IManifest {
    label: string | any[];
    rootRange: IRange;
    sequences: ISequence[];
    structures: IRange[];
    viewingDirection: ViewingDirection;
    viewingHint: ViewingHint;
}
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
interface IRange {
    canvases: ICanvas[];
    parentRange: IRange;
    path: string;
    ranges: IRange[];
    viewingHint: ViewingHint;
    viewingDirection: ViewingDirection;
}
interface ISequence {
    viewingDirection: ViewingDirection;
    canvases: ICanvas[];
}
interface IService {
}
declare var http: any;
declare var url: any;
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
declare class ViewingDirection {
    value: string;
    constructor(value: string);
    toString(): string;
    static leftToRight: ViewingDirection;
    static rightToLeft: ViewingDirection;
    static topToBottom: ViewingDirection;
    static bottomToTop: ViewingDirection;
}
declare class ViewingHint {
    value: string;
    constructor(value: string);
    toString(): string;
    static individuals: ViewingHint;
    static paged: ViewingHint;
    static continuous: ViewingHint;
    static nonPaged: ViewingHint;
    static top: ViewingHint;
}
