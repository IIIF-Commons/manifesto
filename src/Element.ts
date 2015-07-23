var _isArray = require("lodash.isarray");

module Manifesto {
    export class Element extends JSONLDResource implements IElement {

        type: ElementType;

        constructor(jsonld: any){
            super(jsonld);
        }

        getLabel(): string {
            var regExp = /\d/;

            if (regExp.test(this.jsonld.label)) {
                return this.getManifest().getLocalisedValue(this.jsonld.label);
            }

            return null;
        }

        getRenderings(): IRendering[] {
            var renderings: IRendering[] = [];

            if (this.jsonld.rendering){
                var rendering = this.jsonld.rendering;

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
            var rend: IRendering = new Rendering(this.jsonld);
            rend.format = this.jsonld.format;
            return [rend];
        }

        getType(): ElementType {
            return new ElementType(this.jsonld['@type']);
        }
    }
}