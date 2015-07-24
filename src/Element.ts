var _isArray = require("lodash.isarray");

module Manifesto {
    export class Element extends JSONLDResource implements IElement {

        type: ElementType;

        constructor(jsonld: any){
            super(jsonld);
        }

        getRenderings(): IRendering[] {
            var renderings: IRendering[] = [];

            if (this.__jsonld.rendering){
                var rendering = this.__jsonld.rendering;

                if (!_isArray(rendering)){
                    rendering = [rendering];
                }

                for (var i = 0; i < rendering.length; i++){
                    var r = rendering[i];
                    var rend: IRendering = new Rendering(r);
                    rend.format = r.format;
                    renderings.push(rend);
                }

                return renderings;
            }

            // no renderings provided, default to element.
            var rend: IRendering = new Rendering(this.__jsonld);
            rend.format = this.__jsonld.format;
            return [rend];
        }

        getType(): ElementType {
            return new ElementType(this.__jsonld['@type']);
        }
    }
}