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
            return Utils.getRendering(this, format);
        }

        getRenderings(): IRendering[] {
            return Utils.getRenderings(this);
        }

        getService(profile: ServiceProfile | string): IService {
            return Utils.getService(this, profile);
        }

        getServices(): IService[] {
            return Utils.getServices(this);
        }
    }
}