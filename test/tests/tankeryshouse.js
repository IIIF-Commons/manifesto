// translation

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsTankerysHouse', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.tankeryshouse).then(function(data) {
            manifest = manifesto.create(data, {locale: "cy-GB"});
            done();
        });
    });

    it('has a logo as an image service', function () {
        var logo = manifest.getLogo();
        expect(logo).to.exist;
    });
});