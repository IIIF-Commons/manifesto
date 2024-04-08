"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var dist_commonjs_1 = require("@iiif/vocabulary/dist-commonjs");
var internal_1 = require("./internal");
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.items = [];
        _this._collections = null;
        _this._manifests = null;
        jsonld.__collection = _this;
        return _this;
    }
    Collection.prototype.getCollections = function () {
        if (this._collections) {
            return this._collections;
        }
        return (this._collections = (this.items.filter(function (m) { return m.isCollection(); })));
    };
    Collection.prototype.getManifests = function () {
        if (this._manifests) {
            return this._manifests;
        }
        return (this._manifests = (this.items.filter(function (m) { return m.isManifest(); })));
    };
    Collection.prototype.getCollectionByIndex = function (collectionIndex) {
        var collections = this.getCollections();
        var collection;
        for (var i = 0; i < collections.length; i++) {
            var c = collections[i];
            if (c.index === collectionIndex) {
                collection = c;
            }
        }
        if (collection) {
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return collection.load();
        }
        else {
            throw new Error("Collection index not found");
        }
    };
    Collection.prototype.getManifestByIndex = function (manifestIndex) {
        var manifests = this.getManifests();
        var manifest;
        for (var i = 0; i < manifests.length; i++) {
            var m = manifests[i];
            if (m.index === manifestIndex) {
                manifest = m;
            }
        }
        if (manifest) {
            manifest.options.index = manifestIndex;
            return manifest.load();
        }
        else {
            throw new Error("Manifest index not found");
        }
    };
    Collection.prototype.getTotalCollections = function () {
        return this.getCollections().length;
    };
    Collection.prototype.getTotalManifests = function () {
        return this.getManifests().length;
    };
    Collection.prototype.getTotalItems = function () {
        return this.items.length;
    };
    Collection.prototype.getViewingDirection = function () {
        if (this.getProperty("viewingDirection")) {
            return this.getProperty("viewingDirection");
        }
        return dist_commonjs_1.ViewingDirection.LEFT_TO_RIGHT;
    };
    /**
     * Note: this only will return the first behavior as per the manifesto convention
     * IIIF v3 supports multiple behaviors
     */
    Collection.prototype.getBehavior = function () {
        var behavior = this.getProperty("behavior");
        if (Array.isArray(behavior)) {
            behavior = behavior[0];
        }
        if (behavior) {
            return behavior;
        }
        return null;
    };
    Collection.prototype.getViewingHint = function () {
        return this.getProperty("viewingHint");
    };
    /**
     * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
     */
    Collection.prototype.getDefaultTree = function () {
        _super.prototype.getDefaultTree.call(this);
        //console.log("get default tree for ", this.id);
        this.defaultTree.data.type = internal_1.Utils.normaliseType(internal_1.TreeNodeType.COLLECTION);
        this._parseManifests(this);
        this._parseCollections(this);
        internal_1.Utils.generateTreeNodeIds(this.defaultTree);
        return this.defaultTree;
    };
    Collection.prototype._parseManifests = function (parentCollection) {
        if (parentCollection.getManifests() &&
            parentCollection.getManifests().length) {
            for (var i = 0; i < parentCollection.getManifests().length; i++) {
                var manifest = parentCollection.getManifests()[i];
                var tree = manifest.getDefaultTree();
                tree.label =
                    manifest.parentLabel ||
                        manifest.getLabel().getValue(this.options.locale) ||
                        "manifest " + (i + 1);
                tree.navDate = manifest.getNavDate();
                tree.data.id = manifest.id;
                tree.data.type = internal_1.Utils.normaliseType(internal_1.TreeNodeType.MANIFEST);
                parentCollection.defaultTree.addNode(tree);
            }
        }
    };
    Collection.prototype._parseCollections = function (parentCollection) {
        //console.log("parse collections for ", parentCollection.id);
        if (parentCollection.getCollections() &&
            parentCollection.getCollections().length) {
            for (var i = 0; i < parentCollection.getCollections().length; i++) {
                var collection = parentCollection.getCollections()[i];
                var tree = collection.getDefaultTree();
                tree.label =
                    collection.parentLabel ||
                        collection.getLabel().getValue(this.options.locale) ||
                        "collection " + (i + 1);
                tree.navDate = collection.getNavDate();
                tree.data.id = collection.id;
                tree.data.type = internal_1.Utils.normaliseType(internal_1.TreeNodeType.COLLECTION);
                parentCollection.defaultTree.addNode(tree);
            }
        }
    };
    return Collection;
}(internal_1.IIIFResource));
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map