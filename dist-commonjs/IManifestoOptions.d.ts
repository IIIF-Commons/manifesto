import { IIIFResource } from "./IIIFResource";
export interface IManifestoOptions {
    defaultLabel: string;
    locale: string;
    index?: number;
    resource: IIIFResource;
    navDate?: Date;
    pessimisticAccessControl: boolean;
}
