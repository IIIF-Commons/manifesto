"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseManifest = exports.loadManifest = void 0;
__exportStar(require("./internal"), exports);
var Utils_1 = require("./Utils");
/**
Initiates downloading an IIIF manifest json file from URL. Returns a Promise<any>
to allow subsequent processing on a successful fetch.

@param url  string containing the URL to Fetch
@returns Promise<any> The object returned through the Promise is the javascript object obtained by deserializing the json text.
**/
var loadManifest = function (url) {
    return Utils_1.Utils.loadManifest(url);
};
exports.loadManifest = loadManifest;
/**
Parses  IIIF manifest file to return a manifesto Manifest instance

@param manifest Either a string containing text of a manifest file or an javascript object obtained by deserializing by the JSON.parse function a manifest file.
@param options? TODO Not yet documented
@returns  instance of Manifest class.
**/
var parseManifest = function (manifest, options) {
    return Utils_1.Utils.parseManifest(manifest, options);
};
exports.parseManifest = parseManifest;
//# sourceMappingURL=index.js.map