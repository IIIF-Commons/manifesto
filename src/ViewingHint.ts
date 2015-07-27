
module Manifesto {
    export class ViewingHint {
        public static INDIVIDUALS = new ViewingHint("individuals");
        public static PAGED = new ViewingHint("paged");
        public static CONTINUOUS = new ViewingHint("continuous");
        public static NONPAGED = new ViewingHint("non-paged");
        public static TOP = new ViewingHint("top");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        individuals(): ViewingHint {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        }

        paged(): ViewingHint {
            return new ViewingHint(ViewingHint.PAGED.toString());
        }

        continuous(): ViewingHint {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        }

        nonPaged(): ViewingHint {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        }

        top(): ViewingHint {
            return new ViewingHint(ViewingHint.TOP.toString());
        }
    }
}