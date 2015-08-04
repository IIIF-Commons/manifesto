module Manifesto {
    export interface IElement extends IManifestResource{
        getType(): ElementType;
    }
}