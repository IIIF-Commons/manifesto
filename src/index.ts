export * from "./internal";

import { IIIFResource } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Utils } from "./Utils";

export const loadManifest: (uri: string) => Promise<string> = (uri: string) => {
  return Utils.loadManifest(uri);
};

export const parseManifest: (
  manifest: any,
  options?: IManifestoOptions | undefined
) => IIIFResource | null = (manifest: string, options?: IManifestoOptions) => {
  return Utils.parseManifest(manifest, options);
};
