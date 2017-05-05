namespace Manifesto {
    export interface ICanvas extends IElement {
        ranges: IRange[];

        getCanonicalImageUri(width?: number): string;
        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        //getThumbUri(width: number): string;
        //getType(): CanvasType;
        getWidth(): number;
        getContent(): IAnnotation[];
    }
}