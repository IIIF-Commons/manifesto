module Manifesto {
    export interface IElement extends IManifestResource{
        index: number;
        getResources(): IAnnotation[];
        getType(): ElementType;
    }
}