module.exports = <IManifesto>{

    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    ManifestType: new Manifesto.ManifestType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    loadManifest: function (uri: string): Promise<any> {
        return Manifesto.Utils.loadManifest(uri);
    },

    loadExternalResources: function(resources: Manifesto.IExternalResource[],
                          clickThrough: (resource: Manifesto.IExternalResource) => void,
                          login: (loginServiceUrl: string) => Promise<void>,
                          getAccessToken: (tokenServiceUrl: string) => Promise<Manifesto.IAccessToken>,
                          storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken) => Promise<void>,
                          getStoredAccessToken: (tokenServiceUrl: string) => Promise<Manifesto.IAccessToken>,
                          handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
                          options?: Manifesto.IManifestoOptions): Promise<Manifesto.IExternalResource[]>{
        return Manifesto.Utils.loadExternalResources(resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
    },

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IIIIFResource {
        return Manifesto.Deserialiser.parse(manifest, options);
    }
};