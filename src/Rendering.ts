
module Manifesto {
    export class Rendering extends JSONLDResource implements IRendering {
        format: string;

        constructor(jsonld: any){
            super(jsonld);
        }
    }
}