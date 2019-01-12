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

import { Annotation } from "./Annotation";
import { AnnotationBody } from "./AnnotationBody";
import { AnnotationList } from "./AnnotationList";
import { AnnotationPage } from "./AnnotationPage";
import { Canvas } from "./Canvas";
import { Collection } from "./Collection";
import { Duration } from "./Duration";
import { IAccessToken } from "./IAccessToken";
import { IExternalResource } from "./IExternalResource";
import { IExternalResourceOptions } from "./IExternalResourceOptions";
import { IIIFResource } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { LabelValuePair } from "./LabelValuePair";
import { Language } from "./Language";
import { LanguageMap } from "./LanguageMap";
import { Manifest } from "./Manifest";
import { ManifestResource } from "./ManifestResource";
import { ManifestType } from "./ManifestType";
import { Rendering } from "./Rendering";
import { Resource } from "./Resource";
import { Sequence } from "./Sequence";
import { Service } from "./Service";
import { Size } from "./Size";
import { StatusCode } from "./StatusCode";
import { Thumb } from "./Thumb";
import { Thumbnail } from "./Thumbnail";
import { TreeNode } from "./TreeNode";
import { TreeNodeType } from "./TreeNodeType";
import { Utils } from "./Utils";

export const loadManifest = (uri: string) => {
    return Utils.loadManifest(uri);
}

export const parseManifest = (manifest: string, options?: IManifestoOptions) => {
    return Utils.parseManifest(manifest, options);
}

// global types
declare global {
    namespace manifesto {
        export function loadManifest(uri: string): Promise<string>;
        export function parseManifest(manifest: string, options?: IManifestoOptions | undefined): IIIFResource | null;
        export const Annotation: Annotation;
        export const AnnotationBody: AnnotationBody;
        export const AnnotationList: AnnotationList;
        export const AnnotationPage: AnnotationPage;
        export const Canvas: Canvas;
        export const Collection: Collection;
        export const Duration: Duration;
        export const IAccessToken: IAccessToken
        export const IExternalResource: IExternalResource;
        export const IExternalResourceOptions: IExternalResourceOptions;
        export const IIIFResource: IIIFResource;
        export const IManifestoOptions: IManifestoOptions;
        export const LabelValuePair: LabelValuePair;
        export const Language: Language;
        export const LanguageMap: LanguageMap;
        export const Manifest: Manifest;
        export const ManifestResource: ManifestResource;
        export const ManifestType: ManifestType;
        export const Range: Range;
        export const Rendering: Rendering;
        export const Resource: Resource;
        export const Sequence: Sequence;
        export const Service: Service;
        export const Size: Size;
        export const StatusCode: StatusCode;
        export const Thumb: Thumb;
        export const Thumbnail: Thumbnail;
        export const TreeNode: TreeNode;
        export const TreeNodeType: TreeNodeType;
        export const Utils: Utils;
    }
}