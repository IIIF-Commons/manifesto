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

    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });
});