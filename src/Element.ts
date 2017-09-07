namespace Manifesto {
    export class Element extends ManifestResource implements IElement {

        // todo: can this be merged with Resource?

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

        getType(): ResourceType | null {
            const type: string = this.getProperty('type');

            if (type) {
                return new ResourceType(Utils.normaliseType(type));
            }

            return null;
        }
    }
}