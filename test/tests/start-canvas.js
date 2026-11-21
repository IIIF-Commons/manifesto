var expect = require('chai').expect;
var manifesto = require('../../dist-commonjs/');

function presentation3Manifest(start) {
    return {
        '@context': 'http://iiif.io/api/presentation/3/context.json',
        id: 'https://example.org/manifest',
        type: 'Manifest',
        label: { en: ['Book'] },
        start: start,
        items: [1, 2, 3].map(function(i) {
            return {
                id: 'https://example.org/c' + i,
                type: 'Canvas',
                width: 100,
                height: 100,
                items: []
            };
        })
    };
}

describe('start canvas', function() {

    it('defaults to the first canvas without start', function() {
        var sequence = manifesto.parseManifest(presentation3Manifest(undefined)).getSequenceByIndex(0);
        expect(sequence.getStartCanvas()).to.not.exist;
        expect(sequence.getStartCanvasIndex()).to.equal(0);
    });

    it('uses a presentation 3 start canvas', function() {
        var sequence = manifesto.parseManifest(presentation3Manifest({
            id: 'https://example.org/c2',
            type: 'Canvas'
        })).getSequenceByIndex(0);
        expect(sequence.getStartCanvas()).to.equal('https://example.org/c2');
        expect(sequence.getStartCanvasIndex()).to.equal(1);
    });

    it('uses the source of a presentation 3 start SpecificResource', function() {
        var sequence = manifesto.parseManifest(presentation3Manifest({
            id: 'https://example.org/start',
            type: 'SpecificResource',
            source: 'https://example.org/c3',
            selector: { type: 'PointSelector', t: 120.5 }
        })).getSequenceByIndex(0);
        expect(sequence.getStartCanvas()).to.equal('https://example.org/c3');
        expect(sequence.getStartCanvasIndex()).to.equal(2);
    });

    it('uses a SpecificResource source given as an object', function() {
        var sequence = manifesto.parseManifest(presentation3Manifest({
            type: 'SpecificResource',
            source: { id: 'https://example.org/c2', type: 'Canvas' }
        })).getSequenceByIndex(0);
        expect(sequence.getStartCanvasIndex()).to.equal(1);
    });

    it('still uses a presentation 2 startCanvas', function() {
        var sequence = manifesto.parseManifest({
            '@context': 'http://iiif.io/api/presentation/2/context.json',
            '@id': 'https://example.org/manifest',
            '@type': 'sc:Manifest',
            label: 'Book',
            sequences: [{
                '@type': 'sc:Sequence',
                startCanvas: 'https://example.org/c2',
                canvases: [1, 2, 3].map(function(i) {
                    return { '@id': 'https://example.org/c' + i, '@type': 'sc:Canvas', width: 100, height: 100 };
                })
            }]
        }).getSequenceByIndex(0);
        expect(sequence.getStartCanvas()).to.equal('https://example.org/c2');
        expect(sequence.getStartCanvasIndex()).to.equal(1);
    });
});
