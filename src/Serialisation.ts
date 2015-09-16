var jmespath = require('jmespath');
var _isString = require("lodash.isstring");

module Manifesto {
    export class Deserialiser {
        static parse(manifest: string, options?: IManifestoOptions): IIIIFResource {
            return this.parseJson(JSON.parse(manifest), options);
        }

        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource {
            var object: IIIIFResource;

            // have options been passed for the manifest to inherit?
            if (options){
                if (options.navDate && !isNaN(options.navDate.getTime())){
                    json.navDate = options.navDate.toString();
                }
            }

            switch (json['@type']) {
            case 'sc:Collection':
                object = this.parseCollection(json, options);
                break;
            case 'sc:Manifest':
                object = this.parseManifest(json, options);
                break;
            default:
                return null;
            }

            // Top-level object was loaded from a URI, so flag it to prevent
            // unnecessary reload:
            object.isLoaded = true;
            return object;
        }

        static parseCollection(json: any, options?: IManifestoOptions): ICollection {
            var collection: Collection = new Collection(json, options);

            this.parseCollections(collection, options);
            this.parseManifests(collection, options);

            return collection;
        }

        static parseCollections(collection: ICollection, options?: IManifestoOptions): void {
            var children = collection.__jsonld.collections;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child: ICollection = this.parseCollection(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.collections.push(child);
                }
            }
        }

        static parseManifest(json: any, options?: IManifestoOptions): IManifest {
            var manifest: Manifest = new Manifest(json, options);

            this.parseSequences(manifest, options);

            if (manifest.__jsonld.structures && manifest.__jsonld.structures.length) {
                var r: any = JsonUtils.getRootRange(manifest.__jsonld);
                this.parseRanges(manifest, r, '');
            }

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

        static parseSequences(manifest: IManifest, options: IManifestoOptions): void {
            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            var children = manifest.__jsonld.mediaSequences || manifest.__jsonld.sequences;
            if (children) {
                for (var i = 0; i < children.length; i++){
                    var s = children[i];
                    var sequence: ISequence = new Sequence(s, options);
                    sequence.canvases = this.parseCanvases(s, options);
                    manifest.sequences.push(sequence);
                }
            }
        }

        static parseCanvases(sequence: any, options: IManifestoOptions): ICanvas[] {
            var canvases: ICanvas[] = [];

            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            var children = sequence.elements || sequence.canvases;

            for (var i = 0; i < children.length; i++) {
                var c = children[i];
                var canvas: ICanvas = new Canvas(c, options);
                canvases.push(canvas);
            }

            return canvases;
        }

        static parseRanges(manifest: IManifest, r: any, path: string, parentRange?: IRange): void {

            var range: IRange;

            if (_isString(r)){
                r = JsonUtils.getRangeById(manifest.__jsonld, r);
            }

            range = new Range(r, manifest.options);

            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange){
                manifest.rootRange = range;
            } else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }

            range.path = path;

            if (r.canvases){
                // create two-way relationship
                for (var i = 0; i < r.canvases.length; i++){
                    var canvas: ICanvas = this.getCanvasById(manifest, r.canvases[i]);
                    canvas.ranges.push(range);
                    range.canvases.push(canvas);
                }
            }

            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this.parseRanges(manifest, r.ranges[j], path + '/' + j, range);
                }
            }
        }

        static getCanvasById(manifest: IManifest, id: string): ICanvas {

            for (var i = 0; i < manifest.sequences.length; i++){
                var sequence: ISequence = manifest.sequences[i];

                for (var j = 0; j < sequence.canvases.length; j++){
                    var canvas: ICanvas = sequence.canvases[j];

                    if (canvas.id === id){
                        return canvas;
                    }
                }
            }

            return null;
        }
    }

    export class Serialiser {
        static serialise(manifest: IManifest): string {
            // todo
            return "";
        }
    }

    class JsonUtils {
        static getCanvasById(manifest: any, id: string): any {
            var result = jmespath.search(manifest, "sequences[].canvases[?\"@id\"=='" + id + "'][]");
            if (result.length) return result[0];
            console.log("canvas " + id + " not found");
            return null;
        }

        static getRangeById(manifest: any, id: string): any {
            var result = jmespath.search(manifest, "structures[?\"@id\"=='" + id + "'][]");
            if (result.length) return result[0]
            console.log("range " + id + " not found");
            return null;
        }

        static getRootRange(manifest: any): any {
            var result = jmespath.search(manifest, "structures[?viewingHint=='top'][]");
            if (result.length) return result[0];

            var rootRange: any = {};
            rootRange.ranges = manifest.structures;

            return rootRange;
        }
    }
}