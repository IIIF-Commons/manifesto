module Manifesto {
    export class Element extends ManifestResource implements IElement {

        type: ElementType;

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getType(): ElementType {
            return new ElementType(this.getProperty('@type'));
        }
    }
}