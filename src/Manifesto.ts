(<any>global).manifesto = (<any>global).Manifesto = module.exports = <IManifesto>{

    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    Behavior: new Manifesto.Behavior(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    LabelValuePair: Manifesto.LabelValuePair,
    Language: Manifesto.Language,
    LanguageMap: Manifesto.LanguageMap,
    ManifestType: new Manifesto.ManifestType(),
    MediaType: new Manifesto.MediaType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    Size: Manifesto.Size,
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

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IIIIFResource | null {
        return Manifesto.Deserialiser.parse(manifest, options);
    },

    loadManifest: function (uri: string): Promise<any> {
        return Manifesto.Utils.loadResource(uri);
    }
};