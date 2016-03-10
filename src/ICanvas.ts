module Manifesto {
    export interface ICanvas extends IManifestResource {
        index: number;
        ranges: IRange[];

        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
    }
}