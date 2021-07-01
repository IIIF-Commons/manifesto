var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('audio manifest', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('can find range by id', function () {
        var range = manifest.getRangeById('https://api.bl.uk/metadata/iiif/ark:/81055/vdc_100052359795.0x000007');
        expect(range).to.exist;
        expect(range.id).to.equal('https://api.bl.uk/metadata/iiif/ark:/81055/vdc_100052359795.0x000007');
    });
});