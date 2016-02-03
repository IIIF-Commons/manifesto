module Manifesto {
    export interface ICollection extends IIIIFResource {
        collections: ICollection[];
        getCollectionByIndex(index: number): Promise<ICollection>;
        getManifestByIndex(index: number): Promise<IManifest>;
        getTotalCollections(): number;
        getTotalManifests(): number;
        getTree(): ITreeNode;
        manifests: IManifest[];
    }
}