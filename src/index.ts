export * from "@iiif/vocabulary";
// export * from "./ManifestType";
// export * from "./JSONLDResource";
// export * from "./ManifestResource";
// export * from "./Resource";
// export * from "./Canvas";
// export * from "./IIIFResource";
// export * from "./Manifest";
// export * from "./Collection";
// export * from "./Range";
// export * from "./Rendering";
// export * from "./Sequence";
// export * from "./Serialisation";
//export * from "./Service";
// export * from "./Thumb";
// export * from "./TreeNode";
// export * from "./TreeNodeType";
// export * from "./Utils";
// export * from "./Language";
// export * from "./LanguageMap";
// export * from "./LabelValuePair";
// export * from "./Size";
// export * from "./Annotation";
// export * from "./AnnotationBody";
// export * from "./AnnotationList";
// export * from "./AnnotationPage";
// export * from "./Duration";
// export * from "./IManifestoOptions";
// export * from "./StatusCode";
// export * from "./Thumbnail";

import { IManifestoOptions } from "./IManifestoOptions";
import { Deserialiser } from "./Serialisation";
import { Utils } from "./Utils";

export const create = (manifest: string, options?: IManifestoOptions) => {
    return Deserialiser.parse(manifest, options);
}

export const loadManifest = (uri: string) => {
    return Utils.loadResource(uri);
}