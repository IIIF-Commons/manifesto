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
exports.AnnotationList = void 0;
var internal_1 = require("./internal");
var AnnotationList = /** @class */ (function (_super) {
    __extends(AnnotationList, _super);
    function AnnotationList(label, jsonld, options) {
        var _this = _super.call(this, jsonld) || this;
        _this.label = label;
        _this.options = options;
        return _this;
    }
    AnnotationList.prototype.getIIIFResourceType = function () {
        return internal_1.Utils.normaliseType(this.getProperty("type"));
    };
    AnnotationList.prototype.getLabel = function () {
        return this.label;
    };
    AnnotationList.prototype.getResources = function () {
        var _this = this;
        var resources = this.getProperty("resources");
        return resources.map(function (resource) { return new internal_1.Annotation(resource, _this.options); });
    };
    AnnotationList.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isLoaded) {
                resolve(_this);
            }
            else {
                var id = _this.__jsonld.id;
                if (!id) {
                    id = _this.__jsonld["@id"];
                }
                internal_1.Utils.loadManifest(id)
                    .then(function (data) {
                    _this.__jsonld = data;
                    _this.context = _this.getProperty("context");
                    _this.id = _this.getProperty("id");
                    _this.isLoaded = true;
                    resolve(_this);
                })
                    .catch(reject);
            }
        });
    };
    return AnnotationList;
}(internal_1.JSONLDResource));
exports.AnnotationList = AnnotationList;
//# sourceMappingURL=AnnotationList.js.map