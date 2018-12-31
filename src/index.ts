export * from "./Annotation";
export * from "./AnnotationBody";
export * from "./AnnotationList";
export * from "./AnnotationPage";
export * from "./Canvas";
export * from "./Collection";
export * from "./Duration";
export * from "./IAccessToken";
export * from "./IExternalResource";
export * from "./IExternalResourceOptions";
export * from "./IIIFResource";
export * from "./IManifestoOptions";
export * from "./LabelValuePair";
export * from "./Language";
export * from "./LanguageMap";
export * from "./Manifest";
export * from "./ManifestResource";
export * from "./ManifestType";
export * from "./Range";
export * from "./Rendering";
export * from "./Resource";
export * from "./Sequence";
export * from "./Service";
export * from "./Size";
export * from "./StatusCode";
export * from "./Thumb";
export * from "./Thumbnail";
export * from "./TreeNode";
export * from "./TreeNodeType";
export * from "./Utils";
export * from "@iiif/vocabulary";

import { IManifestoOptions } from "./IManifestoOptions";
import { Deserialiser } from "./Serialisation";
import { Utils } from "./Utils";
import { IIIFResource } from "./IIIFResource";

export const loadManifest = (uri: string) => {
    return Utils.loadResource(uri);
}

export const create = (manifest: string, options?: IManifestoOptions) => {
    return Deserialiser.parse(manifest, options);
}

export declare namespace manifesto {
    function loadManifest(uri: string): Promise<string>;
    function create(manifest: string, options?: IManifestoOptions | undefined): IIIFResource | null;
}