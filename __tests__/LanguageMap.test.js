import fixture from '../test/fixtures/4.json';
import { LanguageMap, Manifest } from '../src';

describe('LanguageMap', function() {
    const manifest = new Manifest(fixture);

    it('behaves like an array of Language instances', async function() {
        var metadatum = manifest.getMetadata()[0];
        expect(metadatum.label).to.have.length(1);
        expect(metadatum.value).to.have.length(1);
        expect(metadatum.label[0].value).to.eql('date')
        expect(metadatum.value[0].value).to.eql('some date<br/>some other date');

    });
    describe('#getValues', async function() {
        it('returns an array of values', function() {
            var metadata = LanguageMap.getValues(manifest.getMetadata()[0].value);
            expect(metadata).to.eql(['some date', 'some other date']);
        });
    });
});
