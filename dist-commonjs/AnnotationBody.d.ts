import { ExternalResourceType, MediaType } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
export declare class AnnotationBody extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getFormat(): MediaType | null;
    getType(): ExternalResourceType | null;
    getWidth(): number;
    getHeight(): number;
}
