module Manifesto {
    export class CanvasType {
        public static canvas = () => { return CanvasType.canvas() };

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        canvas(): CanvasType {
            return new CanvasType("sc:canvas");
        }
    }
}