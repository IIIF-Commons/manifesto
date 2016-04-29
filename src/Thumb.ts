
module Manifesto {
    export class Thumb implements IThumb {
        public data: any;
        public index: number;
        public uri: string;
        public label: string;
        public width: number;
        public height: number;
        public visible: boolean;

        constructor(width: number, canvas: ICanvas) {
            this.data = canvas;
            this.index = canvas.index;
            this.width = width;

            var heightRatio = canvas.getHeight() / canvas.getWidth();

            if (heightRatio) {
                this.height = Math.floor(this.width * heightRatio);
            } else {
                this.height = width;
            }

            this.uri = canvas.getCanonicalImageUri(width);
            this.label = canvas.getLabel();
        }
    }
}