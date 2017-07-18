var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsMembersCollection', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.memberscollection).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasMembersCount', function() {
    it('has a members count of 2', function () {
        manifest.getTotalMembers().should.equal(2);
    });
});

describe('#hasCollectionsCount', function() {
    it('has a collections count of 1', function () {
        manifest.getTotalCollections().should.equal(1);
    });
});

describe('#hasManifestsCount', function() {
    it('has a manifests count of 1', function () {
        manifest.getTotalManifests().should.equal(1);
    });
});

describe('#loadsEmptyMembersCollection', function() {
    it('loads empty collection successfully', function (done) {
        manifesto.loadManifest(manifests.emptymemberscollection).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});
