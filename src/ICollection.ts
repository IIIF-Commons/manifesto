module Manifesto {
    export interface ICollection extends IIIIFResource {
        collections: ICollection[];
        getCollectionByIndex(index: number): ICollection;
        getManifestByIndex(index: number): IManifest;
        getTotalCollections(): number;
        getTotalManifests(): number;
        getTree(): TreeNode;
        manifests: IManifest[];
    }
}