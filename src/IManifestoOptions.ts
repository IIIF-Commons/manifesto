module Manifesto {
    export interface IManifestoOptions {
        defaultLabel: string; // '-'
        locale: string; // 'en-GB'
        index?: number;
        resource: IIIIFResource;
        navDate?: Date;
        pessimisticAccessControl: boolean; // false
    }
}