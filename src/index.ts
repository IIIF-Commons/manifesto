export * from "./internal";

import { IIIFResource } from "./IIIFResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Utils } from "./Utils";


/**
Initiates downloading an IIIF manifest json file from URL. Returns a Promise<any>
to allow subsequent processing on a successful fetch. 

@param url  string containing the URL to Fetch
@returns Promise<any> The object returned through the Promise is the javascript object obtained by deserializing the json text.
**/
export const loadManifest: (url: string) => Promise<any> = (url: string) => {
  return Utils.loadManifest(url);
};

/**
Parses  IIIF manifest file to return a manifesto Manifest instance

@param manifest Either a string containing text of a manifest file or an javascript object obtained by deserializing by the JSON.parse function a manifest file.
@param options? TODO Not yet documented
@returns  instance of Manifest class.
**/
export const parseManifest: (
  manifest: any,
  options?: IManifestoOptions | undefined
) => IIIFResource | null = (manifest: string, options?: IManifestoOptions) => {
  return Utils.parseManifest(manifest, options);
};
