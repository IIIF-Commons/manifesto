
module Manifesto {
    export class Deserialiser {
        static manifest: Manifest;
        static originalManifest: Manifest;

        static parse(manifest: string): Manifest {

            this.manifest = new Manifest();
            this.originalManifest = JSON.parse(manifest);

            this.parseSequences();

            if (this.originalManifest.structures && this.originalManifest.structures.length) {
                this.parseRanges(this.getRootRange(), '');
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

        static parseRanges(range: Range, path: string): void {
            range.path = path;

            if (range.canvases){
                // loop through canvases and associate with matching @id
                for (var j = 0; j < range.canvases.length; j++){

                    var canvas = range.canvases[j];

                    if (typeof(canvas) === "string"){
                        canvas = this.getResourceById(<string>canvas);
                    }

                    if (!canvas){
                        // canvas not found - json invalid.
                        range.canvases[j] = null;
                        continue;
                    }

                    if (!canvas.ranges) canvas.ranges = [];

                    canvas.ranges.push(range);
                    // create two-way relationship
                    range.canvases[j] = canvas;
                }
            }

            if (range.ranges) {

                for (var k = 0; k < range.ranges.length; k++) {
                    var r = range.ranges[k];

                    // if it's a url ref
                    if (typeof(r) === "string"){
                        r = this.getResourceById(<string>r, this.originalManifest.structures);
                    }

                    // if this range already has a parent, continue.
                    if (r.parentRange) continue;

                    r.parentRange = range;

                    ////range.ranges.push(r);

                    this.parseRanges(r, path + '/' + k);
                }
            }
        }

        static getRootRange(): any {
            // loop through ranges looking for viewingHint="top"
            if (this.originalManifest.structures){
                for (var i = 0; i < this.originalManifest.structures.length; i++){
                    var r = this.originalManifest.structures[i];
                    if (r.viewingHint === ViewingHint.top){
                        return r;
                    }
                }
            }

            return null;
        }

        static getResourceById(id: string, parentObj?: any): any {
            // todo use jmespath
            var results = Utils.getObjects(parentObj || this.originalManifest, "@id", id);

            if(results.length) {
                return results[0];
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

    // todo: move to utils module
    class Utils {
        static getObjects(obj, key, val): any[] {
            var objects: any[] = [];
            for (var i in obj) {
                if (!obj.hasOwnProperty(i)) continue;
                if (typeof obj[i] == 'object') {
                    objects = objects.concat(this.getObjects(obj[i], key, val));
                } else if (i == key && obj[key] == val) {
                    objects.push(obj);
                }
            }
            return objects;
        }
    }
}