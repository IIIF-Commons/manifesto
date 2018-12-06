var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, topRange;

describe('#loadsRemembranceRanges', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.bookofremembrance).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });

    it('has a top range', function () {
        topRanges = manifest.getTopRanges();
        topRanges.length.should.equal(1);
        //topRanges[0].members.length.should.equal(10);
    });
});