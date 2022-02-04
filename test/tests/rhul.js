// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;

var manifest;

describe('#loadsRHUL', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.rhul).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });
});
