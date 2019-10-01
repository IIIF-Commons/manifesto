import { IIIFResourceType } from "@iiif/vocabulary";
import { JSONLDResource } from "./JSONLDResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Annotation } from "./Annotation";
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
