var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('#loadsPlato', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.plato).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a label', function () {
        var label = manifest.getLabel().getValue();
        label.should.be.a('string');
        label.should.equal('Plato, with an English translation');
    });
});