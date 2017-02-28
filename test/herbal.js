var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsHerbal', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.herbal).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasTree', function() {
    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });
});

// describe('#rangeHasCanvas', function() {
//     it('range has a canvas', function() {
//         var range = manifest.getRanges()[0];
//         range.id.should.equal("http://wellcomelibrary.org/iiif/b18035978/range/r-0");
//         var canvasId = range.getCanvasIds()[0];
//         canvasId.should.equal("http://wellcomelibrary.org/iiif/b18035978/canvas/c0");
//     })
// });