var jmespath = require('jmespath');

module Manifesto {
    export class Deserialiser {
        static parse(manifest: string, options?: IManifestoOptions): IIIIFResource {
            return this.parseJson(JSON.parse(manifest), options);
        }

        static parseJson(json: any, options?: IManifestoOptions): IIIIFResource {
            var object: IIIIFResource;
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

        static parseCollection(json: any, options?: IManifestoOptions): Collection {
            var collection: Collection = new Collection(json, options);

            this.parseCollections(collection, options);
            this.parseManifests(collection, options);

            return collection;
        }

        static parseCollections(collection: Collection, options?: IManifestoOptions): void {
            var children = collection.__jsonld.collections;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = this.parseCollection(children[i], options);
                    collection.collections.push(child);
                }
            }
        }

        static parseManifest(json: any, options?: IManifestoOptions): Manifest {
            var manifest: Manifest = new Manifest(json, options);

            this.parseSequences(manifest);

            if (manifest.__jsonld.structures && manifest.__jsonld.structures.length) {
                this.parseRanges(manifest, JsonUtils.getRootRange(manifest.__jsonld), '');
            }

            return manifest;
        }

        static parseManifests(collection: Collection, options?: IManifestoOptions): void {
            var children = collection.__jsonld.manifests;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = this.parseManifest(children[i], options);
                    collection.manifests.push(child);
                }
            }
        }

        static parseSequences(manifest: Manifest): void {
            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            var children = manifest.__jsonld.mediaSequences || manifest.__jsonld.sequences;
            if (children) {
                for (var i = 0; i < children.length; i++){
                    var s = children[i];
                    s.__manifest = manifest;
                    var sequence = new Sequence(s);
                    sequence.canvases = this.parseCanvases(manifest, s);
                    manifest.sequences.push(sequence);
                }
            }
        }

        static parseCanvases(manifest: Manifest, sequence: any): Canvas[] {
            var canvases: Canvas[] = [];

            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            var children = sequence.elements || sequence.canvases;

            for (var i = 0; i < children.length; i++) {
                var c = children[i];
                c.__manifest = manifest;
                var canvas: Canvas = new Canvas(c);
                canvases.push(canvas);
            }

            return canvases;
        }

        static parseRanges(manifest: Manifest, r: any, path: string, parentRange?: Range): void {

            r.__manifest = manifest;
            var range: Range = new Range(r);

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

        static getCanvasById(manifest: Manifest, id: string): ICanvas {

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
        static serialise(manifest: Manifest): string {
            // todo
            return "";
        }
    }

    class JsonUtils {
        static getCanvasById(manifest: any, id: string): any {
            var result = jmespath.search(manifest, "sequences[].canvases[?\"@id\"=='" + id + "'][]");
            if (result.length) return result[0];
            return null;
        }

        static getRangeById(manifest: any, id: string): any {
            var result = jmespath.search(manifest, "structures[?\"@id\"=='" + id + "'][]");
            if (result.length) return result[0];
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