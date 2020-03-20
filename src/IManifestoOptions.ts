import { IIIFResource } from "./internal";

export interface IManifestoOptions {
  defaultLabel: string; // '-'
  index?: number;
  locale: string; // 'en-GB'
  navDate?: Date;
  pagingLimitKey: "_limit";
  pagingStartKey: "_start";
  pessimisticAccessControl: boolean; // false
  resource: IIIFResource;
}
