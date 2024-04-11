import { RenderingFormat } from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource } from "./internal";
export declare class Rendering extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getFormat(): RenderingFormat;
}
