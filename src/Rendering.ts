import { RenderingFormat } from "@iiif/vocabulary";
import { IManifestoOptions, ManifestResource } from "./internal";

export class Rendering extends ManifestResource {

    constructor(jsonld?: any, options?: IManifestoOptions) {
        super(jsonld, options);
    }

    getFormat(): RenderingFormat {
        return this.getProperty('format');
    }
}