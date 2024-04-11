import { ExternalResourceType, MediaType } from "@iiif/vocabulary/dist-commonjs";
import { Annotation, IManifestoOptions, ManifestResource } from "./internal";
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
