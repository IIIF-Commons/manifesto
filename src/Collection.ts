module Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public collections: ICollection[] = [];
        public manifests: IManifest[] = [];

        constructor(jsonld: any, options: IManifestoOptions) {
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

        getTree(): TreeNode{

            super.getTree();

            this.treeRoot.data.type = 'collection';

            this._parseManifests(this);
            this._parseCollections(this);

            return this.treeRoot;
        }

        private _parseManifests(parentCollection: ICollection) {
            if (parentCollection.manifests && parentCollection.manifests.length) {
                for (var i = 0; i < parentCollection.manifests.length; i++) {
                    var manifest = parentCollection.manifests[i];
                    var tree: TreeNode = manifest.getTree();
                    tree.label = manifest.getTitle() || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
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
                    parentCollection.treeRoot.addNode(tree);

                    this._parseCollections(collection);
                }
            }
        }
    }
}