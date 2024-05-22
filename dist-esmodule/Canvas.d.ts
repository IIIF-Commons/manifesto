import { ViewingHint } from "@iiif/vocabulary/dist-commonjs";
import { Annotation, AnnotationList, IManifestoOptions, Range, Resource, Size } from "./internal";
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
    getViewingHint(): ViewingHint | null;
    get imageResources(): any;
    get resourceAnnotations(): any;
    /**
     * Returns a given resource Annotation, based on a contained resource or body
     * id
     */
    resourceAnnotation(id: any): any;
    /**
     * Returns the fragment placement values if a resourceAnnotation is placed on
     * a canvas somewhere besides the full extent
     */
    onFragment(id: any): any;
    get iiifImageResources(): any;
    get imageServiceIds(): any;
    get aspectRatio(): number;
}
