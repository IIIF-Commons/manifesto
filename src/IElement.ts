module Manifesto {
    export interface IElement {
        id: string;
        jsonld: any;
        manifest: IManifest;
        type: ElementType;
        getLabel(): string;
        getRenderings(): IRendering[];
    }
}