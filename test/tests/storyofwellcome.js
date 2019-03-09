// ixif
var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('../../node_modules/@iiif/vocabulary/dist-commonjs/index.js').ServiceProfile;

var manifest, sequence, element;

describe('#loadsStoryOfWellcome', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.storyofwellcome).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('sequence has no viewingHint', function () {
        var viewingHint = sequence.getViewingHint();
        expect(viewingHint).to.not.exist;
    });

    it('element has a thumbnail', function () {
        element = sequence.getCanvasByIndex(0);
        var thumbnail = element.getProperty('thumbnail');
        expect(thumbnail).to.exist;
    });

    it('element has an IxIF service (used for auth)', function () {
        var profile = ServiceProfile.IXIF;
        var service = element.getService(profile);
        expect(service).to.exist;
    });
});