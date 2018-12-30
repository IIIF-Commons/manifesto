var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsMembersCollection', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.memberscollection).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a members count of 2', function () {
        manifest.getTotalItems().should.equal(2);
    });

    it('has a collections count of 1', function () {
        manifest.getTotalCollections().should.equal(1);
    });

    it('has a manifests count of 1', function () {
        manifest.getTotalManifests().should.equal(1);
    });

    it('loads empty collection successfully', function (done) {
        manifesto.loadManifest(manifests.emptymemberscollection).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});
