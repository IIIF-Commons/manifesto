module Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public collections: Collection[] = [];
        public manifests: Manifest[] = [];

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld, options);
            jsonld.__collection = this;
        }

        getCollectionByIndex(collectionIndex: number): ICollection {
            return this.collections[collectionIndex];
        }

        getManifestByIndex(manifestIndex: number): IManifest {
            return this.manifests[manifestIndex];
        }

        getTotalCollections(): number{
            return this.collections.length;
        }

        getTotalManifests(): number{
            return this.manifests.length;
        }
    }
}