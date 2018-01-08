namespace Manifesto {
    export interface ICollection extends IIIIFResource {
        getCollectionByIndex(index: number): Promise<ICollection>;
        getCollections(): ICollection[]; 
        getManifestByIndex(index: number): Promise<IManifest>;
        getManifests(): IManifest[];
        getTotalCollections(): number;
        getTotalManifests(): number;
        getViewingDirection(): Manifesto.ViewingDirection;
        items: IIIIFResource[];
    }
}