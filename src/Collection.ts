module Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public collections: ICollection[] = [];
        public manifests: IManifest[] = [];

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
            jsonld.__collection = this;
        }

        getCollectionByIndex(collectionIndex: number): Promise<ICollection>  {
            var collection: ICollection = this.collections[collectionIndex];
            // id for collection MUST be dereferenceable
            return collection.load();
        }

        getManifestByIndex(manifestIndex: number): Promise<IManifest> {
            var manifest: IManifest = this.manifests[manifestIndex];
            return manifest.load();
        }

        getTotalCollections(): number{
            return this.collections.length;
        }

        getTotalManifests(): number{
            return this.manifests.length;
        }

        getTree(): TreeNode{

            super.getTree();

            this.treeRoot.data.type = TreeNodeType.COLLECTION.toString();

            this._parseManifests(this);
            this._parseCollections(this);

            this.generateTreeNodeIds(this.treeRoot);

            return this.treeRoot;
        }

        private _parseManifests(parentCollection: ICollection) {
            if (parentCollection.manifests && parentCollection.manifests.length) {
                for (var i = 0; i < parentCollection.manifests.length; i++) {
                    var manifest = parentCollection.manifests[i];
                    var tree: TreeNode = manifest.getTree();
                    tree.label = manifest.getTitle() || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.type = TreeNodeType.MANIFEST.toString();
                    parentCollection.treeRoot.addNode(tree);
                }
            }
        }

        private _parseCollections(parentCollection: ICollection) {
            if (parentCollection.collections && parentCollection.collections.length) {
                for (var i = 0; i < parentCollection.collections.length; i++) {
                    var collection = parentCollection.collections[i];
                    var tree: TreeNode = collection.getTree();
                    tree.label = collection.getTitle() || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.type = TreeNodeType.COLLECTION.toString();
                    parentCollection.treeRoot.addNode(tree);

                    this._parseCollections(collection);
                }
            }
        }
    }
}