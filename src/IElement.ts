module Manifesto {
    export interface IElement extends IManifestResource{
        getResources(): IAnnotation[];
        getType(): ElementType;
    }
}