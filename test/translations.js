var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsTranslations', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.translations).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasMetadata', function() {
    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata[4].value).to.be.instanceof(Array);

        for (var i = 0; i < metadata.length; i++) {
            var label = metadata[i].getLabel();
            expect(label).to.be.a('string');
            var value = metadata[i].getValue();
            expect(value).to.be.a('string');
        }
    });
});
