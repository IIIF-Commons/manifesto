var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('rijksmuseum-image-api-v3-thumbnails', function () {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.riksmuseumimageapiv3thumbnails).then(function (data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has correct thumbnail uri', function () {
        thumbnails = sequence.getThumbs(90);
        var thumbnail = thumbnails[0];
        expect(thumbnail.uri).to.equal('https://lbiiif.riksarkivet.se/v3/arkis!00147269_00001/full/90,/0/default.jpg');
    });

});