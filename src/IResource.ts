module Manifesto {
    export interface IResource {
        clickThroughService: string;
        data: any;
        dataUri: string;
        error: any;
        isAccessControlled: boolean;
        loginService: string;
        logoutService: string;
        status: number;
        tokenService: string;

        getData(accessToken?: IAccessToken): Promise<IResource>;
    }
}