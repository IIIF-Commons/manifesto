module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        jsonld: any;
        private _label: string;
        private _manifest: IManifest;

        constructor(jsonld: any){
            this.jsonld = jsonld;
            this.context = this.jsonld['@context'];
            this.id = this.jsonld['@id'];
            this._label = this.jsonld['@label'];
            // the serializer stores a reference to the manifest on the jsonld resource for convenience
            this._manifest = this.jsonld.manifest;
        }

        getManifest(): IManifest {
            return this._manifest;
        }

        getLabel(): string {
            // todo: why would you want to test if it's a digit?
            //var regExp = /\d/;

            //if (regExp.test(this._label)) {
                return this.getManifest().getLocalisedValue(this._label);
            //}

            //return null;
        }
    }
}
