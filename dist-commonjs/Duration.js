"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
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
exports.Duration = Duration;
//# sourceMappingURL=Duration.js.map