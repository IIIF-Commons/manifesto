import { RenderingFormat } from "@iiif/vocabulary";
import { IManifestoOptions } from "./IManifestoOptions";
import { ManifestResource } from "./ManifestResource";

export class Rendering extends ManifestResource {

    constructor(jsonld?: any, options?: IManifestoOptions) {
        super(jsonld, options);
    }

    getFormat(): RenderingFormat {
        return this.getProperty('format');
    }
}