var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsCanvasMetadata', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.canvasMetadata).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasMetadata', function() {
    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata).to.exist;
    });
});