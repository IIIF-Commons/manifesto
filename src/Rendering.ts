
module Manifesto {
    export class Rendering extends JSONLDResource implements IRendering {
        constructor(jsonld: any){
            super(jsonld);
        }

        getFormat(): RenderingFormat{
            return new RenderingFormat(this.getProperty('format'));
        }
    }
}