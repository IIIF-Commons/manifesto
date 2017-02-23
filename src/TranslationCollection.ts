namespace Manifesto {
    export class TranslationCollection extends Array<Translation> {

        static parse(translation: any, defaultLocale: string): TranslationCollection {
            const tc: TranslationCollection = <TranslationCollection>[];
            let t: Translation;
            
            if (!translation) {
                return tc;
            } else if (Array.isArray(translation)) {
                for (let i = 0; i < translation.length; i++){
                    var value: any = translation[i];

                    if (typeof(value) === 'string') {
                        t = new Translation(value, defaultLocale);
                    } else {
                        t = new Translation(value['@value'], value['@language'] || defaultLocale);
                    }
                    
                    tc.push(t);
                }
            } else if (typeof(translation) === 'string') {
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

        static getValue(translationCollection: TranslationCollection, locale?: string): string | null {
            if (translationCollection.length) {

                if (locale) {
                    const translation: Translation = translationCollection.en().where(t => t.locale === locale || Utils.getInexactLocale(t.locale) === Utils.getInexactLocale(locale)).first()
                
                    if (translation) {
                        return translation.value;
                    }
                }

                // return the first value
                return translationCollection[0].value;
            }

            return null;
        }
    }
}