module Manifesto {
    export interface ICanvas extends IManifestResource {
        ranges: IRange[];
        type: CanvasType;
        getLabel(): string;
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        width: number;
        height: number;
    }
}