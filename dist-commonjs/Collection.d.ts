import { Behavior, ViewingDirection, ViewingHint } from "@iiif/vocabulary/dist-commonjs";
import { IIIFResource, IManifestoOptions, Manifest, TreeNode } from "./internal";
export declare class Collection extends IIIFResource {
    items: IIIFResource[];
    private _collections;
    private _manifests;
    constructor(jsonld: any, options: IManifestoOptions);
    getCollections(): Collection[];
    getManifests(): Manifest[];
    getCollectionByIndex(collectionIndex: number): Promise<Collection>;
    getManifestByIndex(manifestIndex: number): Promise<Manifest>;
    getTotalCollections(): number;
    getTotalManifests(): number;
    getTotalItems(): number;
    getViewingDirection(): ViewingDirection;
    /**
     * Note: this only will return the first behavior as per the manifesto convention
     * IIIF v3 supports multiple behaviors
     */
    getBehavior(): Behavior | null;
    getViewingHint(): ViewingHint | null;
    /**
     * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
     */
    getDefaultTree(): TreeNode;
    private _parseManifests;
    private _parseCollections;
}
