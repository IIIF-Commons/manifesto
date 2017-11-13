namespace Manifesto {
    export interface IExternalResource {
        authAPIVersion: number;
        authHoldingPage: any;
        clickThroughService: IService | null;
        data: IExternalResourceData;
        dataUri: string | null;
        error: any;
        externalService: IService | null;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        hasServiceDescriptor(): boolean;
        height: number;
        index: number;
        isAccessControlled(): boolean;
        isResponseHandled: boolean;
        kioskService: IService | null;
        loginService: IService | null;
        logoutService: IService | null;
        options?: IManifestoOptions;
        restrictedService: IService | null;
        status: number;
        tokenService: IService | null;
        width: number;
    }
}