
module Manifesto {
    export class ViewingDirection {
        public static leftToRight = new ViewingDirection("left-to-right");
        public static rightToLeft = new ViewingDirection("right-to-left");
        public static topToBottom = new ViewingDirection("top-to-bottom");
        public static bottomToTop = new ViewingDirection("bottom-to-top");

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }
    }
}