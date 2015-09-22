module Manifesto {
    export interface IManifestoOptions {
        defaultLabel: string; // '-'
        locale: string; // 'en-GB'
        resource: IIIIFResource;
        navDate?: Date;
        pessimisticAccessControl: boolean; // false
    }
}