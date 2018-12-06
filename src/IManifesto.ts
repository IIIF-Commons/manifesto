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
    // Extra exposure for internals.
    Annotation: Manifesto.Annotation,
    AnnotationBody: Manifesto.AnnotationBody,
    AnnotationList: Manifesto.AnnotationList,
    AnnotationPage: Manifesto.AnnotationPage,
    Canvas: Manifesto.Canvas,
    Collection: Manifesto.Collection,
    Duration: Manifesto.Duration,
    Manifest: Manifesto.Manifest,
    Range: Manifesto.Range,
    Sequence: Manifesto.Sequence,
    Service: Manifesto.Service,
    Thumbnail: Manifesto.Thumbnail,
    Thumb: Manifesto.Thumb,
}
