module Manifesto {
    export interface IManifest extends IResource {
        defaultLabel: string;
        getAttribution(): string;
        getLocalisedValue(prop: any, locale?: string): string;
        getLabel(): string;
        getLogo(): string;
        getLicense(): string;
        getMetadata(includeRootProperties?: boolean): any
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: any, format: RenderingFormat): IRendering;
        getRenderings(resource: any): any[];
        getSeeAlso(): any;
        getService(resource: any, profile: ServiceProfile): IService;
        getSequenceByIndex(index: number): ISequence;
        getTitle(): string;
        getTotalSequences(): number;
        getTree(): TreeNode;
        isMultiSequence(): boolean;
        rootRange: IRange;
        treeRoot: TreeNode;
    }
}