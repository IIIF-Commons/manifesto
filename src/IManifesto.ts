interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    CanvasType: Manifesto.CanvasType;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    ElementType: Manifesto.ElementType;
    getRenderings(resource: any): Manifesto.IRendering[];
    getService: (resource: any, profile: Manifesto.ServiceProfile | string) => Manifesto.IService;
    getTreeNode(): Manifesto.ITreeNode;
    IIIFResourceType: Manifesto.IIIFResourceType;
    isImageProfile(profile: Manifesto.ServiceProfile): boolean;
    isLevel0ImageProfile(profile: Manifesto.ServiceProfile): boolean;
    isLevel1ImageProfile(profile: Manifesto.ServiceProfile): boolean;
    isLevel2ImageProfile(profile: Manifesto.ServiceProfile): boolean;
    loadExternalResources: (resources: Manifesto.IExternalResource[],
         tokenStorageStrategy: string,
         clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
         restricted: (resource: Manifesto.IExternalResource) => Promise<void>,
         login: (resource: Manifesto.IExternalResource) => Promise<void>,
         getAccessToken: (resource: Manifesto.IExternalResource, rejectOnError: boolean) => Promise<Manifesto.IAccessToken>,
         storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken, tokenStorageStrategy: string) => Promise<void>,
         getStoredAccessToken: (resource: Manifesto.IExternalResource, tokenStorageStrategy: string) => Promise<Manifesto.IAccessToken>,
         handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
         options?: Manifesto.IManifestoOptions) => Promise<Manifesto.IExternalResource[]>;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceFormat: Manifesto.ResourceFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    TreeNodeType: Manifesto.TreeNodeType;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}