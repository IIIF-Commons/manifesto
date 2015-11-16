var Manifesto;
(function (Manifesto) {
    var StringValue = (function () {
        function StringValue(value) {
            this.value = "";
            if (value) {
                this.value = value.toLowerCase();
            }
        }
        StringValue.prototype.toString = function () {
            return this.value;
        };
        return StringValue;
    })();
    Manifesto.StringValue = StringValue;
})(Manifesto || (Manifesto = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Manifesto;
(function (Manifesto) {
    var AnnotationMotivation = (function (_super) {
        __extends(AnnotationMotivation, _super);
        function AnnotationMotivation() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        AnnotationMotivation.prototype.bookmarking = function () {
            return new AnnotationMotivation(AnnotationMotivation.BOOKMARKING.toString());
        };
        AnnotationMotivation.prototype.classifying = function () {
            return new AnnotationMotivation(AnnotationMotivation.CLASSIFYING.toString());
        };
        AnnotationMotivation.prototype.commenting = function () {
            return new AnnotationMotivation(AnnotationMotivation.COMMENTING.toString());
        };
        AnnotationMotivation.prototype.describing = function () {
            return new AnnotationMotivation(AnnotationMotivation.DESCRIBING.toString());
        };
        AnnotationMotivation.prototype.editing = function () {
            return new AnnotationMotivation(AnnotationMotivation.EDITING.toString());
        };
        AnnotationMotivation.prototype.highlighting = function () {
            return new AnnotationMotivation(AnnotationMotivation.HIGHLIGHTING.toString());
        };
        AnnotationMotivation.prototype.identifying = function () {
            return new AnnotationMotivation(AnnotationMotivation.IDENTIFYING.toString());
        };
        AnnotationMotivation.prototype.linking = function () {
            return new AnnotationMotivation(AnnotationMotivation.LINKING.toString());
        };
        AnnotationMotivation.prototype.moderating = function () {
            return new AnnotationMotivation(AnnotationMotivation.MODERATING.toString());
        };
        AnnotationMotivation.prototype.painting = function () {
            return new AnnotationMotivation(AnnotationMotivation.PAINTING.toString());
        };
        AnnotationMotivation.prototype.questioning = function () {
            return new AnnotationMotivation(AnnotationMotivation.QUESTIONING.toString());
        };
        AnnotationMotivation.prototype.replying = function () {
            return new AnnotationMotivation(AnnotationMotivation.REPLYING.toString());
        };
        AnnotationMotivation.prototype.tagging = function () {
            return new AnnotationMotivation(AnnotationMotivation.TAGGING.toString());
        };
        AnnotationMotivation.BOOKMARKING = new AnnotationMotivation("oa:bookmarking");
        AnnotationMotivation.CLASSIFYING = new AnnotationMotivation("oa:classifying");
        AnnotationMotivation.COMMENTING = new AnnotationMotivation("oa:commenting");
        AnnotationMotivation.DESCRIBING = new AnnotationMotivation("oa:describing");
        AnnotationMotivation.EDITING = new AnnotationMotivation("oa:editing");
        AnnotationMotivation.HIGHLIGHTING = new AnnotationMotivation("oa:highlighting");
        AnnotationMotivation.IDENTIFYING = new AnnotationMotivation("oa:identifying");
        AnnotationMotivation.LINKING = new AnnotationMotivation("oa:linking");
        AnnotationMotivation.MODERATING = new AnnotationMotivation("oa:moderating");
        AnnotationMotivation.PAINTING = new AnnotationMotivation("sc:painting");
        AnnotationMotivation.QUESTIONING = new AnnotationMotivation("oa:questioning");
        AnnotationMotivation.REPLYING = new AnnotationMotivation("oa:replying");
        AnnotationMotivation.TAGGING = new AnnotationMotivation("oa:tagging");
        return AnnotationMotivation;
    })(Manifesto.StringValue);
    Manifesto.AnnotationMotivation = AnnotationMotivation;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var CanvasType = (function (_super) {
        __extends(CanvasType, _super);
        function CanvasType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        CanvasType.prototype.canvas = function () {
            return new CanvasType(CanvasType.CANVAS.toString());
        };
        CanvasType.CANVAS = new CanvasType("sc:canvas");
        return CanvasType;
    })(Manifesto.StringValue);
    Manifesto.CanvasType = CanvasType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ElementType = (function (_super) {
        __extends(ElementType, _super);
        function ElementType() {
            _super.apply(this, arguments);
        }
        // todo: Should IIIFIMAGE go here?
        // todo: use getters when ES3 target is no longer required.
        ElementType.prototype.document = function () {
            return new ElementType(ElementType.DOCUMENT.toString());
        };
        ElementType.prototype.movingimage = function () {
            return new ElementType(ElementType.MOVINGIMAGE.toString());
        };
        ElementType.prototype.sound = function () {
            return new ElementType(ElementType.SOUND.toString());
        };
        ElementType.DOCUMENT = new ElementType("foaf:document");
        ElementType.MOVINGIMAGE = new ElementType("dctypes:movingimage");
        ElementType.SOUND = new ElementType("dctypes:sound");
        return ElementType;
    })(Manifesto.StringValue);
    Manifesto.ElementType = ElementType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var IIIFResourceType = (function (_super) {
        __extends(IIIFResourceType, _super);
        function IIIFResourceType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        IIIFResourceType.prototype.manifest = function () {
            return new IIIFResourceType(IIIFResourceType.MANIFEST.toString());
        };
        IIIFResourceType.prototype.collection = function () {
            return new IIIFResourceType(IIIFResourceType.COLLECTION.toString());
        };
        IIIFResourceType.MANIFEST = new IIIFResourceType("sc:manifest");
        IIIFResourceType.COLLECTION = new IIIFResourceType("sc:collection");
        return IIIFResourceType;
    })(Manifesto.StringValue);
    Manifesto.IIIFResourceType = IIIFResourceType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ManifestType = (function (_super) {
        __extends(ManifestType, _super);
        function ManifestType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ManifestType.prototype.empty = function () {
            return new ManifestType(ManifestType.EMPTY.toString());
        };
        ManifestType.prototype.manuscript = function () {
            return new ManifestType(ManifestType.MANUSCRIPT.toString());
        };
        ManifestType.prototype.monograph = function () {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        };
        ManifestType.EMPTY = new ManifestType("");
        ManifestType.MANUSCRIPT = new ManifestType("manuscript");
        ManifestType.MONOGRAPH = new ManifestType("monograph");
        return ManifestType;
    })(Manifesto.StringValue);
    Manifesto.ManifestType = ManifestType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var RenderingFormat = (function (_super) {
        __extends(RenderingFormat, _super);
        function RenderingFormat() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        RenderingFormat.prototype.pdf = function () {
            return new RenderingFormat(RenderingFormat.PDF.toString());
        };
        RenderingFormat.prototype.doc = function () {
            return new RenderingFormat(RenderingFormat.DOC.toString());
        };
        RenderingFormat.prototype.docx = function () {
            return new RenderingFormat(RenderingFormat.DOCX.toString());
        };
        RenderingFormat.PDF = new RenderingFormat("application/pdf");
        RenderingFormat.DOC = new RenderingFormat("application/msword");
        RenderingFormat.DOCX = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        return RenderingFormat;
    })(Manifesto.StringValue);
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ResourceFormat = (function (_super) {
        __extends(ResourceFormat, _super);
        function ResourceFormat() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ResourceFormat.prototype.jpgimage = function () {
            return new ResourceFormat(ResourceFormat.JPGIMAGE.toString());
        };
        ResourceFormat.JPGIMAGE = new ResourceFormat("image/jpeg");
        return ResourceFormat;
    })(Manifesto.StringValue);
    Manifesto.ResourceFormat = ResourceFormat;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ResourceType = (function (_super) {
        __extends(ResourceType, _super);
        function ResourceType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ResourceType.prototype.image = function () {
            return new ResourceType(ResourceType.IMAGE.toString());
        };
        ResourceType.IMAGE = new ResourceType("dctypes:image");
        return ResourceType;
    })(Manifesto.StringValue);
    Manifesto.ResourceType = ResourceType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ServiceProfile = (function (_super) {
        __extends(ServiceProfile, _super);
        function ServiceProfile() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ServiceProfile.prototype.autoComplete = function () {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        };
        ServiceProfile.prototype.clickThrough = function () {
            return new ServiceProfile(ServiceProfile.CLICKTHROUGH.toString());
        };
        ServiceProfile.prototype.iiif1ImageLevel1 = function () {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL1.toString());
        };
        ServiceProfile.prototype.iiif1ImageLevel2 = function () {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL2.toString());
        };
        ServiceProfile.prototype.iiif2ImageLevel1 = function () {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL1.toString());
        };
        ServiceProfile.prototype.iiif2ImageLevel2 = function () {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL2.toString());
        };
        ServiceProfile.prototype.ixif = function () {
            return new ServiceProfile(ServiceProfile.IXIF.toString());
        };
        ServiceProfile.prototype.login = function () {
            return new ServiceProfile(ServiceProfile.LOGIN.toString());
        };
        ServiceProfile.prototype.logout = function () {
            return new ServiceProfile(ServiceProfile.LOGOUT.toString());
        };
        ServiceProfile.prototype.otherManifestations = function () {
            return new ServiceProfile(ServiceProfile.OTHERMANIFESTATIONS.toString());
        };
        ServiceProfile.prototype.searchWithin = function () {
            return new ServiceProfile(ServiceProfile.SEARCHWITHIN.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageCompliance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageCompliance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageConformance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageConformance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageCompliance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageCompliance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageConformance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageConformance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString());
        };
        ServiceProfile.prototype.token = function () {
            return new ServiceProfile(ServiceProfile.TOKEN.toString());
        };
        ServiceProfile.prototype.uiExtensions = function () {
            return new ServiceProfile(ServiceProfile.UIEXTENSIONS.toString());
        };
        ServiceProfile.AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/search/0/autocomplete");
        ServiceProfile.CLICKTHROUGH = new ServiceProfile("http://wellcomelibrary.org/ld/iiif-ext/0/accept-terms-click-through");
        ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level1");
        ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level2");
        ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level1");
        ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level2");
        ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1");
        ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2");
        ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1");
        ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2");
        ServiceProfile.IIIF1IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/1/level1.json");
        ServiceProfile.IIIF1IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/1/level2.json");
        ServiceProfile.IIIF2IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        ServiceProfile.IIIF2IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        ServiceProfile.IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        ServiceProfile.LOGIN = new ServiceProfile("http://iiif.io/api/auth/0/login");
        ServiceProfile.LOGOUT = new ServiceProfile("http://iiif.io/api/auth/0/logout");
        ServiceProfile.OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        ServiceProfile.SEARCHWITHIN = new ServiceProfile("http://iiif.io/api/search/0/search");
        ServiceProfile.TOKEN = new ServiceProfile("http://iiif.io/api/auth/0/token");
        ServiceProfile.UIEXTENSIONS = new ServiceProfile("http://universalviewer.azurewebsites.net/ui-extensions-profile");
        return ServiceProfile;
    })(Manifesto.StringValue);
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingDirection = (function (_super) {
        __extends(ViewingDirection, _super);
        function ViewingDirection() {
            _super.apply(this, arguments);
        }
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
    })(Manifesto.StringValue);
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingHint = (function (_super) {
        __extends(ViewingHint, _super);
        function ViewingHint() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        ViewingHint.prototype.continuous = function () {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        };
        ViewingHint.prototype.empty = function () {
            return new ViewingHint(ViewingHint.EMPTY.toString());
        };
        ViewingHint.prototype.individuals = function () {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        };
        ViewingHint.prototype.nonPaged = function () {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        };
        ViewingHint.prototype.paged = function () {
            return new ViewingHint(ViewingHint.PAGED.toString());
        };
        ViewingHint.prototype.top = function () {
            return new ViewingHint(ViewingHint.TOP.toString());
        };
        ViewingHint.CONTINUOUS = new ViewingHint("continuous");
        ViewingHint.EMPTY = new ViewingHint("");
        ViewingHint.INDIVIDUALS = new ViewingHint("individuals");
        ViewingHint.NONPAGED = new ViewingHint("non-paged");
        ViewingHint.PAGED = new ViewingHint("paged");
        ViewingHint.TOP = new ViewingHint("top");
        return ViewingHint;
    })(Manifesto.StringValue);
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var JSONLDResource = (function () {
        function JSONLDResource(jsonld) {
            this.__jsonld = jsonld;
            this.context = this.getProperty('@context');
            this.id = this.getProperty('@id');
        }
        JSONLDResource.prototype.getProperty = function (name) {
            return this.__jsonld[name];
        };
        return JSONLDResource;
    })();
    Manifesto.JSONLDResource = JSONLDResource;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ManifestResource = (function (_super) {
        __extends(ManifestResource, _super);
        function ManifestResource(jsonld, options) {
            _super.call(this, jsonld);
            this.options = options;
        }
        ManifestResource.prototype.getLabel = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        };
        ManifestResource.prototype.getMetadata = function () {
            var metadata = this.getProperty('metadata');
            if (!metadata)
                return [];
            // get localised value for each metadata item.
            for (var i = 0; i < metadata.length; i++) {
                var item = metadata[i];
                item.label = Manifesto.Utils.getLocalisedValue(item.label, this.options.locale);
                item.value = Manifesto.Utils.getLocalisedValue(item.value, this.options.locale);
            }
            return metadata;
        };
        // todo: once UV download menu uses manifesto parsed objects, this can be moved back from Utils
        ManifestResource.prototype.getRendering = function (format) {
            return Manifesto.Utils.getRendering(this, format);
        };
        // todo: once UV download menu uses manifesto parsed objects, this can be moved back from Utils
        ManifestResource.prototype.getRenderings = function () {
            return Manifesto.Utils.getRenderings(this);
        };
        ManifestResource.prototype.getService = function (profile) {
            return Manifesto.Utils.getService(this, profile);
        };
        ManifestResource.prototype.getServices = function () {
            return Manifesto.Utils.getServices(this);
        };
        return ManifestResource;
    })(Manifesto.JSONLDResource);
    Manifesto.ManifestResource = ManifestResource;
})(Manifesto || (Manifesto = {}));
var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");
var Manifesto;
(function (Manifesto) {
    var Canvas = (function (_super) {
        __extends(Canvas, _super);
        function Canvas(jsonld, options) {
            _super.call(this, jsonld, options);
            this.ranges = [];
        }
        Canvas.prototype.getImages = function () {
            var images = [];
            if (!this.__jsonld.images)
                return images;
            for (var i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                images.push(annotation);
            }
            return images;
        };
        // todo: Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        Canvas.prototype.getThumbUri = function (width, height) {
            var uri;
            var images = this.getImages();
            if (images && images.length) {
                var firstImage = images[0];
                var resource = firstImage.getResource();
                var services = resource.getServices();
                for (var i = 0; i < services.length; i++) {
                    var service = services[i];
                    var profile = service.getProfile().toString();
                    var id = service.id;
                    if (!_endsWith(id, '/')) {
                        id += '/';
                    }
                    if (profile === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                        profile === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                        profile === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                        profile === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString()) {
                        uri = id + 'full/' + width + ',' + height + '/0/native.jpg';
                    }
                    else if (profile === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                        profile === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString()) {
                        uri = id + 'full/' + width + ',' + height + '/0/default.jpg';
                    }
                }
            }
            return uri;
        };
        Canvas.prototype.getType = function () {
            return new Manifesto.CanvasType(this.getProperty('@type').toLowerCase());
        };
        Canvas.prototype.getWidth = function () {
            return this.getProperty('width');
        };
        Canvas.prototype.getHeight = function () {
            return this.getProperty('height');
        };
        return Canvas;
    })(Manifesto.ManifestResource);
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Element = (function (_super) {
        __extends(Element, _super);
        function Element(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Element.prototype.getType = function () {
            return new Manifesto.ElementType(this.getProperty('@type'));
        };
        return Element;
    })(Manifesto.ManifestResource);
    Manifesto.Element = Element;
})(Manifesto || (Manifesto = {}));
var _assign = require("lodash.assign");
var Manifesto;
(function (Manifesto) {
    var IIIFResource = (function (_super) {
        __extends(IIIFResource, _super);
        function IIIFResource(jsonld, options) {
            _super.call(this, jsonld, options);
            this.index = 0;
            this.isLoaded = false;
            var defaultOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                resource: this,
                pessimisticAccessControl: false
            };
            this.options = _assign(defaultOptions, options);
        }
        IIIFResource.prototype.generateTreeNodeIds = function (treeNode, index) {
            if (index === void 0) { index = 0; }
            var id;
            if (!treeNode.parentNode) {
                id = '0';
            }
            else {
                id = treeNode.parentNode.id + "/" + index;
            }
            treeNode.id = id.hashCode();
            for (var i = 0; i < treeNode.nodes.length; i++) {
                var n = treeNode.nodes[i];
                this.generateTreeNodeIds(n, i);
            }
        };
        IIIFResource.prototype.getAttribution = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('attribution'), this.options.locale);
        };
        IIIFResource.prototype.getDescription = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        };
        IIIFResource.prototype.getIIIFResourceType = function () {
            return new Manifesto.IIIFResourceType(this.getProperty('@type'));
        };
        IIIFResource.prototype.getLogo = function () {
            return this.getProperty('logo');
        };
        IIIFResource.prototype.getLicense = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
        };
        IIIFResource.prototype.getNavDate = function () {
            return new Date(this.getProperty('navDate'));
        };
        IIIFResource.prototype.getSeeAlso = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('seeAlso'), this.options.locale);
        };
        IIIFResource.prototype.getTitle = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        };
        IIIFResource.prototype.getTree = function () {
            this.treeRoot = new Manifesto.TreeNode('root');
            this.treeRoot.data = this;
            return this.treeRoot;
        };
        IIIFResource.prototype.load = function () {
            var that = this;
            return new Promise(function (resolve, reject) {
                if (that.isLoaded) {
                    resolve(that);
                }
                else {
                    var options = that.options;
                    options.navDate = that.getNavDate();
                    Manifesto.Utils.loadResource(that.__jsonld['@id']).then(function (data) {
                        var parsed = Manifesto.Deserialiser.parse(data, options);
                        that = _assign(that, parsed);
                        resolve(that);
                    });
                }
            });
        };
        return IIIFResource;
    })(Manifesto.ManifestResource);
    Manifesto.IIIFResource = IIIFResource;
})(Manifesto || (Manifesto = {}));
var _isArray = require("lodash.isarray");
var _map = require("lodash.map");
var Manifesto;
(function (Manifesto) {
    var Manifest = (function (_super) {
        __extends(Manifest, _super);
        function Manifest(jsonld, options) {
            _super.call(this, jsonld, options);
            this.index = 0;
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                var r = this._getRootRange();
                this._parseRanges(r, '');
            }
        }
        Manifest.prototype._getRootRange = function () {
            var range;
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var r = this.__jsonld.structures[i];
                    if (r.viewingHint === Manifesto.ViewingHint.TOP.toString()) {
                        range = r;
                    }
                }
                if (!range) {
                    range = {};
                    range.ranges = this.__jsonld.structures;
                }
            }
            return range;
        };
        Manifest.prototype._getRangeById = function (id) {
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var r = this.__jsonld.structures[i];
                    if (r['@id'] === id) {
                        return r;
                    }
                }
            }
            return null;
        };
        Manifest.prototype._parseRanges = function (r, path, parentRange) {
            var range;
            if (_isString(r)) {
                r = this._getRangeById(r);
            }
            range = new Manifesto.Range(r, this.options);
            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange) {
                this.rootRange = range;
            }
            else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }
            range.path = path;
            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this._parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        };
        Manifest.prototype.getRanges = function () {
            var ranges = [];
            if (this.rootRange) {
                ranges = this.rootRange.ranges.en().traverseUnique(function (range) { return range.ranges; }).toArray();
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
        Manifest.prototype.getSequences = function () {
            var sequences = [];
            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            var children = this.__jsonld.mediaSequences || this.__jsonld.sequences;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var s = children[i];
                    var sequence = new Manifesto.Sequence(s, this.options);
                    sequences.push(sequence);
                }
            }
            return sequences;
        };
        Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
            return this.getSequences()[sequenceIndex];
        };
        Manifest.prototype.getTotalSequences = function () {
            return this.getSequences().length;
        };
        Manifest.prototype.getTree = function () {
            _super.prototype.getTree.call(this);
            this.treeRoot.data.type = Manifesto.TreeNodeType.MANIFEST.toString();
            if (!this.isLoaded) {
                return this.treeRoot;
            }
            if (!this.rootRange)
                return this.treeRoot;
            this.treeRoot.data = this.rootRange;
            this.rootRange.treeNode = this.treeRoot;
            if (this.rootRange.ranges) {
                for (var i = 0; i < this.rootRange.ranges.length; i++) {
                    var range = this.rootRange.ranges[i];
                    var node = new Manifesto.TreeNode();
                    this.treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }
            this.generateTreeNodeIds(this.treeRoot);
            return this.treeRoot;
        };
        Manifest.prototype._parseTreeNode = function (node, range) {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = Manifesto.TreeNodeType.RANGE.toString();
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
        Manifest.prototype.getManifestType = function () {
            var service = this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service) {
                return new Manifesto.ManifestType(service.getProperty('manifestType'));
            }
            return new Manifesto.ManifestType('');
        };
        Manifest.prototype.isMultiSequence = function () {
            return this.getTotalSequences() > 1;
        };
        return Manifest;
    })(Manifesto.IIIFResource);
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Collection = (function (_super) {
        __extends(Collection, _super);
        function Collection(jsonld, options) {
            _super.call(this, jsonld, options);
            this.collections = [];
            this.manifests = [];
            jsonld.__collection = this;
        }
        Collection.prototype.getCollectionByIndex = function (collectionIndex) {
            var collection = this.collections[collectionIndex];
            // id for collection MUST be dereferenceable
            return collection.load();
        };
        Collection.prototype.getManifestByIndex = function (manifestIndex) {
            var manifest = this.manifests[manifestIndex];
            return manifest.load();
        };
        Collection.prototype.getTotalCollections = function () {
            return this.collections.length;
        };
        Collection.prototype.getTotalManifests = function () {
            return this.manifests.length;
        };
        Collection.prototype.getTree = function () {
            _super.prototype.getTree.call(this);
            this.treeRoot.data.type = Manifesto.TreeNodeType.COLLECTION.toString();
            this._parseManifests(this);
            this._parseCollections(this);
            this.generateTreeNodeIds(this.treeRoot);
            return this.treeRoot;
        };
        Collection.prototype._parseManifests = function (parentCollection) {
            if (parentCollection.manifests && parentCollection.manifests.length) {
                for (var i = 0; i < parentCollection.manifests.length; i++) {
                    var manifest = parentCollection.manifests[i];
                    var tree = manifest.getTree();
                    tree.label = manifest.getTitle() || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.type = Manifesto.TreeNodeType.MANIFEST.toString();
                    parentCollection.treeRoot.addNode(tree);
                }
            }
        };
        Collection.prototype._parseCollections = function (parentCollection) {
            if (parentCollection.collections && parentCollection.collections.length) {
                for (var i = 0; i < parentCollection.collections.length; i++) {
                    var collection = parentCollection.collections[i];
                    var tree = collection.getTree();
                    tree.label = collection.getTitle() || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.type = Manifesto.TreeNodeType.COLLECTION.toString();
                    parentCollection.treeRoot.addNode(tree);
                    this._parseCollections(collection);
                }
            }
        };
        return Collection;
    })(Manifesto.IIIFResource);
    Manifesto.Collection = Collection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Range = (function (_super) {
        __extends(Range, _super);
        function Range(jsonld, options) {
            _super.call(this, jsonld, options);
            this.ranges = [];
        }
        Range.prototype.getCanvases = function () {
            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            }
            return [];
        };
        Range.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return null;
        };
        Range.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return null;
        };
        return Range;
    })(Manifesto.ManifestResource);
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Rendering = (function (_super) {
        __extends(Rendering, _super);
        function Rendering(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Rendering.prototype.getFormat = function () {
            return new Manifesto.RenderingFormat(this.getProperty('format'));
        };
        return Rendering;
    })(Manifesto.ManifestResource);
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));
var _last = require("lodash.last");
var Manifesto;
(function (Manifesto) {
    var Sequence = (function (_super) {
        __extends(Sequence, _super);
        function Sequence(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Sequence.prototype.getCanvases = function () {
            var canvases = [];
            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            var children = this.__jsonld.elements || this.__jsonld.canvases;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    var canvas = new Manifesto.Canvas(c, this.options);
                    canvases.push(canvas);
                }
            }
            return canvases;
        };
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
            return this.getCanvases()[canvasIndex];
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
        Sequence.prototype.getCanvasIndexByLabel = function (label, foliated) {
            label = label.trim();
            if (!isNaN(label)) {
                label = parseInt(label, 10).toString(); // trim any preceding zeros.
                if (foliated)
                    label += 'r'; // default to recto
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
        Sequence.prototype.getLastCanvasLabel = function (alphanumeric) {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas = this.getCanvasByIndex(i);
                var label = canvas.getLabel();
                if (alphanumeric) {
                    var regExp = /^[a-zA-Z0-9]*$/;
                    if (regExp.test(label)) {
                        return label;
                    }
                }
                else if (label) {
                    return label;
                }
            }
            return this.options.defaultLabel;
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
                    index = _last(indices) + 1;
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
                    index = _last(indices) - 1;
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
            return this.getProperty('startCanvas');
        };
        Sequence.prototype.getTotalCanvases = function () {
            return this.getCanvases().length;
        };
        Sequence.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        Sequence.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
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
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        };
        // checks if the number of canvases is even - therefore has a front and back cover
        Sequence.prototype.isTotalCanvasesEven = function () {
            return this.getTotalCanvases() % 2 === 0;
        };
        return Sequence;
    })(Manifesto.ManifestResource);
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));
var _isString = require("lodash.isstring");
var Manifesto;
(function (Manifesto) {
    var Deserialiser = (function () {
        function Deserialiser() {
        }
        Deserialiser.parse = function (manifest, options) {
            return this.parseJson(JSON.parse(manifest), options);
        };
        Deserialiser.parseJson = function (json, options) {
            var resource;
            // have options been passed for the manifest to inherit?
            if (options) {
                if (options.navDate && !isNaN(options.navDate.getTime())) {
                    json.navDate = options.navDate.toString();
                }
            }
            switch (json['@type']) {
                case 'sc:Collection':
                    resource = this.parseCollection(json, options);
                    break;
                case 'sc:Manifest':
                    resource = this.parseManifest(json, options);
                    break;
                default:
                    return null;
            }
            // Top-level resource was loaded from a URI, so flag it to prevent
            // unnecessary reload:
            resource.isLoaded = true;
            return resource;
        };
        Deserialiser.parseCollection = function (json, options) {
            var collection = new Manifesto.Collection(json, options);
            this.parseCollections(collection, options);
            this.parseManifests(collection, options);
            return collection;
        };
        Deserialiser.parseCollections = function (collection, options) {
            var children = collection.__jsonld.collections;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = this.parseCollection(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.collections.push(child);
                }
            }
        };
        Deserialiser.parseManifest = function (json, options) {
            return new Manifesto.Manifest(json, options);
        };
        Deserialiser.parseManifests = function (collection, options) {
            var children = collection.__jsonld.manifests;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var child = this.parseManifest(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.manifests.push(child);
                }
            }
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
})(Manifesto || (Manifesto = {}));
var _endsWith = require("lodash.endswith");
var _isArray = require("lodash.isarray");
var Manifesto;
(function (Manifesto) {
    var Service = (function (_super) {
        __extends(Service, _super);
        function Service(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Service.prototype.getProfile = function () {
            var profile = this.getProperty('profile');
            if (_isArray(profile)) {
                return new Manifesto.ServiceProfile(profile[0]);
            }
            return new Manifesto.ServiceProfile(profile);
        };
        Service.prototype.getDescription = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        };
        Service.prototype.getInfoUri = function () {
            var infoUri = this.id;
            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }
            infoUri += 'info.json';
            return infoUri;
        };
        return Service;
    })(Manifesto.ManifestResource);
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
var Manifesto;
(function (Manifesto) {
    var TreeNodeType = (function (_super) {
        __extends(TreeNodeType, _super);
        function TreeNodeType() {
            _super.apply(this, arguments);
        }
        // todo: use getters when ES3 target is no longer required.
        TreeNodeType.prototype.collection = function () {
            return new TreeNodeType(TreeNodeType.COLLECTION.toString());
        };
        TreeNodeType.prototype.manifest = function () {
            return new TreeNodeType(TreeNodeType.MANIFEST.toString());
        };
        TreeNodeType.prototype.range = function () {
            return new TreeNodeType(TreeNodeType.RANGE.toString());
        };
        TreeNodeType.COLLECTION = new TreeNodeType("collection");
        TreeNodeType.MANIFEST = new TreeNodeType("manifest");
        TreeNodeType.RANGE = new TreeNodeType("range");
        return TreeNodeType;
    })(Manifesto.StringValue);
    Manifesto.TreeNodeType = TreeNodeType;
})(Manifesto || (Manifesto = {}));
var http = require("http");
var url = require("url");
var Manifesto;
(function (Manifesto) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.getLocalisedValue = function (resource, locale) {
            // if the resource is not an array of translations, return the string.
            if (!_isArray(resource)) {
                return resource;
            }
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
        Utils.loadResource = function (uri) {
            return new Promise(function (resolve, reject) {
                var u = url.parse(uri);
                var request = http.request({
                    host: u.hostname,
                    port: u.port,
                    path: u.pathname,
                    method: "GET",
                    withCredentials: false
                }, function (response) {
                    var result = "";
                    response.on('data', function (chunk) {
                        result += chunk;
                    });
                    response.on('end', function () {
                        resolve(result);
                    });
                });
                request.on('error', function (error) {
                    reject(error);
                });
                request.end();
            });
        };
        Utils.loadExternalResource = function (resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve, reject) {
                if (options && options.pessimisticAccessControl) {
                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.
                    resource.getData().then(function () {
                        if (resource.isAccessControlled()) {
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService) {
                                resolve(clickThrough(resource));
                            }
                            else {
                                login(resource).then(function () {
                                    getAccessToken(resource).then(function (token) {
                                        resource.getData(token).then(function () {
                                            resolve(handleResourceResponse(resource));
                                        })["catch"](function (error) {
                                            reject(error);
                                        });
                                    })["catch"](function (error) {
                                        reject(error);
                                    });
                                })["catch"](function (error) {
                                    reject(error);
                                });
                            }
                        }
                        else {
                            // this info.json isn't access controlled, therefore no need to request an access token.
                            resolve(resource);
                        }
                    })["catch"](function (error) {
                        reject(error);
                    });
                }
                else {
                    // optimistic: access control cookies may not have been deleted.
                    // store access tokens to avoid login window flashes.
                    // if cookies are deleted a page refresh is required.
                    // try loading the resource using an access token that matches the info.json domain.
                    // if an access token is found, request the resource using it regardless of whether it is access controlled.
                    getStoredAccessToken(resource).then(function (storedAccessToken) {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(function () {
                                // if the info.json loaded using the stored access token
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(handleResourceResponse(resource));
                                }
                                else {
                                    // otherwise, load the resource data to determine the correct access control services.
                                    // if access controlled, do login.
                                    Utils.authorize(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                        resolve(handleResourceResponse(resource));
                                    })["catch"](function (error) {
                                        reject(error);
                                    });
                                }
                            })["catch"](function (error) {
                                reject(error);
                            });
                        }
                        else {
                            Utils.authorize(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                resolve(handleResourceResponse(resource));
                            })["catch"](function (error) {
                                reject(error);
                            });
                        }
                    })["catch"](function (error) {
                        reject(error);
                    });
                }
            });
        };
        Utils.loadExternalResources = function (resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve, reject) {
                var promises = _map(resources, function (resource) {
                    return Utils.loadExternalResource(resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
                });
                Promise.all(promises)
                    .then(function () {
                    resolve(resources);
                })["catch"](function (error) {
                    reject(error);
                });
            });
        };
        Utils.authorize = function (resource, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken) {
            return new Promise(function (resolve, reject) {
                resource.getData().then(function () {
                    if (resource.isAccessControlled()) {
                        getStoredAccessToken(resource).then(function (storedAccessToken) {
                            if (storedAccessToken) {
                                // try using the stored access token
                                resource.getData(storedAccessToken).then(function () {
                                    resolve(resource);
                                })["catch"](function (error) {
                                    reject(error);
                                });
                            }
                            else {
                                if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
                                    // if the resource was redirected to a degraded version
                                    // and the response hasn't been handled yet.
                                    // if the client wishes to trigger a login, set resource.isResponseHandled to true
                                    // and call loadExternalResources() again passing the resource.
                                    resolve(resource);
                                }
                                else if (resource.clickThroughService && !resource.isResponseHandled) {
                                    // if the resource has a click through service, use that.
                                    clickThrough(resource).then(function () {
                                        getAccessToken(resource).then(function (accessToken) {
                                            storeAccessToken(resource, accessToken).then(function () {
                                                resource.getData(accessToken).then(function () {
                                                    resolve(resource);
                                                })["catch"](function (error) {
                                                    reject(error);
                                                });
                                            })["catch"](function (error) {
                                                reject(error);
                                            });
                                        })["catch"](function (error) {
                                            reject(error);
                                        });
                                    });
                                }
                                else {
                                    // get an access token
                                    login(resource).then(function () {
                                        getAccessToken(resource).then(function (accessToken) {
                                            storeAccessToken(resource, accessToken).then(function () {
                                                resource.getData(accessToken).then(function () {
                                                    resolve(resource);
                                                })["catch"](function (error) {
                                                    reject(error);
                                                });
                                            })["catch"](function (error) {
                                                reject(error);
                                            });
                                        })["catch"](function (error) {
                                            reject(error);
                                        });
                                    });
                                }
                            }
                        })["catch"](function (error) {
                            reject(error);
                        });
                    }
                    else {
                        // this info.json isn't access controlled, therefore there's no need to request an access token
                        resolve(resource);
                    }
                });
            });
        };
        Utils.getRendering = function (resource, format) {
            var renderings = this.getRenderings(resource);
            // normalise format to string
            if (typeof format !== 'string') {
                format = format.toString();
            }
            for (var i = 0; i < renderings.length; i++) {
                var rendering = renderings[i];
                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }
            return null;
        };
        Utils.getRenderings = function (resource) {
            var rendering;
            // if passing a manifesto-parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (resource.__jsonld) {
                rendering = resource.__jsonld.rendering;
            }
            else {
                rendering = resource.rendering;
            }
            var renderings = [];
            if (!rendering)
                return renderings;
            // coerce to array
            if (!_isArray(rendering)) {
                rendering = [rendering];
            }
            for (var i = 0; i < rendering.length; i++) {
                var r = rendering[i];
                renderings.push(new Manifesto.Rendering(r, resource.options));
            }
            return renderings;
        };
        Utils.getService = function (resource, profile) {
            var services = this.getServices(resource);
            // coerce profile to string
            if (typeof profile !== 'string') {
                profile = profile.toString();
            }
            for (var i = 0; i < services.length; i++) {
                var service = services[i];
                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }
            return null;
        };
        Utils.getServiceByReference = function (resource, id) {
            var service;
            var services = this.getServices(resource.options.resource);
            for (var i = 0; i < services.length; i++) {
                var s = services[i];
                if (s.id === id) {
                    service = new Manifesto.Service(s.__jsonld, resource.options);
                    break;
                }
            }
            return service;
        };
        Utils.getServices = function (resource) {
            var service;
            // if passing a manifesto-parsed object, use the __jsonld.service property,
            // otherwise look for a service property (info.json services)
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            }
            else {
                service = resource.service;
            }
            var services = [];
            if (!service)
                return services;
            // coerce to array
            if (!_isArray(service)) {
                service = [service];
            }
            for (var i = 0; i < service.length; i++) {
                var s = service[i];
                if (_isString(s) && resource !== resource.options.resource) {
                    services.push(this.getServiceByReference(resource, s));
                }
                else {
                    services.push(new Manifesto.Service(s, resource.options));
                }
            }
            return services;
        };
        return Utils;
    })();
    Manifesto.Utils = Utils;
})(Manifesto || (Manifesto = {}));
module.exports = {
    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    ManifestType: new Manifesto.ManifestType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceFormat: new Manifesto.ResourceFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    TreeNodeType: new Manifesto.TreeNodeType(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),
    create: function (manifest, options) {
        return Manifesto.Deserialiser.parse(manifest, options);
    },
    // todo: deprecate this - temporary to enable current UV download menu
    getRenderings: function (resource) {
        return Manifesto.Utils.getRenderings(resource);
    },
    getService: function (resource, profile) {
        return Manifesto.Utils.getService(resource, profile);
    },
    // todo: enable this syntax: var treeNode = new manifesto.TreeNode()
    getTreeNode: function () {
        return new Manifesto.TreeNode();
    },
    isImageProfile: function (profile) {
        if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
            profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString()) {
            return true;
        }
        return false;
    },
    // todo: create hasServiceDescriptor
    // based on @profile and @type (or lack of) can the resource describe associated services?
    loadExternalResources: function (resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
        return Manifesto.Utils.loadExternalResources(resources, clickThrough, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
    },
    loadManifest: function (uri) {
        return Manifesto.Utils.loadResource(uri);
    }
};
/// <reference path="./StringValue.ts" />
/// <reference path="./AnnotationMotivation.ts" />
/// <reference path="./CanvasType.ts" />
/// <reference path="./ElementType.ts" />
/// <reference path="./IIIFResourceType.ts" />
/// <reference path="./ManifestType.ts" />
/// <reference path="./RenderingFormat.ts" />
/// <reference path="./ResourceFormat.ts" />
/// <reference path="./ResourceType.ts" />
/// <reference path="./ServiceProfile.ts" />
/// <reference path="./ViewingDirection.ts" />
/// <reference path="./ViewingHint.ts" />
/// <reference path="./JSONLDResource.ts" />
/// <reference path="./ManifestResource.ts" />
/// <reference path="./Canvas.ts" />
/// <reference path="./Element.ts" />
/// <reference path="./IIIFResource.ts" />
/// <reference path="./Manifest.ts" />
/// <reference path="./Collection.ts" />
/// <reference path="./Range.ts" />
/// <reference path="./Rendering.ts" />
/// <reference path="./Sequence.ts" />
/// <reference path="./Serialisation.ts" />
/// <reference path="./Service.ts" />
/// <reference path="./Thumb.ts" />
/// <reference path="./TreeNode.ts" />
/// <reference path="./TreeNodeType.ts" />
/// <reference path="./Utils.ts" />
/// <reference path="./Manifesto.ts" /> 
var Manifesto;
(function (Manifesto) {
    var Annotation = (function (_super) {
        __extends(Annotation, _super);
        function Annotation(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Annotation.prototype.getMotivation = function () {
            return new Manifesto.AnnotationMotivation(this.getProperty('motivation').toLowerCase());
        };
        Annotation.prototype.getOn = function () {
            return this.getProperty('on');
        };
        Annotation.prototype.getResource = function () {
            return new Manifesto.Resource(this.getProperty('resource'), this.options);
        };
        return Annotation;
    })(Manifesto.ManifestResource);
    Manifesto.Annotation = Annotation;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Resource = (function (_super) {
        __extends(Resource, _super);
        function Resource(jsonld, options) {
            _super.call(this, jsonld, options);
        }
        Resource.prototype.getFormat = function () {
            return new Manifesto.ResourceFormat(this.getProperty('format').toLowerCase());
        };
        Resource.prototype.getType = function () {
            return new Manifesto.ResourceType(this.getProperty('@type').toLowerCase());
        };
        Resource.prototype.getWidth = function () {
            return this.getProperty('width');
        };
        Resource.prototype.getHeight = function () {
            return this.getProperty('height');
        };
        return Resource;
    })(Manifesto.ManifestResource);
    Manifesto.Resource = Resource;
})(Manifesto || (Manifesto = {}));
