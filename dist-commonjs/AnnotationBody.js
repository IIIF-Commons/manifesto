"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ManifestResource_1 = require("./ManifestResource");
var Utils_1 = require("./Utils");
var AnnotationBody = /** @class */ (function (_super) {
    __extends(AnnotationBody, _super);
    function AnnotationBody(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    AnnotationBody.prototype.getFormat = function () {
        var format = this.getProperty('format');
        if (format) {
            return Utils_1.Utils.getMediaType(format);
        }
        return null;
    };
    AnnotationBody.prototype.getType = function () {
        var type = this.getProperty('type');
        if (type) {
            return Utils_1.Utils.normaliseType(this.getProperty('type'));
        }
        return null;
    };
    AnnotationBody.prototype.getWidth = function () {
        return this.getProperty('width');
    };
    AnnotationBody.prototype.getHeight = function () {
        return this.getProperty('height');
    };
    return AnnotationBody;
}(ManifestResource_1.ManifestResource));
exports.AnnotationBody = AnnotationBody;
//# sourceMappingURL=AnnotationBody.js.map