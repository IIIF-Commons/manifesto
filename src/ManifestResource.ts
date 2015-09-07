module Manifesto {
    export class ManifestResource extends JSONLDResource implements IManifestResource {
        options: IManifestoOptions;

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld);
            this.options = options;
        }

        getLabel(): string {
            return Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        }

        getMetadata(): any{
            var metadata: Object[] = this.getProperty('metadata');

            // get localised value for each metadata item.
            for (var i = 0; i < metadata.length; i++) {
                var item: any = metadata[i];

                item.label = Utils.getLocalisedValue(item.label, this.options.locale);
                item.value  = Utils.getLocalisedValue(item.value, this.options.locale);
            }

            return metadata;
        }

        getRendering(format: RenderingFormat | string): IRendering {
            var renderings: IRendering[] = this.getRenderings();

            // normalise format to string
            if (typeof format !== 'string'){
                format = (<RenderingFormat>format).toString();
            }

            for (var i = 0; i < renderings.length; i++){
                var rendering: IRendering = renderings[i];

                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }

            return null;
        }

        getRenderings(): IRendering[] {
            var rendering = this.__jsonld.rendering;

            var parsed: IRendering[] = [];

            if (!rendering){
                return parsed;
            }

            // coerce to array
            if (!_isArray(rendering)){
                rendering = [rendering];
            }

            for (var i = 0; i < rendering.length; i++){
                var r: any = rendering[i];
                parsed.push(new Rendering(r, this.options));
            }

            return parsed;
        }

        getService(profile: ServiceProfile | string): IService {

            var services: IService[] = this.getServices();

            // coerce profile to string
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

        getServices(): IService[] {
            var service = this.__jsonld.service;

            var parsed: IService[] = [];

            if (!service) return parsed;

            // coerce to array
            if (!_isArray(service)){
                service = [service];
            }

            for (var i = 0; i < service.length; i++){
                var s: any = service[i];
                parsed.push(new Service(s, this.options));
            }

            return parsed;
        }
    }
}