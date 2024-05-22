// todo: deprecate
// this is used by Sequence.getThumbs
var Thumb = /** @class */ (function () {
    function Thumb(width, canvas) {
        this.data = canvas;
        this.index = canvas.index;
        this.width = width;
        var heightRatio = canvas.getHeight() / canvas.getWidth();
        if (heightRatio) {
            this.height = Math.floor(this.width * heightRatio);
        }
        else {
            this.height = width;
        }
        this.uri = canvas.getCanonicalImageUri(width);
        this.label = canvas.getLabel().getValue(); // todo: pass locale?
        this.viewingHint = canvas.getViewingHint();
    }
    return Thumb;
}());
export { Thumb };
//# sourceMappingURL=Thumb.js.map