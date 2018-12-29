interface IManifesto {
    AnnotationMotivation: Manifesto.AnnotationMotivation;
    Behavior: Manifesto.Behavior;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.IIIIFResource;
    IIIFResourceType: Manifesto.IIIFResourceType;
    LabelValuePair: typeof Manifesto.LabelValuePair;
    Language: typeof Manifesto.Language;
    LanguageMap: typeof Manifesto.LanguageMap;
    loadManifest: (uri: string) => Promise<string>;
    ManifestType: Manifesto.ManifestType;
    MediaType: Manifesto.MediaType;
    RenderingFormat: Manifesto.RenderingFormat;
    ResourceType: Manifesto.ResourceType;
    ServiceProfile: Manifesto.ServiceProfile;
    Size: typeof Manifesto.Size;
    StatusCodes: Manifesto.IStatusCodes;
    TreeNode: typeof Manifesto.TreeNode;
    TreeNodeType: Manifesto.TreeNodeType;
    Utils: typeof Manifesto.Utils;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
    Annotation: typeof Manifesto.Annotation,
    AnnotationBody: typeof Manifesto.AnnotationBody,
    AnnotationList: typeof Manifesto.AnnotationList,
    AnnotationPage: typeof Manifesto.AnnotationPage,
    Canvas: typeof Manifesto.Canvas,
    Collection: typeof Manifesto.Collection,
    Duration: typeof Manifesto.Duration,
    Manifest: typeof Manifesto.Manifest,
    Range: typeof Manifesto.Range,
    Sequence: typeof Manifesto.Sequence,
    Service: typeof Manifesto.Service,
    Thumbnail: typeof Manifesto.Thumbnail,
    Thumb: typeof Manifesto.Thumb,
}
