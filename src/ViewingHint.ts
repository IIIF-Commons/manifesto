
module Manifesto {
    export class ViewingHint {
        public static individuals = () => { return ViewingHint.individuals() };
        public static paged = () => { return ViewingHint.paged() };
        public static continuous = () => { return ViewingHint.continuous() };
        public static nonPaged = () => { return ViewingHint.nonPaged() };
        public static top = () => { return ViewingHint.top() };

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        individuals(): ViewingHint {
            return new ViewingHint("individuals");
        }

        paged(): ViewingHint {
            return new ViewingHint("paged");
        }

        continuous(): ViewingHint {
            return new ViewingHint("continuous");
        }

        nonPaged(): ViewingHint {
            return new ViewingHint("non-paged");
        }

        top(): ViewingHint {
            return new ViewingHint("top");
        }
    }
}