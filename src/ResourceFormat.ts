module Manifesto {
    export class ResourceFormat extends StringValue {
        public static JPGIMAGE = new ResourceFormat("image/jpeg");

        // todo: use getters when ES3 target is no longer required.

        jpgimage(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.JPGIMAGE.toString());
        }
    }
}