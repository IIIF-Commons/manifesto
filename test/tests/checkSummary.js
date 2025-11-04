// check summary

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
        console.log(summary);
        expect(summary).to.exist;
    });
});