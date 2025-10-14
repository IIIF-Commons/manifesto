var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var manifest, canvas, annotationPages;

describe('#getAnnotations', function() {
  it('manifest loads successfully', function (done) {
    manifesto.loadManifest(manifests.pres3AnnotationsEmbedded).then(function(data) {
      manifest = manifesto.parseManifest(data);
      done();
    });
  });

it('has a sequence', function() {
    sequence = manifest.getSequenceByIndex(0);
    expect(sequence).to.exist;
});

it('has a canvas', function() {
    canvas = sequence.getCanvases()[0];
    console.log(canvas)
    expect(canvas).to.exist;
});

  it('has annotation pages', function () {
    annotationPages = canvas.getAnnotations();
    expect(annotationPages).to.be.an('array');
    expect(annotationPages).to.have.lengthOf(1);
  });

  it('annotation page has correct id', function () {
    expect(annotationPages[0].id).to.equal('https://iiif.io/api/cookbook/recipe/0266-full-canvas-annotation/canvas-1/annopage-2');
  });

  it('annotation page contains annotations', function () {
    var annotations = annotationPages[0].getItems();
    expect(annotations).to.be.an('array');
    expect(annotations).to.have.lengthOf(1);
  });

  it('annotation has commenting motivation', function () {
    var annotations = annotationPages[0].getItems();
    var annotation = new manifesto.Annotation(annotations[0]);
    expect(annotation.getMotivation()).to.equal('commenting');
  });
});