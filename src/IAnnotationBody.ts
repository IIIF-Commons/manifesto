namespace Manifesto {
    export interface IAnnotationBody extends IManifestResource {
        getFormat(): MediaType | null;
        getType(): ResourceType | null;
        getWidth(): number;
        getHeight(): number;
    }
}