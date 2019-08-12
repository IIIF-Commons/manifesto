// root service is string (only references to root services may be strings)
var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ViewingDirection = require('@iiif/vocabulary/dist-commonjs/').ViewingDirection;

var manifest, sequence;

describe('#loadsQatarRightToLeft', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.qatarRightToLeft).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a viewingdirection of right-to-left', function () {
        var viewingDirection = sequence.getViewingDirection();
        expect(viewingDirection).to.equal(ViewingDirection.RIGHT_TO_LEFT);
    });
});