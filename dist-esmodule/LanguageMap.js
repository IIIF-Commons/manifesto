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
/** @deprecated Use PropertyValue instead */
var LanguageMap = /** @class */ (function (_super) {
    __extends(LanguageMap, _super);
    function LanguageMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @deprecated Use the `PropertyValue#getValue` instance method instead */
    LanguageMap.getValue = function (languageCollection, locale) {
        return languageCollection.getValue(locale, "<br/>");
    };
    /** @deprecated Use the `PropertyValue#getValues` instance method instead */
    LanguageMap.getValues = function (languageCollection, locale) {
        return languageCollection.getValues(locale);
    };
    return LanguageMap;
}(Array));
export { LanguageMap };
//# sourceMappingURL=LanguageMap.js.map