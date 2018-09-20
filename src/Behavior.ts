namespace Manifesto {
    export class Behavior extends StringValue{
        public static AUTOADVANCE = new Behavior("auto-advance");
        public static NONAV = new Behavior("no-nav");
        public static PAGED = new Behavior("paged");

        // todo: use getters when ES3 target is no longer required.

        autoadvance(): Behavior {
            return new Behavior(Behavior.AUTOADVANCE.toString());
        }

        nonav(): Behavior {
            return new Behavior(Behavior.NONAV.toString());
        }

        paged(): Behavior {
            return new Behavior(Behavior.PAGED.toString());
        }
    }
}