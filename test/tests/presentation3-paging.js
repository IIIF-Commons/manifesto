var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#presentation3Paging', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.presentation3Paging).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    describe('#isPaged', function() {
        it('is paged', function () {
            var behavior = manifest.getBehavior();
            behavior.should.equal('paged');
        });
    });
    
    describe('#isPagingEnabled', function() {
        it('is paging enabled', function () {
            var enabled = manifest.isPagingEnabled();
            enabled.should.equal(true);
        });
    });
    
});