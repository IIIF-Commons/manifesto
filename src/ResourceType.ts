namespace Manifesto {
    export class ResourceType extends StringValue {
        public static CANVAS = new ResourceType("canvas");
        public static CHOICE = new ResourceType("choice");
        public static DOCUMENT = new ResourceType("document");
        public static IMAGE = new ResourceType("image");
        public static MOVINGIMAGE = new ResourceType("movingimage");
        public static PHYSICALOBJECT = new ResourceType("physicalobject");
        public static SOUND = new ResourceType("sound");
        public static TEXT = new ResourceType("textualbody");

        // todo: use getters when ES3 target is no longer required.

        canvas(): ResourceType {
            return new ResourceType(ResourceType.CANVAS.toString());
        }

        choice(): ResourceType {
            return new ResourceType(ResourceType.CHOICE.toString());
        }

        document(): ResourceType {
            return new ResourceType(ResourceType.DOCUMENT.toString());
        }

        image(): ResourceType {
            return new ResourceType(ResourceType.IMAGE.toString());
        }

        movingimage(): ResourceType {
            return new ResourceType(ResourceType.MOVINGIMAGE.toString());
        }

        physicalobject(): ResourceType {
            return new ResourceType(ResourceType.PHYSICALOBJECT.toString());
        }

        sound(): ResourceType {
            return new ResourceType(ResourceType.SOUND.toString());
        }

        text(): ResourceType {
            return new ResourceType(ResourceType.TEXT.toString());
        }
    }
}