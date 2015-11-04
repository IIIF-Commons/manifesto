var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsPlato', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.plato).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasLabel', function() {
    it('has a label', function () {
        var label = manifest.getLabel();
        label.should.be.a('string');
        label.should.equal('Plato, with an English translation');
    });
});