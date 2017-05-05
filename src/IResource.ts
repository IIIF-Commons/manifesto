namespace Manifesto {
    export interface IResource extends IManifestResource {
        getFormat(): MediaType | null;
        getHeight(): number;
        getMaxHeight(): number | null;
        getType(): ResourceType | null;
        getWidth(): number;
    }
}