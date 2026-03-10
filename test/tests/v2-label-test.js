var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var manifest;

describe('v2-label-test', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests['v2-label-test']).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });
});