import { RenderingFormat } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";

export class Rendering extends ManifestResource {

    constructor(jsonld?: any, options?: IManifestoOptions) {
        super(jsonld, options);
    }

    getFormat(): RenderingFormat {
        return this.getProperty('format');
    }
}