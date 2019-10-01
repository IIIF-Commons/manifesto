import { ViewingDirection } from "@iiif/vocabulary";
import { IIIFResource } from "./IIIFResource";
import { Manifest } from "./Manifest";
import { IManifestoOptions } from "./IManifestoOptions";
import { TreeNode } from "./TreeNode";
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
     * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
     */
    getDefaultTree(): TreeNode;
    private _parseManifests;
    private _parseCollections;
}
