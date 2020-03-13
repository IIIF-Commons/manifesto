import { IIIFResource } from "./internal";

export interface IManifestoOptions {
  defaultLabel: string; // '-'
  locale: string; // 'en-GB'
  index?: number;
  resource: IIIFResource;
  navDate?: Date;
  pessimisticAccessControl: boolean; // false
}
