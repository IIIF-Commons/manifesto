module Manifesto {
    export class MetadataItem {
        public label: TranslationCollection;
        public value: TranslationCollection;
        public defaultLocale: string;
        public resource: any;

        constructor(resource: any, defaultLocale: string) {
            this.resource = resource;
            this.defaultLocale = defaultLocale;
            this.label = TranslationCollection.parse(this.resource.label, this.defaultLocale);
            this.value = TranslationCollection.parse(this.resource.value, this.defaultLocale);
        }

        public getLabel(): string {
            if (this.label.length) {
                var label: Translation = this.label.en().where(x => x.locale === this.defaultLocale || x.locale === Utils.getInexactLocale(this.defaultLocale)).first()
                
                if (label) {
                    return label.value;
                } else {
                    // return the first value
                    return this.label[0].value;
                }
            }

            return null;
        }

        public getValue(): string {
            if (this.value.length) {
                var value: Translation = this.value.en().where(x => x.locale === this.defaultLocale || x.locale === Utils.getInexactLocale(this.defaultLocale)).first();

                if (value) {
                    return value.value;
                }  else {
                    // return the first value
                    return this.value[0].value;
                }
            }

            return null;
        }
    }
}