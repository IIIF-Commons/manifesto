var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsRiksarkivetLarge', function() {
    this.timeout(60000);
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.riksarkivetscblarge).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a label', function () {
        var label = manifesto.LanguageMap.getValue(manifest.getLabel());
        label.should.be.a('string');
    });

    it('loopsQuickly', function () {
        for (let imageIndex = 0; imageIndex < manifest.getSequenceByIndex(0).getTotalCanvases(); imageIndex++) {
            var canvas = manifest.getSequenceByIndex(0).getCanvasByIndex(imageIndex);
            canvas.getLabel();
        }
    });
});