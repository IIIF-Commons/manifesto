var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsBiocrats', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.biocrats).then(function(data) {
            manifest = manifesto.create(data);
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

describe('#hasManifestType', function() {
    it('has a manifestType property of ""', function () {
        var type = manifest.getManifestType();
        type.toString().should.equal('');
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
        var service = manifest.getService(manifesto.ServiceProfile.searchWithin());
        expect(service).to.exist;
    });
});

describe('#hasSequence', function() {
    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });
});

describe('#hasViewingHint', function() {
    it('sequence has a viewingHint', function () {
        var viewingHint = sequence.getViewingHint();
        viewingHint.toString().should.equal('paged');
    });
});

describe('#hasRendering', function() {
    it('sequence has a rendering', function () {
        var rendering = sequence.getRendering(manifesto.RenderingFormat.pdf());
        rendering.getFormat().toString().should.equal('application/pdf');
    });
});

describe('#doesNotHaveNavDate', function() {
    it('does not have a navDate', function() {
        var navDate = manifest.getNavDate();
        var isInvalid = isNaN(navDate.getTime());
        isInvalid.should.equal(true);
    })
});
