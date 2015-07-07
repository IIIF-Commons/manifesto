module Manifesto {
    export interface ICanvas extends IManifestResource {
        ranges: IRange[];
        type: CanvasType;
        getHeight(): number;
        getLabel(): string;
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getWidth(): number;
    }
}