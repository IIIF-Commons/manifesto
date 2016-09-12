module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
        //new(jsonld: any, options?: IManifestoOptions);
        externalResource: Manifesto.IExternalResource;
        options: IManifestoOptions;
        getLabel(): string;
        getMetadata(): any;
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
        isCanvas(): boolean;
        isRange(): boolean;
    }
}