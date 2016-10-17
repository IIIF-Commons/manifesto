module Manifesto {
    export class TranslationCollection extends Array<Translation> {
        static parse(translation: any, defaultLocale: string): TranslationCollection {
            var tc: TranslationCollection = [];
            var t: Translation;
            
            if (_isArray(translation)) {
                for (var i = 0; i < translation.length; i++){
                    var value: string = translation[i];
                    t = new Translation(value['@value'], value['@language']);
                    tc.push(t);
                }
            } else if (_isString(translation)) {
                // if it's just a single string value, create one translation in the configured locale
                t = new Translation(translation, defaultLocale);
                tc.push(t);
                return tc;
            } else {
                // it's an object
                t = new Translation(translation['@value'], translation['@language'] || defaultLocale);
                tc.push(t);
                return tc;
            }

            return tc;
        }
    }
}