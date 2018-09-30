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

    it('has a label', function () {
        var label = Manifesto.LanguageMap.getValue(manifest.getLabel());
        label.should.be.a('string');
        label.should.equal('The biocrats');
    });

    it('has a manifestType property of ""', function () {
        var type = manifest.getManifestType();
        type.toString().should.equal('');
    });

    it('is a manifest', function() {
        expect(manifest.isManifest()).to.equal(true);
        expect(manifest.isCollection()).to.equal(false); 
    });

    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata).to.exist;
    });

    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });

    it('has a search service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.search());
        expect(service).to.exist;
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('sequence has a viewingHint', function () {
        var viewingHint = sequence.getViewingHint();
        viewingHint.toString().should.equal('paged');
    });

    it('sequence has a rendering', function () {
        var rendering = sequence.getRendering(manifesto.RenderingFormat.pdf());
        rendering.getFormat().toString().should.equal('application/pdf');
    });

    it('does not have a navDate', function() {
        var navDate = manifest.getNavDate();
        var isInvalid = isNaN(navDate.getTime());
        isInvalid.should.equal(true);
    });

    it('has a canvas', function () {
        var canvas = sequence.getCanvases()[0];
        canvas.id.should.equal("http://wellcomelibrary.org/iiif/b18035978/canvas/c0");
    });

    it('range has a canvas', function() {
        var range = manifest.getAllRanges()[0];
        range.id.should.equal("http://wellcomelibrary.org/iiif/b18035978/range/r-0");
        var canvasId = range.getCanvasIds()[0];
        canvasId.should.equal("http://wellcomelibrary.org/iiif/b18035978/canvas/c0");
    });
});