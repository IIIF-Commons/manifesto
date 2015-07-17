module Manifesto {
    export class ElementType {
        static document = new CanvasType("foaf:Document");
        static movingimage = new CanvasType("dctypes:MovingImage");
        static sound = new CanvasType("dctypes:Sound");

        constructor(public value?: string) {

        }

        toString() {
            return this.value;
        }
    }
}