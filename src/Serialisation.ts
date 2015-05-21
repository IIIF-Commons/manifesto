var jmespath = require('jmespath');

module Manifesto {
    export class Deserialiser {
        static manifest: Manifest;
        static originalManifest: any;

        static parse(manifest: string): Manifest {

            this.manifest = new Manifest();
            this.originalManifest = JSON.parse(manifest);

            this.parseSequences();

            if (this.originalManifest.structures && this.originalManifest.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.originalManifest), '');
            }

            return this.manifest;
        }

        static parseSequences(): void {
            for (var i = 0; i < this.originalManifest.sequences.length; i++){
                var s = this.originalManifest.sequences[i];
                var sequence = new Sequence();
                sequence.id = s['@id'];
                sequence.viewingDirection = new ViewingDirection(s.viewingDirection);
                sequence.viewingHint = new ViewingHint(s.viewingHint);
                sequence.canvases = this.parseCanvases(s);
                this.manifest.sequences.push(sequence);
            }
        }

        static parseCanvases(sequence: any): Canvas[] {
            var canvases: Canvas[] = [];

            for (var i = 0; i < sequence.canvases.length; i++) {
                var c = sequence.canvases[i];

                var canvas: Canvas = new Canvas();
                canvas.id = c['@id'];
                canvas.height = c.height;
                canvas.label = c.label;
                canvas.width = c.width;

                canvases.push(canvas);
            }

            return canvases;
        }

        static parseRanges(r: any, path: string, parentRange?: Range): void {

            var range: Range = new Range();
            range.id = r['@id'];
            range.label = r.label;
            range.parentRange = parentRange;
            range.path = path;

            if (r.canvases){
                // create two-way relationship
                for (var i = 0; i < r.canvases.length; i++){
                    var canvas: Canvas = this.getCanvasById(r.canvases[i]);
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

        static getCanvasById(id: string): Canvas {

            for (var i = 0; i < this.manifest.sequences.length; i++){
                var sequence = this.manifest.sequences[i];

                for (var j = 0; j < sequence.canvases.length; j++){
                    var canvas = sequence.canvases[j];

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