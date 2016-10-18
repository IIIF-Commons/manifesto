module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
        //new(jsonld: any, options?: IManifestoOptions);
        externalResource: Manifesto.IExternalResource;
        options: IManifestoOptions;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}