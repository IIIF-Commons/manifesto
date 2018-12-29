import { RenderingFormat } from "@iiif/vocabulary";

namespace Manifesto {
    export class Rendering extends ManifestResource {

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): RenderingFormat{
            return this.getProperty('format');
        }
    }
}