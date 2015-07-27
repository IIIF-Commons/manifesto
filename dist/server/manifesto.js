var Manifesto;
(function (Manifesto) {
    var CanvasType = (function () {
        function CanvasType(value) {
            this.value = value;
        }
        CanvasType.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        CanvasType.prototype.canvas = function () {
            return new CanvasType("sc:canvas");
        };
        CanvasType.canvas = function () { return CanvasType.canvas(); };
        return CanvasType;
    })();
    Manifesto.CanvasType = CanvasType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ElementType = (function () {
        function ElementType(value) {
            this.value = value;
        }
        ElementType.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        ElementType.prototype.document = function () {
            return new ElementType("foaf:Document");
        };
        ElementType.prototype.movingimage = function () {
            return new ElementType("dctypes:MovingImage");
        };
        ElementType.prototype.sound = function () {
            return new ElementType("dctypes:Sound");
        };
        ElementType.document = function () { return ElementType.document(); };
        ElementType.movingimage = function () { return ElementType.movingimage(); };
        ElementType.sound = function () { return ElementType.sound(); };
        return ElementType;
    })();
    Manifesto.ElementType = ElementType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var RenderingFormat = (function () {
        function RenderingFormat(value) {
            this.value = value;
        }
        RenderingFormat.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        RenderingFormat.prototype.pdf = function () {
            return new RenderingFormat("application/pdf");
        };
        RenderingFormat.prototype.doc = function () {
            return new RenderingFormat("application/msword");
        };
        RenderingFormat.prototype.docx = function () {
            return new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        };
        RenderingFormat.pdf = function () { return RenderingFormat.pdf(); };
        RenderingFormat.doc = function () { return RenderingFormat.doc(); };
        RenderingFormat.docx = function () { return RenderingFormat.docx(); };
        return RenderingFormat;
    })();
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ServiceProfile = (function () {
        function ServiceProfile(value) {
            this.value = value;
        }
        ServiceProfile.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        ServiceProfile.prototype.autoComplete = function () {
            return new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        };
        ServiceProfile.prototype.login = function () {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/login");
        };
        ServiceProfile.prototype.logout = function () {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/logout");
        };
        ServiceProfile.prototype.otherManifestations = function () {
            return new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        };
        ServiceProfile.prototype.searchWithin = function () {
            return new ServiceProfile("http://iiif.io/api/search/1/");
        };
        ServiceProfile.prototype.token = function () {
            return new ServiceProfile("http://iiif.io/api/image/2/auth/token");
        };
        ServiceProfile.autoComplete = function () { return ServiceProfile.autoComplete(); };
        ServiceProfile.login = function () { return ServiceProfile.login(); };
        ServiceProfile.logout = function () { return ServiceProfile.logout(); };
        ServiceProfile.otherManifestations = function () { return ServiceProfile.otherManifestations(); };
        ServiceProfile.searchWithin = function () { return ServiceProfile.searchWithin(); };
        ServiceProfile.token = function () { return ServiceProfile.token(); };
        return ServiceProfile;
    })();
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingDirection = (function () {
        function ViewingDirection(value) {
            this.value = value;
        }
        ViewingDirection.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        ViewingDirection.prototype.leftToRight = function () {
            return new ViewingDirection(ViewingDirection.LEFTTORIGHT.toString());
        };
        ViewingDirection.prototype.rightToLeft = function () {
            return new ViewingDirection(ViewingDirection.RIGHTTOLEFT.toString());
        };
        ViewingDirection.prototype.topToBottom = function () {
            return new ViewingDirection(ViewingDirection.TOPTOBOTTOM.toString());
        };
        ViewingDirection.prototype.bottomToTop = function () {
            return new ViewingDirection(ViewingDirection.BOTTOMTOTOP.toString());
        };
        ViewingDirection.LEFTTORIGHT = new ViewingDirection("left-to-right");
        ViewingDirection.RIGHTTOLEFT = new ViewingDirection("right-to-left");
        ViewingDirection.TOPTOBOTTOM = new ViewingDirection("top-to-bottom");
        ViewingDirection.BOTTOMTOTOP = new ViewingDirection("bottom-to-top");
        return ViewingDirection;
    })();
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingHint = (function () {
        function ViewingHint(value) {
            this.value = value;
        }
        ViewingHint.prototype.toString = function () {
            return this.value;
        };
        // todo: use getters when ES3 target is no longer required.
        ViewingHint.prototype.individuals = function () {
            return new ViewingHint("individuals");
        };
        ViewingHint.prototype.paged = function () {
            return new ViewingHint("paged");
        };
        ViewingHint.prototype.continuous = function () {
            return new ViewingHint("continuous");
        };
        ViewingHint.prototype.nonPaged = function () {
            return new ViewingHint("non-paged");
        };
        ViewingHint.prototype.top = function () {
            return new ViewingHint("top");
        };
        ViewingHint.individuals = function () { return ViewingHint.individuals(); };
        ViewingHint.paged = function () { return ViewingHint.paged(); };
        ViewingHint.continuous = function () { return ViewingHint.continuous(); };
        ViewingHint.nonPaged = function () { return ViewingHint.nonPaged(); };
        ViewingHint.top = function () { return ViewingHint.top(); };
        return ViewingHint;
    })();
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var JSONLDResource = (function () {
        function JSONLDResource(jsonld) {
            this.__jsonld = jsonld;
            this.context = this.__jsonld['@context'];
            this.id = this.__jsonld['@id'];
            this._label = this.__jsonld.label;
            // store a reference to the parsed object in the jsonld for convenience.
            this.__jsonld.__parsed = this;
        }
        JSONLDResource.prototype.getManifest = function () {
            return this.__jsonld.__manifest;
        };
        JSONLDResource.prototype.getLabel = function () {
            // todo: why test if it's a digit?
            //var regExp = /\d/;
            //if (regExp.test(this._label)) {
            return this.getManifest().getLocalisedValue(this._label);
            //}
            //return null;
        };
        return JSONLDResource;
    })();
    Manifesto.JSONLDResource = JSONLDResource;
})(Manifesto || (Manifesto = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Manifesto;
(function (Manifesto) {
    var Canvas = (function (_super) {
        __extends(Canvas, _super);
        function Canvas(jsonld) {
            _super.call(this, jsonld);
            this.ranges = [];
        }
        // todo: add support for default images and multiple images.
        Canvas.prototype.getImageUri = function () {
            var imageUri;
            if (this.__jsonld.resources) {
                imageUri = this.__jsonld.resources[0].resource.service['@id'];
            }
            else if (this.__jsonld.images && this.__jsonld.images[0].resource.service) {
                imageUri = this.__jsonld.images[0].resource.service['@id'];
            }
            if (!imageUri.endsWith('/')) {
                imageUri += '/';
            }
            imageUri += 'info.json';
            return imageUri;
        };
        Canvas.prototype.getRange = function () {
            // get the deepest Range that this Canvas belongs to.
            return this.ranges.last();
        };
        // todo: if a specific thumbnail service is provided use that
        // Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        Canvas.prototype.getThumbUri = function (width, height) {
            var uri;
            //if(this.__jsonld.thumbnail){
            //    return this.__jsonld.thumbnail;
            //} else if (this.__jsonld.resources){
            if (this.__jsonld.resources) {
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.resources[0].resource.service['@id'];
            }
            else if (this.__jsonld.images && this.__jsonld.images[0].resource.service) {
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.images[0].resource.service['@id'];
            }
            else {
                return null;
            }
            if (!uri.endsWith('/')) {
                uri += '/';
            }
            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';
            return uri + tile;
        };
        Canvas.prototype.getType = function () {
            return new Manifesto.CanvasType(this.__jsonld['@type'].toLowerCase());
        };
        Canvas.prototype.getWidth = function () {
            return this.__jsonld.width;
        };
        Canvas.prototype.getHeight = function () {
            return this.__jsonld.height;
        };
        return Canvas;
    })(Manifesto.JSONLDResource);
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));
var _isArray = require("lodash.isarray");
var Manifesto;
(function (Manifesto) {
    var Element = (function (_super) {
        __extends(Element, _super);
        function Element(jsonld) {
            _super.call(this, jsonld);
        }
        Element.prototype.getRenderings = function () {
            var renderings = [];
            if (this.__jsonld.rendering) {
                var rendering = this.__jsonld.rendering;
                if (!_isArray(rendering)) {
                    rendering = [rendering];
                }
                for (var i = 0; i < rendering.length; i++) {
                    var r = rendering[i];
                    var rend = new Manifesto.Rendering(r);
                    rend.format = r.format;
                    renderings.push(rend);
                }
                return renderings;
            }
            // no renderings provided, default to element.
            var rend = new Manifesto.Rendering(this.__jsonld);
            rend.format = this.__jsonld.format;
            return [rend];
        };
        Element.prototype.getType = function () {
            return new Manifesto.ElementType(this.__jsonld['@type']);
        };
        return Element;
    })(Manifesto.JSONLDResource);
    Manifesto.Element = Element;
})(Manifesto || (Manifesto = {}));
var _assign = require("lodash.assign");
var _isArray = require("lodash.isarray");
var Manifesto;
(function (Manifesto) {
    var Manifest = (function (_super) {
        __extends(Manifest, _super);
        function Manifest(jsonld, options) {
            _super.call(this, jsonld);
            this.sequences = [];
            jsonld.__manifest = this;
            this.options = _assign({ defaultLabel: '-', locale: 'en-GB' }, options);
        }
        Manifest.prototype.getAttribution = function () {
            return this.getLocalisedValue(this.__jsonld.attribution);
        };
        Manifest.prototype.getLocalisedValue = function (resource, locale) {
            if (!_isArray(resource)) {
                return resource;
            }
            if (!locale)
                locale = this.options.locale;
            // test for exact match
            for (var i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (locale === language) {
                    return value['@value'];
                }
            }
            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));
            for (var i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (language === match) {
                    return value['@value'];
                }
            }
            return null;
        };
        Manifest.prototype.getLogo = function () {
            return this.__jsonld.logo;
        };
        Manifest.prototype.getLicense = function () {
            return this.getLocalisedValue(this.__jsonld.license);
        };
        Manifest.prototype.getMetadata = function (includeRootProperties) {
            var metadata = this.__jsonld.metadata;
            if (metadata && includeRootProperties) {
                if (this.__jsonld.description) {
                    metadata.push({
                        "label": "description",
                        "value": this.getLocalisedValue(this.__jsonld.description)
                    });
                }
                if (this.__jsonld.attribution) {
                    metadata.push({
                        "label": "attribution",
                        "value": this.getLocalisedValue(this.__jsonld.attribution)
                    });
                }
                if (this.__jsonld.license) {
                    metadata.push({
                        "label": "license",
                        "value": this.getLocalisedValue(this.__jsonld.license)
                    });
                }
                if (this.__jsonld.logo) {
                    metadata.push({
                        "label": "logo",
                        "value": '<img src="' + this.__jsonld.logo + '"/>' });
                }
            }
            return metadata;
        };
        // todo: use jmespath to flatten tree?
        // https://github.com/jmespath/jmespath.js/issues/6
        Manifest.prototype.getRanges = function () {
            var ranges = [];
            if (!this.__jsonld.structures && !this.__jsonld.structures.length)
                return ranges;
            for (var i = 0; i < this.__jsonld.structures.length; i++) {
                var r = this.__jsonld.structures[i];
                ranges.push(r.__parsed);
            }
            return ranges;
        };
        Manifest.prototype.getRangeById = function (id) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRangeByPath = function (path) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRendering = function (resource, format) {
            var renderings = this.getRenderings(resource);
            // normalise format to string
            if (typeof format !== 'string') {
                format = format.toString();
            }
            for (var i = 0; i < renderings.length; i++) {
                var rendering = renderings[i];
                if (rendering.format && rendering.format.toString() === format) {
                    return rendering;
                }
            }
            return null;
        };
        Manifest.prototype.getRenderings = function (resource) {
            var renderings = resource.__jsonld.rendering;
            if (renderings) {
                if (!_isArray(renderings)) {
                    renderings = [renderings];
                }
                return renderings;
            }
            // no renderings provided, default to resource.
            return [resource];
        };
        Manifest.prototype.getSeeAlso = function () {
            return this.getLocalisedValue(this.__jsonld.seeAlso);
        };
        Manifest.prototype.getService = function (resource, profile) {
            var service;
            // if passing a parsed object, use the __jsonld.service property,
            // otherwise look for a service property
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            }
            else {
                service = resource.service;
            }
            if (!service)
                return null;
            // normalise profile to string
            if (typeof profile !== 'string') {
                profile = profile.toString();
            }
            if (_isArray(service)) {
                for (var i = 0; i < service.length; i++) {
                    var s = service[i];
                    if (s.profile && s.profile === profile) {
                        return new Manifesto.Service(s);
                    }
                }
            }
            else {
                if (service.profile && service.profile === profile) {
                    return new Manifesto.Service(service);
                }
            }
            return null;
        };
        Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
            return this.sequences[sequenceIndex];
        };
        Manifest.prototype.getTitle = function () {
            return this.getLocalisedValue(this.__jsonld.label);
        };
        Manifest.prototype.getTotalSequences = function () {
            return this.sequences.length;
        };
        Manifest.prototype.getTree = function () {
            this.treeRoot = new Manifesto.TreeNode('root');
            this.treeRoot.label = "root";
            this.treeRoot.data = this.rootRange;
            this.treeRoot.data.type = "manifest";
            this.rootRange.treeNode = this.treeRoot;
            if (this.rootRange.ranges) {
                for (var i = 0; i < this.rootRange.ranges.length; i++) {
                    var range = this.rootRange.ranges[i];
                    var node = new Manifesto.TreeNode();
                    this.treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }
            return this.treeRoot;
        };
        Manifest.prototype._parseTreeNode = function (node, range) {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = "range";
            range.treeNode = node;
            if (range.ranges) {
                for (var i = 0; i < range.ranges.length; i++) {
                    var childRange = range.ranges[i];
                    var childNode = new Manifesto.TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        };
        Manifest.prototype.isMultiSequence = function () {
            return this.getTotalSequences() > 1;
        };
        return Manifest;
    })(Manifesto.JSONLDResource);
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Range = (function (_super) {
        __extends(Range, _super);
        function Range(jsonld) {
            _super.call(this, jsonld);
            this.canvases = [];
            this.ranges = [];
        }
        //getLabel(): string {
        //    var regExp = /\d/;
        //
        //    if (regExp.test(this.__jsonld.label)) {
        //        return this.manifest.getLocalisedValue(this.__jsonld.label);
        //    }
        //
        //    return null;
        //}
        Range.prototype.getViewingDirection = function () {
            if (this.__jsonld.viewingDirection) {
                return new Manifesto.ViewingDirection(this.__jsonld.viewingDirection);
            }
            return null;
        };
        Range.prototype.getViewingHint = function () {
            if (this.__jsonld.viewingHint) {
                return new Manifesto.ViewingHint(this.__jsonld.viewingHint);
            }
            return null;
        };
        return Range;
    })(Manifesto.JSONLDResource);
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Rendering = (function (_super) {
        __extends(Rendering, _super);
        function Rendering(jsonld) {
            _super.call(this, jsonld);
        }
        return Rendering;
    })(Manifesto.JSONLDResource);
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));
var _isNumber = require("lodash.isnumber");
var Manifesto;
(function (Manifesto) {
    var Sequence = (function (_super) {
        __extends(Sequence, _super);
        function Sequence(jsonld) {
            _super.call(this, jsonld);
            this.canvases = [];
        }
        Sequence.prototype.getCanvasById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return canvas;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasByIndex = function (canvasIndex) {
            return this.canvases[canvasIndex];
        };
        Sequence.prototype.getCanvasIndexById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return i;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasIndexByLabel = function (label) {
            label = label.trim();
            // trim any preceding zeros.
            if (_isNumber(label)) {
                label = parseInt(label, 10).toString();
            }
            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                // check if there's a literal match
                if (canvas.getLabel() === label) {
                    return i;
                }
                // check if there's a match for double-page spreads e.g. 100-101, 100_101, 100 101
                match = doublePageRegExp.exec(label);
                if (!match)
                    continue;
                labelPart1 = match[1];
                labelPart2 = match[2];
                if (!labelPart2)
                    continue;
                regStr = "^" + labelPart1 + "\\D+" + labelPart2 + "$";
                regExp = new RegExp(regStr);
                if (regExp.test(canvas.getLabel())) {
                    return i;
                }
            }
            return -1;
        };
        Sequence.prototype.getLastCanvasLabel = function () {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas = this.getCanvasByIndex(i);
                return canvas.getLabel();
            }
            return this.getManifest().options.defaultLabel;
        };
        Sequence.prototype.getLastPageIndex = function () {
            return this.getTotalCanvases() - 1;
        };
        Sequence.prototype.getNextPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = indices[0] + 1;
                }
                else {
                    index = indices.last() + 1;
                }
            }
            else {
                index = canvasIndex + 1;
            }
            if (index > this.getLastPageIndex()) {
                return -1;
            }
            return index;
        };
        Sequence.prototype.getPagedIndices = function (canvasIndex, pagingEnabled) {
            var indices = [];
            if (!pagingEnabled) {
                indices.push(canvasIndex);
            }
            else {
                if (this.isFirstCanvas(canvasIndex) || this.isLastCanvas(canvasIndex)) {
                    indices = [canvasIndex];
                }
                else if (canvasIndex % 2) {
                    indices = [canvasIndex, canvasIndex + 1];
                }
                else {
                    indices = [canvasIndex - 1, canvasIndex];
                }
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    indices = indices.reverse();
                }
            }
            return indices;
        };
        Sequence.prototype.getPrevPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = indices.last() - 1;
                }
                else {
                    index = indices[0] - 1;
                }
            }
            else {
                index = canvasIndex - 1;
            }
            return index;
        };
        Sequence.prototype.getStartCanvasIndex = function () {
            var startCanvas = this.getStartCanvas();
            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);
                    if (canvas.id === startCanvas)
                        return i;
                }
            }
            // default to first canvas.
            return 0;
        };
        Sequence.prototype.getThumbs = function (width, height) {
            var thumbs = [];
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                //if (!_isNumber(height)) {
                var heightRatio = canvas.getHeight() / canvas.getWidth();
                if (heightRatio) {
                    height = Math.floor(width * heightRatio);
                }
                //}
                var uri = canvas.getThumbUri(width, height);
                var label = canvas.getLabel();
                thumbs.push(new Manifesto.Thumb(i, uri, label, width, height, true));
            }
            return thumbs;
        };
        Sequence.prototype.getStartCanvas = function () {
            return this.__jsonld.startCanvas;
        };
        Sequence.prototype.getTotalCanvases = function () {
            return this.canvases.length;
        };
        Sequence.prototype.getViewingDirection = function () {
            if (this.__jsonld.viewingDirection) {
                return new Manifesto.ViewingDirection(this.__jsonld.viewingDirection);
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        Sequence.prototype.getViewingHint = function () {
            if (this.__jsonld.viewingHint) {
                return new Manifesto.ViewingHint(this.__jsonld.viewingHint);
            }
            return null;
        };
        Sequence.prototype.isCanvasIndexOutOfRange = function (canvasIndex) {
            return canvasIndex > this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isFirstCanvas = function (canvasIndex) {
            return canvasIndex === 0;
        };
        Sequence.prototype.isLastCanvas = function (canvasIndex) {
            return canvasIndex === this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isMultiCanvas = function () {
            return this.getTotalCanvases() > 1;
        };
        Sequence.prototype.isPagingEnabled = function () {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.paged.toString();
        };
        // checks if the number of canvases is even - therefore has a front and back cover
        Sequence.prototype.isTotalCanvasesEven = function () {
            return this.getTotalCanvases() % 2 === 0;
        };
        return Sequence;
    })(Manifesto.JSONLDResource);
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));
var jmespath = require('jmespath');
var Manifesto;
(function (Manifesto) {
    var Deserialiser = (function () {
        function Deserialiser() {
        }
        Deserialiser.parse = function (manifest) {
            var m = JSON.parse(manifest);
            this.manifest = new Manifesto.Manifest(m);
            this.parseSequences();
            if (this.manifest.__jsonld.structures && this.manifest.__jsonld.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.manifest.__jsonld), '');
            }
            return this.manifest;
        };
        Deserialiser.parseSequences = function () {
            for (var i = 0; i < this.manifest.__jsonld.sequences.length; i++) {
                var s = this.manifest.__jsonld.sequences[i];
                s.__manifest = this.manifest;
                var sequence = new Manifesto.Sequence(s);
                sequence.canvases = this.parseCanvases(s);
                this.manifest.sequences.push(sequence);
            }
        };
        Deserialiser.parseCanvases = function (sequence) {
            var canvases = [];
            for (var i = 0; i < sequence.canvases.length; i++) {
                var c = sequence.canvases[i];
                c.__manifest = this.manifest;
                var canvas = new Manifesto.Canvas(c);
                canvases.push(canvas);
            }
            return canvases;
        };
        Deserialiser.parseRanges = function (r, path, parentRange) {
            r.__manifest = this.manifest;
            var range = new Manifesto.Range(r);
            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange) {
                this.manifest.rootRange = range;
            }
            else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }
            range.path = path;
            if (r.canvases) {
                // create two-way relationship
                for (var i = 0; i < r.canvases.length; i++) {
                    var canvas = this.getCanvasById(r.canvases[i]);
                    canvas.ranges.push(range);
                    range.canvases.push(canvas);
                }
            }
            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this.parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        };
        Deserialiser.getCanvasById = function (id) {
            for (var i = 0; i < this.manifest.sequences.length; i++) {
                var sequence = this.manifest.sequences[i];
                for (var j = 0; j < sequence.canvases.length; j++) {
                    var canvas = sequence.canvases[j];
                    if (canvas.id === id) {
                        return canvas;
                    }
                }
            }
            return null;
        };
        return Deserialiser;
    })();
    Manifesto.Deserialiser = Deserialiser;
    var Serialiser = (function () {
        function Serialiser() {
        }
        Serialiser.serialise = function (manifest) {
            // todo
            return "";
        };
        return Serialiser;
    })();
    Manifesto.Serialiser = Serialiser;
    var JsonUtils = (function () {
        function JsonUtils() {
        }
        JsonUtils.getCanvasById = function (manifest, id) {
            var result = jmespath.search(manifest, "sequences[].canvases[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRangeById = function (manifest, id) {
            var result = jmespath.search(manifest, "structures[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRootRange = function (manifest) {
            var result = jmespath.search(manifest, "structures[?viewingHint=='top'][]");
            if (result.length)
                return result[0];
            var rootRange = {};
            rootRange.ranges = manifest.structures;
            return rootRange;
        };
        return JsonUtils;
    })();
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Service = (function (_super) {
        __extends(Service, _super);
        function Service(resource) {
            _super.call(this, resource);
        }
        return Service;
    })(Manifesto.JSONLDResource);
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Thumb = (function () {
        function Thumb(index, uri, label, width, height, visible) {
            this.index = index;
            this.uri = uri;
            this.label = label;
            this.width = width;
            this.height = height;
            this.visible = visible;
        }
        return Thumb;
    })();
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var TreeNode = (function () {
        function TreeNode(label, data) {
            this.label = label;
            this.data = data;
            this.nodes = [];
            if (!data)
                this.data = {};
        }
        TreeNode.prototype.addNode = function (node) {
            this.nodes.push(node);
            node.parentNode = this;
        };
        return TreeNode;
    })();
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));
var http = require("http");
var url = require("url");
module.exports = {
    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),
    load: function (manifestUri, cb) {
        var u = url.parse(manifestUri);
        var fetch = http.request({
            host: u.hostname,
            port: u.port || 80,
            path: u.pathname,
            method: "GET",
            withCredentials: false
        }, function (res) {
            var result = "";
            res.on('data', function (chunk) {
                result += chunk;
            });
            res.on('end', function () {
                cb(result);
            });
        });
        fetch.end();
    },
    parse: function (manifest) {
        return Manifesto.Deserialiser.parse(manifest);
    }
};
/// <reference path="./CanvasType.ts" />
/// <reference path="./ElementType.ts" />
/// <reference path="./RenderingFormat.ts" />
/// <reference path="./ServiceProfile.ts" />
/// <reference path="./ViewingDirection.ts" />
/// <reference path="./ViewingHint.ts" />
/// <reference path="./IJSONLDResource.ts" />
/// <reference path="./JSONLDResource.ts" />
/// <reference path="./Canvas.ts" />
/// <reference path="./Element.ts" />
/// <reference path="./ICanvas.ts" />
/// <reference path="./IElement.ts" />
/// <reference path="./IManifest.ts" />
/// <reference path="./IManifesto.ts" />
/// <reference path="./IManifestoOptions.ts" />
/// <reference path="./IRange.ts" />
/// <reference path="./IRendering.ts" />
/// <reference path="./ISequence.ts" />
/// <reference path="./IService.ts" />
/// <reference path="./Manifest.ts" />
/// <reference path="./Range.ts" />
/// <reference path="./Rendering.ts" />
/// <reference path="./Sequence.ts" />
/// <reference path="./Serialisation.ts" />
/// <reference path="./Service.ts" />
/// <reference path="./Thumb.ts" />
/// <reference path="./TreeNode.ts" />
/// <reference path="./Manifesto.ts" /> 
