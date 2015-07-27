module Manifesto {
    export interface IRendering extends IJSONLDResource {
        getFormat(): RenderingFormat;
    }
}