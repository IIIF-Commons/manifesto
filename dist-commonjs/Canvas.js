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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var dist_commonjs_1 = require("@iiif/vocabulary/dist-commonjs");
var internal_1 = require("./internal");
// @ts-ignore
var flatten_1 = __importDefault(require("lodash/flatten"));
// @ts-ignore
var flattenDeep_1 = __importDefault(require("lodash/flattenDeep"));
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    // http://iiif.io/api/image/2.1/#canonical-uri-syntax
    Canvas.prototype.getCanonicalImageUri = function (w) {
        var id = null;
        var region = "full";
        var rotation = 0;
        var quality = "default";
        var width = w;
        var size;
        // if an info.json has been loaded
        if (this.externalResource &&
            this.externalResource.data &&
            this.externalResource.data["@id"]) {
            id = this.externalResource.data["@id"];
            if (!width) {
                width = this.externalResource.data.width;
            }
            if (this.externalResource.data["@context"]) {
                if (this.externalResource.data["@context"].indexOf("/1.0/context.json") >
                    -1 ||
                    this.externalResource.data["@context"].indexOf("/1.1/context.json") >
                        -1 ||
                    this.externalResource.data["@context"].indexOf("/1/context.json") > -1) {
                    quality = "native";
                }
            }
        }
        else {
            // info.json hasn't been loaded yet
            var images = void 0;
            // presentation 2.0
            images = this.getImages();
            if (images && images.length) {
                var firstImage = images[0];
                var resource = firstImage.getResource();
                var services = resource.getServices();
                if (!width) {
                    width = resource.getWidth();
                }
                var service = services
                    ? services.find(function (service) {
                        return (internal_1.Utils.isImageProfile(service.getProfile()) ||
                            internal_1.Utils.isImageServiceType(service.getIIIFResourceType()));
                    })
                    : null;
                if (service) {
                    id = service.id;
                    quality = internal_1.Utils.getImageQuality(service.getProfile());
                }
                else if (width === resource.getWidth()) {
                    // if the passed width is the same as the resource width
                    // i.e. not looking for a thumbnail
                    // return the full size image.
                    // used for download options when loading static images.
                    return resource.id;
                }
            }
            // presentation 3.0
            images = this.getContent();
            if (images && images.length) {
                var firstImage = images[0];
                // Developer note: Since Canvas in Presentation 3 doesn't use
                // SpecificResource resources in the body, force a cast
                var body = firstImage.getBody();
                var anno = body[0];
                var services = anno.getServices();
                if (!width) {
                    width = anno.getWidth();
                }
                var service = services
                    ? services.find(function (service) {
                        return internal_1.Utils.isImageServiceType(service.getIIIFResourceType());
                    })
                    : null;
                if (service) {
                    id = service.id;
                    quality = internal_1.Utils.getImageQuality(service.getProfile());
                }
                else if (width === anno.getWidth()) {
                    // if the passed width is the same as the resource width
                    // i.e. not looking for a thumbnail
                    // return the full size image.
                    // used for download options when loading static images.
                    return anno.id;
                }
            }
            // todo: should this be moved to getThumbUri?
            if (!id) {
                var thumbnail = this.getProperty("thumbnail");
                if (thumbnail) {
                    if (typeof thumbnail === "string") {
                        return thumbnail;
                    }
                    else {
                        if (thumbnail["@id"]) {
                            return thumbnail["@id"];
                        }
                        else if (thumbnail.length) {
                            return thumbnail[0].id;
                        }
                    }
                }
            }
        }
        size = width + ",";
        // trim off trailing '/'
        if (id && id.endsWith("/")) {
            id = id.substr(0, id.length - 1);
        }
        var uri = [id, region, size, rotation, quality + ".jpg"].join("/");
        return uri;
    };
    Canvas.prototype.getMaxDimensions = function () {
        var maxDimensions = null;
        var profile;
        if (this.externalResource &&
            this.externalResource.data &&
            this.externalResource.data.profile) {
            profile = this.externalResource.data.profile;
            if (Array.isArray(profile)) {
                profile = profile.filter(function (p) { return p["maxWidth" || "maxwidth"]; })[0];
                if (profile) {
                    maxDimensions = new internal_1.Size(profile.maxWidth, profile.maxHeight ? profile.maxHeight : profile.maxWidth);
                }
            }
        }
        return maxDimensions;
    };
    // Presentation API 3.0
    Canvas.prototype.getContent = function () {
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
        return content;
    };
    Canvas.prototype.getDuration = function () {
        return this.getProperty("duration");
    };
    // presentation 2.0
    Canvas.prototype.getImages = function () {
        var images = [];
        if (!this.__jsonld.images)
            return images;
        for (var i = 0; i < this.__jsonld.images.length; i++) {
            var a = this.__jsonld.images[i];
            var annotation = new internal_1.Annotation(a, this.options);
            images.push(annotation);
        }
        return images;
    };
    Canvas.prototype.getIndex = function () {
        return this.getProperty("index");
    };
    Canvas.prototype.getOtherContent = function () {
        var _this = this;
        var otherContent = Array.isArray(this.getProperty("otherContent"))
            ? this.getProperty("otherContent")
            : [this.getProperty("otherContent")];
        var canonicalComparison = function (typeA, typeB) {
            if (typeof typeA !== "string" || typeof typeB !== "string") {
                return false;
            }
            return typeA.toLowerCase() === typeA.toLowerCase();
        };
        var otherPromises = otherContent
            .filter(function (otherContent) {
            return otherContent &&
                canonicalComparison(otherContent["@type"], "sc:AnnotationList");
        })
            .map(function (annotationList, i) {
            return new internal_1.AnnotationList(annotationList["label"] || "Annotation list ".concat(i), annotationList, _this.options);
        })
            .map(function (annotationList) { return annotationList.load(); });
        return Promise.all(otherPromises);
    };
    // Prefer thumbnail service to image service if supplied and if
    // the thumbnail service can provide a satisfactory size +/- x pixels.
    // this is used to get thumb URIs *before* the info.json has been requested
    // and populate thumbnails in a viewer.
    // the publisher may also provide pre-computed fixed-size thumbs for better performance.
    //getThumbUri(width: number): string {
    //
    //    var uri;
    //    var images: IAnnotation[] = this.getImages();
    //
    //    if (images && images.length) {
    //        var firstImage = images[0];
    //        var resource: IResource = firstImage.getResource();
    //        var services: IService[] = resource.getServices();
    //
    //        for (let i = 0; i < services.length; i++) {
    //            var service: IService = services[i];
    //            var id = service.id;
    //
    //            if (!_endsWith(id, '/')) {
    //                id += '/';
    //            }
    //
    //            uri = id + 'full/' + width + ',/0/' + Utils.getImageQuality(service.getProfile()) + '.jpg';
    //        }
    //    }
    //
    //    return uri;
    //}
    //getType(): CanvasType {
    //    return new CanvasType(this.getProperty('@type').toLowerCase());
    //}
    Canvas.prototype.getWidth = function () {
        return this.getProperty("width");
    };
    Canvas.prototype.getHeight = function () {
        return this.getProperty("height");
    };
    Canvas.prototype.getViewingHint = function () {
        return this.getProperty("viewingHint");
    };
    Object.defineProperty(Canvas.prototype, "imageResources", {
        get: function () {
            var _this = this;
            var resources = (0, flattenDeep_1.default)([
                this.getImages().map(function (i) { return i.getResource(); }),
                this.getContent().map(function (i) { return i.getBody(); })
            ]);
            return (0, flatten_1.default)(resources.map(function (resource) {
                switch (resource.getProperty("type").toLowerCase()) {
                    case dist_commonjs_1.ExternalResourceType.CHOICE:
                    case dist_commonjs_1.ExternalResourceType.OA_CHOICE:
                        return new Canvas({
                            images: (0, flatten_1.default)([
                                resource.getProperty("default"),
                                resource.getProperty("item")
                            ]).map(function (r) { return ({ resource: r }); })
                        }, _this.options)
                            .getImages()
                            .map(function (i) { return i.getResource(); });
                    default:
                        return resource;
                }
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "resourceAnnotations", {
        get: function () {
            return (0, flattenDeep_1.default)([this.getImages(), this.getContent()]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a given resource Annotation, based on a contained resource or body
     * id
     */
    Canvas.prototype.resourceAnnotation = function (id) {
        return this.resourceAnnotations.find(function (anno) {
            return anno.getResource().id === id ||
                (0, flatten_1.default)(new Array(anno.getBody())).some(function (body) { return body.id === id; });
        });
    };
    /**
     * Returns the fragment placement values if a resourceAnnotation is placed on
     * a canvas somewhere besides the full extent
     */
    Canvas.prototype.onFragment = function (id) {
        var resourceAnnotation = this.resourceAnnotation(id);
        if (!resourceAnnotation)
            return undefined;
        // IIIF v2
        var on = resourceAnnotation.getProperty("on");
        // IIIF v3
        var target = resourceAnnotation.getProperty("target");
        if (!on || !target) {
            return undefined;
        }
        var fragmentMatch = (on || target).match(/xywh=(.*)$/);
        if (!fragmentMatch)
            return undefined;
        return fragmentMatch[1].split(",").map(function (str) { return parseInt(str, 10); });
    };
    Object.defineProperty(Canvas.prototype, "iiifImageResources", {
        get: function () {
            return this.imageResources.filter(function (r) { return r && r.getServices()[0] && r.getServices()[0].id; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "imageServiceIds", {
        get: function () {
            return this.iiifImageResources.map(function (r) { return r.getServices()[0].id; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "aspectRatio", {
        get: function () {
            return this.getWidth() / this.getHeight();
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}(internal_1.Resource));
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map