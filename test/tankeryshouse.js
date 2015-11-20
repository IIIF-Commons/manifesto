// translation

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsTankerysHouse', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.tankeryshouse).then(function(data) {
            manifest = manifesto.create(data, {locale: "cy-GB"});
            done();
        });
    });
});

describe('#hasLogoAsImageService', function() {
    it('has a logo as an image service', function () {
        var logo = manifest.getLogo();
        expect(logo).to.exist;
    });
});