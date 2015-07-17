
module Manifesto {
    export class ViewingHint {
        public static individuals = new ViewingHint("individuals");
        public static paged = new ViewingHint("paged");
        public static continuous = new ViewingHint("continuous");
        public static nonPaged = new ViewingHint("non-paged");
        public static top = new ViewingHint("top");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }
    }
}