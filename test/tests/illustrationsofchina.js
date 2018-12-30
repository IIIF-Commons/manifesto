// multi-sequence

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

describe('#loadsIllustrationsOfChina', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.illustrationsofchina).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});