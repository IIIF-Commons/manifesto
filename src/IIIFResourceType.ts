module Manifesto {
    export class IIIFResourceType extends StringValue{
        public static MANIFEST = new IIIFResourceType("sc:manifest");
        public static COLLECTION = new IIIFResourceType("sc:collection");

        // todo: use getters when ES3 target is no longer required.

        manifest(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.MANIFEST.toString());
        }

        collection(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.COLLECTION.toString());
        }
    }
}