var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, topRange;

describe('#loadsMembersRanges', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.lunchroommanners).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasRanges', function() {
    it('has ranges', function () {
        topRange = manifest.getTopRanges()[0];
        topRange.members.length.should.equal(3);
    });
});