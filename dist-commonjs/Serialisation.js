"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deserialiser = void 0;
var internal_1 = require("./internal");
var Deserialiser = /** @class */ (function () {
    function Deserialiser() {
    }
    Deserialiser.parse = function (manifest, options) {
        if (typeof manifest === "string") {
            manifest = JSON.parse(manifest);
        }
        return this.parseJson(manifest, options);
    };
    Deserialiser.parseJson = function (json, options) {
        var resource;
        // have options been passed for the manifest to inherit?
        if (options) {
            if (options.navDate && !isNaN(options.navDate.getTime())) {
                json.navDate = options.navDate.toString();
            }
        }
        if (json["@type"]) {
            switch (json["@type"]) {
                case "sc:Collection":
                    resource = this.parseCollection(json, options);
                    break;
                case "sc:Manifest":
                    resource = this.parseManifest(json, options);
                    break;
                default:
                    return null;
            }
        }
        else {
            // presentation 3
            switch (json["type"]) {
                case "Collection":
                    resource = this.parseCollection(json, options);
                    break;
                case "Manifest":
                    resource = this.parseManifest(json, options);
                    break;
                default:
                    return null;
            }
        }
        // Top-level resource was loaded from a URI, so flag it to prevent
        // unnecessary reload:
        resource.isLoaded = true;
        return resource;
    };
    Deserialiser.parseCollection = function (json, options) {
        var collection = new internal_1.Collection(json, options);
        if (options) {
            collection.index = options.index || 0;
            if (options.resource) {
                collection.parentCollection = options.resource.parentCollection;
            }
        }
        else {
            collection.index = 0;
        }
        this.parseCollections(collection, options);
        this.parseManifests(collection, options);
        this.parseItems(collection, options);
        return collection;
    };
    Deserialiser.parseCollections = function (collection, options) {
        var items;
        if (collection.__jsonld.collections) {
            items = collection.__jsonld.collections;
        }
        else if (collection.__jsonld.items) {
            items = collection.__jsonld.items.filter(function (m) { return m.type.toLowerCase() === "collection"; });
        }
        if (items) {
            for (var i = 0; i < items.length; i++) {
                if (options) {
                    options.index = i;
                }
                var item = this.parseCollection(items[i], options);
                item.index = i;
                item.parentCollection = collection;
                collection.items.push(item);
            }
        }
    };
    Deserialiser.parseManifest = function (json, options) {
        var manifest = new internal_1.Manifest(json, options);
        return manifest;
    };
    Deserialiser.parseManifests = function (collection, options) {
        var items;
        if (collection.__jsonld.manifests) {
            items = collection.__jsonld.manifests;
        }
        else if (collection.__jsonld.items) {
            items = collection.__jsonld.items.filter(function (m) { return m.type.toLowerCase() === "manifest"; });
        }
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var item = this.parseManifest(items[i], options);
                item.index = i;
                item.parentCollection = collection;
                collection.items.push(item);
            }
        }
    };
    Deserialiser.parseItem = function (json, options) {
        if (json["@type"]) {
            if (json["@type"].toLowerCase() === "sc:manifest") {
                return this.parseManifest(json, options);
            }
            else if (json["@type"].toLowerCase() === "sc:collection") {
                return this.parseCollection(json, options);
            }
        }
        else if (json.type) {
            if (json.type.toLowerCase() === "manifest") {
                return this.parseManifest(json, options);
            }
            else if (json.type.toLowerCase() === "collection") {
                return this.parseCollection(json, options);
            }
        }
        return null;
    };
    Deserialiser.parseItems = function (collection, options) {
        var items = collection.__jsonld.members || collection.__jsonld.items;
        if (items) {
            var _loop_1 = function (i) {
                if (options) {
                    options.index = i;
                }
                var item = this_1.parseItem(items[i], options);
                if (!item)
                    return { value: void 0 };
                // only add to items if not already parsed from backwards-compatible collections/manifests arrays
                if (collection.items.filter(function (m) { return m.id === item.id; })[0]) {
                    return "continue";
                }
                item.index = i;
                item.parentCollection = collection;
                collection.items.push(item);
            };
            var this_1 = this;
            for (var i = 0; i < items.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
    };
    return Deserialiser;
}());
exports.Deserialiser = Deserialiser;
//# sourceMappingURL=Serialisation.js.map