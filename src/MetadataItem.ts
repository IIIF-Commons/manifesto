module Manifesto {
    export class MetadataItem {
        public label: TranslationCollection;
        public value: TranslationCollection;
        public defaultLocale: string;

        constructor(item: any, defaultLocale: string) {
            this.defaultLocale = defaultLocale;
            this.label = TranslationCollection.parse(item.label, this.defaultLocale);
            this.value = TranslationCollection.parse(item.value, this.defaultLocale);
        }

        getLabel(): string {
            if (this.label.length) {
                return this.label.en().where(x => x.locale === this.defaultLocale).first().value;
            }

            return null;
        }

        getValue(): string {
            if (this.value.length) {
                return this.value.en().where(x => x.locale === this.defaultLocale).first().value;
            }

            return null;
        }
    }
}