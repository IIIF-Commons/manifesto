"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Annotation"));
__export(require("./AnnotationBody"));
__export(require("./AnnotationList"));
__export(require("./AnnotationPage"));
__export(require("./Canvas"));
__export(require("./Collection"));
__export(require("./Duration"));
__export(require("./IIIFResource"));
__export(require("./LabelValuePair"));
__export(require("./Language"));
__export(require("./LanguageMap"));
__export(require("./Manifest"));
__export(require("./ManifestResource"));
__export(require("./ManifestType"));
__export(require("./Range"));
__export(require("./Rendering"));
__export(require("./Resource"));
__export(require("./Sequence"));
__export(require("./Service"));
__export(require("./Size"));
__export(require("./StatusCode"));
__export(require("./Thumb"));
__export(require("./Thumbnail"));
__export(require("./TreeNode"));
__export(require("./TreeNodeType"));
__export(require("./Utils"));
var Utils_1 = require("./Utils");
exports.loadManifest = function (uri) {
    return Utils_1.Utils.loadManifest(uri);
};
exports.parseManifest = function (manifest, options) {
    return Utils_1.Utils.parseManifest(manifest, options);
};
//# sourceMappingURL=index.js.map