import { IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
import { Annotation, IManifestoOptions, JSONLDResource } from "./internal";
export declare class AnnotationList extends JSONLDResource {
    options: IManifestoOptions;
    label: string;
    isLoaded: boolean;
    constructor(label: any, jsonld?: any, options?: IManifestoOptions);
    getIIIFResourceType(): IIIFResourceType;
    getLabel(): string;
    getResources(): Annotation[];
    load(): Promise<AnnotationList>;
}
