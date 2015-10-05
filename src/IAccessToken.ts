module Manifesto {
    export interface IAccessToken {
        accessToken: string;
        created: number;
        error: string;
        errorDescription: string;
        expiresIn: number;
        tokenType: string;
    }
}