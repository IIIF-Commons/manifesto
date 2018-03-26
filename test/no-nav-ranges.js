var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, tree;

// describe('ranges with no-nav are not included in tree', function() {

//     it('loads successfully', function (done) {
//         manifesto.loadManifest(manifests.looseends).then(function(data) {
//             manifest = manifesto.create(data);
//             done();
//         });
//     });

//     it('has a tree', function () {
//         tree = manifest.getDefaultTree();
//         expect(tree).to.exist;
//         var nonavnode = tree.nodes[0].nodes[0].nodes[0];
//         expect(nonavnode).to.not.exist;
//     });
// });