interface IManifesto {
    loadManifest: (uri: string) => Promise<any>;
    loadExternalResources: (resources: Manifesto.IExternalResource[],
                            clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
                            login: (resource: Manifesto.IExternalResource) => Promise<void>,
                            getAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                            storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken) => Promise<void>,
                            getStoredAccessToken: (resource: Manifesto.IExternalResource) => Promise<Manifesto.IAccessToken>,
                            handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
                            options?: Manifesto.IManifestoOptions) => Promise<Manifesto.IExternalResource[]>;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    CanvasType: Manifesto.CanvasType;
    ElementType: Manifesto.ElementType;
    IIIFResourceType: Manifesto.IIIFResourceType;
    ManifestType: Manifesto.ManifestType;
    RenderingFormat: Manifesto.RenderingFormat;
    ServiceProfile: Manifesto.ServiceProfile;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}