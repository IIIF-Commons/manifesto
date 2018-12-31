var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, topRange;

describe('#loadsMembersRanges', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.membersranges).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a members count of 1', function () {
        topRange = manifest.getTopRanges()[0]; // canvases are not currently parsed
        topRange.items.length.should.equal(1);
    });
});