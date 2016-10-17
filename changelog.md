

#v0.3.0

##Breaking Changes

- `Manifest/Collection.getTree()` renamed to `getDefaultTree()` (uses the first found `viewingHint="top"` range). This is for convenient menu generation. Otherwise use `Manifest.getTopRanges()` then `Range.getTree()`
- `Manifest.getRanges()` renamed to `Manifest.getAllRanges()`. This traverses the child ranges of every top range and returns as a single list.
- `ManifestResource.getMetadata()` now returns an array of `MetadataItem`s, with `label` and `value` properties of type `TranslationCollection`. `MetadataItem.getValue()` and `MetadataItem.getLabel()` will return the value for the current locale.