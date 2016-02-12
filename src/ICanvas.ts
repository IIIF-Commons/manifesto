module Manifesto {
    export interface ICanvas extends IManifestResource {
        index: number;

        getHeight(): number;
        getImages(): IAnnotation[];
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
    }
}