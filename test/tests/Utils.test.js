var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;
var { Utils } = require('../../dist-commonjs/Utils.js');

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
    describe('#normalisedUrlsMatch', function() {
        it('does not match nonmatching URLs', function() {
            expect(Utils.normalisedUrlsMatch('placeholder10', 'placeholder20')).to.equal(false);
        });
        it('matches matching URLs', function() {
            expect(Utils.normalisedUrlsMatch('placeholder20#hash', 'placeholder20')).to.equal(true);
            expect(Utils.normalisedUrlsMatch('https://example.test#hash', 'http://example.test')).to.equal(true);
        })
    });
});

    
