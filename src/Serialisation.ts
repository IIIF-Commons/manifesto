var jmespath = require('jmespath');

module Manifesto {
    export class Deserialiser {
        static manifest: IManifest;

        static parse(manifest: string): IManifest {

            this.manifest = new Manifest(JSON.parse(manifest));

            this.parseSequences();

            if (this.manifest.jsonld.structures && this.manifest.jsonld.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.manifest.jsonld), '');
            }

            return this.manifest;
        }

        static parseSequences(): void {
            for (var i = 0; i < this.manifest.jsonld.sequences.length; i++){
                var s = this.manifest.jsonld.sequences[i];
                s.manifest = this.manifest;
                var sequence = new Sequence(s);
                sequence.canvases = this.parseCanvases(s);
                this.manifest.sequences.push(sequence);
            }
        }

        static parseCanvases(sequence: any): Canvas[] {
            var canvases: Canvas[] = [];

            for (var i = 0; i < sequence.canvases.length; i++) {
                var c = sequence.canvases[i];
                c.manifest = this.manifest;
                var canvas: Canvas = new Canvas(c);
                canvases.push(canvas);
            }

            return canvases;
        }

        static parseRanges(r: any, path: string, parentRange?: Range): void {

            r.manifest = this.manifest;
            var range: Range = new Range(r);

            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange){
                this.manifest.rootRange = range;
            } else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }

            range.path = path;

            if (r.canvases){
                // create two-way relationship
                for (var i = 0; i < r.canvases.length; i++){
                    var canvas: ICanvas = this.getCanvasById(r.canvases[i]);
                    canvas.ranges.push(range);
                    range.canvases.push(canvas);
                }
            }

            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this.parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        }

        static getCanvasById(id: string): ICanvas {

            for (var i = 0; i < this.manifest.sequences.length; i++){
                var sequence: ISequence = this.manifest.sequences[i];

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