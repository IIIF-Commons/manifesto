var Duration = /** @class */ (function () {
    function Duration(start, end) {
        this.start = start;
        this.end = end;
    }
    Duration.prototype.getLength = function () {
        return this.end - this.start;
    };
    return Duration;
}());
export { Duration };
//# sourceMappingURL=Duration.js.map