namespace Manifesto {
    export interface ICanvas extends IResource {
        ranges: IRange[];

        //getThumbUri(width: number): string;
        //getType(): CanvasType;
        getCanonicalImageUri(width?: number): string;
        getContent(): IAnnotation[]; // deprecate - use getItems instead
        getDuration(): number | null;
        getHeight(): number;
        getImages(): IAnnotation[];
        getIndex(): number;
        getItems(): IAnnotation[];
        getMaxDimensions(): Size | null;
        getWidth(): number;
    }
}