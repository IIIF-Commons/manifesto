module Manifesto {
    export class CanvasType {
        static canvas = new CanvasType("sc:canvas");

        constructor(public value:string) {
        }

        toString() {
            return this.value;
        }
    }
}