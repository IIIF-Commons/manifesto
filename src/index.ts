export * from "./internal";

import { IIIFResource } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Utils } from "./Utils";

export const loadManifest: (url: string) => Promise<string> = (url: string) => {
  return Utils.loadManifest(url);
};

export const parseManifest: (
  manifest: any,
  options?: IManifestoOptions | undefined,
) => IIIFResource | null = (manifest: string, options?: IManifestoOptions) => {
  return Utils.parseManifest(manifest, options);
};
