module Manifesto {
    export class ElementType {
        public static DOCUMENT = new ElementType("foaf:document");
        public static MOVINGIMAGE = new ElementType("dctypes:movingimage");
        public static SOUND = new ElementType("dctypes:sound");
        // todo: Should IIIFIMAGE go here?

        constructor(public value?: string) {
            if (value) this.value = value.toLowerCase();
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