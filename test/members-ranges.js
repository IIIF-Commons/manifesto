var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, topRange;

// describe('#loadsMembersRanges', function() {
//     it('loads successfully', function (done) {
//         manifesto.loadManifest(manifests.membersranges).then(function(data) {
//             manifest = manifesto.create(data);
//             done();
//         });
//     });
// });

// describe('#hasMembersCount', function() {
//     it('has a members count of 2', function () {
//         topRange = manifest.getTopRanges()[0];
//         topRange.members.length.should.equal(2);
//     });
// });