// url contains querystring
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsGams', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests['query-gams']).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

//describe('#loadsBodleian', function() {
//    it('loads successfully', function (done) {
//        manifesto.loadManifest(manifests['query-bodleian']).then(function(data) {
//            manifest = manifesto.create(data);
//            done();
//        });
//    });
//});

