var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsCanvasMetadata', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.canvasMetadata).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata).to.exist;
    });
});