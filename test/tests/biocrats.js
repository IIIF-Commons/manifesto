var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var RenderingFormat = require('@iiif/vocabulary').RenderingFormat;
var ServiceProfile = require('@iiif/vocabulary').ServiceProfile;
var ViewingHint = require('@iiif/vocabulary').ViewingHint;

var manifest, sequence;

describe('#loadsBiocrats', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.biocrats).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a label', function () {
        var label = manifesto.LanguageMap.getValue(manifest.getLabel());
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
        var service = manifest.getService(ServiceProfile.SEARCH_0);
        expect(service).to.exist;
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('sequence has a viewingHint', function () {
        var viewingHint = sequence.getViewingHint();
        viewingHint.should.equal(ViewingHint.PAGED);
    });

    it('sequence has a rendering', function () {
        var rendering = sequence.getRendering(RenderingFormat.PDF);
        rendering.getFormat().should.equal('application/pdf');
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
        var ranges = manifest.getAllRanges();
        ranges.length.should.equal(4);
        var range = ranges[0];
        range.id.should.equal("http://wellcomelibrary.org/iiif/b18035978/range/r-0");
        var canvasId = range.getCanvasIds()[0];
        canvasId.should.equal("http://wellcomelibrary.org/iiif/b18035978/canvas/c0");
    });
});