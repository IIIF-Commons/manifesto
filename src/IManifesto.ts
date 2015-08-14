interface IManifesto {
    loadManifest: (uri: string) => Promise<any>;
    loadExternalResources: (resources: Manifesto.IExternalResource[],
                            clickThrough: (resource: Manifesto.IExternalResource) => void,
                            login: (loginServiceUrl: string) => Promise<void>,
                            getAccessToken: (tokenServiceUrl: string) => Promise<Manifesto.IAccessToken>,
                            storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken) => Promise<void>,
                            getStoredAccessToken: (tokenServiceUrl: string) => Promise<Manifesto.IAccessToken>,
                            handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
                            options?: Manifesto.IManifestoOptions) => Promise<Manifesto.IExternalResource[]>;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    CanvasType: Manifesto.CanvasType;
    ElementType: Manifesto.ElementType;
    ManifestType: Manifesto.ManifestType;
    RenderingFormat: Manifesto.RenderingFormat;
    ServiceProfile: Manifesto.ServiceProfile;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}