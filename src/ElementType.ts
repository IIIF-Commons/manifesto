module Manifesto {
    export class ElementType {
        public static DOCUMENT = new ElementType("foaf:Document");
        public static MOVINGIMAGE = new ElementType("dctypes:MovingImage");
        public static SOUND = new ElementType("dctypes:Sound");

        constructor(public value?: string) {

        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        document(): ElementType {
            return new ElementType(ElementType.DOCUMENT.toString());
        }

        movingimage(): ElementType {
            return new ElementType(ElementType.MOVINGIMAGE.toString());
        }

        sound(): ElementType {
            return new ElementType(ElementType.SOUND.toString());
        }
    }
}