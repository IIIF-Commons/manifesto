// @todo works, but with these specific workarounds.
globalThis.window = globalThis.window || {};
globalThis.fetch = require('node-fetch');

const Manifesto = require('../dist-umd/manifesto');

Manifesto.loadManifest('https://iiif.wellcomecollection.org/presentation/v2/b18035723').then(e => console.log(e));

