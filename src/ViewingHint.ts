
module Manifesto {
    export class ViewingHint {
        constructor(public value: string) {
        }

        toString() {
            return this.value;
        }

        static individuals = new ViewingHint("individuals");
        static paged = new ViewingHint("paged");
        static continuous = new ViewingHint("continuous");
        static nonPaged = new ViewingHint("non-paged");
        static top = new ViewingHint("top");
    }
}