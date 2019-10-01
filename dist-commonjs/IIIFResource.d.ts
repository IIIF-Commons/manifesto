import { ManifestResource } from "./ManifestResource";
export declare class IIIFResource extends ManifestResource {
    defaultTree: TreeNode;
    index: number;
    isLoaded: boolean;
    parentCollection: Collection;
    parentLabel: string;
    constructor(jsonld?: any, options?: IManifestoOptions);
    getAttribution(): LanguageMap;
    getDescription(): LanguageMap;
    getIIIFResourceType(): IIIFResourceType;
    getLogo(): string | null;
    getLicense(): string | null;
    getNavDate(): Date;
    getRelated(): any;
    getSeeAlso(): any;
    getTrackingLabel(): string;
    getDefaultTree(): TreeNode;
    getRequiredStatement(): LabelValuePair | null;
    isCollection(): boolean;
    isManifest(): boolean;
    load(): Promise<IIIFResource>;
}
import { TreeNode } from "./TreeNode";
import { Collection } from "./Collection";
import { IManifestoOptions } from "./IManifestoOptions";
import { LanguageMap } from "./LanguageMap";
import { LabelValuePair } from "./LabelValuePair";
import { IIIFResourceType } from "@iiif/vocabulary";
