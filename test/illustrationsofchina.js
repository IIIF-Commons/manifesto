// multi-sequence

var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsIllustrationsOfChina', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.illustrationsofchina).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});