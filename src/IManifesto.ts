
interface IManifesto {
    canvasIndex: number;
    getCurrentCanvas(): ICanvas;
    getCurrentSequence(): ISequence;
    getCanvasById(id: string): ICanvas;
    //getCurrentManifest(): IManifest; todo pending collections support
    getRootRange(): IRange;
    manifest: IManifest; // todo: remove pending collections support
    load: (manifestUri: string, callback: (manifest: any) => void) => void;
    parse: (manifest: any, callback: (manifest: IManifest) => void) => void;
    sequenceIndex: number;
}