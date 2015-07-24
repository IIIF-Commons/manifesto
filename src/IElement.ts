module Manifesto {
    export interface IElement extends IJSONLDResource{
        getRenderings(): IRendering[];
        getType(): ElementType;
    }
}