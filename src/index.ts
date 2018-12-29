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
import { Annotation as AnnotationObj } from "./Annotation";
// import { AnnotationBody as AnnotationBodyObj } from "./AnnotationBody";
// import { AnnotationList as AnnotationListObj } from "./AnnotationList";
// import { AnnotationPage as AnnotationPageObj } from "./AnnotationPage";
// import { Canvas as CanvasObj } from "./Canvas";
// import { Collection as CollectionObj } from "./Collection";
import { Deserialiser as DeserialiserObj } from "./Serialisation";
// import { Duration as DurationObj } from "./Duration";
// import { IIIFResource as IIIFResourceObj } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
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
import { Utils as UtilsObj } from "./Utils";

// declare global {
//     const manifesto: any;
// }

(<any>global).manifesto = () => {
    Annotation: typeof AnnotationObj;
}

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

(<any>global).create = (manifest: string, options?: IManifestoOptions) => {
    return DeserialiserObj.parse(manifest, options);
}

(<any>global).loadManifest = (uri: string) => {
    return UtilsObj.loadResource(uri);
}