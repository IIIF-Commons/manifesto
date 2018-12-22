namespace Manifesto {
    export class LabelValuePair {
        public label: LanguageMap;
        public value: LanguageMap;
        public defaultLocale: string;
        public resource: any;

        constructor(defaultLocale: string) {
            this.defaultLocale = defaultLocale;
        }

        public parse(resource: any): void {
            this.resource = resource;
            this.label = LanguageMap.parse(this.resource.label, this.defaultLocale);
            this.value = LanguageMap.parse(this.resource.value, this.defaultLocale);
        }

        // shortcuts to get/set values based on default locale
        
        public getLabel(): string | null {
            if (this.label) {
                return LanguageMap.getValue(this.label, this.defaultLocale);
            }
            
            return null;
        }

        public setLabel(value: string): void {
            if (this.label && this.label.length) {
                console.log(this.label);
                var t: Manifesto.Language = this.label.filter(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale))[0];
                if (t) t.value = value;
            }
        }

        public getValue(): string | null {
            if (this.value) {

                var locale: string = this.defaultLocale;

                // if the label has a locale, prefer that to the default locale
                if (this.label && this.label.length && this.label[0].locale) {
                    locale = this.label[0].locale;
                }

                return LanguageMap.getValue(this.value, locale);
            }
            
            return null;
        }

        public setValue(value: string): void {
            if (this.value && this.value.length) {
                console.log(this.value)
                var t: Manifesto.Language = this.value.filter(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale))[0];
                if (t) t.value = value;
            }
        }
    }
}
