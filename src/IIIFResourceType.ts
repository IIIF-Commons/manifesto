module Manifesto {
    export class IIIFResourceType extends StringValue{
        public static ANNOTATION = new IIIFResourceType("oa:annotation");
        public static CANVAS = new IIIFResourceType("sc:canvas");
        public static COLLECTION = new IIIFResourceType("sc:collection");
        public static MANIFEST = new IIIFResourceType("sc:manifest");
        public static RANGE = new IIIFResourceType("sc:range");
        public static SEQUENCE = new IIIFResourceType("sc:sequence");

        // todo: use getters when ES3 target is no longer required.

        annotation(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.ANNOTATION.toString());
        }

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

        sequence(): IIIFResourceType {
            return new IIIFResourceType(IIIFResourceType.SEQUENCE.toString());
        }
    }
}