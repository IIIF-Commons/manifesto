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
var Language_1 = require("./Language");
var Utils_1 = require("./Utils");
var LanguageMap = /** @class */ (function (_super) {
    __extends(LanguageMap, _super);
    function LanguageMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageMap.parse = function (language, defaultLocale) {
        var tc = [];
        var t;
        if (!language) {
            return tc;
        }
        else if (Array.isArray(language)) {
            for (var i = 0; i < language.length; i++) {
                var value = language[i];
                if (typeof (value) === 'string') {
                    t = new Language_1.Language(value, defaultLocale);
                }
                else {
                    t = new Language_1.Language(value['@value'], value['@language'] || defaultLocale);
                }
                tc.push(t);
            }
        }
        else if (typeof (language) === 'string') {
            // if it's just a single string value, create one language in the configured locale
            t = new Language_1.Language(language, defaultLocale);
            tc.push(t);
            return tc;
        }
        else {
            // it's an object
            if (language['@value']) {
                // presentation 2
                t = new Language_1.Language(language['@value'], language['@language'] || defaultLocale);
                tc.push(t);
            }
            else {
                // presentation 3
                Object.keys(language).forEach(function (key) {
                    // todo: support multiple values in array
                    if (language[key].length) {
                        t = new Language_1.Language(language[key], key);
                        tc.push(t);
                    }
                    else {
                        throw new Error('language must have a value');
                    }
                });
            }
        }
        return tc;
    };
    LanguageMap.getValue = function (languageCollection, locale) {
        if (languageCollection.length) {
            if (locale) {
                var language = languageCollection.filter(function (t) { return t.locale === locale || Utils_1.Utils.getInexactLocale(t.locale) === Utils_1.Utils.getInexactLocale(locale); })[0];
                if (language) {
                    return language.value;
                }
            }
            // return the first value
            return languageCollection[0].value;
        }
        return null;
    };
    return LanguageMap;
}(Array));
exports.LanguageMap = LanguageMap;
//# sourceMappingURL=LanguageMap.js.map