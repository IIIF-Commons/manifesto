import { IAccessToken } from "./IAccessToken";
import { IExternalResource } from "./IExternalResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { JSONLDResource } from "./JSONLDResource";
import { Service } from "./Service";
import { StatusCode } from "./StatusCode";
import { TreeNode } from "./TreeNode";
import { MediaType, ServiceProfile } from "@iiif/vocabulary";
import { IIIFResource } from "./IIIFResource";
export declare class Utils {
    static getMediaType(type: string): MediaType;
    static getImageQuality(profile: ServiceProfile): string;
    static getInexactLocale(locale: string): string;
    static getLocalisedValue(resource: any, locale: string): string | null;
    static generateTreeNodeIds(treeNode: TreeNode, index?: number): void;
    static normaliseType(type: string): string;
    static normaliseUrl(url: string): string;
    static normalisedUrlsMatch(url1: string, url2: string): boolean;
    static isImageProfile(profile: ServiceProfile): boolean;
    static isLevel0ImageProfile(profile: ServiceProfile): boolean;
    static isLevel1ImageProfile(profile: ServiceProfile): boolean;
    static isLevel2ImageProfile(profile: ServiceProfile): boolean;
    static parseManifest(manifest: string, options?: IManifestoOptions | undefined): IIIFResource | null;
    static loadManifest(uri: string): Promise<string>;
    static loadExternalResourcesAuth1(resources: IExternalResource[], openContentProviderInteraction: (service: Service) => any, openTokenService: (resource: IExternalResource, tokenService: Service) => Promise<any>, getStoredAccessToken: (resource: IExternalResource) => Promise<IAccessToken | null>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Service) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Service) => void): Promise<IExternalResource[]>;
    static loadExternalResourceAuth1(resource: IExternalResource, openContentProviderInteraction: (service: Service) => any, openTokenService: (resource: IExternalResource, tokenService: Service) => Promise<void>, getStoredAccessToken: (resource: IExternalResource) => Promise<IAccessToken | null>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Service) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Service) => void): Promise<IExternalResource>;
    static doAuthChain(resource: IExternalResource, openContentProviderInteraction: (service: Service) => any, openTokenService: (resource: IExternalResource, tokenService: Service) => Promise<any>, userInteractedWithContentProvider: (contentProviderInteraction: any) => Promise<any>, getContentProviderInteraction: (resource: IExternalResource, service: Service) => Promise<any>, handleMovedTemporarily: (resource: IExternalResource) => Promise<any>, showOutOfOptionsMessages: (resource: IExternalResource, service: Service) => void): Promise<IExternalResource | void>;
    static attemptResourceWithToken(resource: IExternalResource, openTokenService: (resource: IExternalResource, tokenService: Service) => Promise<any>, authService: Service): Promise<IExternalResource | void>;
    static loadExternalResourcesAuth09(resources: IExternalResource[], tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource[]>;
    static loadExternalResourceAuth09(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IExternalResource) => Promise<any>, options?: IManifestoOptions): Promise<IExternalResource>;
    static createError(name: StatusCode, message: string): Error;
    static createAuthorizationFailedError(): Error;
    static createRestrictedError(): Error;
    static createInternalServerError(message: string): Error;
    static authorize(resource: IExternalResource, tokenStorageStrategy: string, clickThrough: (resource: IExternalResource) => Promise<any>, restricted: (resource: IExternalResource) => Promise<any>, login: (resource: IExternalResource) => Promise<any>, getAccessToken: (resource: IExternalResource, rejectOnError: boolean) => Promise<IAccessToken>, storeAccessToken: (resource: IExternalResource, token: IAccessToken, tokenStorageStrategy: string) => Promise<any>, getStoredAccessToken: (resource: IExternalResource, tokenStorageStrategy: string) => Promise<IAccessToken>): Promise<IExternalResource>;
    private static showAuthInteraction;
    static getService(resource: any, profile: ServiceProfile): Service | null;
    static getResourceById(parentResource: JSONLDResource, id: string): JSONLDResource;
    /**
     * Does a depth first traversal of an Object, returning an Object that
     * matches provided k and v arguments
     * @example Utils.traverseAndFind({foo: 'bar'}, 'foo', 'bar')
     */
    static traverseAndFind(object: any, k: string, v: string): object | undefined;
    static getServices(resource: any): Service[];
    static getTemporalComponent(target: string): number[] | null;
}
