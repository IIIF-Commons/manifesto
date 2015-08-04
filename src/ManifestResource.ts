module Manifesto {
    export class ManifestResource extends JSONLDResource {

        // todo: add getMetadata

        getService(profile: ServiceProfile | string): IService {
            var m: IManifest = this.getManifest();
            return m.getService(this, profile);
        }
    }
}