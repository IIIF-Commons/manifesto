// foliated

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

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