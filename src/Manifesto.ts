import { ServiceProfile } from "@iiif/vocabulary";

(<any>global).manifesto = (<any>global).Manifesto = module.exports = {

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
    ServiceProfile: ServiceProfile,
    Size: Manifesto.Size,
    TreeNode: Manifesto.TreeNode,
    TreeNodeType: new Manifesto.TreeNodeType(),
    Utils: Manifesto.Utils,
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),
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

    StatusCodes: <Manifesto.IStatusCodes>{
        AUTHORIZATION_FAILED: 1,
        FORBIDDEN: 2,
        INTERNAL_SERVER_ERROR: 3,
        RESTRICTED: 4
    },

    create: function(manifest: string, options?: Manifesto.IManifestoOptions): Manifesto.IIIFResource | null {
        return Manifesto.Deserialiser.parse(manifest, options);
    },

    loadManifest: function (uri: string): Promise<any> {
        return Manifesto.Utils.loadResource(uri);
    }
};
