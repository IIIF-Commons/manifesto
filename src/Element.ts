module Manifesto {
    export class Element extends ManifestResource implements IElement {

        type: ElementType;

        constructor(jsonld: any){
            super(jsonld);
        }

        getType(): ElementType {
            return new ElementType(this.getProperty('@type'));
        }
    }
}