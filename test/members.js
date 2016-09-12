var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsMembers', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.members).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasMembersCount', function() {
    it('has a members count of 4', function () {
        manifest.getTotalMembers().should.equal(4);
    });
});