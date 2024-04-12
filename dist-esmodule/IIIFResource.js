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
import { ManifestResource, Utils, PropertyValue, Deserialiser, LabelValuePair, TreeNode } from "./internal";
import { IIIFResourceType, ServiceProfile } from "@iiif/vocabulary/dist-commonjs";
var IIIFResource = /** @class */ (function (_super) {
    __extends(IIIFResource, _super);
    function IIIFResource(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.index = -1;
        _this.isLoaded = false;
        var defaultOptions = {
            defaultLabel: "-",
            locale: "en-GB",
            resource: _this,
            pessimisticAccessControl: false
        };
        _this.options = Object.assign(defaultOptions, options);
        return _this;
    }
    /**
     * @deprecated
     */
    IIIFResource.prototype.getAttribution = function () {
        //console.warn('getAttribution will be deprecated, use getRequiredStatement instead.');
        var attribution = this.getProperty("attribution");
        if (attribution) {
            return PropertyValue.parse(attribution, this.options.locale);
        }
        return new PropertyValue([], this.options.locale);
    };
    IIIFResource.prototype.getDescription = function () {
        var description = this.getProperty("description");
        if (description) {
            return PropertyValue.parse(description, this.options.locale);
        }
        return new PropertyValue([], this.options.locale);
    };
    IIIFResource.prototype.getHomepage = function () {
        var homepage = this.getProperty("homepage");
        if (!homepage)
            return null;
        if (typeof homepage == "string")
            return homepage;
        if (Array.isArray(homepage) && homepage.length) {
            homepage = homepage[0];
        }
        return homepage["@id"] || homepage.id;
    };
    IIIFResource.prototype.getIIIFResourceType = function () {
        return Utils.normaliseType(this.getProperty("type"));
    };
    IIIFResource.prototype.getLogo = function () {
        var logo = this.getProperty("logo");
        // Presentation 3.
        // The logo is exclusive to the "provider" property, which is of type "Agent".
        // In order to fulfil `manifest.getLogo()` we should check
        // When P3 is fully supported, the following should work.
        // return this.getProvider()?.getLogo();
        if (!logo) {
            var provider = this.getProperty("provider");
            if (!provider) {
                return null;
            }
            logo = provider.logo;
        }
        if (!logo)
            return null;
        if (typeof logo === "string")
            return logo;
        if (Array.isArray(logo) && logo.length) {
            logo = logo[0];
        }
        return logo["@id"] || logo.id;
    };
    IIIFResource.prototype.getLicense = function () {
        return Utils.getLocalisedValue(this.getProperty("license"), this.options.locale);
    };
    IIIFResource.prototype.getNavDate = function () {
        return new Date(this.getProperty("navDate"));
    };
    IIIFResource.prototype.getRelated = function () {
        return this.getProperty("related");
    };
    IIIFResource.prototype.getSeeAlso = function () {
        return this.getProperty("seeAlso");
    };
    IIIFResource.prototype.getTrackingLabel = function () {
        var service = (this.getService(ServiceProfile.TRACKING_EXTENSIONS));
        if (service) {
            return service.getProperty("trackingLabel");
        }
        return "";
    };
    IIIFResource.prototype.getDefaultTree = function () {
        this.defaultTree = new TreeNode("root");
        this.defaultTree.data = this;
        return this.defaultTree;
    };
    IIIFResource.prototype.getRequiredStatement = function () {
        var requiredStatement = null;
        var _requiredStatement = this.getProperty("requiredStatement");
        if (_requiredStatement) {
            requiredStatement = new LabelValuePair(this.options.locale);
            requiredStatement.parse(_requiredStatement);
        }
        else {
            // fall back to attribution (if it exists)
            var attribution = this.getAttribution();
            if (attribution) {
                requiredStatement = new LabelValuePair(this.options.locale);
                requiredStatement.value = attribution;
            }
        }
        return requiredStatement;
    };
    IIIFResource.prototype.isCollection = function () {
        if (this.getIIIFResourceType() === IIIFResourceType.COLLECTION) {
            return true;
        }
        return false;
    };
    IIIFResource.prototype.isManifest = function () {
        if (this.getIIIFResourceType() === IIIFResourceType.MANIFEST) {
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
                    id = that.__jsonld["@id"];
                }
                Utils.loadManifest(id).then(function (data) {
                    that.parentLabel = that.getLabel().getValue(options_1.locale);
                    var parsed = Deserialiser.parse(data, options_1);
                    that = Object.assign(that, parsed);
                    //that.parentCollection = options.resource.parentCollection;
                    that.index = options_1.index;
                    resolve(that);
                });
            }
        });
    };
    return IIIFResource;
}(ManifestResource));
export { IIIFResource };
//# sourceMappingURL=IIIFResource.js.map