var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#hasrangewithmultivalues', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.multivaluerangemetadata).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has joined range value', function () {
        var topRange = manifest.getTopRanges()[0];
        expect(topRange);
        var multivaluerange = topRange.items[0].items[0];
        expect(multivaluerange);
        var metadata = multivaluerange.getMetadata();
        expect(metadata[5].value[0].value.length === 16662);
    });

});