
module Manifesto {
    export class ViewingDirection {
        static leftToRight = new ViewingDirection("left-to-right");
        static rightToLeft = new ViewingDirection("right-to-left");
        static topToBottom = new ViewingDirection("top-to-bottom");
        static bottomToTop = new ViewingDirection("bottom-to-top");

        constructor(public value: string) {
        }

        toString() {
            return this.value;
        }
    }
}