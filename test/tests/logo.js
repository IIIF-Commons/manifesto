var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, logo;

describe('#logo', function() {

    it('manifest loads successfully', function (done) {
        manifesto.loadManifest(manifests.logo).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a logo', function () {
        logo = manifest.getLogo();
        expect(logo).to.equal('https://www.bl.uk/images/bl_logo_100.gif');
    });

});