module Manifesto {
    export class IIIFResourceType extends StringValue{
        public static CANVAS = new IIIFResourceType("sc:canvas");
        public static COLLECTION = new IIIFResourceType("sc:collection");
        public static MANIFEST = new IIIFResourceType("sc:manifest");
        public static RANGE = new IIIFResourceType("sc:range");

        // todo: use getters when ES3 target is no longer required.

        canvas(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.CANVAS.toString());
        }

        collection(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.COLLECTION.toString());
        }

        manifest(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.MANIFEST.toString());
        }

        range(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.RANGE.toString());
        }
    }
}