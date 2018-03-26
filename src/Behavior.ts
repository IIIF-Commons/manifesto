namespace Manifesto {
    export class Behavior extends StringValue{
        public static NONAV = new Behavior("no-nav");

        // todo: use getters when ES3 target is no longer required.

        nonav(): Behavior {
            return new Behavior(Behavior.NONAV.toString());
        }
    }
}