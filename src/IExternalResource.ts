namespace Manifesto {
    export interface IExternalResource {
        clickThroughService: IService;
        data: any;
        dataUri: string;
        error: any;
        externalService: IService;
        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        height: number;
        isAccessControlled(): boolean;
        isResponseHandled: boolean;
        kioskService: IService;
        loginService: IService;
        logoutService: IService;
        status: number;
        tokenService: IService;
        width: number;
        x: number;
        y: number;
    }
}