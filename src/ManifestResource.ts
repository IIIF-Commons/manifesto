namespace Manifesto {
    export class ManifestResource extends JSONLDResource implements IManifestResource {
        externalResource: IExternalResource;
        options: IManifestoOptions;

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld);
            this.options = options;
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(this.getProperty('@type'));
        }

        getLabel(): TranslationCollection {
            return TranslationCollection.parse(this.getProperty('label'), this.options.locale);
        }

        getMetadata(): MetadataItem[] {
            var _metadata: any[] = this.getProperty('metadata');

            var metadata: MetadataItem[] = [];

            if (!_metadata) return metadata;

            for (var i = 0; i < _metadata.length; i++) {
                var item: any = _metadata[i];
                var metadataItem: MetadataItem = new MetadataItem(this.options.locale);
                metadataItem.parse(item);
                metadata.push(metadataItem);
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
            var rendering;

            // if passing a manifesto-parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (this.__jsonld){
                rendering = this.__jsonld.rendering;
            } else {
                rendering = (<any>this).rendering;
            }

            var renderings: IRendering[] = [];
            if (!rendering) return renderings;

            // coerce to array
            if (!Array.isArray(rendering)){
                rendering = [rendering];
            }

            for (var i = 0; i < rendering.length; i++){
                var r: any = rendering[i];
                renderings.push(new Rendering(r, this.options));
            }

            return renderings;
        }

        getService(profile: ServiceProfile | string): IService {
            return Utils.getService(this, profile);
        }

        getServices(): IService[] {
            return Utils.getServices(this);
        }

        isAnnotation(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.ANNOTATION.toString();
        }

        isCanvas(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.CANVAS.toString();
        }

        isCollection(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString();
        }

        isManifest(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString();
        }

        isRange(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.RANGE.toString();
        }

        isSequence(): boolean {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.SEQUENCE.toString();
        }
    }
}