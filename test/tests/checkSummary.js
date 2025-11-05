// check getSummary function

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadspres3', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.pres3).then(function(data) {
            manifest = manifesto.parseManifest(data);
            
            done();
        });
    });

    it('has summary', function () {
        var summary = manifest.getSummary()[0];
        expect(summary.value).to.equal("Book 1, written be Anne Author, published in Paris around 1400.");
        var description = manifest.getDescription()[0];
        expect(description).to.equal(undefined);
    });
});

describe('#loadsanzacbulletin', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.anzacbulletin).then(function(data) {
            manifest = manifesto.parseManifest(data);
            
            done();
        });
    });

    it('has summary', function () {
        //check fallback to description if summary not present
        var summary = manifest.getSummary()[0];
        expect(summary.value).to.equal("By authority of the High Commissioner for Australia, London, 1917-1919., ark:/81055/vdc_100022545677.0x000001");
    });
});