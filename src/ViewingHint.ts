
module Manifesto {
    export class ViewingHint extends StringValue {
        public static CONTINUOUS = new ViewingHint("continuous");
        public static EMPTY = new ViewingHint("");
        public static INDIVIDUALS = new ViewingHint("individuals");
        public static NONPAGED = new ViewingHint("non-paged");
        public static PAGED = new ViewingHint("paged");
        public static TOP = new ViewingHint("top");

        // todo: use getters when ES3 target is no longer required.

        continuous(): ViewingHint {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        }

        empty(): ViewingHint {
            return new ViewingHint(ViewingHint.EMPTY.toString());
        }

        individuals(): ViewingHint {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        }

        nonPaged(): ViewingHint {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        }

        paged(): ViewingHint {
            return new ViewingHint(ViewingHint.PAGED.toString());
        }

        top(): ViewingHint {
            return new ViewingHint(ViewingHint.TOP.toString());
        }
    }
}