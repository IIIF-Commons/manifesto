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
var Annotation_1 = require("./Annotation");
var AnnotationList_1 = require("./AnnotationList");
var AnnotationPage_1 = require("./AnnotationPage");
var Resource_1 = require("./Resource");
var Size_1 = require("./Size");
var Utils_1 = require("./Utils");
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    // http://iiif.io/api/image/2.1/#canonical-uri-syntax
    Canvas.prototype.getCanonicalImageUri = function (w) {
        var id = null;
        var region = 'full';
        var rotation = 0;
        var quality = 'default';
        var width = w;
        var size;
        // if an info.json has been loaded
        if (this.externalResource && this.externalResource.data && this.externalResource.data['@id']) {
            id = this.externalResource.data['@id'];
            if (!width) {
                width = this.externalResource.data.width;
            }
            if (this.externalResource.data['@context']) {
                if (this.externalResource.data['@context'].indexOf('/1.0/context.json') > -1 ||
                    this.externalResource.data['@context'].indexOf('/1.1/context.json') > -1 ||
                    this.externalResource.data['@context'].indexOf('/1/context.json') > -1) {
                    quality = 'native';
                }
            }
        }
        else {
            // info.json hasn't been loaded yet
            var images = this.getImages();
            if (images && images.length) {
                var firstImage = images[0];
                var resource = firstImage.getResource();
                var services = resource.getServices();
                if (!width) {
                    width = resource.getWidth();
                }
                if (services.length) {
                    var service = services[0];
                    id = service.id;
                    quality = Utils_1.Utils.getImageQuality(service.getProfile());
                }
                else if (width === resource.getWidth()) {
                    // if the passed width is the same as the resource width
                    // i.e. not looking for a thumbnail
                    // return the full size image.
                    // used for download options when loading static images.
                    return resource.id;
                }
            }
            // todo: should this be moved to getThumbUri?
            if (!id) {
                var thumbnail = this.getProperty('thumbnail');
                if (thumbnail) {
                    if (typeof (thumbnail) === 'string') {
                        return thumbnail;
                    }
                    else {
                        if (thumbnail['@id']) {
                            return thumbnail['@id'];
                        }
                        else if (thumbnail.length) {
                            return thumbnail[0].id;
                        }
                    }
                }
            }
        }
        size = width + ',';
        // trim off trailing '/'
        if (id && id.endsWith('/')) {
            id = id.substr(0, id.length - 1);
        }
        var uri = [id, region, size, rotation, quality + '.jpg'].join('/');
        return uri;
    };
    Canvas.prototype.getMaxDimensions = function () {
        var maxDimensions = null;
        var profile;
        if (this.externalResource && this.externalResource.data && this.externalResource.data.profile) {
            profile = this.externalResource.data.profile;
            if (Array.isArray(profile)) {
                profile = profile.filter(function (p) { return p["maxWidth" || "maxwidth"]; })[0];
                if (profile) {
                    maxDimensions = new Size_1.Size(profile.maxWidth, profile.maxHeight ? profile.maxHeight : profile.maxWidth);
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
            annotationPage = new AnnotationPage_1.AnnotationPage(items[0], this.options);
        }
        if (!annotationPage) {
            return content;
        }
        var annotations = annotationPage.getItems();
        for (var i = 0; i < annotations.length; i++) {
            var a = annotations[i];
            var annotation = new Annotation_1.Annotation(a, this.options);
            content.push(annotation);
        }
        return content;
    };
    Canvas.prototype.getDuration = function () {
        return this.getProperty('duration');
    };
    Canvas.prototype.getImages = function () {
        var images = [];
        if (!this.__jsonld.images)
            return images;
        for (var i = 0; i < this.__jsonld.images.length; i++) {
            var a = this.__jsonld.images[i];
            var annotation = new Annotation_1.Annotation(a, this.options);
            images.push(annotation);
        }
        return images;
    };
    Canvas.prototype.getIndex = function () {
        return this.getProperty('index');
    };
    Canvas.prototype.getOtherContent = function () {
        var _this = this;
        var otherContent = Array.isArray(this.getProperty('otherContent')) ?
            this.getProperty('otherContent') :
            [this.getProperty('otherContent')];
        var canonicalComparison = function (typeA, typeB) {
            if (typeof typeA !== 'string' || typeof typeB !== 'string') {
                return false;
            }
            return typeA.toLowerCase() === typeA.toLowerCase();
        };
        var otherPromises = otherContent
            .filter(function (otherContent) { return otherContent && canonicalComparison(otherContent['@type'], 'sc:AnnotationList'); })
            .map(function (annotationList, i) { return ((new AnnotationList_1.AnnotationList(annotationList['label'] || "Annotation list " + i, annotationList, _this.options))); })
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
        return this.getProperty('width');
    };
    Canvas.prototype.getHeight = function () {
        return this.getProperty('height');
    };
    return Canvas;
}(Resource_1.Resource));
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map