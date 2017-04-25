namespace Manifesto {
    export class ResourceFormat extends StringValue {
        public static JPG = new ResourceFormat("image/jpeg");
        public static MP4 = new ResourceFormat("video/mp4");
        public static PDF = new ResourceFormat("application/pdf");
        public static THREEJS = new ResourceFormat("application/vnd.threejs+json");
        public static WEBM = new ResourceFormat("video/webm");

        // todo: use getters when ES3 target is no longer required.

        jpg(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.JPG.toString());
        }

        mp4(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.MP4.toString());
        }

        pdf(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.PDF.toString());
        }

        threejs(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.THREEJS.toString());
        }

        webm(): ResourceFormat {
            return new ResourceFormat(ResourceFormat.WEBM.toString());
        }
    }
}