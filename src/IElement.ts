module Manifesto {
    export interface IElement extends IJSONLDResource{
        getLabel(): string;
        getRenderings(): IRendering[];
        getType(): ElementType;
    }
}