var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('static thumbs', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.cats).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has thumbnails', function() {
        thumbnails = sequence.getThumbs();
        var thumbnail = thumbnails[0];
        expect(thumbnail.uri).to.equal('https://edsilv.github.io/biiif-workshop/collection/_abyssinian/thumb.jpeg');
    });

});