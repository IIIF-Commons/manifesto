var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;

var manifest;

describe('Utils', function() {
    beforeEach(function(done) {
        manifesto.loadManifest(manifests['auth-clinical']).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    })
    describe('#getService', function() {
        it('has an available auth service', function() {
            var service = manifest.getService(ServiceProfile.AUTH_0_LOGIN);
            expect(service).to.exist;
            expect(service.getProfile()).to.equal(ServiceProfile.AUTH_0_LOGIN);
        });
    });
    describe('#getServices', function() {
        it('returns all available services', function() {
            expect(manifest.getServices().length).to.equal(1);
        });
    });
});

    
