#Breaking Changes

v0.3.0

- Manifest/Collection.getTree() renamed to getDefaultTree() (uses the first found viewingHint="top" range). This is for convenient menu generation. Otherwise use Manifest.getTopRanges() then Range.getTree()
- Manifest.getRanges() renamed to Manifesto.getAllRanges(). This traverses the child ranges of every top range and returns as a single list.