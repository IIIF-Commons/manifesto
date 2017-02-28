// root service is string (only references to root services may be strings)
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsQatarRightToLeft', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.qatarRightToLeft).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasSequence', function() {
    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });
});

describe('#hasViewingDirection', function() {
    it('has a viewingdirection of right-to-left', function () {
        var viewingDirection = sequence.getViewingDirection();
        expect(viewingDirection.toString()).to.equal("right-to-left");
    });
});