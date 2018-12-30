var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

// describe('#loadsRiksarkivetHTTPS', function() {
//     this.timeout(20000);
//     it('loads successfully', function (done) {
//         manifesto.loadManifest(manifests.https).then(function(data) {
//             manifest = manifesto.create(data);
//             done();
//         });
//     });
// });