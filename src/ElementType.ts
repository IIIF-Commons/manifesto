module Manifesto {
    export class ElementType extends StringValue{
        public static DOCUMENT = new ElementType("foaf:document");
        public static IMAGE = new ElementType("dcTypes:Image");
        public static MOVINGIMAGE = new ElementType("dctypes:movingimage");
        public static SOUND = new ElementType("dctypes:sound");

        // todo: use getters when ES3 target is no longer required.

        document(): ElementType {
            return new ElementType(ElementType.DOCUMENT.toString());
        }

        image(): ElementType {
            return new ElementType(ElementType.IMAGE.toString());
        }

        movingimage(): ElementType {
            return new ElementType(ElementType.MOVINGIMAGE.toString());
        }

        sound(): ElementType {
            return new ElementType(ElementType.SOUND.toString());
        }
    }
}