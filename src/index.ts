export * from "@iiif/vocabulary";

// export * from "./Annotation";
// export * from "./AnnotationBody";
// export * from "./AnnotationList";
// export * from "./AnnotationPage";
// export * from "./Canvas";
// export * from "./Collection";
// export * from "./Duration";
// export * from "./IIIFResource";
// export * from "./LabelValuePair";
// export * from "./Language";
// export * from "./Manifest";
// export * from "./ManifestResource";
// export * from "./ManifestType";
// export * from "./Range";
// export * from "./Rendering";
// export * from "./Resource";
// export * from "./Sequence";
// export * from "./Serialisation";
// export * from "./Service";
// export * from "./Size";
// export * from "./StatusCode";
// export * from "./Thumb";
// export * from "./Thumbnail";
// export * from "./TreeNode";
// export * from "./TreeNodeType";
export * from "./LanguageMap";
export * from "./Utils";

import { IManifestoOptions } from "./IManifestoOptions";
import { Deserialiser } from "./Serialisation";
import { Utils } from "./Utils";

export const loadManifest = (uri: string) => {
    return Utils.loadResource(uri);
}

export const create = (manifest: string, options?: IManifestoOptions) => {
    return Deserialiser.parse(manifest, options);
}