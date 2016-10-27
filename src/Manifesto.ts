(<any>global).manifesto = (<any>global).Manifesto = module.exports = <IManifesto>{

    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    ElementType: new Manifesto.ElementType(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    ManifestType: new Manifesto.ManifestType(),
    MetadataItem: Manifesto.MetadataItem,
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceFormat: new Manifesto.ResourceFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    Translation: Manifesto.Translation,
    TranslationCollection: Manifesto.TranslationCollection,
    TreeNode: Manifesto.TreeNode,
    TreeNodeType: new Manifesto.TreeNodeType(),
    Utils: Manifesto.Utils,
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    StatusCodes: <Manifesto.IStatusCodes>{
        AUTHORIZATION_FAILED: 1,
        FORBIDDEN: 2,
        INTERNAL_SERVER_ERROR: 3,
        RESTRICTED: 4
    },

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IIIIFResource {
        return Manifesto.Deserialiser.parse(manifest, options);
    },

    // todo: create hasServiceDescriptor
    // based on @profile and @type (or lack of) can the resource describe associated services?

    // loadExternalResources: function(resources: Manifesto.IExternalResource[],
    //     tokenStorageStrategy: string,
    //     clickThrough: (resource: Manifesto.IExternalResource) => Promise<void>,
    //     restricted: (resource: Manifesto.IExternalResource) => Promise<void>,
    //     login: (resource: Manifesto.IExternalResource) => Promise<void>,
    //     getAccessToken: (resource: Manifesto.IExternalResource, rejectOnError: boolean) => Promise<Manifesto.IAccessToken>,
    //     storeAccessToken: (resource: Manifesto.IExternalResource, token: Manifesto.IAccessToken, tokenStorageStrategy: string) => Promise<void>,
    //     getStoredAccessToken: (resource: Manifesto.IExternalResource, tokenStorageStrategy: string) => Promise<Manifesto.IAccessToken>,
    //     handleResourceResponse: (resource: Manifesto.IExternalResource) => Promise<any>,
    //     options?: Manifesto.IManifestoOptions): Promise<Manifesto.IExternalResource[]>{
    //     return Manifesto.Utils.loadExternalResources(resources, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
    // },

    loadManifest: function (uri: string): Promise<any> {
        return Manifesto.Utils.loadResource(uri);
    }
};