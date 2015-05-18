declare var M: ManifestoStatic;

interface ManifestoStatic {

    // properties
    canvasIndex: number;
    locale: string;
    manifest: Manifesto.Manifest; // todo: remove pending collections support
    sequenceIndex: number;

    // initialisers
    load: (manifestUri: string, callback: (manifest: any) => void) => void;

    // Gives each Canvas a collection of Ranges that it belongs to.
    // Gives each Range a parentRange and path property.
    parse: (manifest: any) => Manifesto.Manifest;

    // getters
    getAttribution(): string;
    getCanvasById(id: string): Manifesto.Canvas;
    getCanvasByIndex(canvasIndex: number): Manifesto.Canvas;
    getCanvasIndexById(id: string): number;
    getCanvasIndexByLabel(label: string): number;
    getCanvasRange(canvas: Manifesto.Canvas): Manifesto.Range;
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

    // evaluators
    isCanvasIndexOutOfRange(canvasIndex: number): boolean;
    isFirstCanvas(canvasIndex?: number): boolean;
    isLastCanvas(canvasIndex?: number): boolean;
    isMultiCanvas(): boolean;
    isMultiSequence(): boolean;
    isTotalCanvasesEven(): boolean;
}