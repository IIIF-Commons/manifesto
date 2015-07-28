module Manifesto {
    export interface IManifest extends IJSONLDResource {
        getAttribution(): string;
        getLicense(): string;
        getLocalisedValue(resource: IJSONLDResource | string, locale?: string): string;
        getLogo(): string;
        getMetadata(includeRootProperties?: boolean): any
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: IJSONLDResource, format: RenderingFormat | string): IRendering;
        getRenderings(resource: any): IRendering[];
        getSeeAlso(): any;
        getSequenceByIndex(index: number): ISequence;
        getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService;
        getServices(resource: any): IService[];
        getTitle(): string;
        getTotalSequences(): number;
        getTree(): TreeNode;
        isMultiSequence(): boolean;
        loadResource(resource: IResource,
                     login: (loginService: string) => Promise<void>,
                     getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                     storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>,
                     getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>,
                     handleResourceResponse: (resource: IResource) => Promise<any>): Promise<IResource>;
        loadResources(resources: IResource[],
                      login: (loginService: string) => Promise<void>,
                      getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                      storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>,
                      getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>,
                      handleResourceResponse: (resource: IResource) => Promise<any>): Promise<IResource[]>;
        options: IManifestoOptions;
        rootRange: IRange;
        sequences: ISequence[];
        treeRoot: TreeNode;
    }
}