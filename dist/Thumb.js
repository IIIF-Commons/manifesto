var Thumb = (function () {
    function Thumb(index, uri, label, width, height, visible) {
        this.index = index;
        this.uri = uri;
        this.label = label;
        this.width = width;
        this.height = height;
        this.visible = visible;
    }
    return Thumb;
})();
module.exports = Thumb;
