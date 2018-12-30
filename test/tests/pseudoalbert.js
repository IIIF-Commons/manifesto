// foliated

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsPseudoalbert', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.pseudoalbert).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a manifestType property of "manuscript"', function () {
        var type = manifest.getManifestType();
        type.toString().should.equal('manuscript');
    });
});