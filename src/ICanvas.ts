module Manifesto {
    export interface ICanvas extends IManifestResource {
        getHeight(): number;
        getImages(): IAnnotation[];
        getInfoUri(): string; // todo: deprecate - use canvas.getImages and image.getService instead
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
        ranges: IRange[];
    }
}