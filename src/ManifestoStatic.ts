import RenderingFormat = require("./RenderingFormat");
import ServiceProfile = require("./ServiceProfile");

declare var M: ManifestoStatic;

interface ManifestoStatic {

    // properties
    canvasIndex: number;
    locale: string;
    manifest: Manifesto.Manifest;
    originalManifest: any;
    sequenceIndex: number;

    // initialisers
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    parse: (manifest: string) => Manifesto.Manifest;

    // getters
    getAttribution(): string;
    getCanvasById(id: string): Manifesto.Canvas;
    getCanvasByIndex(canvasIndex: number): Manifesto.Canvas;
    getCanvasIndexById(id: string): number;
    getCanvasIndexByLabel(label: string): number;
    getCanvasRange(canvas: Manifesto.Canvas): Manifesto.Range;
    getCanvasType(canvas?: Manifesto.Canvas): Manifesto.CanvasType;
    getCurrentCanvas(): Manifesto.Canvas;
    //getCurrentManifest(): IManifest; todo pending collections support
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
    getRendering(resource: any, format: RenderingFormat): Manifesto.Rendering;
    getSeeAlso(): any;
    getService(resource: any, profile: ServiceProfile): Manifesto.Service;
    getStartCanvasIndex(): number;
    getTitle(): string;
    getTotalCanvases(): number;
    getTotalSequences(): number;
    getThumbs(width: number, height: number): Manifesto.Thumb[];
    getThumbUri(canvas: any, width: number, height: number): string;
    getViewingDirection(): string;

    // evaluators
    isCanvasIndexOutOfRange(canvasIndex: number): boolean;
    isFirstCanvas(canvasIndex?: number): boolean;
    isLastCanvas(canvasIndex?: number): boolean;
    isMultiCanvas(): boolean;
    isMultiSequence(): boolean;
    isTotalCanvasesEven(): boolean;
}