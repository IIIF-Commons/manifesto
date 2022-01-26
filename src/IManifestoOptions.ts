import { IIIFResource } from "./internal";

export interface IManifestoOptions {
  defaultLabel: string; // '-'
  index?: number;
  locale: string; // 'en-GB'
  navDate?: Date;
  pessimisticAccessControl: boolean; // false
  resource: IIIFResource;
}
