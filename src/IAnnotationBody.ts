namespace Manifesto {
    export interface IAnnotationBody extends IManifestResource {
        getFormat(): ResourceFormat | null;
        getType(): ResourceType | null;
    }
}