module Manifesto {
    export interface IManifestoOptions {
        defaultLabel: string; // '-'
        locale: string; // 'en-GB'
        manifest: any;
        navDate?: Date;
        pessimisticAccessControl: boolean; // false
    }
}