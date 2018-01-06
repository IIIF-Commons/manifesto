namespace Manifesto {
    export class Deserialiser {
        static parse(manifest: any, options?: IManifestoOptions): IIIIFResource | null {
            if (typeof manifest === 'string') {
                manifest = JSON.parse(manifest);
            }
            
            return this.parseJson(manifest, options);
        }

        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource | null {
            let resource: IIIIFResource;

            // have options been passed for the manifest to inherit?
            if (options){
                if (options.navDate && !isNaN(options.navDate.getTime())){
                    json.navDate = options.navDate.toString();
                }
            }

            if (json['@type']) {
                switch (json['@type']) {
                    case 'sc:Collection':
                        resource = this.parseCollection(json, options);
                        break;
                    case 'sc:Manifest':
                        resource = this.parseManifest(json, options);
                        break;
                    default:
                        return null;
                }
            } else {
                // presentation 3
                switch (json['type']) {
                    case 'Collection':
                        resource = this.parseCollection(json, options);
                        break;
                    case 'Manifest':
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

        static parseCollection(json: any, options?: IManifestoOptions): ICollection {
            const collection: Collection = new Collection(json, <IManifestoOptions>options);

            if (options) {
                collection.index = options.index || 0;
            } else {
                collection.index = 0;
            }

            this.parseCollections(collection, options);
            this.parseManifests(collection, options);
            this.parseItems(collection, options);

            return collection;
        }

        static parseCollections(collection: ICollection, options?: IManifestoOptions): void {
            const items = collection.__jsonld.collections || collection.__jsonld.items;
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (options) {
                        options.index = i;
                    }
                    const item: ICollection = this.parseCollection(items[i], options);
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                }
            }
        }

        static parseManifest(json: any, options?: IManifestoOptions): IManifest {
            const manifest: IManifest = new Manifest(json, options);
            return manifest;
        }

        static parseManifests(collection: ICollection, options?: IManifestoOptions): void {
            const items = collection.__jsonld.manifests || collection.__jsonld.items;
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    const item: IManifest = this.parseManifest(items[i], options);
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                }
            }
        }

        static parseItem(json: any, options?: IManifestoOptions): IIIIFResource | null {
            if (json['@type']) {
                if (json['@type'].toLowerCase() === 'sc:manifest') {
                    return <IIIIFResource>this.parseManifest(json, options);
                } else if (json['@type'].toLowerCase() === 'sc:collection') {
                    return <IIIIFResource>this.parseCollection(json, options);
                }
            } else if (json.type) {
                if (json.type.toLowerCase() === 'manifest') {
                    return <IIIIFResource>this.parseManifest(json, options);
                } else if (json.type.toLowerCase() === 'collection') {
                    return <IIIIFResource>this.parseCollection(json, options);
                }
            }
            
            return null;
        }

        static parseItems(collection: ICollection, options?: IManifestoOptions): void {
            const items = collection.__jsonld.members || collection.__jsonld.items;
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (options) {
                        options.index = i;
                    }
                    const item: IIIIFResource | null = this.parseItem(items[i], options);
                    if (!item) return;
                    // only add to items if not already parsed from backwards-compatible collections/manifests arrays
                    if (collection.items.en().where(m => m.id === (<IIIFResource>item).id).first()) {
                        continue;
                    }
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                }
            }
        }
    }

    export class Serialiser {
        static serialise(manifest: IManifest): string {
            // todo
            return "";
        }
    }
}