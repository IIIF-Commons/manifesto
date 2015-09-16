module Manifesto {
    export interface IManifestoOptions {
        defaultLabel: string; // '-'
        locale: string; // 'en-GB'
        navDate?: Date;
        pessimisticAccessControl: boolean; // false
    }
}