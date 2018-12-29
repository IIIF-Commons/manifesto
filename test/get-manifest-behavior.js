var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

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