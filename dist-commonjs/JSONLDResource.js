"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONLDResource = void 0;
var JSONLDResource = /** @class */ (function () {
    function JSONLDResource(jsonld) {
        this.__jsonld = jsonld;
        this.context = this.getProperty("context");
        this.id = this.getProperty("id");
    }
    JSONLDResource.prototype.getProperty = function (name) {
        var prop = null;
        if (this.__jsonld) {
            prop = this.__jsonld[name];
            if (!prop) {
                // property may have a prepended '@'
                prop = this.__jsonld["@" + name];
            }
        }
        return prop;
    };
    /**
    A function that wraps the getProperty function, which client
    code can use if it is needed to identify when the json value of
    a property is an IRI -- Internationalized Resource Identifier
    
    If the value of the json value is a bare string, then it will be
    wrapped in a json object with the string in the property 'id',
    additionally that property will have a property 'isIRI' which will
    be true for the literal string case, otherwise false meaning the
    returned getProperty should be parsed as before.
    
    **/
    JSONLDResource.prototype.getPropertyAsObject = function (name) {
        var prop = this.getProperty(name);
        if (prop === null)
            return prop;
        else if (typeof (prop) === 'string')
            return { "id": prop,
                "isIRI": true
            };
        else if (prop === Object(prop))
            return prop;
        else {
            throw new Error("cannot resolve prop as object: " + prop);
        }
    };
    return JSONLDResource;
}());
exports.JSONLDResource = JSONLDResource;
//# sourceMappingURL=JSONLDResource.js.map