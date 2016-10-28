#v2.0.1

- `MetadataItem.getValue()` now prefers the label's locale over the defaultLocale

#v2.0.0

##Breaking Changes

- Removed `Manifesto.getRenderings()`. Use `ManifestResource.getRenderings()` instead.
- Removed `Manifesto.getService()`. Use `Manifesto.Utils.getService()` instead.
- Removed `Manifesto.getTreeNode()`. Use `new Manifesto.TreeNode()` instead.
- Removed `Manifesto.isImageProfile()`. Use `Manifesto.Utils.isImageProfile()` instead.
- Removed `Manifesto.isLevel0ImageProfile()`. Use `Manifesto.Utils.isLevel0ImageProfile()` instead.
- Removed `Manifesto.isLevel1ImageProfile()`. Use `Manifesto.Utils.isLevel1ImageProfile()` instead.
- Removed `Manifesto.isLevel2ImageProfile()`. Use `Manifesto.Utils.isLevel2ImageProfile()` instead.
- Removed `Manifesto.loadExternalResources()`. Use `Manifesto.Utils.loadExternalResources()` instead.

#v1.0.0

##Breaking Changes

- `Manifest/Collection.getTree()` renamed to `getDefaultTree()` (uses the first found `viewingHint="top"` range). This is for convenient menu generation. Otherwise use `Manifest.getTopRanges()` then `Range.getTree()`
- `Manifest.getRanges()` renamed to `Manifest.getAllRanges()`. This traverses the child ranges of every top range and returns as a single list.
- `ManifestResource.getMetadata()` now returns an array of `MetadataItem`s, with `label` and `value` properties of type `TranslationCollection`. `MetadataItem.getValue()` and `MetadataItem.getLabel()` will return the value for the current locale.