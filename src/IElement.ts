namespace Manifesto {
    export interface IElement extends IManifestResource{
        index: number;
        getResources(): IAnnotation[];
        getType(): ResourceType | null;
    }
}