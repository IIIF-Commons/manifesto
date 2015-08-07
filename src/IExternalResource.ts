module Manifesto {
    export interface IExternalResource {
        clickThroughService: IService;
        data: any;
        dataUri: string;
        error: any;
        isResponseHandled: boolean;
        loginService: IService;
        logoutService: IService;
        status: number;
        tokenService: IService;

        getData(accessToken?: IAccessToken): Promise<IExternalResource>;
        isAccessControlled(): boolean;
    }
}