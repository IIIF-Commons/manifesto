import { IManifestoOptions } from "./IManifestoOptions";
import { Deserialiser } from "./Serialisation";
import { Utils } from "./Utils";

// import { 
//     AnnotationMotivation as AnnotationMotivationObj, 
//     Behavior as BehaviorObj,
//     ExternalResourceType as ExternalResourceTypeObj, 
//     IIIFResourceType as IIIFResourceTypeObj, 
//     MediaType as MediaTypeObj, 
//     RenderingFormat as RenderingFormatObj, 
//     ServiceProfile as ServiceProfileObj, 
//     ViewingDirection as ViewingDirectionObj, 
//     ViewingHint as ViewingHintObj
// } from "@iiif/vocabulary";
// import { Annotation as AnnotationObj } from "./Annotation";
// import { AnnotationBody as AnnotationBodyObj } from "./AnnotationBody";
// import { AnnotationList as AnnotationListObj } from "./AnnotationList";
// import { AnnotationPage as AnnotationPageObj } from "./AnnotationPage";
// import { Canvas as CanvasObj } from "./Canvas";
// import { Collection as CollectionObj } from "./Collection";
// import { Deserialiser as DeserialiserObj } from "./Serialisation";
// import { Duration as DurationObj } from "./Duration";
// import { IIIFResource as IIIFResourceObj } from "./IIIFResource";
// import { IManifestoOptions } from "./IManifestoOptions";
// import { LabelValuePair as LabelValuePairObj } from "./LabelValuePair";
// import { Language as LanguageObj } from "./Language";
// import { LanguageMap as LanguageMapObj } from "./LanguageMap";
// import { Manifest as ManifestObj } from "./Manifest";
// import { ManifestType as ManifestTypeObj } from "./ManifestType";
// import { Range as RangeObj } from "./Range";
// import { Sequence as SequenceObj } from "./Sequence";
// import { Service as ServiceObj } from "./Service";
// import { Size as SizeObj } from "./Size";
// import { StatusCode as StatusCodeObj } from "./StatusCode";
// import { Thumb as ThumbObj } from "./Thumb";
// import { Thumbnail as ThumbnailObj } from "./Thumbnail";
// import { TreeNode as TreeNodeObj } from "./TreeNode";
// import { TreeNodeType as TreeNodeTypeObj } from "./TreeNodeType";
// import { Utils as UtilsObj } from "./Utils";

export * from "@iiif/vocabulary";
export * from "./Annotation";
export * from "./AnnotationBody";
export * from "./AnnotationList";
export * from "./AnnotationPage";
export * from "./Canvas";
export * from "./Collection";
export * from "./Serialisation";
export * from "./Duration";
export * from "./IIIFResource";
export * from "./IManifestoOptions";
export * from "./LabelValuePair";
export * from "./Language";
export * from "./LanguageMap";
export * from "./Manifest";
export * from "./ManifestType";
export * from "./Range";
export * from "./Sequence";
export * from "./Service";
export * from "./Size";
export * from "./StatusCode";
export * from "./Thumb";
export * from "./Thumbnail";
export * from "./TreeNode";
export * from "./TreeNodeType";
export * from "./Utils";

export const create = (manifest: string, options?: IManifestoOptions) => {
    return Deserialiser.parse(manifest, options);
}

export const loadManifest = (uri: string) => {
    return Utils.loadResource(uri);
}

// (<any>global).manifesto = () => {

//     const Annotation: AnnotationObj = new AnnotationObj();
//     AnnotationBody: AnnotationBodyObj;
//     AnnotationList: AnnotationListObj;
//     AnnotationMotivation: AnnotationMotivationObj;
//     AnnotationPage: AnnotationPageObj;
//     Behavior: BehaviorObj;
//     Canvas: CanvasObj;
//     Collection: CollectionObj;
//     Duration: DurationObj;
//     IIIFResource: IIIFResourceObj;
//     IIIFResourceType: IIIFResourceTypeObj;
//     LabelValuePair: LabelValuePairObj;
//     Language: LanguageObj;
//     LanguageMap: LanguageMapObj;
//     Manifest: ManifestObj;
//     ManifestType: ManifestTypeObj;
//     MediaType: MediaTypeObj;
//     Range: RangeObj;
//     RenderingFormat: RenderingFormatObj;
//     ResourceType: ExternalResourceTypeObj;
//     Sequence: SequenceObj;
//     Service: ServiceObj;
//     ServiceProfile: ServiceProfileObj;
//     Size: SizeObj;
//     StatusCode: StatusCodeObj;
//     Thumb: ThumbObj;
//     Thumbnail: ThumbnailObj;
//     TreeNode: TreeNodeObj;
//     TreeNodeType: TreeNodeTypeObj;
//     Utils: UtilsObj;
//     ViewingDirection: ViewingDirectionObj;
//     ViewingHint: ViewingHintObj;

//     const create = (manifest: string, options?: IManifestoOptions) => {
//         return DeserialiserObj.parse(manifest, options);
//     }

//     const loadManifest = (uri: string) => {
//         return UtilsObj.loadResource(uri);
//     }
// }

/*
(<any>global).manifesto = {

    Annotation: typeof AnnotationObj,
    AnnotationBody: typeof AnnotationBodyObj,
    AnnotationList: typeof AnnotationListObj,
    AnnotationMotivation: typeof AnnotationMotivationObj,
    AnnotationPage: typeof AnnotationPageObj,
    Behavior: typeof BehaviorObj,
    Canvas: typeof CanvasObj,
    Collection: typeof CollectionObj,
    Duration: typeof DurationObj,
    IIIFResourceType: typeof IIIFResourceTypeObj,
    LabelValuePair: typeof LabelValuePairObj,
    Language: typeof LanguageObj,
    LanguageMap: typeof LanguageMapObj,
    Manifest: typeof ManifestObj,
    ManifestType: typeof ManifestTypeObj,
    MediaType: typeof MediaTypeObj,
    Range: typeof RangeObj,
    RenderingFormat: typeof RenderingFormatObj,
    ResourceType: typeof ExternalResourceTypeObj,
    Sequence: typeof SequenceObj,
    Service: typeof ServiceObj,
    ServiceProfile: typeof ServiceProfileObj,
    Size: typeof SizeObj,
    StatusCode: typeof StatusCodeObj,
    Thumb: typeof ThumbObj,
    Thumbnail: typeof ThumbnailObj,
    TreeNode: typeof TreeNodeObj,
    TreeNodeType: typeof TreeNodeTypeObj,
    Utils: typeof UtilsObj,
    ViewingDirection: typeof ViewingDirectionObj,
    ViewingHint: typeof ViewingHintObj,

    create: (string, IManifestoOptions) => IIIFResourceObj | null,
    loadManifest: (string) => Promise<any>
}
*/

