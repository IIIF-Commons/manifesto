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
        loadResource(resource: IExternalResource,
                     redirected: (resource: IExternalResource) => void,
                     clickThrough: (resource: IExternalResource) => void,
                     login: (loginServiceUrl: string) => Promise<void>,
                     getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                     storeAccessToken: (resource: IExternalResource, token: IAccessToken) => Promise<void>,
                     getStoredAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                     handleResourceResponse: (resource: IExternalResource) => Promise<any>): Promise<IExternalResource>;
        loadResources(resources: IExternalResource[],
                      redirected: (resource: IExternalResource) => void,
                      clickThrough: (resource: IExternalResource) => void,
                      login: (loginServiceUrl: string) => Promise<void>,
                      getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                      storeAccessToken: (resource: IExternalResource, token: IAccessToken) => Promise<void>,
                      getStoredAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>,
                      handleResourceResponse: (resource: IExternalResource) => Promise<any>): Promise<IExternalResource[]>;
        options: IManifestoOptions;
        rootRange: IRange;
        sequences: ISequence[];
        treeRoot: TreeNode;
    }
}