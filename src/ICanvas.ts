module Manifesto {
    export interface ICanvas extends IJSONLDResource {
        getHeight(): number;
        //getImages(): IAnnotation[];
        getImageUri(): string; // todo: deprecate - use getImages instead
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
        ranges: IRange[];
    }
}