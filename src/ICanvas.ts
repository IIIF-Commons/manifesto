module Manifesto {
    export interface ICanvas extends IJSONLDResource {
        getHeight(): number;
        getImageUri(): string;
        getLabel(): string;
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
        ranges: IRange[];
    }
}