module Manifesto {
    export interface ICollection extends IIIIFResource {
        getCollectionByIndex(index: number): ICollection;
        getManifestByIndex(index: number): IManifest;
        getTotalCollections(): number;
        getTotalManifests(): number;
        collections: ICollection[];
        manifests: IManifest[];
    }
}