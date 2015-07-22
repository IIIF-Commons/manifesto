module Manifesto {
    export interface IManifest extends IJSONLDResource {
        getAttribution(): string;
        getLocalisedValue(resource: any, locale?: string): string;
        getLabel(): string;
        getLogo(): string;
        getLicense(): string;
        getMetadata(includeRootProperties?: boolean): any
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: any, format: RenderingFormat | string): IRendering;
        getRenderings(resource: any): IRendering[];
        getSeeAlso(): any;
        getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService;
        getSequenceByIndex(index: number): ISequence;
        getTitle(): string;
        getTotalSequences(): number;
        getTree(): TreeNode;
        isMultiSequence(): boolean;
        options: IManifestoOptions;
        rootRange: IRange;
        treeRoot: TreeNode;
    }
}