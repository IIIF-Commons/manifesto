var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsHerbal', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.herbal).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });
});