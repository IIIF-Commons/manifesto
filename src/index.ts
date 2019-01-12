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
        function loadManifest(uri: string): Promise<string>;
        function parseManifest(manifest: string, options?: IManifestoOptions | undefined): IIIFResource | null;
        const Annotation: Annotation;
        const AnnotationBody: AnnotationBody;
        const AnnotationList: AnnotationList;
        const AnnotationPage: AnnotationPage;
        const Canvas: Canvas;
        const Collection: Collection;
        const Duration: Duration;
        const IAccessToken: IAccessToken
        const IExternalResource: IExternalResource;
        const IExternalResourceOptions: IExternalResourceOptions;
        const IIIFResource: IIIFResource;
        const IManifestoOptions: IManifestoOptions;
        const LabelValuePair: LabelValuePair;
        const Language: Language;
        const LanguageMap: LanguageMap;
        const Manifest: Manifest;
        const ManifestResource: ManifestResource;
        const ManifestType: ManifestType;
        const Range: Range;
        const Rendering: Rendering;
        const Resource: Resource;
        const Sequence: Sequence;
        const Service: Service;
        const Size: Size;
        const StatusCode: StatusCode;
        const Thumb: Thumb;
        const Thumbnail: Thumbnail;
        const TreeNode: TreeNode;
        const TreeNodeType: TreeNodeType;
        const Utils: Utils;
    }
}