namespace Manifesto {
    export class ResourceType extends StringValue {

        public static CHOICE = new ResourceType("choice");
        public static IMAGE = new ResourceType("dctypes:image");
        public static TEXT = new ResourceType("textualbody");

        // todo: use getters when ES3 target is no longer required.

        choice(): ResourceType {
            return new ResourceType(ResourceType.CHOICE.toString());
        }

        image(): ResourceType {
            return new ResourceType(ResourceType.IMAGE.toString());
        }

        text(): ResourceType {
            return new ResourceType(ResourceType.TEXT.toString());
        }
    }
}