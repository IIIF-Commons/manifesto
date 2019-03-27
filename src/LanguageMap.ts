namespace Manifesto {

    export class LanguageMap extends Array<Language> {

        static parse(language: any, defaultLocale: string): LanguageMap {
            const tc: LanguageMap = <LanguageMap>[];
            let t: Language;
            
            if (!language) {
                return tc;
            } else if (Array.isArray(language)) {
                for (let i = 0; i < language.length; i++){
                    var value: any = language[i];

                    if (typeof(value) === 'string') {
                        t = new Language(value, defaultLocale);
                    } else {
                        t = new Language(value['@value'], value['@language'] || defaultLocale);
                    }
                    
                    tc.push(t);
                }
            } else if (typeof(language) === 'string') {
                // if it's just a single string value, create one language in the configured locale
                t = new Language(language, defaultLocale);
                tc.push(t);
                return tc;
            } else {
                // it's an object
                if (language['@value']) {
                    // presentation 2
                    t = new Manifesto.Language(language['@value'], language['@language'] || defaultLocale);
                    tc.push(t);
                } else {
                    // presentation 3
                    Object.keys(language).forEach((key) => {
                        
                        // todo: support multiple values in array
                        if (language[key].length) {
                            t = new Manifesto.Language(language[key], key);
                            tc.push(t);
                        } else {
                            throw new Error('language must have a value');
                        }
                
                    });
                }
            }

            return tc;
        }

        static getValue(languageCollection: LanguageMap, locale?: string): string | null {
            if (languageCollection.length) {

                if (locale) {
                    const language: Language = languageCollection.filter(t => t.locale === locale || Utils.getInexactLocale(t.locale) === Utils.getInexactLocale(locale))[0]
                    if (language) {
                        return language.value;
                    }
                }

                // return the first valuel
                return languageCollection[0].value;
            }

            return null;
        }
    }
}
