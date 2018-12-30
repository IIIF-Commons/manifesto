var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('audio manifest', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a behavior of auto-advance', function () {
        var behavior = manifest.getBehavior();
        expect(behavior).to.exist;
        expect(behavior === 'auto-advance');
    });
});