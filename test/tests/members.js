var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var manifest;

describe('#loadsMembers', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.members).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a members count of 4', function () {
        manifest.getTotalItems().should.equal(4);
    });
});