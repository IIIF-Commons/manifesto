module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        jsonld: any;
        label: string;
        manifest: IManifest;

        constructor(jsonld: any){
            this.jsonld = jsonld;
            this.context = this.jsonld['@context'];
            this.id = this.jsonld['@id'];
            this.label = this.jsonld['@label'];
            // the serializer stores a reference to the manifest on the jsonld resource for convenience
            this.manifest = this.jsonld.manifest;
        }

        getManifest(): IManifest {
            return this.manifest;
        }
    }
}
