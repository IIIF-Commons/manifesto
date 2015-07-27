module Manifesto {
    export class RenderingFormat {
        public static pdf = () => { return RenderingFormat.pdf() };
        public static doc = () => { return RenderingFormat.doc() };
        public static docx = () => { return RenderingFormat.docx() };

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        pdf(): RenderingFormat {
            return new RenderingFormat("application/pdf");
        }

        doc(): RenderingFormat {
            return new RenderingFormat("application/msword");
        }

        docx(): RenderingFormat {
            return new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        }
    }
}