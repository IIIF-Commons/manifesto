namespace Manifesto {
    export class ResourceType extends StringValue {
        public static IMAGE = new ResourceType("dctypes:image");

        // todo: use getters when ES3 target is no longer required.

        image(): ResourceType {
            return new ResourceType(ResourceType.IMAGE.toString());
        }
    }
}