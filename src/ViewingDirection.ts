
module Manifesto {
    export class ViewingDirection {
        public static leftToRight = () => { return ViewingDirection.leftToRight() };
        public static rightToLeft = () => { return ViewingDirection.rightToLeft() };
        public static topToBottom = () => { return ViewingDirection.topToBottom() };
        public static bottomToTop = () => { return ViewingDirection.bottomToTop() };

        constructor(public value?: string) {
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        leftToRight(): ViewingDirection {
            return new ViewingDirection("left-to-right");
        }

        rightToLeft(): ViewingDirection {
            return new ViewingDirection("right-to-left");
        }

        topToBottom(): ViewingDirection {
            return new ViewingDirection("top-to-bottom");
        }

        bottomToTop(): ViewingDirection {
            return new ViewingDirection("bottom-to-top");
        }
    }
}