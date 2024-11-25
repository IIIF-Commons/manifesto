var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, logo;

describe('#logo', function() {

    it('manifest loads successfully', function (done) {
        manifesto.loadManifest(manifests.v3ProviderNoLogo).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has no logo', function () {
        logo = manifest.getLogo();
        expect(logo).to.equal(null);
    });

});