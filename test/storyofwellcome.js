// ixif

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, element;

describe('#loadsStoryOfWellcome', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.storyofwellcome).then(function(data) {
            manifest = manifesto.create(data);
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
        var profile = manifesto.ServiceProfile.ixif();
        var service = element.getService(profile);
        expect(service).to.exist;
    });
});