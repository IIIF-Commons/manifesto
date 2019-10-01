import { ExternalResourceType, MediaType } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Annotation } from "./Annotation";
export declare class Resource extends ManifestResource {
    index: number;
    constructor(jsonld?: any, options?: IManifestoOptions);
    getFormat(): MediaType | null;
    getResources(): Annotation[];
    getType(): ExternalResourceType | null;
    getWidth(): number;
    getHeight(): number;
    getMaxWidth(): number;
    getMaxHeight(): number | null;
}
