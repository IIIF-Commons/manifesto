module Manifesto {
    export interface IResource {
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