var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas, image;

describe('#loadsAnzacBulletin', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.anzacbulletin).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });
});

describe('#hasThumbs', function() {
    it('sequence has thumbs', function () {
        var thumbs = sequence.getThumbs();
        expect(thumbs).to.exist;
    });
});
