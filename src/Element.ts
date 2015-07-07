module Manifesto {
    export class Element implements IElement {
        id: string;
        jsonld: any;
        manifest: IManifest;
        type: ElementType;

        getLabel(): string {
            var regExp = /\d/;

            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }

            return null;
        }

        getRenderings(): IRendering[] {
            var renderings: IRendering[] = [];

            if (this.jsonld.rendering){
                var rendering = this.jsonld.rendering;

                if (!_.isArray(rendering)){
                    rendering = [rendering];
                }

                _.each(rendering, (r: any) => {
                    var rend: IRendering = new Rendering();
                    rend.id = r['@id'];
                    rend.format = r.format;
                    renderings.push(rend);
                });

                return renderings;
            }

            // no renderings provided, default to element.
            var rend = new Rendering();
            rend.id = this.jsonld['@id'];
            rend.format = this.jsonld.format;
            return [rend];
        }
    }
}