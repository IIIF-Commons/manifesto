var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsPres3Collection', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});