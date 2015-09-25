module Manifesto {
    export class AnnotationMotivation extends StringValue{
        public static BOOKMARKING = new AnnotationMotivation("oa:bookmarking");
        public static CLASSIFYING = new AnnotationMotivation("oa:classifying");
        public static COMMENTING = new AnnotationMotivation("oa:commenting");
        public static DESCRIBING = new AnnotationMotivation("oa:describing");
        public static EDITING = new AnnotationMotivation("oa:editing");
        public static HIGHLIGHTING = new AnnotationMotivation("oa:highlighting");
        public static IDENTIFYING = new AnnotationMotivation("oa:identifying");
        public static LINKING = new AnnotationMotivation("oa:linking");
        public static MODERATING = new AnnotationMotivation("oa:moderating");
        public static PAINTING = new AnnotationMotivation("sc:painting");
        public static QUESTIONING = new AnnotationMotivation("oa:questioning");
        public static REPLYING = new AnnotationMotivation("oa:replying");
        public static TAGGING = new AnnotationMotivation("oa:tagging");

        // todo: use getters when ES3 target is no longer required.

        bookmarking(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.BOOKMARKING.toString());
        }

        classifying(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.CLASSIFYING.toString());
        }

        commenting(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.COMMENTING.toString());
        }

        describing(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.DESCRIBING.toString());
        }

        editing(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.EDITING.toString());
        }

        highlighting(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.HIGHLIGHTING.toString());
        }

        identifying(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.IDENTIFYING.toString());
        }

        linking(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.LINKING.toString());
        }

        moderating(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.MODERATING.toString());
        }

        painting(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.PAINTING.toString());
        }

        questioning(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.QUESTIONING.toString());
        }

        replying(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.REPLYING.toString());
        }

        tagging(): AnnotationMotivation {
            return new AnnotationMotivation(AnnotationMotivation.TAGGING.toString());
        }
    }
}