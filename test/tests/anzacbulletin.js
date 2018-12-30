var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('#loadsAnzacBulletin', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.anzacbulletin).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });

    it('sequence has thumbs', function () {
        var thumbs = sequence.getThumbs();
        expect(thumbs).to.exist;
    });
});
