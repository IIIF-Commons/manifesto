// @todo Error: Cannot find module 'manifesto.js'
const Manifesto = require('manifesto.js');

(async () => {
  console.log(Manifesto);
})().catch((e) => {
  throw e;
});
