namespace Manifesto {
    export interface IExternalResource {
        authAPIVersion: number;
        clickThroughService: IService | null;
        authHoldingPage: any;
        data: IExternalResourceData;
        dataUri: string;
        error: any;
        externalService: IService | null;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        isAccessControlled(): boolean;
        index: number;
        isResponseHandled: boolean;
        options?: IManifestoOptions;
        kioskService: IService | null;
        loginService: IService | null;
        logoutService: IService | null;
        restrictedService: IService | null;
        status: number;
        tokenService: IService | null;
    }
}