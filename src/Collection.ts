namespace Manifesto {
    export class Collection extends IIIFResource implements ICollection {
        public members: IIIIFResource[] = [];
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
            
            return this._collections = <ICollection[]>this.members.en().where(m => m.isCollection()).toArray();
        }

        getManifests(): IManifest[] {
            if (this._manifests) {
                return this._manifests;
            }
            
            return this._manifests = <IManifest[]>this.members.en().where(m => m.isManifest()).toArray();
        }

        getCollectionByIndex(collectionIndex: number): Promise<ICollection> {
            const collection: ICollection = this.getCollections()[collectionIndex];
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return <Promise<ICollection>>collection.load();
        }

        getManifestByIndex(manifestIndex: number): Promise<IManifest> {
            const manifest: IManifest = this.getManifests()[manifestIndex];
            manifest.options.index = manifestIndex;
            return <Promise<IManifest>>manifest.load();
        }

        getTotalCollections(): number {
            return this.getCollections().length;
        }

        getTotalManifests(): number {
            return this.getManifests().length;
        }

        getTotalMembers(): number {
            return this.members.length;
        }

        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree(): ITreeNode {

            super.getDefaultTree();
            
            this.defaultTree.data.type = TreeNodeType.COLLECTION.toString();

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
                    tree.label = manifest.parentLabel || TranslationCollection.getValue(manifest.getLabel(), this.options.locale) || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.id = manifest.id;
                    tree.data.type = TreeNodeType.MANIFEST.toString();
                    parentCollection.defaultTree.addNode(tree);
                }
            }
        }

        private _parseCollections(parentCollection: ICollection) {
            if (parentCollection.getCollections() && parentCollection.getCollections().length) {
                for (let i = 0; i < parentCollection.getCollections().length; i++) {
                    var collection = parentCollection.getCollections()[i];
                    var tree: ITreeNode = collection.getDefaultTree();
                    tree.label = collection.parentLabel || TranslationCollection.getValue(collection.getLabel(), this.options.locale) || 'collection ' + (i + 1);
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