"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONLDResource = /** @class */ (function () {
    function JSONLDResource(jsonld) {
        this.__jsonld = jsonld;
        this.context = this.getProperty('context');
        this.id = this.getProperty('id');
    }
    JSONLDResource.prototype.getProperty = function (name) {
        var prop = null;
        if (this.__jsonld) {
            prop = this.__jsonld[name];
            if (!prop) {
                // property may have a prepended '@'
                prop = this.__jsonld['@' + name];
            }
        }
        return prop;
    };
    return JSONLDResource;
}());
exports.JSONLDResource = JSONLDResource;
//# sourceMappingURL=JSONLDResource.js.map