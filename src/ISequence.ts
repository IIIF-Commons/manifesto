module Manifesto {
    export interface ISequence {
        id: string;
        jsonld: any;
        manifest: IManifest;
        getCanvasById(id:string): ICanvas;
        getCanvasByIndex(canvasIndex:number): ICanvas;
        getCanvasIndexById(id:string): number;
        getCanvasIndexByLabel(label:string): number;
        //getCanvasRange(canvas: ICanvas): IRange;
        //getCanvasType(canvas: ICanvas): ICanvasType;
        getLastCanvasLabel(): string;
        getLastPageIndex(): number;
        getNextPageIndex(canvasIndex:number): number;
        getPagedIndices(canvasIndex:number): number[];
        getPrevPageIndex(canvasIndex:number): number;
        //getRangeByCanvasIndex(canvasIndex: number): IRange;
        getStartCanvasIndex(): number;
        getTotalCanvases(): number;
        getThumbs(width:number, height:number): Manifesto.Thumb[];
        getViewingDirection(): Manifesto.ViewingDirection;
        isCanvasIndexOutOfRange(canvasIndex:number): boolean;
        isFirstCanvas(canvasIndex:number): boolean;
        isLastCanvas(canvasIndex:number): boolean;
        isMultiCanvas(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}