namespace Manifesto {
    export class Element extends ManifestResource implements IElement {

        public index: number;
        public type: ElementType;

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getResources(): IAnnotation[] {

            const resources: IAnnotation[] = [];

            if (!this.__jsonld.resources) return resources;

            for (let i = 0; i < this.__jsonld.resources.length; i++) {
                const a = this.__jsonld.resources[i];
                const annotation = new Annotation(a, this.options);
                resources.push(annotation);
            }

            return resources;
        }

        getType(): ElementType {
            return new ElementType(this.getProperty('@type'));
        }
    }
}