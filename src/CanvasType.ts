module Manifesto {
    export class CanvasType {
        public static canvas = new CanvasType("sc:canvas");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }
    }
}