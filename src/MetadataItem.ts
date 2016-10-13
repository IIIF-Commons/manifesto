module Manifesto {
    export class MetadataItem {
        public label: TranslationCollection;
        public value: TranslationCollection;
        public options: IManifestoOptions;

        constructor(item: any, options: IManifestoOptions) {
            this.options = options;
            this.label = TranslationCollection.parse(item.label, options);
            this.value = TranslationCollection.parse(item.value, options);
        }

        getLabel(): string {
            if (this.label.length) {
                return this.label.en().where(x => x.locale === this.options.locale).first().value;
            }

            return null;
        }

        getValue(): string {
            if (this.value.length) {
                return this.value.en().where(x => x.locale === this.options.locale).first().value;
            }

            return null;
        }
    }
}