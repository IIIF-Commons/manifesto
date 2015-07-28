var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./data/manifests');

var manifest, sequence;

describe('#loads', function() {
    it('loads successfully', function (done) {
        manifesto.load(manifests.biocrats, function(data) {
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
        var rendering = manifest.getRendering(sequence, manifesto.RenderingFormat.pdf());
        rendering.getFormat().toString().should.equal('application/pdf');
    });
});
