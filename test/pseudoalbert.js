var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
var shared = require('./shared');

var manifest, sequence;

shared.serve();

describe('#loads', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.pseudoalbert).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasManifestType', function() {
    it('has a manifestType property of "manuscript"', function () {
        var type = manifest.getManifestType();
        type.toString().should.equal('manuscript');
    });
});