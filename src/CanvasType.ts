module Manifesto {
    export class CanvasType extends StringValue{
        public static CANVAS = new CanvasType("sc:canvas");

        // todo: use getters when ES3 target is no longer required.

        canvas(): CanvasType {
            return new CanvasType(CanvasType.CANVAS.toString());
        }
    }
}