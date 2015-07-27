module Manifesto {
    export class CanvasType {
        public static CANVAS = new CanvasType("sc:canvas");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        canvas(): CanvasType {
            return new CanvasType(CanvasType.CANVAS.toString());
        }
    }
}