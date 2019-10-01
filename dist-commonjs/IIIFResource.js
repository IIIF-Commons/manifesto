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
var IIIFResource = /** @class */ (function (_super) {
    __extends(IIIFResource, _super);
    function IIIFResource(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.index = -1;
        _this.isLoaded = false;
        var defaultOptions = {
            defaultLabel: '-',
            locale: 'en-GB',
            resource: _this,
            pessimisticAccessControl: false
        };
        _this.options = Object.assign(defaultOptions, options);
        return _this;
    }
    IIIFResource.prototype.getAttribution = function () {
        console.warn('getAttribution will be deprecated, use getRequiredStatement instead.');
        var attribution = this.getProperty('attribution');
        if (attribution) {
            return LanguageMap_1.LanguageMap.parse(attribution, this.options.locale);
        }
        return [];
    };
    IIIFResource.prototype.getDescription = function () {
        var description = this.getProperty('description');
        if (description) {
            return LanguageMap_1.LanguageMap.parse(description, this.options.locale);
        }
        return [];
    };
    IIIFResource.prototype.getIIIFResourceType = function () {
        return Utils_1.Utils.normaliseType(this.getProperty('type'));
    };
    IIIFResource.prototype.getLogo = function () {
        var logo = this.getProperty('logo');
        if (!logo)
            return null;
        if (typeof (logo) === 'string')
            return logo;
        if (Array.isArray(logo) && logo.length) {
            logo = logo[0];
        }
        return logo['@id'] || logo.id;
    };
    IIIFResource.prototype.getLicense = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
    };
    IIIFResource.prototype.getNavDate = function () {
        return new Date(this.getProperty('navDate'));
    };
    IIIFResource.prototype.getRelated = function () {
        return this.getProperty('related');
    };
    IIIFResource.prototype.getSeeAlso = function () {
        return this.getProperty('seeAlso');
    };
    IIIFResource.prototype.getTrackingLabel = function () {
        var service = this.getService(ServiceProfileEnum.TRACKING_EXTENSIONS);
        if (service) {
            return service.getProperty('trackingLabel');
        }
        return '';
    };
    IIIFResource.prototype.getDefaultTree = function () {
        this.defaultTree = new TreeNode_1.TreeNode('root');
        this.defaultTree.data = this;
        return this.defaultTree;
    };
    IIIFResource.prototype.getRequiredStatement = function () {
        var requiredStatement = null;
        var _requiredStatement = this.getProperty('requiredStatement');
        if (_requiredStatement) {
            requiredStatement = new LabelValuePair_1.LabelValuePair(this.options.locale);
            requiredStatement.parse(_requiredStatement);
        }
        else {
            // fall back to attribution (if it exists)
            var attribution = this.getAttribution();
            if (attribution) {
                requiredStatement = new LabelValuePair_1.LabelValuePair(this.options.locale);
                requiredStatement.value = attribution;
            }
        }
        return requiredStatement;
    };
    IIIFResource.prototype.isCollection = function () {
        if (this.getIIIFResourceType() === IIIFResourceTypeEnum.COLLECTION) {
            return true;
        }
        return false;
    };
    IIIFResource.prototype.isManifest = function () {
        if (this.getIIIFResourceType() === IIIFResourceTypeEnum.MANIFEST) {
            return true;
        }
        return false;
    };
    IIIFResource.prototype.load = function () {
        var that = this;
        return new Promise(function (resolve) {
            if (that.isLoaded) {
                resolve(that);
            }
            else {
                var options_1 = that.options;
                options_1.navDate = that.getNavDate();
                var id = that.__jsonld.id;
                if (!id) {
                    id = that.__jsonld['@id'];
                }
                Utils_1.Utils.loadManifest(id).then(function (data) {
                    that.parentLabel = LanguageMap_1.LanguageMap.getValue(that.getLabel(), options_1.locale);
                    var parsed = Serialisation_1.Deserialiser.parse(data, options_1);
                    that = Object.assign(that, parsed);
                    //that.parentCollection = options.resource.parentCollection;
                    that.index = options_1.index;
                    resolve(that);
                });
            }
        });
    };
    return IIIFResource;
}(ManifestResource_1.ManifestResource));
exports.IIIFResource = IIIFResource;
// https://github.com/ionic-team/ionic-app-scripts/issues/1219#issuecomment-386114424
var IIIFResourceTypeEnum = require('@iiif/vocabulary/dist-commonjs/').IIIFResourceType;
var ServiceProfileEnum = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;
var TreeNode_1 = require("./TreeNode");
var LanguageMap_1 = require("./LanguageMap");
var Utils_1 = require("./Utils");
var LabelValuePair_1 = require("./LabelValuePair");
var Serialisation_1 = require("./Serialisation");
//# sourceMappingURL=IIIFResource.js.map