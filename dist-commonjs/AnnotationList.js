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
var JSONLDResource_1 = require("./JSONLDResource");
var Utils_1 = require("./Utils");
var Annotation_1 = require("./Annotation");
var AnnotationList = /** @class */ (function (_super) {
    __extends(AnnotationList, _super);
    function AnnotationList(label, jsonld, options) {
        var _this = _super.call(this, jsonld) || this;
        _this.label = label;
        _this.options = options;
        return _this;
    }
    AnnotationList.prototype.getIIIFResourceType = function () {
        return Utils_1.Utils.normaliseType(this.getProperty('type'));
    };
    AnnotationList.prototype.getLabel = function () {
        return this.label;
    };
    AnnotationList.prototype.getResources = function () {
        var _this = this;
        var resources = this.getProperty('resources');
        return resources.map(function (resource) { return new Annotation_1.Annotation(resource, _this.options); });
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
                    id = _this.__jsonld['@id'];
                }
                Utils_1.Utils.loadManifest(id).then(function (data) {
                    _this.__jsonld = JSON.parse(data);
                    _this.context = _this.getProperty('context');
                    _this.id = _this.getProperty('id');
                    _this.isLoaded = true;
                    resolve(_this);
                }).catch(reject);
            }
        });
    };
    return AnnotationList;
}(JSONLDResource_1.JSONLDResource));
exports.AnnotationList = AnnotationList;
//# sourceMappingURL=AnnotationList.js.map