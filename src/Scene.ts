
import {
  IManifestoOptions,
  ManifestResource,
} from "./internal";

export class Scene extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }
}
