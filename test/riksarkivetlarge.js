var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsRiksarkivetLarge', function() {
    this.timeout(60000);
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.riksarkivetscblarge).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasLabel', function() {
    it('has a label', function () {
        var label = Manifesto.TranslationCollection.getValue(manifest.getLabel());
        label.should.be.a('string');
    });
});

describe('#loopThroughCanvases', function() {
    it('loopsQuickly', function () {
        for (let imageIndex = 0; imageIndex < manifest.getSequenceByIndex(0).getTotalCanvases(); imageIndex++) {
            var canvas = manifest.getSequenceByIndex(0).getCanvasByIndex(imageIndex);
            canvas.getLabel();
        }
    });
});