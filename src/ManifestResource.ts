import { JSONLDResource } from "./JSONLDResource";
const IIIFResourceTypeEnum = require('@iiif/vocabulary/dist-commonjs/').IIIFResourceType;

export class ManifestResource extends JSONLDResource {
    externalResource: IExternalResource;
    options: IManifestoOptions;

    constructor(jsonld: any, options?: IManifestoOptions) {
        super(jsonld);
        this.options = <IManifestoOptions>options;
    }

    getIIIFResourceType(): IIIFResourceType {
        return <IIIFResourceType>Utils.normaliseType(this.getProperty('type'));
    }

    getLabel(): LanguageMap {
        const label: any = this.getProperty('label');

        if (label) {
            return LanguageMap.parse(label, this.options.locale);
        }
        
        return [];
    }

    getDefaultLabel(): string | null {
        return LanguageMap.getValue(this.getLabel());
    }

    getMetadata(): LabelValuePair[] {
        const _metadata: any[] = this.getProperty('metadata');

        const metadata: LabelValuePair[] = [];

        if (!_metadata) return metadata;

        for (let i = 0; i < _metadata.length; i++) {
            const item: any = _metadata[i];
            const metadataItem: LabelValuePair = new LabelValuePair(this.options.locale);
            metadataItem.parse(item);
            metadata.push(metadataItem);
        }

        return metadata;
    }

    getRendering(format: RenderingFormat): Rendering | null {
        const renderings: Rendering[] = this.getRenderings();

        for (let i = 0; i < renderings.length; i++) {
            const rendering: Rendering = renderings[i];

            if (rendering.getFormat() === format) {
                return rendering;
            }
        }

        return null;
    }

    getRenderings(): Rendering[] {
        let rendering;

        // if passing a manifesto-parsed object, use the __jsonld.rendering property,
        // otherwise look for a rendering property
        if (this.__jsonld) {
            rendering = this.__jsonld.rendering;
        } else {
            rendering = (<any>this).rendering;
        }

        const renderings: Rendering[] = [];
        if (!rendering) return renderings;

        // coerce to array
        if (!Array.isArray(rendering)) {
            rendering = [rendering];
        }

        for (let i = 0; i < rendering.length; i++) {
            const r: any = rendering[i];
            renderings.push(new Rendering(r, this.options));
        }

        return renderings;
    }

    getService(profile: ServiceProfile): Service | null {
        return Utils.getService(this, profile);
    }

    getServices(): Service[] {
        return Utils.getServices(this);
    }

    getThumbnail(): Thumbnail | null {
        let thumbnail: any = this.getProperty('thumbnail');

        if (Array.isArray(thumbnail)) {
            thumbnail = thumbnail[0];
        }

        if (thumbnail) {
            return new Thumbnail(thumbnail, this.options);
        }

        return null;
    }

    isAnnotation(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.ANNOTATION;
    }

    isCanvas(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.CANVAS;
    }

    isCollection(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.COLLECTION;
    }

    isManifest(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.MANIFEST;
    }

    isRange(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.RANGE;
    }

    isSequence(): boolean {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.SEQUENCE;
    }
}

// https://github.com/ionic-team/ionic-app-scripts/issues/1219#issuecomment-386114424
import { RenderingFormat, ServiceProfile, IIIFResourceType } from "@iiif/vocabulary";
import { IExternalResource } from "./IExternalResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Utils } from "./Utils";
import { LanguageMap } from "./LanguageMap";
import { LabelValuePair } from "./LabelValuePair";
import { Thumbnail } from "./Thumbnail";
import { Service } from "./Service";
import { Rendering } from "./Rendering";
