namespace Manifesto {
    export interface IManifestResource extends IJSONLDResource {
        externalResource: Manifesto.IExternalResource;
        options: IManifestoOptions;
        getDefaultLabel(): string | null;
        getLabel(): LanguageMap;
        getMetadata(): LabelValuePair[];
        getRendering(format: RenderingFormat | string): IRendering | null;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService | null;
        getServices(): IService[];
        getThumbnail(): Thumbnail | null;
        isAnnotation(): boolean;
        isCanvas(): boolean;
        isManifest(): boolean;
        isRange(): boolean;
        isSequence(): boolean;
    }
}