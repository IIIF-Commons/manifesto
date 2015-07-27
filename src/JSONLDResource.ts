module Manifesto{
    export class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        private _label: string;

        constructor(jsonld: any){
            this.__jsonld = jsonld;
            this.context = this.__jsonld['@context'];
            this.id = this.__jsonld['@id'];
            this._label = this.__jsonld.label;
            // store a reference to the parsed object in the jsonld for convenience.
            this.__jsonld.__parsed = this;
        }

        getManifest(): IManifest {
            return this.__jsonld.__manifest;
        }

        getLabel(): string {
            // todo: why test if it's a digit?
            //var regExp = /\d/;

            //if (regExp.test(this._label)) {
                return this.getManifest().getLocalisedValue(this._label);
            //}

            //return null;
        }
    }
}
