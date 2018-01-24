namespace Manifesto {
    export class IIIFResourceType extends StringValue {
        public static ANNOTATION = new IIIFResourceType("annotation");
        public static CANVAS = new IIIFResourceType("canvas");
        public static COLLECTION = new IIIFResourceType("collection");
        public static MANIFEST = new IIIFResourceType("manifest");
        public static RANGE = new IIIFResourceType("range");
        public static SEQUENCE = new IIIFResourceType("sequence");
        public static IMAGE = new IIIFResourceType("image");

        // todo: use getters when ES3 target is no longer required.

        image(): IIIFResourceType {
          return new IIIFResourceType(IIIFResourceType.IMAGE.toString());
        }

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
