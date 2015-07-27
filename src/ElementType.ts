module Manifesto {
    export class ElementType {
        public static document = () => { return ElementType.document() };
        public static movingimage = () => { return ElementType.movingimage() };
        public static sound = () => { return ElementType.sound() };

        constructor(public value?: string) {

        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        document(): ElementType {
            return new ElementType("foaf:Document");
        }

        movingimage(): ElementType {
            return new ElementType("dctypes:MovingImage");
        }

        sound(): ElementType {
            return new ElementType("dctypes:Sound");
        }
    }
}