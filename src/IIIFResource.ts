var _assign = require("lodash.assign");

module Manifesto {
    export class IIIFResource extends JSONLDResource implements IIIIFResource {
        public options: IManifestoOptions;
        public isLoaded: boolean = false;

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld);
            var defaultOptions: IManifestoOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                pessimisticAccessControl: false
            };
            this.options = _assign(defaultOptions, options);
        }

        getAttribution(): string {
            return Utils.getLocalisedValue(this.getProperty('attribution'));
        }

        getDescription(): string {
            return Utils.getLocalisedValue(this.getProperty('description'));
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(this.getProperty('@type'));
        }

        getLogo(): string {
            return this.getProperty('logo');
        }

        getLicense(): string {
            return Utils.getLocalisedValue(this.getProperty('license'));
        }

        getSeeAlso(): any {
            return Utils.getLocalisedValue(this.getProperty('seeAlso'));
        }

        getTitle(): string {
            return Utils.getLocalisedValue(this.getProperty('label'));
        }

        load(): Promise<IIIIFResource> {
            var that = this;
            return new Promise<IIIIFResource>((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                } else {
                    var options = that.options;
                    Utils.loadResource(that.__jsonld['@id']).then(function(data) {
                        that.isLoaded = true;
                        resolve(Deserialiser.parse(data, options));
                    });
                }
            });
        }
    }
}