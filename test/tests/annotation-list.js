var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var AnnotationMotivation = require('../../node_modules/@iiif/vocabulary/dist-commonjs/index.js').AnnotationMotivation;
var ExternalResourceType = require('../../node_modules/@iiif/vocabulary/dist-commonjs/index.js').ExternalResourceType;

describe('#loadsAnnotationList', function() {
  var manifest, canvas, annotationList;
  it('loads successfully and maps objects', function (done) {
    manifesto.loadManifest(manifests.wunder).then(function(data) {
      manifest = manifesto.parseManifest(data);
      canvas = manifest.getSequenceByIndex(0).getCanvasById('http://wellcomelibrary.org/iiif/b18035723/canvas/c2');
      annotationList = canvas.getOtherContent();
      annotationList.then(function(annotationList) {
        should.equal(annotationList.length, 1);
        should.equal(annotationList[0].getLabel(), 'Text of this page');
        should.equal(annotationList[0].id, 'https://wellcomelibrary.org/iiif/b18035723/contentAsText/2');
        annotationList[0].getResources();

        var arrayOfList = Array.prototype.slice.call(annotationList[0].getResources());
        should.equal(arrayOfList.length, 35);

        var annotation = arrayOfList[0];
        should.equal(annotation.getBody().length, 0);
        should.equal(annotation.getMotivation(), AnnotationMotivation.PAINTING);
        should.equal(annotation.getOn(), 'https://wellcomelibrary.org/iiif/b18035723/canvas/c2#xywh=928,317,609,56');
        should.equal(annotation.getResource().getType(), ExternalResourceType.CONTENT_AS_TEXT);
        done();
      });
    });
  });

});
