import { Annotation } from "./Annotation";
import { AnnotationList } from "./AnnotationList";
import { IManifestoOptions } from "./IManifestoOptions";
import { Range } from "./Range";
import { Resource } from "./Resource";
import { Size } from "./Size";
export declare class Canvas extends Resource {
    ranges: Range[];
    constructor(jsonld?: any, options?: IManifestoOptions);
    getCanonicalImageUri(w?: number): string;
    getMaxDimensions(): Size | null;
    getContent(): Annotation[];
    getDuration(): number | null;
    getImages(): Annotation[];
    getIndex(): number;
    getOtherContent(): Promise<AnnotationList[]>;
    getWidth(): number;
    getHeight(): number;
}
