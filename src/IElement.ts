module Manifesto {
    export interface IElement extends IJSONLDResource{
        getType(): ElementType;
    }
}