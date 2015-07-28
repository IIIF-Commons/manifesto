
module Manifesto {
    export class ViewingDirection {
        public static LEFTTORIGHT = new ViewingDirection("left-to-right");
        public static RIGHTTOLEFT = new ViewingDirection("right-to-left");
        public static TOPTOBOTTOM = new ViewingDirection("top-to-bottom");
        public static BOTTOMTOTOP = new ViewingDirection("bottom-to-top");

        constructor(public value?: string) {
            if (value) this.value = value.toLowerCase();
        }

        toString() {
            return this.value;
        }

        // todo: use getters when ES3 target is no longer required.

        leftToRight(): ViewingDirection {
            return new ViewingDirection(ViewingDirection.LEFTTORIGHT.toString());
        }

        rightToLeft(): ViewingDirection {
            return new ViewingDirection(ViewingDirection.RIGHTTOLEFT.toString());
        }

        topToBottom(): ViewingDirection {
            return new ViewingDirection(ViewingDirection.TOPTOBOTTOM.toString());
        }

        bottomToTop(): ViewingDirection {
            return new ViewingDirection(ViewingDirection.BOTTOMTOTOP.toString());
        }
    }
}