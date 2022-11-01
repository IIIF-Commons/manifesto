// @todo works, but with these specific workarounds.
// globalThis.window = globalThis.window || {};
const nodeFetch = require('node-fetch');

globalThis.fetch = nodeFetch

const Manifesto = require('../dist/index.umd');

Manifesto.loadManifest('https://iiif.wellcomecollection.org/presentation/v2/b18035723').then(e => console.log(e));
Manifesto.loadManifest('https://iiif.wellcomecollection.org/presentation/v2/b18035723', nodeFetch).then(e => console.log(e));

