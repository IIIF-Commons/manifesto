interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    Behavior: Manifesto.Behavior;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    IIIFResourceType: Manifesto.IIIFResourceType;
    LabelValuePair: any;
    Language: any;
    LanguageMap: any;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    MediaType: Manifesto.MediaType;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    Size: any;
    StatusCodes: Manifesto.IStatusCodes;
    TreeNode: any;
    TreeNodeType: Manifesto.TreeNodeType;
    Utils: any;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}