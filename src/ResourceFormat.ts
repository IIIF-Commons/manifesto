namespace Manifesto {
    export class ResourceFormat extends StringValue {
        public static JPGIMAGE = new ResourceFormat("image/jpeg");
        public static PDF = new ResourceFormat("application/pdf");

        // todo: use getters when ES3 target is no longer required.

        jpgimage(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.JPGIMAGE.toString());
        }

        pdf(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.PDF.toString());
        }
    }
}