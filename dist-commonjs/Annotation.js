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
exports.Annotation = void 0;
var internal_1 = require("./internal");
var threejs_math_1 = require("threejs-math");
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    /**
    In spite of its name, this method returns an array of objects, each of which
    represents a potential body annotations
    
    @see{ https://iiif.io/api/cookbook/recipe/0033-choice/ }
    **/
    Annotation.prototype.getBody = function () {
        var bodies = [];
        var body = this.getProperty("body");
        // the following is intended to handle the following cases for
        /// the raw json of the body property of __jsonld
        // -- body is an array, each element of which is parsed
        // == body is an object with property items, each item is parsed
        // -- body is parsed
        if (body) {
            for (var _i = 0, _a = [].concat(body); _i < _a.length; _i++) {
                var bd = _a[_i];
                var items = bd.items;
                if (items)
                    bodies = bodies.concat(this.parseBodiesFromItemsList(items));
                else
                    bodies.push(this.parseSingletonBody(bd));
            }
        }
        return bodies;
    };
    Object.defineProperty(Annotation.prototype, "Body", {
        get: function () { return this.getBody(); },
        enumerable: false,
        configurable: true
    });
    /**
    auxiliary function to getBody; intended to hande an object that has an element items
    which is a array of annotation- body-like objects. This : https://iiif.io/api/cookbook/recipe/0033-choice/
    seems to be the use case for this
    **/
    Annotation.prototype.parseBodiesFromItemsList = function (rawbodies) {
        var retVal = [];
        for (var _i = 0, _a = [].concat(rawbodies); _i < _a.length; _i++) {
            var bd = _a[_i];
            retVal.push(this.parseSingletonBody(bd));
        }
        return retVal;
    };
    /**
    auxiliary function to parseBodiesFromItemsList and getBody, this is the last
    step on recursively going through collections of bodies.
    **/
    Annotation.prototype.parseSingletonBody = function (rawbody) {
        if (rawbody.type === "SpecificResource") {
            return new internal_1.SpecificResource(rawbody, this.options);
        }
        else {
            return internal_1.AnnotationBodyParser.BuildFromJson(rawbody, this.options);
        }
    };
    /**
    Developer Note: 8 April 2024
    getBody3D function was developed in the early stages of the 3D API Feb-March 2024
    as alternative to the existing Annotation getBody function, but the signature for
    getBody3D was chosen to be a single object instance, not an array.
    
    At this stage, the merging of the 2D API anf the draft 3D API has been completed, so
    3D applications can use the getBody() function to retrieve the body of an Annotation intended
    to target a scene. For compatibily the return value of the function is still an
    array.
    
    3D clients using getBody are responsible for choosing the appropriate instance from the
    returned array. In most cases this will be the sole 0th element.
    **/
    Annotation.prototype.getBody3D = function () {
        console.warn("Annotation.getBody3D is deprecated: replace with getBody3D() with getBody()[0]");
        return this.getBody()[0];
    };
    Annotation.prototype.getMotivation = function () {
        var motivation = this.getProperty("motivation");
        if (motivation) {
            //const key: string | undefined = Object.keys(AnnotationMotivationEnum).find(k => AnnotationMotivationEnum[k] === motivation);
            return motivation;
        }
        return null;
    };
    // open annotation
    Annotation.prototype.getOn = function () {
        return this.getProperty("on");
    };
    Annotation.prototype.getTarget = function () {
        var rawTarget = this.getPropertyAsObject("target");
        if (rawTarget.isIRI)
            return rawTarget;
        if (rawTarget.type && rawTarget.type == "SpecificResource") {
            return new internal_1.SpecificResource(rawTarget, this.options);
        }
        else {
            throw new Error("unknown target specified");
        }
    };
    Object.defineProperty(Annotation.prototype, "Target", {
        get: function () { return this.getTarget(); },
        enumerable: false,
        configurable: true
    });
    Annotation.prototype.getResource = function () {
        return new internal_1.Resource(this.getProperty("resource"), this.options);
    };
    Object.defineProperty(Annotation.prototype, "LookAtLocation", {
        /**
        *    A 3D point coordinate object for the location of an Annotation
        *    to satisfy the requirements of the lookAt property of camera and
        *    spotlight resources, according to the draft v4 API as of April 1 2024
        *
        *    Is the position of the point for a target which is a SpecificResource with
        *    a PointSelector
        *    Otherwise, for example when the annotation target is an entire Scene, the
        *    location for lookAt is the origin (0,0,0)
        **/
        get: function () {
            var _a;
            var target = this.getTarget();
            if (target.isSpecificResource && ((_a = target.getSelector()) === null || _a === void 0 ? void 0 : _a.isPointSelector))
                return target.getSelector().getLocation();
            else
                return new threejs_math_1.Vector3(0.0, 0.0, 0.0);
        },
        enumerable: false,
        configurable: true
    });
    return Annotation;
}(internal_1.ManifestResource));
exports.Annotation = Annotation;
//# sourceMappingURL=Annotation.js.map