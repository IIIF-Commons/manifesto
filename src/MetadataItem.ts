module Manifesto {
    export class MetadataItem {
        public label: TranslationCollection;
        public value: TranslationCollection;
        public defaultLocale: string;
        public resource: any;

        constructor(defaultLocale: string) {
            this.defaultLocale = defaultLocale;
        }

        public parse(resource: any): void {
            this.resource = resource;
            this.label = TranslationCollection.parse(this.resource.label, this.defaultLocale);
            this.value = TranslationCollection.parse(this.resource.value, this.defaultLocale);
        }

        public getLabel(): string {
            if (this.label) {
                return TranslationCollection.getValue(this.label, this.defaultLocale);
            }
            
            return null;
        }

        public getValue(): string {
            if (this.value) {
                return TranslationCollection.getValue(this.value, this.defaultLocale);
            }
            
            return null;
        }
    }
}