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
var IIIFResource_1 = require("./IIIFResource");
var Utils_1 = require("./Utils");
var TreeNodeType_1 = require("./TreeNodeType");
var LanguageMap_1 = require("./LanguageMap");
var ViewingDirectionEnum = require('@iiif/vocabulary/dist-commonjs/').ViewingDirection;
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
        return this._collections = this.items.filter(function (m) { return m.isCollection(); });
    };
    Collection.prototype.getManifests = function () {
        if (this._manifests) {
            return this._manifests;
        }
        return this._manifests = this.items.filter(function (m) { return m.isManifest(); });
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
        if (this.getProperty('viewingDirection')) {
            return this.getProperty('viewingDirection');
        }
        return ViewingDirectionEnum.LEFT_TO_RIGHT;
    };
    /**
     * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
     */
    Collection.prototype.getDefaultTree = function () {
        _super.prototype.getDefaultTree.call(this);
        //console.log("get default tree for ", this.id);
        this.defaultTree.data.type = Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.COLLECTION);
        this._parseManifests(this);
        this._parseCollections(this);
        Utils_1.Utils.generateTreeNodeIds(this.defaultTree);
        return this.defaultTree;
    };
    Collection.prototype._parseManifests = function (parentCollection) {
        if (parentCollection.getManifests() && parentCollection.getManifests().length) {
            for (var i = 0; i < parentCollection.getManifests().length; i++) {
                var manifest = parentCollection.getManifests()[i];
                var tree = manifest.getDefaultTree();
                tree.label = manifest.parentLabel || LanguageMap_1.LanguageMap.getValue(manifest.getLabel(), this.options.locale) || 'manifest ' + (i + 1);
                tree.navDate = manifest.getNavDate();
                tree.data.id = manifest.id;
                tree.data.type = Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.MANIFEST);
                parentCollection.defaultTree.addNode(tree);
            }
        }
    };
    Collection.prototype._parseCollections = function (parentCollection) {
        //console.log("parse collections for ", parentCollection.id);
        if (parentCollection.getCollections() && parentCollection.getCollections().length) {
            for (var i = 0; i < parentCollection.getCollections().length; i++) {
                var collection = parentCollection.getCollections()[i];
                var tree = collection.getDefaultTree();
                tree.label = collection.parentLabel || LanguageMap_1.LanguageMap.getValue(collection.getLabel(), this.options.locale) || 'collection ' + (i + 1);
                tree.navDate = collection.getNavDate();
                tree.data.id = collection.id;
                tree.data.type = Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.COLLECTION);
                parentCollection.defaultTree.addNode(tree);
            }
        }
    };
    return Collection;
}(IIIFResource_1.IIIFResource));
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map