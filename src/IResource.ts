namespace Manifesto {
    export interface IResource extends IManifestResource {
        getFormat(): MediaType | null;
        getHeight(): number;
        getMaxHeight(): number | null;
        getResources(): IAnnotation[];
        getType(): ResourceType | null;
        getWidth(): number;
        index: number;
    }
}