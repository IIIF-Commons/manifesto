namespace Manifesto {
    export interface IManifestResource extends IJSONLDResource {
        options: IManifestoOptions;
        getLabel(): TranslationCollection;
        getMetadata(): MetadataItem[];
        getRendering(format: RenderingFormat | string): IRendering | null;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService | null;
        getServices(): IService[];
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}