var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas, content, annotation, body;

describe('static thumbs', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.presentation3withoutthumbs).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvasByIndex(0);
        expect(canvas).to.exist;
    });

    it('has thumbnails', function() {
        thumbnails = sequence.getThumbs();
        var thumbnail = thumbnails[0];
        expect(thumbnail).to.exist;
    });

});