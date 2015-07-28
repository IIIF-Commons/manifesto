var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./data/manifests');

var manifest, sequence;

describe('#loadsStoryOfWellcome', function() {
    it('loads successfully', function (done) {
        manifesto.load(manifests.storyofwellcome, function(data) {
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

describe('#hasViewingHint', function() {
    it('sequence has no viewingHint', function () {
        var viewingHint = sequence.getViewingHint();
        viewingHint.toString().should.equal('');
    });
});

describe('#hasThumbnail', function() {
    it('canvas has a thumbnail', function () {
        var canvas = sequence.getCanvasByIndex(0);
        var thumbnail = canvas.getProperty('thumbnail');
        expect(thumbnail).to.exist;
    });
});