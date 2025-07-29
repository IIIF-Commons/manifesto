import {
  Behavior,
  ViewingDirection,
  ViewingHint,
} from "@iiif/vocabulary/dist-commonjs";
import {
  IIIFResource,
  IManifestoOptions,
  Manifest,
  TreeNode,
  TreeNodeType,
  Utils,
} from "./internal";

export class Collection extends IIIFResource {
  public items: IIIFResource[] = [];
  private _collections: Collection[] | null = null;
  private _manifests: Manifest[] | null = null;

  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
    jsonld.__collection = this;
  }

  getCollections(): Collection[] {
    if (this._collections) {
      return this._collections;
    }
    return (this._collections = <Collection[]>(
      this.items.filter((m) => m.isCollection())
    ));
  }

  getManifests(): Manifest[] {
    if (this._manifests) {
      return this._manifests;
    }
    return (this._manifests = <Manifest[]>(
      this.items.filter((m) => m.isManifest())
    ));
  }

  getCollectionByIndex(collectionIndex: number): Promise<Collection> {
    const collections: Collection[] = this.getCollections();

    let collection: Collection | undefined;

    for (let i = 0; i < collections.length; i++) {
      const c: Collection = collections[i];
      if (c.index === collectionIndex) {
        collection = c;
      }
    }

    if (collection) {
      collection.options.index = collectionIndex;
      // id for collection MUST be dereferenceable
      return <Promise<Collection>>collection.load();
    } else {
      throw new Error("Collection index not found");
    }
  }

  getManifestByIndex(manifestIndex: number): Promise<Manifest> {
    const manifests: Manifest[] = this.getManifests();

    let manifest: Manifest | undefined;

    for (let i = 0; i < manifests.length; i++) {
      const m: Manifest = manifests[i];
      if (m.index === manifestIndex) {
        manifest = m;
      }
    }

    if (manifest) {
      manifest.options.index = manifestIndex;
      return <Promise<Manifest>>manifest.load();
    } else {
      throw new Error("Manifest index not found");
    }
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
    if (this.getProperty("viewingDirection")) {
      return this.getProperty("viewingDirection");
    }

    return ViewingDirection.LEFT_TO_RIGHT;
  }

  /**
   * Note: this only will return the first behavior as per the manifesto convention
   * IIIF v3 supports multiple behaviors
   */
  getBehavior(): Behavior | null {
    let behavior: any = this.getProperty("behavior");

    if (Array.isArray(behavior)) {
      behavior = behavior[0];
    }

    if (behavior) {
      return behavior;
    }

    return null;
  }

  getViewingHint(): ViewingHint | null {
    let viewingHint: any = this.getProperty("viewingHint");

    if (Array.isArray(viewingHint)) {
      viewingHint = viewingHint[0];
    }

    if (viewingHint) {
      return viewingHint;
    }

    return null;
  }

  /**
   * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
   */
  getDefaultTree(): TreeNode {
    super.getDefaultTree();

    //console.log("get default tree for ", this.id);

    this.defaultTree.data.type = Utils.normaliseType(TreeNodeType.COLLECTION);

    this._parseManifests(this);
    this._parseCollections(this);

    Utils.generateTreeNodeIds(this.defaultTree);

    return this.defaultTree;
  }

  private _parseManifests(parentCollection: Collection) {
    if (
      parentCollection.getManifests() &&
      parentCollection.getManifests().length
    ) {
      for (let i = 0; i < parentCollection.getManifests().length; i++) {
        var manifest = parentCollection.getManifests()[i];
        var tree: TreeNode = manifest.getDefaultTree();
        tree.label =
          manifest.parentLabel ||
          manifest.getLabel().getValue(this.options.locale) ||
          "manifest " + (i + 1);
        tree.navDate = manifest.getNavDate();
        tree.data.id = manifest.id;
        tree.data.type = Utils.normaliseType(TreeNodeType.MANIFEST);
        parentCollection.defaultTree.addNode(tree);
      }
    }
  }

  private _parseCollections(parentCollection: Collection) {
    //console.log("parse collections for ", parentCollection.id);
    if (
      parentCollection.getCollections() &&
      parentCollection.getCollections().length
    ) {
      for (let i = 0; i < parentCollection.getCollections().length; i++) {
        var collection = parentCollection.getCollections()[i];
        var tree: TreeNode = collection.getDefaultTree();
        tree.label =
          collection.parentLabel ||
          collection.getLabel().getValue(this.options.locale) ||
          "collection " + (i + 1);
        tree.navDate = collection.getNavDate();
        tree.data.id = collection.id;
        tree.data.type = Utils.normaliseType(TreeNodeType.COLLECTION);
        parentCollection.defaultTree.addNode(tree);
      }
    }
  }
}
