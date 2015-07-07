module Manifesto {
    export interface IElement extends IManifestResource{
        type: ElementType;
        getLabel(): string;
        getRenderings(): IRendering[];
    }
}