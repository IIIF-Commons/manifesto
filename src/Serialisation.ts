namespace Manifesto {
    export class Deserialiser {
        static parse(manifest: string, options?: IManifestoOptions): IIIIFResource | null {
            return this.parseJson(JSON.parse(manifest), options);
        }

        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource | null {
            var resource: IIIIFResource;

            // have options been passed for the manifest to inherit?
            if (options){
                if (options.navDate && !isNaN(options.navDate.getTime())){
                    json.navDate = options.navDate.toString();
                }
            }

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
            this.parseMembers(collection, options);

            return collection;
        }

        static parseCollections(collection: ICollection, options?: IManifestoOptions): void {
            const children = collection.__jsonld.collections;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    if (options){
                        options.index = i;
                    }
                    const child: ICollection = this.parseCollection(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
                }
            }
        }

        static parseManifest(json: any, options?: IManifestoOptions): IManifest {
            const manifest: IManifest = new Manifest(json, options);
            return manifest;
        }

        static parseManifests(collection: ICollection, options?: IManifestoOptions): void {
            const children = collection.__jsonld.manifests;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    const child: IManifest = this.parseManifest(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
                }
            }
        }

        static parseMember(json: any, options?: IManifestoOptions): IIIIFResource | null {
            if (json['@type'].toLowerCase() === 'sc:manifest'){
                return <IIIIFResource>this.parseManifest(json, options);
            } else if (json['@type'].toLowerCase() === 'sc:collection'){
                return <IIIIFResource>this.parseCollection(json, options);
            }
            return null;
        }

        static parseMembers(collection: ICollection, options?: IManifestoOptions): void {
            const children = collection.__jsonld.members;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    if (options){
                        options.index = i;
                    }
                    var child: IIIIFResource | null = this.parseMember(children[i], options);
                    if (!child) return;
                    // only add to members if not already parsed from backwards-compatible collections/manifests arrays
                    if (collection.members.en().where(m => m.id === (<IIIFResource>child).id).first()) {
                        continue;
                    }
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
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