import { ServiceProfile, ExternalResourceType, ViewingDirection, ViewingHint, RenderingFormat, MediaType, IIIFResourceType, AnnotationMotivation, Behavior } from "@iiif/vocabulary";
import { Annotation } from "./Annotation";
import { AnnotationBody } from "./AnnotationBody";
import { AnnotationList } from "./AnnotationList";
import { AnnotationPage } from "./AnnotationPage";
import { Canvas } from "./Canvas";
import { Collection } from "./Collection";
import { Deserialiser } from "./Serialisation";
import { Duration } from "./Duration";
import { IIIFResource } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { JSONLDResource } from "./JSONLDResource";
import { LabelValuePair } from "./LabelValuePair";
import { Language } from "./Language";
import { LanguageMap } from "./LanguageMap";
import { Manifest } from "./Manifest";
import { ManifestType } from "./ManifestType";
import { Range } from "./Range";
import { Sequence } from "./Sequence";
import { Service } from "./Service";
import { Size } from "./Size";
import { StatusCode } from "./StatusCode";
import { Thumb } from "./Thumb";
import { Thumbnail } from "./Thumbnail";
import { TreeNode } from "./TreeNode";
import { TreeNodeType } from "./TreeNodeType";
import { Utils } from "./Utils";

(<any>global).manifesto = (<any>global).Manifesto = module.exports = {

    Annotation: Annotation,
    AnnotationBody: AnnotationBody,
    AnnotationList: AnnotationList,
    AnnotationMotivation: AnnotationMotivation,
    AnnotationPage: AnnotationPage,
    Behavior: Behavior,
    Canvas: Canvas,
    Collection: Collection,
    Duration: Duration,
    IIIFResourceType: IIIFResourceType,
    JSONLDResource: JSONLDResource,
    LabelValuePair: LabelValuePair,
    Language: Language,
    LanguageMap: LanguageMap,
    Manifest: Manifest,
    ManifestType: ManifestType,
    MediaType: MediaType,
    Range: Range,
    RenderingFormat: RenderingFormat,
    ResourceType: ExternalResourceType,
    Sequence: Sequence,
    Service: Service,
    ServiceProfile: ServiceProfile,
    Size: Size,
    StatusCode: StatusCode,
    Thumb: Thumb,
    Thumbnail: Thumbnail,
    TreeNode: TreeNode,
    TreeNodeType: TreeNodeType,
    Utils: Utils,
    ViewingDirection: ViewingDirection,
    ViewingHint: ViewingHint,

    create: function(manifest: string, options?: IManifestoOptions): IIIFResource | null {
        return Deserialiser.parse(manifest, options);
    },

    loadManifest: function (uri: string): Promise<any> {
        return Utils.loadResource(uri);
    }
};
