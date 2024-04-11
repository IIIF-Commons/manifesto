import { ManifestResource, PropertyValue, LabelValuePair, TreeNode, IManifestoOptions, Collection } from "./internal";
import { IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
export declare class IIIFResource extends ManifestResource {
    defaultTree: TreeNode;
    index: number;
    isLoaded: boolean;
    parentCollection: Collection;
    parentLabel: string;
    constructor(jsonld?: any, options?: IManifestoOptions);
    /**
     * @deprecated
     */
    getAttribution(): PropertyValue;
    getDescription(): PropertyValue;
    getHomepage(): string | null;
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
