module Manifesto {
    export class Element extends ManifestResource implements IElement {

        public index: number;
        public type: ElementType;

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getResources(): IAnnotation[] {

            var resources: IAnnotation[] = [];

            if (!this.__jsonld.resources) return resources;

            for (var i = 0; i < this.__jsonld.resources.length; i++) {
                var a = this.__jsonld.resources[i];

                var annotation = new Annotation(a, this.options);
                resources.push(annotation);
            }

            return resources;
        }

        getType(): ElementType {
            return new ElementType(this.getProperty('@type'));
        }
    }
}