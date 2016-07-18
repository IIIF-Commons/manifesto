module Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public collections: ICollection[] = [];
        public manifests: IManifest[] = [];

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld, options);
            jsonld.__collection = this;
        }

        getCollectionByIndex(collectionIndex: number): Promise<ICollection>  {
            var collection: ICollection = this.collections[collectionIndex];
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return collection.load();
        }

        getManifestByIndex(manifestIndex: number): Promise<IManifest> {
            var manifest: IManifest = this.manifests[manifestIndex];
            manifest.options.index = manifestIndex;
            return manifest.load();
        }

        getTotalCollections(): number{
            return this.collections.length;
        }

        getTotalManifests(): number{
            return this.manifests.length;
        }

        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree(): ITreeNode{

            super.getDefaultTree();
            
            this.defaultTree.data.type = TreeNodeType.COLLECTION.toString();

            this._parseManifests(this);
            this._parseCollections(this);

            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);

            return this.defaultTree;
        }

        private _parseManifests(parentCollection: ICollection) {
            if (parentCollection.manifests && parentCollection.manifests.length) {
                for (var i = 0; i < parentCollection.manifests.length; i++) {
                    var manifest = parentCollection.manifests[i];
                    var tree: ITreeNode = manifest.getDefaultTree();
                    tree.label = manifest.parentLabel || manifest.getLabel() || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.id = manifest.id;
                    tree.data.type = TreeNodeType.MANIFEST.toString();
                    parentCollection.defaultTree.addNode(tree);
                }
            }
        }

        private _parseCollections(parentCollection: ICollection) {
            if (parentCollection.collections && parentCollection.collections.length) {
                for (var i = 0; i < parentCollection.collections.length; i++) {
                    var collection = parentCollection.collections[i];
                    var tree: ITreeNode = collection.getDefaultTree();
                    tree.label = collection.parentLabel || collection.getLabel() || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.id = collection.id;
                    tree.data.type = TreeNodeType.COLLECTION.toString();
                    parentCollection.defaultTree.addNode(tree);

                    this._parseCollections(collection);
                }
            }
        }
    }
}