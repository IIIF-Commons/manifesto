module Manifesto {
    export class RenderingFormat {
        public static pdf = new RenderingFormat("application/pdf");
        public static doc = new RenderingFormat("application/msword");
        public static docx = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }
    }
}