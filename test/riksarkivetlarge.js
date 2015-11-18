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
        var label = manifest.getLabel();
        label.should.be.a('string');
    });
});

describe('#loopThroughCanvases', function() {
    it('loopsQuickly', function () {
        var sequence = manifest.getSequenceByIndex(0);
        // var canvases = sequence.getCanvases();
        // var totalCanvases = sequence.getTotalCanvases();
        // for (var imageIndex = 0; imageIndex < totalCanvases; imageIndex++) {
        //     var canvas = canvases[imageIndex];
        //     canvas.getLabel();
        //     //this.$imageDropdown.append('<option value=' + (imageIndex) + '>' + label + '</option>')
        // }
        for (var imageIndex = 0; imageIndex < sequence.getTotalCanvases(); imageIndex++) {
            var canvas = sequence.getCanvasByIndex(imageIndex);
            canvas.getLabel();
            //this.$imageDropdown.append('<option value=' + (imageIndex) + '>' + label + '</option>')
        }

    });
});