import { PropertyValue } from "./internal";
var LabelValuePair = /** @class */ (function () {
    function LabelValuePair(defaultLocale) {
        this.defaultLocale = defaultLocale;
    }
    LabelValuePair.prototype.parse = function (resource) {
        this.resource = resource;
        this.label = PropertyValue.parse(this.resource.label, this.defaultLocale);
        this.value = PropertyValue.parse(this.resource.value, this.defaultLocale);
    };
    // shortcuts to get/set values based on user or default locale
    LabelValuePair.prototype.getLabel = function (locale) {
        if (this.label === null) {
            return null;
        }
        if (Array.isArray(locale) && !locale.length) {
            locale = undefined;
        }
        return this.label.getValue(locale || this.defaultLocale);
    };
    LabelValuePair.prototype.setLabel = function (value) {
        if (this.label === null) {
            this.label = new PropertyValue([]);
        }
        this.label.setValue(value, this.defaultLocale);
    };
    LabelValuePair.prototype.getValue = function (locale, joinWith) {
        if (joinWith === void 0) { joinWith = "<br/>"; }
        if (this.value === null) {
            return null;
        }
        if (Array.isArray(locale) && !locale.length) {
            locale = undefined;
        }
        return this.value.getValue(locale || this.defaultLocale, joinWith);
    };
    LabelValuePair.prototype.getValues = function (locale) {
        if (this.value === null) {
            return [];
        }
        if (Array.isArray(locale) && !locale.length) {
            locale = undefined;
        }
        return this.value.getValues(locale || this.defaultLocale);
    };
    LabelValuePair.prototype.setValue = function (value) {
        if (this.value === null) {
            this.value = new PropertyValue([]);
        }
        this.value.setValue(value, this.defaultLocale);
    };
    return LabelValuePair;
}());
export { LabelValuePair };
//# sourceMappingURL=LabelValuePair.js.map