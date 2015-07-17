module Manifesto {
    export class ElementType {
        public static document = new CanvasType("foaf:Document");
        public static movingimage = new CanvasType("dctypes:MovingImage");
        public static sound = new CanvasType("dctypes:Sound");

        constructor(public value?: string) {

        }

        toString() {
            return this.value;
        }
    }
}