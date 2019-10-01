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
var AnnotationBody_1 = require("./AnnotationBody");
var Resource_1 = require("./Resource");
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Annotation.prototype.getBody = function () {
        var bodies = [];
        var body = this.getProperty('body');
        // todo: make this a generic "property that can be an object or array enumerator" util
        if (body) {
            if (Array.isArray(body)) {
                for (var i = 0; i < body.length; i++) {
                    var b = body[i];
                    if (b.items) {
                        for (var i_1 = 0; i_1 < b.items.length; i_1++) { // todo: don't ignore that it's a choice. maybe add isChoice() to IAnnotationBody?
                            var c = b.items[i_1];
                            bodies.push(new AnnotationBody_1.AnnotationBody(c, this.options));
                        }
                    }
                    else {
                        bodies.push(new AnnotationBody_1.AnnotationBody(b, this.options));
                    }
                }
            }
            else if (body.items) {
                for (var i = 0; i < body.items.length; i++) {
                    var b = body.items[i];
                    bodies.push(new AnnotationBody_1.AnnotationBody(b, this.options));
                }
            }
            else {
                bodies.push(new AnnotationBody_1.AnnotationBody(body, this.options));
            }
        }
        return bodies;
    };
    Annotation.prototype.getMotivation = function () {
        var motivation = this.getProperty('motivation');
        if (motivation) {
            //const key: string | undefined = Object.keys(AnnotationMotivationEnum).find(k => AnnotationMotivationEnum[k] === motivation);
            return motivation;
        }
        return null;
    };
    // open annotation
    Annotation.prototype.getOn = function () {
        return this.getProperty('on');
    };
    Annotation.prototype.getTarget = function () {
        return this.getProperty('target');
    };
    Annotation.prototype.getResource = function () {
        return new Resource_1.Resource(this.getProperty('resource'), this.options);
    };
    return Annotation;
}(ManifestResource_1.ManifestResource));
exports.Annotation = Annotation;
//# sourceMappingURL=Annotation.js.map