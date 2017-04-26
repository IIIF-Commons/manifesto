namespace Manifesto {
    export interface IExternalResource {
        authAPIVersion: number;
        clickThroughService: IService | null;
        data: any;
        dataUri: string;
        error: any;
        externalService: IService | null;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        height: number;
        index: number;
        isAccessControlled(): boolean;
        isResponseHandled: boolean;
        options?: IManifestoOptions;
        kioskService: IService | null;
        loginService: IService | null;
        logoutService: IService | null;
        restrictedService: IService | null;
        status: number;
        tokenService: IService | null;
        width: number;
        x: number;
        y: number;
    }
}