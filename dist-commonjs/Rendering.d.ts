import { RenderingFormat } from "@iiif/vocabulary";
import { IManifestoOptions } from "./IManifestoOptions";
import { ManifestResource } from "./ManifestResource";
export declare class Rendering extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getFormat(): RenderingFormat;
}
