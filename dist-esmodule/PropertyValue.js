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
import { Utils } from "./Utils";
/** Utility class to hold one or more values with their associated (optional) locale */
var LocalizedValue = /** @class */ (function () {
    function LocalizedValue(value, locale, defaultLocale) {
        if (defaultLocale === void 0) { defaultLocale = "none"; }
        if (Array.isArray(value) && value.length === 1) {
            this._value = value[0];
        }
        else {
            this._value = value;
        }
        if (locale === "none" || locale === "@none") {
            locale = undefined;
        }
        this._locale = locale;
        this._defaultLocale = defaultLocale;
    }
    /** Parse a localized value from a IIIF v2 property value
     *
     * @param {string | string[] | object | object[]} rawVal value from IIIF resource
     * @param {string | undefined} defaultLocale deprecated: defaultLocale the default locale to use for this value
     */
    LocalizedValue.parseV2Value = function (rawVal, defaultLocale) {
        if (typeof rawVal === "string") {
            return new LocalizedValue(rawVal, undefined, defaultLocale);
        }
        else if (rawVal["@value"]) {
            return new LocalizedValue(rawVal["@value"], rawVal["@language"], defaultLocale);
        }
        return null;
    };
    Object.defineProperty(LocalizedValue.prototype, "value", {
        /*** @deprecated Use PropertyValue#getValue instead */
        get: function () {
            if (Array.isArray(this._value)) {
                return this._value.join("<br/>");
            }
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalizedValue.prototype, "locale", {
        /*** @deprecated Don't use, only used for backwards compatibility reasons */
        get: function () {
            if (this._locale === undefined) {
                return this._defaultLocale;
            }
            return this._locale;
        },
        enumerable: false,
        configurable: true
    });
    LocalizedValue.prototype.addValue = function (value) {
        if (!Array.isArray(this._value)) {
            this._value = [this._value];
        }
        if (Array.isArray(value)) {
            this._value = this._value.concat(value);
        }
        else {
            this._value.push(value);
        }
    };
    return LocalizedValue;
}());
export { LocalizedValue };
/***
 * Holds a collection of values and their (optional) languages and allows
 * language-based value retrieval as per the algorithm described in
 * https://iiif.io/api/presentation/2.1/#language-of-property-values
 */
var PropertyValue = /** @class */ (function (_super) {
    __extends(PropertyValue, _super);
    function PropertyValue(values, defaultLocale) {
        if (values === void 0) { values = []; }
        var _this = _super.apply(this, values) || this;
        // Needed for ES5 compatibility, see https://stackoverflow.com/a/40967939
        _this.__proto__ = PropertyValue.prototype;
        _this._defaultLocale = defaultLocale;
        return _this;
    }
    PropertyValue.parse = function (rawVal, defaultLocale) {
        if (!rawVal) {
            return new PropertyValue([], defaultLocale);
        }
        if (Array.isArray(rawVal)) {
            // Collection of IIIF v2 property values
            var parsed = rawVal
                .map(function (v) { return LocalizedValue.parseV2Value(v, defaultLocale); })
                .filter(function (v) { return v !== null; });
            var byLocale = parsed.reduce(function (acc, lv) {
                var loc = lv._locale;
                if (!loc) {
                    // Cannot use undefined as an object key
                    loc = "none";
                }
                if (acc[loc]) {
                    acc[loc].addValue(lv._value);
                }
                else {
                    acc[loc] = lv;
                }
                return acc;
            }, {});
            return new PropertyValue(Object.values(byLocale), defaultLocale);
        }
        else if (typeof rawVal === "string") {
            return new PropertyValue([new LocalizedValue(rawVal, undefined, defaultLocale)], defaultLocale);
        }
        else if (rawVal["@language"]) {
            // Single IIIF v2 property value
            var parsed = LocalizedValue.parseV2Value(rawVal);
            return new PropertyValue(parsed !== null ? [parsed] : [], defaultLocale);
        }
        else if (rawVal["@value"]) {
            // Single IIIF v2 property value without language
            var parsed = LocalizedValue.parseV2Value(rawVal);
            return new PropertyValue(parsed !== null ? [parsed] : [], defaultLocale);
        }
        else {
            // IIIF v3 property value
            return new PropertyValue(Object.keys(rawVal).map(function (locale) {
                var val = rawVal[locale];
                if (!Array.isArray(val)) {
                    throw new Error("A IIIF v3 localized property value must have an array as the value for a given language.");
                }
                return new LocalizedValue(val, locale, defaultLocale);
            }), defaultLocale);
        }
    };
    /*** Try to find the available locale that best fit's the user's preferences. */
    PropertyValue.prototype.getSuitableLocale = function (locales) {
        // If any of the values have a language associated with them, the client
        // must display all of the values associated with the language that best
        // matches the language preference.
        if (locales.length == 0 && this._defaultLocale)
            locales.push(this._defaultLocale);
        // create an array of the language codes for all different LocalizedValue instances in this PropertyValue
        var allLocales = new Array();
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var lv = _a[_i];
            if (lv._locale != undefined)
                allLocales.push(lv._locale);
        }
        var _loop_1 = function (userLocale) {
            var matchingLocale = allLocales.find(function (l) { return l === userLocale; });
            if (matchingLocale) {
                return { value: matchingLocale };
            }
        };
        // First, look for a precise match
        for (var _b = 0, locales_1 = locales; _b < locales_1.length; _b++) {
            var userLocale = locales_1[_b];
            var state_1 = _loop_1(userLocale);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var _loop_2 = function (userLocale) {
            var matchingLocale = allLocales.find(function (l) { return Utils.getInexactLocale(l) === Utils.getInexactLocale(userLocale); });
            if (matchingLocale) {
                return { value: matchingLocale };
            }
        };
        // Look for an inexact match
        for (var _c = 0, locales_2 = locales; _c < locales_2.length; _c++) {
            var userLocale = locales_2[_c];
            var state_2 = _loop_2(userLocale);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return undefined;
    };
    /**
     * Set the value(s) for a given locale.
     *
     * If there's an existing locale that matches the given locale, it will be updated.
     *
     * @param locale Locale to set the value for
     * @param value value to set
     */
    PropertyValue.prototype.setValue = function (value, locale) {
        var existing = undefined;
        if (!locale) {
            existing = this.find(function (lv) { return lv._locale === undefined; });
        }
        else {
            var bestLocale_1 = this.getSuitableLocale([locale]);
            if (bestLocale_1) {
                existing = this.find(function (lv) { return lv._locale === bestLocale_1; });
            }
        }
        if (existing) {
            // Mutate existing localized value
            existing._value = value;
        }
        else {
            // Create a new localized value
            this.push(new LocalizedValue(value, locale, this._defaultLocale));
        }
    };
    /**
     * Get a value in the most suitable locale.
     *
     * @param {string | string[] | undefined} locales Desired locale, can be a list of
     * locales sorted by descending priority.
     * @param {string | undefined} joinWith String to join multiple available values by,
     * if undefined only the first available value will be returned
     * @returns the first value in the most suitable locale or null if none could be found
     */
    PropertyValue.prototype.getValue = function (locales, joinWith) {
        var vals = this.getValues(locales);
        if (vals.length === 0) {
            return null;
        }
        if (joinWith) {
            return vals.join(joinWith);
        }
        return vals[0];
    };
    /**
     * Get all values available in the most suitable locale.
     *
     * @param {string | string[]} userLocales Desired locale, can be a list of
     * locales sorted by descending priority.
     * @returns the values for the most suitable locale, empty if none could be found
     */
    PropertyValue.prototype.getValues = function (userLocales) {
        if (!this.length) {
            return [];
        }
        var locales;
        if (!userLocales) {
            locales = [];
        }
        else if (!Array.isArray(userLocales)) {
            locales = [userLocales];
        }
        else {
            locales = userLocales;
        }
        // If none of the values have a language associated with them, the client
        // must display all of the values.
        if (this.length === 1 && this[0]._locale === undefined) {
            var val = this[0]._value;
            return Array.isArray(val) ? val : [val];
        }
        // Try to determine the available locale that best fits the user's preferences
        var matchingLocale = this.getSuitableLocale(locales);
        if (matchingLocale) {
            var val = this.find(function (lv) { return lv._locale === matchingLocale; })._value;
            return Array.isArray(val) ? val : [val];
        }
        // If all of the values have a language associated with them, and none match
        // the language preference, the client must select a language and display
        // all of the values associated with that language.
        var allHaveLang = !this.find(function (lv) { return lv._locale === undefined; });
        if (allHaveLang) {
            var val = this[0]._value;
            return Array.isArray(val) ? val : [val];
        }
        // If some of the values have a language associated with them, but none
        // match the language preference, the client must display all of the values
        // that do not have a language associated with them.
        var lv = this.find(function (lv) { return lv._locale === undefined; });
        if (lv) {
            return Array.isArray(lv._value) ? lv._value : [lv._value];
        }
        return [];
    };
    return PropertyValue;
}(Array));
export { PropertyValue };
//# sourceMappingURL=PropertyValue.js.map