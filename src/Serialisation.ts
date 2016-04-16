var _isString = require("lodash.isstring");

module Manifesto {
    export class Deserialiser {
        static parse(manifest: string, options?: IManifestoOptions): IIIIFResource {
            return this.parseJson(JSON.parse(manifest), options);
        }

        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource {
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
            var collection: Collection = new Collection(json, options);

            if (options){
                collection.index = options.index || 0;
            } else {
                collection.index = 0;
            }

            this.parseCollections(collection, options);
            this.parseManifests(collection, options);

            return collection;
        }

        static parseCollections(collection: ICollection, options?: IManifestoOptions): void {
            var children = collection.__jsonld.collections;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    if (options){
                        options.index = i;
                    }
                    var child: ICollection = this.parseCollection(children[i], options);
                    child.parentCollection = collection;
                    collection.collections.push(child);
                }
            }
        }

        static parseManifest(json: any, options?: IManifestoOptions): IManifest {
            var manifest: IManifest = new Manifest(json, options);
            return manifest;
        }

        static parseManifests(collection: ICollection, options?: IManifestoOptions): void {
            var children = collection.__jsonld.manifests;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child: IManifest = this.parseManifest(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.manifests.push(child);
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