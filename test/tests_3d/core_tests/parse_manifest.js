var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');


var manifest_text='{ "@context": "http://iiif.io/api/presentation/4/context.json", "id": "https://example.org/iiif/3d/model_origin.json", "type": "Manifest", "label": { "en": [ "Astronaut" ], "ru": [ "космонавт" ], "zh-CN": [ "宇航员" ] }, "summary": { "en": ["Viewer should render the model at the scene origin, and then viewer should add default lighting and camera"] }, "items": [ { "id": "https://example.org/iiif/scene1/page/p1/1", "type": "Scene", "label": { "en": ["A Scene"] }, "items": [ { "id": "https://example.org/iiif/scene1/page/p1/1", "type": "AnnotationPage", "items": [ { "id": "https://example.org/iiif/3d/anno1", "type": "Annotation", "motivation": ["painting"], "body": { "id": "https://raw.githubusercontent.com/IIIF/3d/main/assets/astronaut/astronaut.glb", "type": "Model" }, "target": "https://example.org/iiif/scene1/page/p1/1" } ] } ] } ] }'

describe('parse-manifest', function() {

    it('parse text', function(done) {
         
            manifest = manifesto.parseManifest(manifest_text);
            expect(manifest.getIIIFResourceType()).to.equal('manifest');
            done();
        });
    
    
    it('parse obj', function(done) {
         
            var manifest_obj = JSON.parse(manifest_text);
            
            var manifest=manifesto.parseManifest(manifest_obj);
            expect(manifest.getIIIFResourceType()).to.equal('manifest');
            done();
        });
        
    it('invalid json text', function(done) {
         
            var invalid_text = "[not valid json"
            var badCall = function(){manifesto.parseManifest(invalid_text);};
            expect(badCall).to.throw(SyntaxError);
            done();
        });
});

