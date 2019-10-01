"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageMap_1 = require("./LanguageMap");
var Utils_1 = require("./Utils");
var LabelValuePair = /** @class */ (function () {
    function LabelValuePair(defaultLocale) {
        this.defaultLocale = defaultLocale;
    }
    LabelValuePair.prototype.parse = function (resource) {
        this.resource = resource;
        this.label = LanguageMap_1.LanguageMap.parse(this.resource.label, this.defaultLocale);
        this.value = LanguageMap_1.LanguageMap.parse(this.resource.value, this.defaultLocale);
    };
    // shortcuts to get/set values based on default locale
    LabelValuePair.prototype.getLabel = function () {
        if (this.label) {
            return LanguageMap_1.LanguageMap.getValue(this.label, this.defaultLocale);
        }
        return null;
    };
    LabelValuePair.prototype.setLabel = function (value) {
        var _this = this;
        if (this.label && this.label.length) {
            var t = this.label.filter(function (x) { return x.locale === _this.defaultLocale || x.locale === Utils_1.Utils.getInexactLocale(_this.defaultLocale); })[0];
            if (t)
                t.value = value;
        }
    };
    LabelValuePair.prototype.getValue = function () {
        if (this.value) {
            var locale = this.defaultLocale;
            // if the label has a locale, prefer that to the default locale
            if (this.label && this.label.length && this.label[0].locale) {
                locale = this.label[0].locale;
            }
            return LanguageMap_1.LanguageMap.getValue(this.value, locale);
        }
        return null;
    };
    LabelValuePair.prototype.setValue = function (value) {
        var _this = this;
        if (this.value && this.value.length) {
            var t = this.value.filter(function (x) { return x.locale === _this.defaultLocale || x.locale === Utils_1.Utils.getInexactLocale(_this.defaultLocale); })[0];
            if (t)
                t.value = value;
        }
    };
    return LabelValuePair;
}());
exports.LabelValuePair = LabelValuePair;
//# sourceMappingURL=LabelValuePair.js.map