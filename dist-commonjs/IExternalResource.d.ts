import { IAccessToken, IExternalResourceData, IManifestoOptions, Service } from "./internal";
export interface IExternalResource {
    authAPIVersion: number;
    authHoldingPage: any;
    clickThroughService: Service | null;
    data: IExternalResourceData;
    dataUri: string | null;
    error: any;
    externalService: Service | null;
    getData(accessToken?: IAccessToken): Promise<IExternalResource>;
    hasServiceDescriptor(): boolean;
    height: number;
    index: number;
    isAccessControlled(): boolean;
    isResponseHandled: boolean;
    kioskService: Service | null;
    loginService: Service | null;
    logoutService: Service | null;
    options?: IManifestoOptions;
    restrictedService: Service | null;
    status: number;
    tokenService: Service | null;
    width: number;
}
