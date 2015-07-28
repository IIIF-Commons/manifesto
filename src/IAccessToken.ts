module Manifesto {
    export interface IAccessToken {
        accessToken: string;
        tokenType: string;
        expiresIn: number;
    }
}