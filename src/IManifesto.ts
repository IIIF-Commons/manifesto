interface IManifesto {
    CanvasType: Manifesto.CanvasType;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    ElementType: Manifesto.ElementType;
    getRenderings(resource: any): Manifesto.IRendering[];
    getService: (resource: any, profile: Manifesto.ServiceProfile | string) => Manifesto.IService;
    IIIFResourceType: Manifesto.IIIFResourceType;
    loadExternalResources: (resources: Manifesto.IExternalResource[],
                            clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
                            login: (resource: Manifesto.IExternalResource) => Promise<void>,
                            getAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                            storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken) => Promise<void>,
                            getStoredAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                            handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
                            options?: Manifesto.IManifestoOptions) => Promise<Manifesto.IExternalResource[]>;
    loadManifest: (uri: string) => Promise<any>;
    ManifestType: Manifesto.ManifestType;
    RenderingFormat: Manifesto.RenderingFormat;
    ServiceProfile: Manifesto.ServiceProfile;
    TreeNode: Manifesto.TreeNode;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}