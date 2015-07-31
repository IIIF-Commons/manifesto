module Manifesto {
    export class Element extends JSONLDResource implements IElement {

        type: ElementType;

        constructor(jsonld: any){
            super(jsonld);
        }

        getType(): ElementType {
            return new ElementType(this.getProperty('@type'));
        }
    }
}