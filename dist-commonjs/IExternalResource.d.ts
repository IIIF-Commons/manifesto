import { Service } from "./Service";
import { IExternalResourceData } from "./IExternalResourceData";
import { IAccessToken } from "./IAccessToken";
import { IManifestoOptions } from "./IManifestoOptions";
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
