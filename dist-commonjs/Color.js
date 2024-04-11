"use strict";
//import { colorString } from "color-string"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var colorString = require("color-string");
/**
 * class structure with red, green, blue values in 0-255 range
 * Uses the {@link  https://www.npmjs.com/package.color-string | color-string }
 * library for conversion from and to string representations of color.
**/
var Color = /** @class */ (function () {
    /**
    * @param rgbValue - Array of three 0-255 integers for r,g,b value. Ex: [255.0,0] for red
    **/
    function Color(rgbValue) {
        this.value = rgbValue;
    }
    /**
    * @param cssTerm - hex representtion of color as used in CSS. Ex "#FF0000" as red
    * @returns Color instance.
    **/
    Color.fromCSS = function (cssTerm) {
        var rv = colorString.get(cssTerm);
        if (rv.model !== 'rgb')
            throw new Error("unsupported color string: " + cssTerm);
        return new Color([rv.value[0], rv.value[1], rv.value[2]]);
    };
    Object.defineProperty(Color.prototype, "red", {
        /**
        * @return 0 to 255 value of red color component
        **/
        get: function () { return this.value[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "green", {
        /**
        * @return 0 to 255 value of green color component
        **/
        get: function () { return this.value[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "blue", {
        /**
        * @return 0 to 255 value of blue color component
        **/
        get: function () { return this.value[2]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "CSS", {
        /**
        * @returns  hex string (as for CSS ) representation of r,g,b components
        **/
        get: function () { return colorString.to.hex(this.value); },
        enumerable: false,
        configurable: true
    });
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=Color.js.map