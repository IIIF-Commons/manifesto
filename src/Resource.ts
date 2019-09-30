import { ExternalResourceType, MediaType } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Annotation } from "./Annotation";
import { Utils } from "./Utils";

export class Resource extends ManifestResource {

    public index: number;

    constructor(jsonld?: any, options?: IManifestoOptions){
        super(jsonld, options);
    }

    getFormat(): MediaType | null {
        const format: string = this.getProperty('format');

        if (format) {
            return <MediaType>format.toLowerCase();
        }

        return null;
    }

    getResources(): Annotation[] {
        
        const resources: Annotation[] = [];

        if (!this.__jsonld.resources) return resources;

        for (let i = 0; i < this.__jsonld.resources.length; i++) {
            const a = this.__jsonld.resources[i];
            const annotation = new Annotation(a, this.options);
            resources.push(annotation);
        }

        return resources;
    }

    getType(): ExternalResourceType | null {
        const type: string = this.getProperty('type');

        if (type) {
            return Utils.normaliseType(type) as ExternalResourceType;
        }

        return null;
    }

    getWidth(): number {
        return this.getProperty('width');
    }

    getHeight(): number {
        return this.getProperty('height');
    }

    getMaxWidth(): number {
        return this.getProperty('maxWidth');
    }

    getMaxHeight(): number | null {
        const maxHeight = this.getProperty('maxHeight');

        // if a maxHeight hasn't been specified, default to maxWidth.
        // maxWidth in essence becomes maxEdge
        if (!maxHeight) {
            return this.getMaxWidth();
        }

        return null;
    }
}