import {
  Collection,
  IIIFResource,
  IManifestoOptions,
  Manifest,
} from "./internal";

export class Deserialiser {
  static parse(
    manifest: any,
    options?: IManifestoOptions
  ): IIIFResource | null {
    if (typeof manifest === "string") {
      manifest = JSON.parse(manifest);
    }

    return this.parseJson(manifest, options);
  }

  static parseJson(
    json: any,
    options?: IManifestoOptions
  ): IIIFResource | null {
    let resource: IIIFResource;

    // have options been passed for the manifest to inherit?
    if (options) {
      if (options.navDate && !isNaN(options.navDate.getTime())) {
        json.navDate = options.navDate.toString();
      }
    }

    if (json["@type"]) {
      switch (json["@type"]) {
        case "sc:Collection":
          resource = this.parseCollection(json, options);
          break;
        case "sc:Manifest":
          resource = this.parseManifest(json, options);
          break;
        default:
          return null;
      }
    } else {
      // presentation 3
      switch (json["type"]) {
        case "Collection":
          resource = this.parseCollection(json, options);
          break;
        case "Manifest":
          resource = this.parseManifest(json, options);
          break;
        default:
          return null;
      }
    }

    // Top-level resource was loaded from a URI, so flag it to prevent
    // unnecessary reload:
    resource.isLoaded = true;
    return resource;
  }

  static parseCollection(json: any, options?: IManifestoOptions): Collection {
    const collection: Collection = new Collection(
      json,
      <IManifestoOptions>options
    );

    if (options) {
      collection.index = options.index || 0;
      if (options.resource) {
        collection.parentCollection = options.resource.parentCollection;
      }
    } else {
      collection.index = 0;
    }

    this.parseCollections(collection, options);
    this.parseManifests(collection, options);
    this.parseItems(collection, options);

    return collection;
  }

  static parseCollections(
    collection: Collection,
    options?: IManifestoOptions
  ): void {
    let items;

    if (collection.__jsonld.collections) {
      items = collection.__jsonld.collections;
    } else if (collection.__jsonld.items) {
      items = collection.__jsonld.items.filter(
        (m) => m.type.toLowerCase() === "collection"
      );
    }

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (options) {
          options.index = i;
        }
        const item: Collection = this.parseCollection(items[i], options);
        item.index = i;
        item.parentCollection = collection;
        collection.items.push(item);
      }
    }
  }

  static parseManifest(json: any, options?: IManifestoOptions): Manifest {
    const manifest: Manifest = new Manifest(json, options);
    return manifest;
  }

  static parseManifests(
    collection: Collection,
    options?: IManifestoOptions
  ): void {
    let items;

    if (collection.__jsonld.manifests) {
      items = collection.__jsonld.manifests;
    } else if (collection.__jsonld.items) {
      items = collection.__jsonld.items.filter(
        (m) => m.type.toLowerCase() === "manifest"
      );
    }

    if (items) {
      for (let i = 0; i < items.length; i++) {
        const item: Manifest = this.parseManifest(items[i], options);
        item.index = i;
        item.parentCollection = collection;
        collection.items.push(item);
      }
    }
  }

  static parseItem(
    json: any,
    options?: IManifestoOptions
  ): IIIFResource | null {
    if (json["@type"]) {
      if (json["@type"].toLowerCase() === "sc:manifest") {
        return <IIIFResource>this.parseManifest(json, options);
      } else if (json["@type"].toLowerCase() === "sc:collection") {
        return <IIIFResource>this.parseCollection(json, options);
      }
    } else if (json.type) {
      if (json.type.toLowerCase() === "manifest") {
        return <IIIFResource>this.parseManifest(json, options);
      } else if (json.type.toLowerCase() === "collection") {
        return <IIIFResource>this.parseCollection(json, options);
      }
    }

    return null;
  }

  static parseItems(collection: Collection, options?: IManifestoOptions): void {
    const items = collection.__jsonld.members || collection.__jsonld.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (options) {
          options.index = i;
        }
        const item: IIIFResource | null = this.parseItem(items[i], options);
        if (!item) return;
        // only add to items if not already parsed from backwards-compatible collections/manifests arrays
        if (
          collection.items.filter((m) => m.id === (<IIIFResource>item).id)[0]
        ) {
          continue;
        }
        item.index = i;
        item.parentCollection = collection;
        collection.items.push(item);
      }
    }
  }
}
