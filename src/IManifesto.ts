
module Manifesto {
    export interface IManifesto {
        canvasIndex: number;
        getCurrentCanvas(): Canvas;
        getCurrentSequence(): Sequence;
        getCanvasById(id:string): Canvas;
        //getCurrentManifest(): IManifest; todo pending collections support
        getRootRange(): Range;
        manifest: Manifest; // todo: remove pending collections support
        load: (manifestUri:string, callback:(manifest:any) => void) => void;
        parse: (manifest:any, callback:(manifest: Manifest) => void) => void;
        sequenceIndex: number;
    }
}