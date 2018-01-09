namespace Manifesto {
    export interface ISequence extends IManifestResource {
        getCanvasById(id: string): ICanvas | null;
        getCanvasByIndex(index: number): ICanvas;
        getCanvases(): ICanvas[];
        getCanvasIndexById(id: string): number | null;
        getCanvasIndexByLabel(label: string, foliated: boolean): number;
        getLastCanvasLabel(digitsOnly?: boolean): string;
        getLastPageIndex(): number;
        getNextPageIndex(index: number): number;
        getPagedIndices(index: number): number[];
        getPrevPageIndex(index: number): number;
        getRendering(format: RenderingFormat | string): IRendering | null;
        getStartCanvas(): string;
        getStartCanvasIndex(): number;
        getThumbnails(): Manifesto.IThumbnail[];
        getThumbs(width: number, height: number): Manifesto.IThumb[]; // todo: deprecate
        getTotalCanvases(): number;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): Manifesto.ViewingHint;
        isCanvasIndexOutOfRange(index: number): boolean;
        isFirstCanvas(index: number): boolean;
        isLastCanvas(index: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
        items: ICanvas[];
    }
}