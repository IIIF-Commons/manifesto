var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsRiksarkivetHTTPS', function() {
    this.timeout(20000);
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.https).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});