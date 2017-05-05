namespace Manifesto {
    export class MediaType extends StringValue {
        public static JPG = new MediaType("image/jpeg");
        public static MP4 = new MediaType("video/mp4");
        public static PDF = new MediaType("application/pdf");
        public static THREEJS = new MediaType("application/vnd.threejs+json");
        public static WEBM = new MediaType("video/webm");

        // todo: use getters when ES3 target is no longer required.

        jpg(): MediaType {
            return new MediaType(MediaType.JPG.toString());
        }

        mp4(): MediaType {
            return new MediaType(MediaType.MP4.toString());
        }

        pdf(): MediaType {
            return new MediaType(MediaType.PDF.toString());
        }

        threejs(): MediaType {
            return new MediaType(MediaType.THREEJS.toString());
        }

        webm(): MediaType {
            return new MediaType(MediaType.WEBM.toString());
        }
    }
}