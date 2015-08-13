module Manifesto {
    export class RenderingFormat extends StringValue{
        public static PDF = new RenderingFormat("application/pdf");
        public static DOC = new RenderingFormat("application/msword");
        public static DOCX = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");

        // todo: use getters when ES3 target is no longer required.

        pdf(): RenderingFormat {
            return new RenderingFormat(RenderingFormat.PDF.toString());
        }

        doc(): RenderingFormat {
            return new RenderingFormat(RenderingFormat.DOC.toString());
        }

        docx(): RenderingFormat {
            return new RenderingFormat(RenderingFormat.DOCX.toString());
        }
    }
}