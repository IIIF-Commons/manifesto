namespace Manifesto {
    export interface IResource extends IManifestResource {
        getFormat(): ResourceFormat;
        getHeight(): number;
        getWidth(): number;
    }
}