import { IIIFResource } from "./internal";
export interface IManifestoOptions {
    defaultLabel: string;
    index?: number;
    locale: string;
    navDate?: Date;
    pessimisticAccessControl: boolean;
    resource: IIIFResource;
}
