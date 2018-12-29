import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Annotation } from "./Annotation";

export class AnnotationPage extends ManifestResource {

    constructor(jsonld: any, options: IManifestoOptions) {
        super(jsonld, options);
    }

    getItems(): Annotation[] {
        return this.getProperty('items');
    }
}