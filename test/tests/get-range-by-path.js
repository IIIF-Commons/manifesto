var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('audio manifest', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('can find range by path', function () {
        var range = manifest.getRangeByPath('0/0/0/3');
        expect(range).to.exist;
        expect(range.id).to.equal('https://api.bl.uk/metadata/iiif/ark:/81055/vdc_100052359795.0x000008');
    });
});