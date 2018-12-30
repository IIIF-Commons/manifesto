var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, tree;

describe('ranges with no-nav are not included in tree', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a tree', function () {
        tree = manifest.getDefaultTree();
        expect(tree).to.exist;
        expect(tree.nodes[0].nodes[0].nodes.length === 2);
    });
});