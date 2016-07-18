
module Manifesto {
    export class Rendering extends ManifestResource implements IRendering {

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): RenderingFormat{
            return new RenderingFormat(this.getProperty('format'));
        }
    }
}