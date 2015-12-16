module Manifesto {
    export class ElementType extends StringValue{
        public static DOCUMENT = new ElementType("foaf:document");
        public static IMAGE = new ElementType("dcTypes:image");
        public static MOVINGIMAGE = new ElementType("dctypes:movingimage");
        public static PHYSICALOBJECT = new ElementType("dctypes:physicalobject");
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

        physicalobject(): ElementType {
            return new ElementType(ElementType.PHYSICALOBJECT.toString());
        }

        sound(): ElementType {
            return new ElementType(ElementType.SOUND.toString());
        }
    }
}