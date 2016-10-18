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
            return TranslationCollection.getValue(this.label, this.defaultLocale);
        }

        public getValue(): string {
            return TranslationCollection.getValue(this.value, this.defaultLocale);
        }
    }
}