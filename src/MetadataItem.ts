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

        private _getInexactLocale(): string {
            return this.defaultLocale.substr(0, this.defaultLocale.indexOf('-'));
        }

        public getLabel(): string {
            if (this.label.length) {
                return this.label.en().where(x => x.locale === this.defaultLocale || x.locale === this._getInexactLocale()).first().value;
            }

            return null;
        }

        public getValue(): string {
            if (this.value.length) {
                return this.value.en().where(x => x.locale === this.defaultLocale || x.locale === this._getInexactLocale()).first().value;
            }

            return null;
        }
    }
}