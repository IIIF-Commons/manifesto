interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    ElementType: Manifesto.ElementType;
    IIIFResourceType: Manifesto.IIIFResourceType;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    MetadataItem: any;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceFormat: Manifesto.ResourceFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    StatusCodes: Manifesto.IStatusCodes;
    Translation: any;
    TranslationCollection: any;
    TreeNode: any;
    TreeNodeType: Manifesto.TreeNodeType;
    Utils: any;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}