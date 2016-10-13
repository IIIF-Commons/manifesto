module Manifesto {
    export class TranslationCollection extends Array<Translation> {
        static parse(translation: any, options: IManifestoOptions): TranslationCollection {
            var tc: TranslationCollection = [];
            
            if (!_isArray(translation)){
                // if it's just a single string value, create one translation in the configured locale
                var t: Translation = new Translation(translation, options.locale);
                tc.push(t);
                return tc;
            } else {
                for (var i = 0; i < translation.length; i++){
                    var value: string = translation[i];
                    var t: Translation = new Translation(value['@value'], value['@language']);
                    tc.push(t);
                }
            }

            return tc;
        }
    }
}