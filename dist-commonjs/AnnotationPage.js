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
var AnnotationPage = /** @class */ (function (_super) {
    __extends(AnnotationPage, _super);
    function AnnotationPage(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    AnnotationPage.prototype.getItems = function () {
        return this.getProperty('items');
    };
    return AnnotationPage;
}(ManifestResource_1.ManifestResource));
exports.AnnotationPage = AnnotationPage;
//# sourceMappingURL=AnnotationPage.js.map