namespace Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public items: IIIIFResource[] = [];
        private _collections: ICollection[] | null = null;
        private _manifests: IManifest[] | null = null;

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
            jsonld.__collection = this;
        }

        getCollections(): ICollection[] {
            if (this._collections) {
                return this._collections;
            }
            return this._collections = <ICollection[]>this.items.filter(m => m.isCollection());
        }

        getManifests(): IManifest[] {
            if (this._manifests) {
                return this._manifests;
            }
            return this._manifests = <IManifest[]>this.items.filter(m => m.isManifest());
        }

        getCollectionByIndex(collectionIndex: number): Promise<ICollection> {
            const collections: ICollection[] = this.getCollections();

            if (!collections[collectionIndex]) {
                throw new Error("Collection index is outside range of array");
            }
            
            const collection: ICollection = collections[collectionIndex];
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return <Promise<ICollection>>collection.load();
        }

        getManifestByIndex(manifestIndex: number): Promise<IManifest> {
            const manifests: IManifest[] = this.getManifests();

            if (!manifests[manifestIndex]) {
                throw new Error("Manifest index is outside range of array");
            }

            const manifest: IManifest = manifests[manifestIndex];
            manifest.options.index = manifestIndex;
            return <Promise<IManifest>>manifest.load();
        }

        getTotalCollections(): number {
            return this.getCollections().length;
        }

        getTotalManifests(): number {
            return this.getManifests().length;
        }

        getTotalItems(): number {
            return this.items.length;
        }

        getViewingDirection(): ViewingDirection {
            if (this.getProperty('viewingDirection')) {
                return new ViewingDirection(this.getProperty('viewingDirection'));
            }

            return ViewingDirection.LEFTTORIGHT;
        }

        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree(): ITreeNode {

            super.getDefaultTree();
            
            this.defaultTree.data.type = Utils.normaliseType(TreeNodeType.COLLECTION.toString());

            this._parseManifests(this);
            this._parseCollections(this);

            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);

            return this.defaultTree;
        }

        private _parseManifests(parentCollection: ICollection) {
            if (parentCollection.getManifests() && parentCollection.getManifests().length) {
                for (let i = 0; i < parentCollection.getManifests().length; i++) {
                    var manifest = parentCollection.getManifests()[i];
                    var tree: ITreeNode = manifest.getDefaultTree();
                    tree.label = manifest.parentLabel || LanguageMap.getValue(manifest.getLabel(), this.options.locale) || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.id = manifest.id;
                    tree.data.type = Utils.normaliseType(TreeNodeType.MANIFEST.toString());
                    parentCollection.defaultTree.addNode(tree);
                }
            }
        }

        private _parseCollections(parentCollection: ICollection) {
            if (parentCollection.getCollections() && parentCollection.getCollections().length) {
                for (let i = 0; i < parentCollection.getCollections().length; i++) {
                    var collection = parentCollection.getCollections()[i];
                    var tree: ITreeNode = collection.getDefaultTree();
                    tree.label = collection.parentLabel || LanguageMap.getValue(collection.getLabel(), this.options.locale) || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.id = collection.id;
                    tree.data.type = Utils.normaliseType(TreeNodeType.COLLECTION.toString());
                    parentCollection.defaultTree.addNode(tree);

                    this._parseCollections(collection);
                }
            }
        }
    }
}
