var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, topRange;

describe('#loadsMembersRanges', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.membersranges).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasMembersCount', function() {
    it('has a members count of 1', function () {
        topRange = manifest.getTopRanges()[0]; // canvases are not currently parsed
        topRange.items.length.should.equal(1);
    });
});