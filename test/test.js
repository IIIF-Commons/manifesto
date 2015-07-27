var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var ServiceProfile = require('../dist/server/manifesto');
var should = require('chai').should();

var testManifest = "http://wellcomelibrary.org/iiif/b18035978/manifest";
var manifest;

describe('#loads', function() {
    it('loads successfully', function (done) {
        manifesto.load(testManifest, function(data) {
            manifest = manifesto.parse(data);
            done();
        });
    });
});

describe('#hasLabel', function() {
    it('has a label', function () {
        var label = manifest.getLabel();
        label.should.be.a('string');
        label.should.equal('The biocrats');
    });
});

describe('#hasTree', function() {
    it('has a tree', function () {
        var tree = manifest.getTree();
        expect(tree).to.exist;
    });
});

describe('#hasSearchWithinService', function() {
    it('has a search within service', function () {
        var service = manifest.getService(manifest, manifesto.ServiceProfile.searchWithin());
        expect(service).to.exist;
    });
});

describe('#hasSequence', function() {
    it('has a sequence', function () {
        var sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });
});
