"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var internal_1 = require("./internal");
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    // Presentation API 3.0
    Scene.prototype.getContent = function () {
        var content = [];
        var items = this.__jsonld.items || this.__jsonld.content;
        if (!items)
            return content;
        // should be contained in an AnnotationPage
        var annotationPage = null;
        if (items.length) {
            annotationPage = new internal_1.AnnotationPage(items[0], this.options);
        }
        if (!annotationPage) {
            return content;
        }
        var annotations = annotationPage.getItems();
        for (var i = 0; i < annotations.length; i++) {
            var a = annotations[i];
            var annotation = new internal_1.Annotation(a, this.options);
            content.push(annotation);
        }
        ;
        return content;
    };
    ;
    Object.defineProperty(Scene.prototype, "Content", {
        // 3D extension
        get: function () { return this.getContent(); },
        enumerable: false,
        configurable: true
    });
    Scene.prototype.getAnnotationById = function (searchId) {
        for (var _i = 0, _a = this.Content; _i < _a.length; _i++) {
            var anno = _a[_i];
            if (anno.id === searchId)
                return anno;
        }
        return null;
    };
    Scene.prototype.getBackgroundColor = function () {
        // regular expression intended to match strings like
        // "#FF00FF" -- interpreted as three hexadecimal values
        // in range 0-255 . Not that the \w escape matches digits,
        // upper and lower case latin characters, and underscore
        // currently only supports the form for CSS
        // https://www.w3.org/wiki/CSS/Properties/color/RGB
        // with 6 hexadecimal digits
        var bgc = this.getProperty("backgroundColor");
        if (bgc)
            return internal_1.Color.fromCSS(bgc);
        else
            return null;
    };
    ;
    return Scene;
}(internal_1.ManifestResource));
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map