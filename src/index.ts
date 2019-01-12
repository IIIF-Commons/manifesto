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

import { Annotation as TAnnotation } from "./Annotation";
import { AnnotationBody as TAnnotationBody } from "./AnnotationBody";
import { AnnotationList as TAnnotationList } from "./AnnotationList";
import { AnnotationPage as TAnnotationPage } from "./AnnotationPage";
import { Canvas as TCanvas } from "./Canvas";
import { Collection as TCollection } from "./Collection";
import { Duration as TDuration } from "./Duration";
import { IAccessToken as TIAccessToken } from "./IAccessToken";
import { IExternalResource as TIExternalResource } from "./IExternalResource";
import { IExternalResourceOptions as TIExternalResourceOptions } from "./IExternalResourceOptions";
import { IIIFResource as TIIIFResource } from "./IIIFResource";
import { IManifestoOptions as TIManifestoOptions } from "./IManifestoOptions";
import { LabelValuePair as TLabelValuePair } from "./LabelValuePair";
import { Language as TLanguage } from "./Language";
import { LanguageMap as TLanguageMap } from "./LanguageMap";
import { Manifest as TManifest } from "./Manifest";
import { ManifestResource as TManifestResource } from "./ManifestResource";
import { ManifestType as TManifestType } from "./ManifestType";
import { Rendering as TRendering } from "./Rendering";
import { Range as TRange } from "./Range";
import { Resource as TResource } from "./Resource";
import { Sequence as TSequence } from "./Sequence";
import { Service as TService } from "./Service";
import { Size as TSize } from "./Size";
import { StatusCode as TStatusCode } from "./StatusCode";
import { Thumb as TThumb } from "./Thumb";
import { Thumbnail as TThumbnail } from "./Thumbnail";
import { TreeNode as TTreeNode } from "./TreeNode";
import { TreeNodeType as TTreeNodeType } from "./TreeNodeType";
import { Utils as TUtils } from "./Utils";

export const loadManifest: (uri: string) => Promise<string> = (uri: string) => {
    return TUtils.loadManifest(uri);
}

export const parseManifest: (manifest: string, options?: TIManifestoOptions | undefined) => TIIIFResource | null = (manifest: string, options?: TIManifestoOptions) => {
    return TUtils.parseManifest(manifest, options);
}

// global types
declare global {
    namespace manifesto {
        function loadManifest(uri: string): Promise<string>;
        function parseManifest(manifest: string, options?: TIManifestoOptions | undefined): TIIIFResource | null;
        type Annotation = TAnnotation;
        type AnnotationBody = TAnnotationBody;
        type AnnotationList = TAnnotationList;
        type AnnotationPage = TAnnotationPage;
        type Canvas = TCanvas;
        type Collection = TCollection;
        type Duration = TDuration;
        type IAccessToken = TIAccessToken;
        type IExternalResource = TIExternalResource;
        type IExternalResourceOptions = TIExternalResourceOptions;
        type IIIFResource = TIIIFResource;
        type IManifestoOptions = TIManifestoOptions;
        type LabelValuePair = TLabelValuePair;
        type Language = TLanguage;
        type LanguageMap = TLanguageMap;
        type Manifest = TManifest;
        type ManifestResource = TManifestResource;
        type ManifestType = TManifestType;
        type Range = TRange;
        type Rendering = TRendering;
        type Resource = TResource;
        type Sequence = TSequence;
        type Service = TService;
        type Size = TSize;
        type StatusCode = TStatusCode;
        type Thumb = TThumb;
        type Thumbnail = TThumbnail;
        type TreeNode = TTreeNode;
        type TreeNodeType = TTreeNodeType;
        type Utils = TUtils;
    }
}