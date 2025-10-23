var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var manifest, canvas, annotationPages, annotations, annotation, body

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
    annotations = annotationPages[0].getAnnotations();
    expect(annotations).to.be.an('array');
    expect(annotations).to.have.lengthOf(1);
  });

  it('annotation has commenting motivation', function () {
    annotations = annotationPages[0].getAnnotations();
    annotation = annotations[0];
    expect(annotation.getMotivation()).to.equal('commenting');
  });

  it('annotation body has value', function () {
    body = annotation.getBody()[0];
    expect(body.getValue()).to.equal('Göttinger Marktplatz mit Gänseliesel Brunnen');
  });

  it('annotation body has language', function () {
    expect(body.getLanguage()).to.equal('de');
  });
});