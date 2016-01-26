interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    CanvasType: Manifesto.CanvasType;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    ElementType: Manifesto.ElementType;
    getRenderings(resource: any): Manifesto.IRendering[];
    getService: (resource: any, profile: Manifesto.ServiceProfile | string) => Manifesto.IService;
    getTreeNode(): Manifesto.TreeNode;
    IIIFResourceType: Manifesto.IIIFResourceType;
    isImageProfile(profile: Manifesto.ServiceProfile): boolean;
    loadExternalResources: (resources: Manifesto.IExternalResource[],
         storageStrategy: string,
         clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
         login: (resource: Manifesto.IExternalResource) => Promise<void>,
         getAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
         storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken, storageStrategy: string) => Promise<void>,
         getStoredAccessToken: (resource: Manifesto.IExternalResource, storageStrategy: string) => Promise<Manifesto.IAccessToken>,
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