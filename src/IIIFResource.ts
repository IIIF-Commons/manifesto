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
            return this.getLocalisedValue(this.getProperty('attribution'));
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(this.getProperty('@type'));
        }

        getLocalisedValue(resource: any, locale?: string): string {

            // if the resource is not an array of translations, return the string.
            if (!_isArray(resource)){
                return resource;
            }

            if (!locale) locale = this.options.locale;

            // test for exact match
            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
                var language = value['@language'];

                if (locale === language){
                    return <string>value['@value'];
                }
            }

            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));

            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
                var language = value['@language'];

                if (language === match){
                    return <string>value['@value'];
                }
            }

            return null;
        }

        getLogo(): string {
            return this.getProperty('logo');
        }

        getLicense(): string {
            return this.getLocalisedValue(this.getProperty('license'));
        }

        // todo: remove includeRootProperties
        // todo: any resource may have metadata, add resource param
        getMetadata(includeRootProperties?: boolean): any{
            var metadata: Object[] = this.getProperty('metadata');

            // get localised value for each metadata item.
            for (var i = 0; i < metadata.length; i++) {
                var item: any = metadata[i];

                item.label = this.getLocalisedValue(item.label);
                item.value  = this.getLocalisedValue(item.value);
            }

            if (metadata && includeRootProperties){
                if (this.getProperty('description')){
                    metadata.push({
                        "label": "description",
                        "value": this.getLocalisedValue(this.getProperty('description'))
                    });
                }
                if (this.getProperty('attribution')){
                    metadata.push({
                        "label": "attribution",
                        "value": this.getLocalisedValue(this.getProperty('attribution'))
                    });
                }
                if (this.getProperty('license')){
                    metadata.push({
                        "label": "license",
                        "value": this.getLocalisedValue(this.getProperty('license'))
                    });
                }
                if (this.getProperty('logo')){
                    metadata.push({
                        "label": "logo",
                        "value": '<img src="' + this.getProperty('logo') + '"/>'});
                }
            }

            return metadata;
        }

        getSeeAlso(): any {
            return this.getLocalisedValue(this.getProperty('seeAlso'));
        }

        getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService {

            var services: IService[] = this.getServices(resource);

            // normalise profile to string
            if (typeof profile !== 'string'){
                profile = (<ServiceProfile>profile).toString();
            }

            for (var i = 0; i < services.length; i++){
                var service: IService = services[i];

                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }

            return null;
        }

        getServices(resource: any): IService[] {
            var service;

            // if passing a parsed object, use the __jsonld.service property,
            // otherwise look for a service property
            if (resource.__jsonld){
                service = resource.__jsonld.service;
            } else {
                service = (<any>resource).service;
            }

            var parsed: IService[] = [];

            if (!service) return parsed;

            // normalise to array
            if (!_isArray(service)){
                service = [service];
            }

            for (var i = 0; i < service.length; i++){
                var s: any = service[i];
                s.__manifest = this;
                parsed.push(new Service(s));
            }

            return parsed;
        }

        getTitle(): string {
            return this.getLocalisedValue(this.getProperty('label'));
        }

        load(): Promise<IIIIFResource> {
            var that = this;
            return new Promise<IIIIFResource>((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                } else {
                    var options = that.options;
                    Utils.loadManifest(that.__jsonld['@id']).then(function (data) {
                        that.isLoaded = true;
                        resolve(Deserialiser.parse(data, options));
                    });
                }
            });
        }
    }
}