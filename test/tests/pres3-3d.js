var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas, content, annotation, body;

describe('presentation 3 3d', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres33d).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has manifest thumbnail', function () {
        thumbnail = manifest.getThumbnail();
        expect(thumbnail).to.exist;
    });

    it('has correct manifest thumbnail id', function () {
        expect(thumbnail.id).to.equal('http://files.universalviewer.io/manifests/nelis/animal-skull/thumb.jpg');
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has thumbnails', function() {
        thumbnails = sequence.getThumbnails();
        expect(thumbnails.length).to.equal(1);
        var thumbnail = thumbnails[0];
        expect(thumbnail.id).to.equal('http://files.universalviewer.io/manifests/nelis/animal-skull/thumb2.jpg');
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvases()[0];
        canvas.id.should.equal('http://tomcrane.github.io/scratch/manifests/3/canvas/3d');
    });

    it('has canvas thumbnail', function () {
        thumbnail = canvas.getThumbnail();
        expect(thumbnail).to.exist;
    });

    it('has correct canvas thumbnail id', function () {
        expect(thumbnail.id).to.equal('http://files.universalviewer.io/manifests/nelis/animal-skull/thumb2.jpg');
    });

    it('canvas has 3d', function () {
        content = canvas.getContent();
        annotation = content[0];
        expect(annotation).to.exist;
        body = annotation.getBody()[0];
        expect(body).to.exist;
        expect(body.id).to.equal('http://files.universalviewer.io/manifests/nelis/animal-skull/animal-skull.json');
    });

    it('canvas has label', function() {
        var label = body.getLabel().getValue();
        expect(label).to.equal('Animal Skull');
    });
});